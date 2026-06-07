import type { Article, IssueId } from "./types";

export const ISSUE_IDS: IssueId[] = ["001", "002"];

/** Issue #002 archive — rotated editorial order + light impact nudge for distinct mock week. */
export function applyIssueArchive(articles: Article[], issueId: IssueId): Article[] {
  if (issueId === "001" || articles.length === 0) return articles;

  const half = Math.ceil(articles.length / 2);
  return [...articles.slice(half), ...articles.slice(0, half)].map((article, index) => ({
    ...article,
    impact_score: Math.min(
      99,
      Math.max(50, article.impact_score + (index % 3 === 0 ? 3 : index % 3 === 1 ? -2 : 0)),
    ),
  }));
}
