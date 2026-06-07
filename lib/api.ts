import type { ArticlesResponse, IssueId, Locale, Persona } from "./types";

export type { Locale, Persona, IssueId, Article, ArticlesResponse, UiStrings } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function fetchArticles(
  persona: Persona = "all",
  lang: Locale = "zh",
  issue: IssueId = "001",
): Promise<ArticlesResponse> {
  const params = new URLSearchParams({ lang, issue });
  if (persona !== "all") {
    params.set("persona", persona);
  }

  const res = await fetch(`${API_BASE}/api/articles?${params}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}
