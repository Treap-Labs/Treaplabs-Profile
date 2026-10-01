import type { NavigationItem } from "@/types";

const navigationId = [
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#work" },
  { label: "Artikel", href: "/articles/" },
  { label: "Proses", href: "#process" },
  { label: "Tentang", href: "#about" },
  { label: "Karier", href: "#careers" },
] satisfies NavigationItem[];

const navigationEn = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Articles", href: "/articles/" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
] satisfies NavigationItem[];

export const siteConfig = {
  name: "TreapLabs",
  title: "Treaplabs",
  description: "TreapLabs menyediakan jasa pembuatan aplikasi mobile, website, dan solusi AI custom untuk startup, UMKM, dan perusahaan di seluruh Indonesia.",
  descriptionEn: "TreapLabs builds mobile apps, websites, and custom AI solutions for startups, small businesses, and enterprises across Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://treaplabs.com",
  email: "treaplabs@gmail.com",
  phone: "+6285183170436",
  social: {
    linkedin: "https://www.linkedin.com/company/treaplabs",
    instagram: "https://www.instagram.com/treaplabs",
    github: "https://github.com/Treap-Labs",
  },
  navigation: navigationId,
  navigationEn,
} as const;
