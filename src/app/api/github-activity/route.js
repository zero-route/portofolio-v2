const GITHUB_USERNAME = "zero-route";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const revalidate = 3600;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseContributionDays(html) {
  const days = [];

  const dayRegex =
    /<td\b[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>[\s\S]*?<\/td>/gi;

  const candidates = html.match(dayRegex) || [];

  const getAttr = (tag, name) => {
    const regex = new RegExp(
      `${escapeRegExp(name)}="([^"]*)"`,
      "i"
    );

    const match = tag.match(regex);

    return match ? match[1] : null;
  };

  const parseCount = (value) => {
    if (!value) return null;

    const normalized = value.replace(/,/g, "");

    const match = normalized.match(
      /(\d+)\s+contribution(?:s)?\b/i
    );

    return match ? parseInt(match[1], 10) : null;
  };

  for (const tag of candidates) {
    const date = getAttr(tag, "data-date");
    const levelRaw = getAttr(tag, "data-level");

    if (!date) continue;

    const ariaLabel = getAttr(tag, "aria-label");
    const title = getAttr(tag, "title");

    let count = parseCount(ariaLabel);

    if (count === null) {
      count = parseCount(title);
    }

    if (count === null) {
      count = 0;
    }

    const parsedLevel =
      levelRaw !== null
        ? parseInt(levelRaw, 10)
        : NaN;

    const level = Number.isNaN(parsedLevel)
      ? count === 0
        ? 0
        : Math.min(4, Math.ceil(count / 3))
      : parsedLevel;

    days.push({
      date,
      count,
      level,
    });
  }

  const uniqueDays = new Map();

  for (const day of days) {
    uniqueDays.set(day.date, day);
  }

  return Array.from(uniqueDays.values()).sort(
    (a, b) => a.date.localeCompare(b.date)
  );
}

async function getGitHubContributionData() {
  if (!GITHUB_TOKEN) {
    return null;
  }

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
        "User-Agent": "zero-route-portfolio",
      },
      body: JSON.stringify({
        query,
      }),
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  if (
    result.errors ||
    !result.data?.user?.contributionsCollection
      ?.contributionCalendar
  ) {
    return null;
  }

  const calendar =
    result.data.user.contributionsCollection
      .contributionCalendar;

  const days = calendar.weeks.flatMap(
    (week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: mapContributionLevel(
          day.contributionLevel
        ),
      }))
  );

  return {
    days,
    totalContributions:
      calendar.totalContributions,
  };
}

function mapContributionLevel(level) {
  switch (level) {
    case "NONE":
      return 0;
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    default:
      return 0;
  }
}

function computeCurrentStreak(days) {
  if (!days.length) {
    return 0;
  }

  const contributionDays = new Map(
    days.map((day) => [
      day.date,
      day.count > 0,
    ])
  );

  let currentDate = new Date();

  currentDate.setUTCHours(
    0,
    0,
    0,
    0
  );

  const todayKey = currentDate
    .toISOString()
    .slice(0, 10);

  const todayHasContribution =
    contributionDays.get(todayKey) === true;

  if (!todayHasContribution) {
    currentDate.setUTCDate(
      currentDate.getUTCDate() - 1
    );
  }

  let streak = 0;

  while (true) {
    const key = currentDate
      .toISOString()
      .slice(0, 10);

    const hasContribution =
      contributionDays.get(key) === true;

    if (!hasContribution) {
      break;
    }

    streak++;

    currentDate.setUTCDate(
      currentDate.getUTCDate() - 1
    );
  }

  return streak;
}

function parseTotalContributions(html, days) {
  const patterns = [
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i,
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+12\s+months/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);

    if (match) {
      return parseInt(
        match[1].replace(/,/g, ""),
        10
      );
    }
  }

  return days.reduce(
    (sum, day) => sum + day.count,
    0
  );
}

async function getRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "zero-route-portfolio",
        ...(GITHUB_TOKEN
          ? {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            }
          : {}),
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

function getTopLanguage(repos) {
  const tally = {};

  for (const repo of repos) {
    if (repo.language) {
      tally[repo.language] =
        (tally[repo.language] || 0) + 1;
    }
  }

  const sorted = Object.entries(tally).sort(
    (a, b) => b[1] - a[1]
  );

  return sorted.length
    ? sorted[0][0]
    : null;
}

export async function GET() {
  try {
    const [
      contributionData,
      contribRes,
      repos,
    ] = await Promise.all([
      getGitHubContributionData(),
      fetch(
        `https://github.com/users/${GITHUB_USERNAME}/contributions`,
        {
          next: {
            revalidate: 3600,
          },
        }
      ),
      getRepositories(),
    ]);

    let html = "";
    let htmlDays = [];

    if (contribRes.ok) {
      html = await contribRes.text();
      htmlDays = parseContributionDays(html);
    }

    const days =
      contributionData?.days?.length
        ? contributionData.days
        : htmlDays;

    const totalContributions =
      contributionData?.totalContributions ??
      parseTotalContributions(
        html,
        htmlDays
      );

    const currentStreak =
      computeCurrentStreak(days);

    const topLanguage =
      getTopLanguage(repos);

    return Response.json({
      days,
      totalContributions,
      currentStreak,
      topLanguage,
    });
  } catch (error) {
    return Response.json({
      days: [],
      totalContributions: 0,
      currentStreak: 0,
      topLanguage: null,
      error: true,
    });
  }
}