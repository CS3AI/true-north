export type Locale = "zh" | "en" | "ja" | "es" | "ko" | "fr";

export type IssueId = "001" | "002";

export type Persona =
  | "all"
  | "student"
  | "researcher"
  | "founder"
  | "job_seeker"
  | "investor"
  | "government"
  | "media";

export interface Article {
  id: string;
  title: string;
  summary: string;
  why_it_matters: string;
  actionable_insight: string;
  impact_score: number;
  golden_section: string;
  section_label: string;
  original_url: string | null;
  image_url: string | null;
  image_style?: "chart" | "hero";
  published_at: string | null;
  created_at: string;
  tags: string[];
  target_audience: string[];
}

export interface ArticlesResponse {
  total: number;
  persona: string | null;
  lang: string;
  articles: Article[];
  source?: string;
}

export interface UiStrings {
  heroTitle: string;
  brandSubtitle: string;
  tagline: string;
  taglineLine1: string;
  taglineLine2: string;
  badge: string;
  refresh: string;
  loading: string;
  loadError: string;
  loadErrorHint: string;
  empty: string;
  emptyHint: string;
  sortHint: string;
  summaryLabel: string;
  whyLabel: string;
  actionLabel: string;
  actionLabelInvestor: string;
  actionLabelGovernment: string;
  actionLabelMedia: string;
  readMore: string;
  impact: string;
  issuePeriod: string;
  issueWeeklyLabel: string;
  issueNumber: string;
  issueBadge: string;
  issueBadges: Record<IssueId, string>;
  poweredBy: string;
  articleSummary: (count: number) => string;
  personas: Record<Persona, string>;
}
