import type { Metadata } from "next";

import type { Article } from "@/content/articles";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";
import { getLanguageAlternates, getLocalizedPath } from "@/lib/i18n";

export function getPageMetadata({
  locale,
  path = "/",
  title = siteConfig.title,
  description = locale === "id" ? siteConfig.description : siteConfig.descriptionEn,
  image,
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
  image?: { url: string; alt: string; width: number; height: number };
}): Metadata {
  const socialImage = image ?? {
    url: "/images/treaplabs-og.png",
    width: 1200,
    height: 630,
    alt: locale === "id"
      ? "TreapLabs - Pengembangan aplikasi mobile, website, dan solusi AI"
      : "TreapLabs - Mobile app development, websites, and AI solutions",
  };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: getLocalizedPath(path, locale),
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID",
      siteName: siteConfig.name,
      title,
      description,
      url: getLocalizedPath(path, locale),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export function getArticleMetadata(article: Article, locale: Locale): Metadata {
  const metadata = getPageMetadata({
    locale,
    path: `/articles/${article.slug}/`,
    title: `${article.title} | TreapLabs`,
    description: article.excerpt,
    image: { url: article.socialImage, alt: article.cover.alt, width: 1200, height: 630 },
  });

  return {
    ...metadata,
    authors: [{ name: article.author, url: siteConfig.url }],
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: [siteConfig.url],
      section: article.category,
    },
  };
}
