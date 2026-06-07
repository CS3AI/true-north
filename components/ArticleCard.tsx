"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { CardLayout } from "@/lib/articleLayout";
import type { Article, Persona } from "@/lib/types";
import type { UiStrings } from "@/lib/i18n";
import { getActionLabel } from "@/lib/i18n";
import HighlightedText from "@/components/HighlightedText";

interface ArticleCardProps {
  article: Article;
  ui: UiStrings;
  persona: Persona;
  layout?: CardLayout;
  className?: string;
}

function impactTone(score: number): string {
  if (score >= 80) return "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30";
  if (score >= 60) return "text-cyan-400 bg-cyan-400/10 ring-cyan-400/30";
  return "text-amber-400 bg-amber-400/10 ring-amber-400/30";
}

function ArticleFigure({
  article,
  horizontal,
}: {
  article: Article;
  horizontal?: boolean;
}) {
  if (!article.image_url) return null;

  return (
    <figure
      className={[
        "group/fig relative overflow-hidden rounded-lg shadow-lg shadow-cyan-950/30",
        horizontal ? "shrink-0 lg:w-[44%]" : "w-full",
      ].join(" ")}
    >
      <div
        className={[
          "relative w-full overflow-hidden rounded-lg bg-[#0a0e18]",
          horizontal
            ? "aspect-[16/10] lg:aspect-auto lg:min-h-[260px] lg:h-full"
            : "aspect-[16/10]",
        ].join(" ")}
      >
        <Image
          src={article.image_url}
          alt=""
          fill
          className={[
            "object-cover object-center transition-all duration-500",
            "saturate-[1.18] contrast-[1.08] brightness-[1.04]",
            "group-hover/fig:scale-[1.02] group-hover/fig:saturate-[1.28]",
            article.image_style === "chart"
              ? "group-hover/fig:brightness-[1.06]"
              : "group-hover/fig:brightness-[1.08]",
          ].join(" ")}
          sizes={
            horizontal
              ? "(max-width: 1024px) 100vw, 44vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          unoptimized
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-[#06080f]/70 via-[#06080f]/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/[0.08]" />
    </figure>
  );
}

export default function ArticleCard({
  article,
  ui,
  persona,
  layout = "stacked",
  className = "",
}: ArticleCardProps) {
  const actionLabel = getActionLabel(ui, persona);
  const isHorizontal = layout === "horizontal";

  const headerBlock = (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 space-y-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-md bg-violet-400/10 px-2 py-0.5 text-xs font-medium text-violet-300 ring-1 ring-violet-400/20">
            {article.section_label}
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2
          className={[
            "font-semibold leading-snug tracking-tight text-zinc-50",
            isHorizontal ? "text-lg sm:text-xl" : "text-base sm:text-lg",
          ].join(" ")}
        >
          {article.title}
        </h2>
      </div>

      <div
        className={[
          "flex shrink-0 flex-col items-center rounded-xl px-2.5 py-1.5 ring-1",
          impactTone(article.impact_score),
        ].join(" ")}
      >
        <TrendingUp className="mb-0.5 h-3.5 w-3.5" />
        <span className="text-lg font-bold tabular-nums">{article.impact_score}</span>
        <span className="text-[9px] uppercase tracking-wider opacity-70">{ui.impact}</span>
      </div>
    </div>
  );

  const summaryBlock = (
    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-3.5">
      <div className="mb-1.5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
        <Sparkles className="h-3 w-3" />
        {ui.summaryLabel}
      </div>
      <p className="text-sm leading-relaxed text-zinc-100">
        <HighlightedText text={article.summary} />
      </p>
    </div>
  );

  const insightsBlock = (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          <Zap className="h-3 w-3 text-amber-400" />
          {ui.whyLabel}
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">
          <HighlightedText text={article.why_it_matters} />
        </p>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          <Target className="h-3 w-3 text-emerald-400" />
          {actionLabel}
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">
          <HighlightedText text={article.actionable_insight} />
        </p>
      </div>
    </div>
  );

  const footerBlock = (
    <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3">
      <div className="flex flex-wrap items-center gap-1">
        <Lightbulb className="h-3 w-3 text-zinc-600" />
        {article.target_audience.map((aud) => (
          <span
            key={aud}
            className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-zinc-400"
          >
            {aud}
          </span>
        ))}
      </div>

      {article.original_url && (
        <a
          href={article.original_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-cyan-400/80 transition-colors hover:text-cyan-300"
        >
          {ui.readMore}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </div>
  );

  return (
    <article
      className={[
        "group relative flex h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/25 hover:bg-white/[0.05]",
        isHorizontal
          ? "flex-col gap-4 p-5 lg:flex-row lg:items-stretch lg:gap-6 lg:p-6"
          : "flex-col gap-4 p-5",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-60 transition-opacity group-hover:opacity-100" />

      {isHorizontal ? (
        <>
          <ArticleFigure article={article} horizontal />
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {headerBlock}
            {summaryBlock}
            {insightsBlock}
            {footerBlock}
          </div>
        </>
      ) : (
        <>
          {headerBlock}
          {summaryBlock}
          <ArticleFigure article={article} />
          {insightsBlock}
          {footerBlock}
        </>
      )}
    </article>
  );
}
