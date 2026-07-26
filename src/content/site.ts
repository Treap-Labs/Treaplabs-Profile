import type { NavigationItem } from "@/types";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Architecture", href: "#architecture" },
] satisfies NavigationItem[];

export const siteConfig = {
  name: "TreapLabs",
  title: "TreapLabs Profile",
  description:
    "A statically generated profile built with Next.js, TypeScript, Tailwind CSS, and Motion.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  navigation,
} as const;
