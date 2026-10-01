import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/articles/article-page";
import { articleSlugs, getArticle } from "@/content/articles";
import { getArticleMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug, "id");
  if (!article) notFound();

  return getArticleMetadata(article, "id");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug, "id");
  if (!article) notFound();

  return <ArticlePage article={article} locale="id" />;
}
