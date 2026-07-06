import { articles } from "@/lib/data/articles";
import type { Article } from "@/lib/data/types";

/**
 * Shaped like a future `next-sanity` GROQ query result so swapping to a live
 * Sanity project later is a one-file change — no callers need to change.
 * See sanity/README.md for the wiring steps.
 */
export async function getArticles(): Promise<Article[]> {
  return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articles.find((article) => article.slug === slug);
}
