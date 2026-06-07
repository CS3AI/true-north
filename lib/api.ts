import { fetchLocalArticles } from "./issues";
import type { ArticlesResponse, IssueId, Locale, Persona } from "./types";

export type { Locale, Persona, IssueId, Article, ArticlesResponse, UiStrings } from "./types";

export async function fetchArticles(
  persona: Persona = "all",
  lang: Locale = "zh",
  issue: IssueId = "001"
): Promise<ArticlesResponse> {
  // 绕过所有网络请求，直接通过纯前端算法对本地集进行检索与布阵
  return fetchLocalArticles(persona, lang, issue);
}