import type { Locale } from "@/lib/constants";

type UiContent = {
  header: {
    mainNavigation: string;
    mobileNavigation: string;
    language: string;
    switchToId: string;
    switchToEn: string;
    changeTheme: string;
    startProject: string;
    openMenu: string;
    closeMenu: string;
    appearance: string;
    dark: string;
    light: string;
  };
  footer: {
    description: string;
    madeIn: string;
    columns: readonly {
      title: string;
      links: readonly { label: string; href: string }[];
    }[];
  };
  notFound: { title: string; returnHome: string };
  floatingWhatsApp: {
    label: string;
    ariaLabel: string;
    message: string;
  };
  service: {
    home: string;
    whatsappMessage: string;
    discussProject: string;
    benefits: string;
    benefitsTitle: string;
    deliverables: string;
    deliverablesTitle: string;
    technology: string;
    technologyTitle: string;
    caseStudy: string;
    faq: string;
    faqTitle: string;
    contactTitle: string;
    contactDescription: string;
    contact: string;
    otherServices: string;
  };
};

export const uiContent = {
  id: {
    header: {
      mainNavigation: "Navigasi utama",
      mobileNavigation: "Navigasi mobile",
      language: "Pilih bahasa",
      switchToId: "Gunakan Bahasa Indonesia",
      switchToEn: "Gunakan Bahasa Inggris",
      changeTheme: "Ganti tema warna",
      startProject: "Mulai Proyek",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      appearance: "Tampilan",
      dark: "Gelap",
      light: "Terang",
    },
    footer: {
      description: "Jasa pembuatan aplikasi mobile, website, dan solusi AI khusus untuk bisnis di seluruh Indonesia.",
      madeIn: "Dibuat di Indonesia",
      columns: [
        {
          title: "Layanan",
          links: [
            { label: "Aplikasi Mobile", href: "/jasa-pembuatan-aplikasi/" },
            { label: "Platform Web", href: "/jasa-pembuatan-website/" },
            { label: "Otomasi AI", href: "/solusi-ai-bisnis/" },
            { label: "Konsultasi", href: "/konsultasi-teknologi/" },
          ],
        },
        {
          title: "Perusahaan",
          links: [
            { label: "Tentang", href: "/#about" },
            { label: "Proses", href: "/#process" },
            { label: "Proyek", href: "/#work" },
            { label: "Karier", href: "/#careers" },
          ],
        },
        {
          title: "Media Sosial",
          links: [
            { label: "LinkedIn", href: "https://www.linkedin.com/company/treaplabs" },
            { label: "Instagram", href: "https://www.instagram.com/treaplabs" },
            { label: "GitHub", href: "https://github.com/Treap-Labs" },
            { label: "Website", href: "/" },
          ],
        },
      ],
    },
    notFound: { title: "Halaman tidak ditemukan.", returnHome: "Kembali ke beranda" },
    floatingWhatsApp: {
      label: "Diskusi proyek",
      ariaLabel: "Diskusikan proyek dengan TreapLabs melalui WhatsApp (tab baru)",
      message: "Halo TreapLabs, saya ingin berdiskusi tentang proyek digital untuk bisnis saya.",
    },
    service: {
      home: "Beranda",
      whatsappMessage: "Halo TreapLabs, saya ingin berdiskusi mengenai layanan pengembangan software untuk bisnis saya.",
      discussProject: "Diskusikan proyek Anda",
      benefits: "Manfaat untuk bisnis",
      benefitsTitle: "Software yang dibangun dengan tujuan yang jelas.",
      deliverables: "Yang Anda dapatkan",
      deliverablesTitle: "Lingkup kerja yang transparan.",
      technology: "Teknologi",
      technologyTitle: "Perangkat yang tepat untuk kebutuhan Anda.",
      caseStudy: "Contoh proyek",
      faq: "Pertanyaan umum",
      faqTitle: "Sebelum memulai proyek.",
      contactTitle: "Mari wujudkan produk Anda.",
      contactDescription: "Ceritakan kebutuhan bisnis Anda dan dapatkan konsultasi awal gratis selama 30 menit.",
      contact: "Hubungi TreapLabs",
      otherServices: "Layanan lainnya",
    },
  },
  en: {
    header: {
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      language: "Choose language",
      switchToId: "Switch to Indonesian",
      switchToEn: "Switch to English",
      changeTheme: "Change color theme",
      startProject: "Start a Project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      appearance: "Appearance",
      dark: "Dark",
      light: "Light",
    },
    footer: {
      description: "Mobile app development, websites, and custom AI solutions for businesses across Indonesia.",
      madeIn: "Made in Indonesia",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Mobile Apps", href: "/jasa-pembuatan-aplikasi/" },
            { label: "Web Platforms", href: "/jasa-pembuatan-website/" },
            { label: "AI Automation", href: "/solusi-ai-bisnis/" },
            { label: "Consulting", href: "/konsultasi-teknologi/" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/#about" },
            { label: "Process", href: "/#process" },
            { label: "Work", href: "/#work" },
            { label: "Careers", href: "/#careers" },
          ],
        },
        {
          title: "Social",
          links: [
            { label: "LinkedIn", href: "https://www.linkedin.com/company/treaplabs" },
            { label: "Instagram", href: "https://www.instagram.com/treaplabs" },
            { label: "GitHub", href: "https://github.com/Treap-Labs" },
            { label: "Website", href: "/" },
          ],
        },
      ],
    },
    notFound: { title: "Page not found.", returnHome: "Return home" },
    floatingWhatsApp: {
      label: "Let’s talk",
      ariaLabel: "Discuss your project with TreapLabs on WhatsApp (opens in a new tab)",
      message: "Hello TreapLabs, I'd like to discuss a digital project for my business.",
    },
    service: {
      home: "Home",
      whatsappMessage: "Hello TreapLabs, I would like to discuss software development services for my business.",
      discussProject: "Discuss your project",
      benefits: "Business benefits",
      benefitsTitle: "Software built with a clear purpose.",
      deliverables: "What you get",
      deliverablesTitle: "A transparent scope of work.",
      technology: "Technology",
      technologyTitle: "The right tools for your needs.",
      caseStudy: "Project example",
      faq: "Frequently asked questions",
      faqTitle: "Before starting a project.",
      contactTitle: "Let’s bring your product to life.",
      contactDescription: "Tell us what your business needs and get a free 30-minute initial consultation.",
      contact: "Contact TreapLabs",
      otherServices: "Other services",
    },
  },
} as const satisfies Record<Locale, UiContent>;
