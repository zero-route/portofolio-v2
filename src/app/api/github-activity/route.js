const GITHUB_USERNAME = "zero-route";

export const revalidate = 3600;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseContributionDays(html) {
  const days = [];

  const dayRegex =
    /<td\b[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>[\s\S]*?<\/td>/gi;

  const rectRegex =
    /<rect\b[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>[\s\S]*?<\/rect>/gi;

  const candidates = [
    ...(html.match(dayRegex) || []),
    ...(html.match(rectRegex) || []),
  ];

  const getAttr = (tag, name) => {
    const regex = new RegExp(`${escapeRegExp(name)}="([^"]*)"`, "i");
    const match = tag.match(regex);
    return match ? match[1] : null;
  };

  const cleanText = (value) =>
    value
      ?.replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/\s+/g, " ")
      .trim() || "";

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
    const text = cleanText(tag);

    let count = parseCount(ariaLabel);

    if (count === null) {
      count = parseCount(title);
    }

    if (count === null) {
      count = parseCount(text);
    }

    if (count === null) {
      count = 0;
    }

    const level =
      levelRaw !== null && !Number.isNaN(parseInt(levelRaw, 10))
        ? parseInt(levelRaw, 10)
        : count === 0
          ? 0
          : Math.min(4, Math.ceil(count / 3));

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

  return Array.from(uniqueDays.values()).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}

function parseTotalContributions(html, days) {
  const totalPatterns = [
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i,
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+12\s+months/i,
  ];

  for (const pattern of totalPatterns) {
    const match = html.match(pattern);

    if (match) {
      return parseInt(match[1].replace(/,/g, ""), 10);
    }
  }

  return days.reduce((sum, day) => sum + day.count, 0);
}

function computeStreak(days) {
  if (!days.length) return 0;

  const contributionDays = new Map(
    days.map((day) => [day.date, day.count])
  );

  const latestDate = new Date(
    `${days[days.length - 1].date}T00:00:00`
  );

  let currentDate = new Date(latestDate);
  let streak = 0;

  while (true) {
    const key = currentDate.toISOString().slice(0, 10);
    const count = contributionDays.get(key) ?? 0;

    if (count > 0) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
      continue;
    }

    if (streak === 0) {
      currentDate.setDate(currentDate.getDate() - 1);

      const previousKey = currentDate
        .toISOString()
        .slice(0, 10);

      const previousCount = contributionDays.get(previousKey) ?? 0;

      if (previousCount > 0) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);

        while (true) {
          const key = currentDate
            .toISOString()
            .slice(0, 10);

          const count = contributionDays.get(key) ?? 0;

          if (count === 0) break;

          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        }
      }
    }

    break;
  }

  return streak;
}

export async function GET() {
  try {
    const [contribRes, reposRes] = await Promise.all([
      fetch(
        `https://github.com/users/${GITHUB_USERNAME}/contributions`,
        {
          next: {
            revalidate: 3600,
          },
        }
      ),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        {
          next: {
            revalidate: 3600,
          },
        }
      ),
    ]);

    let html = "";
    let days = [];

    if (contribRes.ok) {
      html = await contribRes.text();
      days = parseContributionDays(html);
    }

    let totalContributions = 0;

    if (html) {
      totalContributions = parseTotalContributions(
        html,
        days
      );
    }

    const currentStreak = computeStreak(days);

    let topLanguage = null;

    if (reposRes.ok) {
      const repos = await reposRes.json();
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

      topLanguage = sorted.length
        ? sorted[0][0]
        : null;
    }

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