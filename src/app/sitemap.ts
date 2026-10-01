import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { projectSlugs } from "@/content/projects";
import { servicePages } from "@/content/services";
import { LOCALES } from "@/lib/constants";
import { getLanguageAlternates, getLocalizedPath } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30");
  const projectLastModified = new Date("2026-10-02");

  const paths = [
    "/",
    ...servicePages.map((service) => `/${service.slug}/`),
    ...projectSlugs.map((slug) => `/projects/${slug}/`),
  ];

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(getLanguageAlternates(path)).map(([locale, href]) => [locale, `${siteConfig.url}${href}`]),
    );

    return LOCALES.map((locale) => ({
      url: `${siteConfig.url}${getLocalizedPath(path, locale)}`,
      lastModified: path.startsWith("/projects/") ? projectLastModified : lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
