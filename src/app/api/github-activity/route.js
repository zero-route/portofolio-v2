const GITHUB_USERNAME = "zero-route";

export const revalidate = 3600;

function parseContributionDays(html) {
  const days = [];
  const tdRegex = /<td\b[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g;
  const tags = html.match(tdRegex) || [];

  const getAttr = (tag, name) => {
    const m = tag.match(new RegExp(`${name}="([^"]*)"`));
    return m ? m[1] : null;
  };

  for (const tag of tags) {
    const date = getAttr(tag, "data-date");
    const levelRaw = getAttr(tag, "data-level");
    const ariaLabel = getAttr(tag, "aria-label") || "";

    if (!date) continue;

    let count = 0;
    const countMatch = ariaLabel.match(/^(\d+)\s+contribution/i);
    if (countMatch) count = parseInt(countMatch[1], 10);

    const level =
      levelRaw !== null
        ? parseInt(levelRaw, 10)
        : count === 0
          ? 0
          : Math.min(4, Math.ceil(count / 3));

    days.push({ date, count, level });
  }

  days.sort((a, b) => (a.date < b.date ? -1 : 1));
  return days;
}

function computeStreak(days) {
  let streak = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      streak++;
      continue;
    }

    if (i === days.length - 1) {
      continue;
    }

    break;
  }

  return streak;
}

export async function GET() {
  try {
    const [contribRes, reposRes] = await Promise.all([
      fetch(`https://github.com/users/${GITHUB_USERNAME}/contributions`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    let days = [];
    if (contribRes.ok) {
      const html = await contribRes.text();
      days = parseContributionDays(html);
    }

    let topLanguage = null;
    if (reposRes.ok) {
      const repos = await reposRes.json();
      const tally = {};

      for (const repo of repos) {
        if (repo.language) {
          tally[repo.language] = (tally[repo.language] || 0) + 1;
        }
      }

      const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
      topLanguage = sorted.length ? sorted[0][0] : null;
    }

    const totalContributions = days.reduce((sum, d) => sum + d.count, 0);
    const currentStreak = computeStreak(days);

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
