"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Compass, Loader2, Radar, RefreshCw } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import BrandMark from "@/components/BrandMark";
import HeaderBrand from "@/components/HeaderBrand";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import MasonryGrid from "@/components/MasonryGrid";
import PersonaTabs from "@/components/PersonaTabs";
import { fetchArticles } from "@/lib/api";
import { arrangeCheckerboard, getGridItemLayout } from "@/lib/articleLayout";
import { applyIssueArchive } from "@/lib/issues";
import { UI } from "@/lib/i18n";
import type { Article, IssueId, Locale, Persona } from "@/lib/types";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const [persona, setPersona] = useState<Persona>("all");
  const [issueId, setIssueId] = useState<IssueId>("001");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ui = UI[locale];

  const loadArticles = useCallback(
    async (selected: Persona, lang: Locale, issue: IssueId) => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArticles(selected, lang, issue);
        setArticles(applyIssueArchive(data.articles, issue));
      } catch (err) {
        setError(err instanceof Error ? err.message : UI[lang].loadError);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    loadArticles(persona, locale, issueId);
  }, [persona, locale, issueId, loadArticles]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
  }, [locale]);

  const displayArticles = useMemo(() => arrangeCheckerboard(articles), [articles]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06080f] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <LocaleSwitcher active={locale} onChange={setLocale} />
            <HeaderBrand ui={ui} issueId={issueId} onIssueChange={setIssueId} />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                <Radar className="h-3.5 w-3.5" />
                {ui.badge}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                  {ui.heroTitle}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                {ui.taglineLine1}
                <br />
                {ui.taglineLine2}
              </p>
            </div>

            <button
              type="button"
              onClick={() => loadArticles(persona, locale, issueId)}
              disabled={loading}
              className="hidden shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 disabled:opacity-50 sm:inline-flex"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              {ui.refresh}
            </button>
          </div>

          <PersonaTabs active={persona} onChange={setPersona} ui={ui} />
        </header>

        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-32 text-zinc-500">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
            <p className="text-sm">{ui.loading}</p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-8 text-center">
            <Compass className="mx-auto mb-3 h-8 w-8 text-red-400" />
            <p className="font-medium text-red-300">{ui.loadError}</p>
            <p className="mt-1 text-sm text-zinc-500">{error}</p>
            <p className="mt-4 text-xs text-zinc-600">{ui.loadErrorHint}</p>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-16 text-center">
            <Radar className="mx-auto mb-4 h-10 w-10 text-zinc-600" />
            <p className="text-lg font-medium text-zinc-300">{ui.empty}</p>
            <p className="mt-2 text-sm text-zinc-500">{ui.emptyHint}</p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <>
            <p className="mb-6 text-sm text-zinc-500">
              {ui.articleSummary(displayArticles.length)} · {ui.sortHint}
            </p>
            <MasonryGrid layout="grid">
              {displayArticles.map((article, index) => {
                const gridItem = getGridItemLayout(index, displayArticles.length);

                return (
                  <ArticleCard
                    key={`${issueId}-${article.id}`}
                    article={article}
                    ui={ui}
                    persona={persona}
                    layout={gridItem.layout}
                    className={gridItem.className}
                  />
                );
              })}
            </MasonryGrid>
          </>
        )}

        <BrandMark ui={ui} />
      </div>
    </div>
  );
}
