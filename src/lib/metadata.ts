import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";
import { getLanguageAlternates, getLocalizedPath } from "@/lib/i18n";

export function getPageMetadata({
  locale,
  path = "/",
  title = siteConfig.title,
  description = locale === "id" ? siteConfig.description : siteConfig.descriptionEn,
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
}): Metadata {
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
      images: [{
        url: "/images/treaplabs-og.png",
        width: 1200,
        height: 630,
        alt: locale === "id"
          ? "TreapLabs - Pengembangan aplikasi mobile, website, dan solusi AI"
          : "TreapLabs - Mobile app development, websites, and AI solutions",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/treaplabs-og.png"],
    },
  };
}
