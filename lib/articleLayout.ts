import type { Article } from "./types";

export type CardLayout = "stacked" | "horizontal";

export interface GridItemLayout {
  className: string;
  layout: CardLayout;
}

/** Logical columns for 2+2 checkerboard (xl breakpoint). */
export const CHECKERBOARD_COLS = 4;

function remainder(total: number, cols: number): number {
  const r = total % cols;
  return r === 0 ? 0 : r;
}

function positionInLastRow(index: number, total: number, cols: number): number {
  const rem = remainder(total, cols);
  return index - (total - rem);
}

function styleOf(article: Article): "hero" | "chart" {
  return article.image_style === "chart" ? "chart" : "hero";
}

/**
 * 2+2 checkerboard slot (0-indexed rows):
 * Row 0,2,4… → HH|CC  ·  Row 1,3,5… → CC|HH
 */
export function slotStyle(rowIndex: number, colIndex: number): "hero" | "chart" {
  const leftIsHero = rowIndex % 2 === 0;
  if (colIndex < 2) return leftIsHero ? "hero" : "chart";
  return leftIsHero ? "chart" : "hero";
}

/**
 * Place articles into strict 2+2 checkerboard positions by image_style.
 * Heroes and charts are drawn from impact-sorted pools per slot requirement.
 */
export function arrangeCheckerboard(
  articles: Article[],
  cols: number = CHECKERBOARD_COLS,
): Article[] {
  const n = articles.length;
  if (n <= 1) return articles;

  const heroes = articles
    .filter((a) => styleOf(a) === "hero")
    .sort((a, b) => b.impact_score - a.impact_score);
  const charts = articles
    .filter((a) => styleOf(a) === "chart")
    .sort((a, b) => b.impact_score - a.impact_score);

  if (heroes.length === 0 || charts.length === 0) return articles;

  const heroPool = [...heroes];
  const chartPool = [...charts];
  const placed: Article[] = [];

  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const need = slotStyle(row, col);

    if (need === "hero" && heroPool.length > 0) {
      placed.push(heroPool.shift()!);
    } else if (need === "chart" && chartPool.length > 0) {
      placed.push(chartPool.shift()!);
    } else if (heroPool.length > 0) {
      placed.push(heroPool.shift()!);
    } else if (chartPool.length > 0) {
      placed.push(chartPool.shift()!);
    }
  }

  return placed;
}

/** Verify 2+2 pattern holds for full rows in a 4-column grid. */
export function validateCheckerboard(articles: Article[], cols: number = CHECKERBOARD_COLS): boolean {
  for (let i = 0; i < articles.length; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const expected = slotStyle(row, col);
    if (styleOf(articles[i]) !== expected) return false;
  }
  return true;
}

/**
 * Magazine-style tail-row fill: expand last 1–3 cards so the grid edge stays flush.
 */
export function getGridItemLayout(index: number, total: number): GridItemLayout {
  const classes: string[] = [];
  let layout: CardLayout = "stacked";

  const rem4 = remainder(total, 4);
  if (rem4 === 1 && index === total - 1) {
    classes.push("xl:col-span-4");
    layout = "horizontal";
  } else if (rem4 === 2 && index >= total - 2) {
    classes.push("xl:col-span-2");
  } else if (rem4 === 3 && index >= total - 3) {
    const pos = positionInLastRow(index, total, 4);
    classes.push(pos === 0 ? "xl:col-span-2" : "xl:col-span-1");
  }

  const rem3 = remainder(total, 3);
  if (rem3 === 1 && index === total - 1) {
    classes.push("lg:col-span-3");
    layout = "horizontal";
  } else if (rem3 === 2 && index >= total - 2) {
    const pos = positionInLastRow(index, total, 3);
    classes.push(pos === 0 ? "lg:col-span-2" : "lg:col-span-1");
  }

  const rem2 = remainder(total, 2);
  if (rem2 === 1 && index === total - 1) {
    classes.push("md:col-span-2");
    layout = "horizontal";
  }

  return { className: classes.join(" "), layout };
}
