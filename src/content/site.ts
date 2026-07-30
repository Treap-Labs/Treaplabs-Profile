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
  title: "Jasa Pembuatan Aplikasi untuk Bisnis | TreapLabs",
  description:
    "TreapLabs menyediakan jasa pembuatan aplikasi mobile, website, dan solusi AI custom untuk startup, UMKM, dan perusahaan di seluruh Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://treaplabs.com",
  email: "treaplabs@gmail.com",
  phone: "+6285183170436",
  social: {
    linkedin: "https://www.linkedin.com/company/treaplabs",
    instagram: "https://www.instagram.com/treaplabs",
    github: "https://github.com/Treap-Labs",
  },
  navigation,
} as const;
