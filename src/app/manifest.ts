import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { SITE_LOCALE } from "@/lib/constants";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TreapLabs - Pengembangan Software",
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111113",
    theme_color: "#111113",
    lang: SITE_LOCALE,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
