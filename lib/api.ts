import { getLocalMockArticles } from "./mockArticles";
import type { ArticlesResponse, Article, IssueId, Locale, Persona } from "./types";

export type { Locale, Persona, IssueId, Article, ArticlesResponse, UiStrings } from "./types";

const TABLE = "true_north_articles";
const ARTICLE_LIMIT = 24;
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

/** Flat Supabase schema (tags / target_audience stored on-row). */
const ARTICLE_SELECT =
  "id,title,summary,why_it_matters,actionable_insight,impact_score,published_at,tags,target_audience";

interface SupabaseArticleRow {
  id: string;
  title: string;
  summary: string;
  why_it_matters: string;
  actionable_insight: string;
  impact_score: number;
  published_at: string | null;
  tags: string[] | null;
  target_audience: string[] | null;
}

function getSupabaseConfig(): { url: string; anonKey: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return { url, anonKey };
}

function mapSupabaseRow(row: SupabaseArticleRow): Article {
  const createdAt = row.published_at ?? new Date().toISOString();
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    why_it_matters: row.why_it_matters,
    actionable_insight: row.actionable_insight,
    impact_score: row.impact_score,
    golden_section: "",
    section_label: "",
    original_url: null,
    image_url: null,
    published_at: row.published_at,
    created_at: createdAt,
    tags: row.tags ?? [],
    target_audience: row.target_audience ?? [],
  };
}

function isSupabaseArticleRow(value: unknown): value is SupabaseArticleRow {
  if (typeof value !== "object" || value === null) return false;
  const row = value as Record<string, unknown>;
  return (
    typeof row.id === "string" &&
    typeof row.title === "string" &&
    typeof row.summary === "string" &&
    typeof row.why_it_matters === "string" &&
    typeof row.actionable_insight === "string" &&
    typeof row.impact_score === "number" &&
    (row.published_at === null || typeof row.published_at === "string") &&
    (row.tags === null || Array.isArray(row.tags)) &&
    (row.target_audience === null || Array.isArray(row.target_audience))
  );
}

function filterByPersona(articles: Article[], persona: Persona): Article[] {
  if (persona === "all") return articles;
  return articles.filter((article) =>
    article.target_audience.some(
      (label) =>
        label.toLowerCase().includes(persona.replace("_", " ")) ||
        label.includes(persona),
    ),
  );
}

async function fetchFromSupabase(persona: Persona): Promise<Article[]> {
  const config = getSupabaseConfig();
  if (!config) return [];

  const params = new URLSearchParams();
  params.set("select", ARTICLE_SELECT);
  params.set("order", "impact_score.desc,published_at.desc");
  params.set("limit", String(ARTICLE_LIMIT));

  const endpoint = `${config.url.replace(/\/$/, "")}/rest/v1/${TABLE}?${params.toString()}`;

  const response = await fetch(endpoint, {
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
    },
    cache: "no-store",
  });

  const payload: unknown = await response.json();
  if (!response.ok || !Array.isArray(payload)) return [];

  const rows = payload.filter(isSupabaseArticleRow);
  return filterByPersona(rows.map(mapSupabaseRow), persona);
}

async function fetchFromBackend(
  persona: Persona,
  lang: Locale,
): Promise<ArticlesResponse | null> {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host !== "localhost" && host !== "127.0.0.1") {
      return null;
    }
  }

  const params = new URLSearchParams({ lang });
  if (persona !== "all") params.set("persona", persona);

  const response = await fetch(`${API_BASE}/api/articles?${params.toString()}`, {
    cache: "no-store",
  });
  if (!response.ok) return null;
  return (await response.json()) as ArticlesResponse;
}

function buildResponse(
  articles: Article[],
  persona: Persona,
  lang: Locale,
  source: ArticlesResponse["source"],
): ArticlesResponse {
  return {
    total: articles.length,
    persona: persona === "all" ? null : persona,
    lang,
    articles,
    source,
  };
}

export async function fetchArticles(
  persona: Persona = "all",
  lang: Locale = "zh",
  issue: IssueId = "001",
): Promise<ArticlesResponse> {
  try {
    const supabaseArticles = await fetchFromSupabase(persona);
    if (supabaseArticles.length > 0) {
      return buildResponse(supabaseArticles, persona, lang, "supabase");
    }
  } catch {
    // Fall through to backend / local mock.
  }

  try {
    const backend = await fetchFromBackend(persona, lang);
    if (backend && backend.articles.length > 0) {
      return buildResponse(backend.articles, persona, lang, backend.source ?? "api");
    }
  } catch {
    // Fall through to bundled mock data.
  }

  const localArticles = getLocalMockArticles(lang, persona);
  return buildResponse(localArticles, persona, lang, "local-mock");
}
