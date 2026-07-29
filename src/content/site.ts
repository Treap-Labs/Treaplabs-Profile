import type { NavigationItem } from "@/types";

const navigation = [
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#work" },
  { label: "Proses", href: "#process" },
  { label: "Tentang", href: "#about" },
  { label: "Karier", href: "#careers" },
] satisfies NavigationItem[];

export const siteConfig = {
  name: "TreapLabs",
  title: "TreapLabs | Software House di Jakarta",
  description:
    "Tim engineering senior di Jakarta yang membangun aplikasi mobile, platform web, solusi AI, dan teknologi andal untuk bisnis yang terus berkembang.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://treaplabs.com",
  navigation,
} as const;
