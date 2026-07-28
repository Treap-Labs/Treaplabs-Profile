import type { NavigationItem } from "@/types";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
] satisfies NavigationItem[];

export const siteConfig = {
  name: "TreapLabs",
  title: "TreapLabs | Software House in Jakarta",
  description:
    "A senior engineering team in Jakarta building mobile apps, web platforms, AI products, and dependable technology for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://treaplabs.com",
  navigation,
} as const;
