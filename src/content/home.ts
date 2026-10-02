import type { Locale } from "@/lib/constants";

type HomeContent = {
  heroEyebrow: string;
  tagline: string;
  discover: string;
  intro: string;
  build: string;
  explore: string;
  availability: string;
  technologiesEyebrow: string;
  technologiesTitle: string;
  technologyGroups: readonly {
    category: string;
    technologies: readonly string[];
  }[];
  clientsTitle: string;
  servicesEyebrow: string;
  servicesTitle: string;
  workEyebrow: string;
  workTitle: string;
  articlesEyebrow: string;
  articlesTitle: string;
  processTitle: string;
  processPromises: readonly string[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutTitleMuted: string;
  aboutParagraphs: readonly string[];
  leadershipTitle: string;
  contactTitle: string;
  contactDescription: string;
  consultation: string;
  whatsappMessage: string;
  services: readonly {
    index: string;
    title: string;
    description: string;
    tags: readonly string[];
    href: string;
  }[];
  processSteps: readonly {
    number: string;
    title: string;
    description: string;
  }[];
  team: readonly { name: string; role: string }[];
};

export const clients = [
  "Spectra Komputer",
  "Mahdaly",
  "Smantik",
  "Heelwa",
] as const;

export const homeContent = {
  id: {
    heroEyebrow: "Pengembangan Software / Indonesia",
    tagline: "Software yang bekerja untuk bisnis Anda.",
    discover: "Kenali TreapLabs",
    intro:
      "TreapLabs membangun aplikasi mobile, website, dan solusi AI khusus untuk startup, UMKM, dan perusahaan di seluruh Indonesia.",
    build: "Bangun Bersama TreapLabs",
    explore: "Lihat Proyek Kami",
    availability: "Tersedia untuk proyek baru - ",
    technologiesEyebrow: "Keahlian teknologi",
    technologiesTitle: "Perangkat modern untuk membawa bisnis Anda lebih jauh.",
    technologyGroups: [
      {
        category: "Front-end",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Back-end & Database",
        technologies: ["Laravel", "Supabase", "PostgreSQL", "FastAPI"],
      },
      { category: "Mobile", technologies: ["Flutter", "React Native", "Dart"] },
      {
        category: "AI & Otomasi",
        technologies: [
          "Python",
          "PyTorch",
          "n8n",
          "LangGraph",
          "Ollama",
        ],
      },
      {
        category: "Infrastruktur",
        technologies: ["Docker", "Kubernetes", "GitHub Actions"],
      },
    ],
    clientsTitle: "Dipercaya oleh tim di",
    servicesEyebrow: "Yang kami kerjakan",
    servicesTitle: "Empat cara kami membantu Anda meluncurkan produk.",
    workEyebrow: "Proyek pilihan",
    workTitle: "Produk yang dibangun untuk pekerjaan nyata.",
    articlesEyebrow: "Cerita pilihan",
    articlesTitle: "Lihat bagaimana produk kami bekerja di lapangan.",
    processTitle: "Cara kami bekerja.",
    processPromises: ["Sprint 2 minggu", "Demo mingguan", "Opsi harga tetap"],
    aboutEyebrow: "Tentang kami",
    aboutTitle: "Kepemimpinan yang terarah, ",
    aboutTitleMuted: "eksekusi yang solid.",
    aboutParagraphs: [
      "TreapLabs menyatukan strategi bisnis, desain, dan teknologi untuk membangun produk digital yang relevan. Tim kepemimpinan kami mengarahkan setiap bidang agar visi produk, kualitas, dan kebutuhan bisnis berjalan selaras.",
      "Setiap proyek dikelola melalui kolaborasi lintas fungsi, standar pengembangan yang kuat, dan komunikasi yang transparan. Kami membangun kemitraan jangka panjang melalui proses yang terukur dan tanggung jawab yang jelas.",
    ],
    leadershipTitle: "Tim Kepemimpinan",
    contactTitle: "Mari wujudkan ide Anda.",
    contactDescription:
      "Ceritakan produk yang ingin Anda bangun. Kami akan menjelaskan secara jujur bagaimana kami dapat membantu.",
    consultation: "Jadwalkan konsultasi 30 menit",
    whatsappMessage:
      "Halo TreapLabs, saya tertarik untuk menjadwalkan konsultasi gratis selama 30 menit. Apakah ada jadwal yang tersedia?",
    services: [
      {
        index: "01",
        title: "Pengembangan Aplikasi Mobile",
        description:
          "Aplikasi lintas platform berbasis Flutter yang terasa native di iOS dan Android - cepat diluncurkan dan mudah dikembangkan.",
        tags: ["Flutter", "iOS", "Android", "Dart"],
        href: "/jasa-pembuatan-aplikasi/",
      },
      {
        index: "02",
        title: "Platform Web",
        description:
          "Aplikasi web full-stack dengan arsitektur modern, performa tinggi, dan siap berkembang bersama bisnis Anda.",
        tags: ["Next.js", "Laravel", "Supabase"],
        href: "/jasa-pembuatan-website/",
      },
      {
        index: "03",
        title: "Otomasi & Integrasi AI",
        description:
          "Solusi AI khusus untuk mengotomasi alur kerja, mengintegrasikan model ke aplikasi, dan meningkatkan efisiensi operasional bisnis.",
        tags: ["Python", "Integrasi AI", "Otomasi"],
        href: "/solusi-ai-bisnis/",
      },
      {
        index: "04",
        title: "Konsultasi Teknologi",
        description:
          "Evaluasi arsitektur, audit teknologi, dan dukungan langsung dari pengembang senior untuk memperkuat tim Anda.",
        tags: ["Arsitektur", "Audit", "Pendampingan Tim"],
        href: "/konsultasi-teknologi/",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Eksplorasi",
        description:
          "Kami memetakan tujuan, batasan, dan kebutuhan pengguna melalui tahap awal terstruktur selama 2 minggu.",
      },
      {
        number: "02",
        title: "Desain",
        description:
          "Prototipe terperinci disiapkan sebelum kode produksi dibuat, sehingga hasil akhirnya dapat dipahami sejak awal.",
      },
      {
        number: "03",
        title: "Pengembangan",
        description:
          "Pengerjaan dalam sprint 2 minggu dengan demo mingguan agar Anda selalu terlibat dalam setiap perkembangan.",
      },
      {
        number: "04",
        title: "Peluncuran & Dukungan",
        description:
          "Kami meluncurkan produk, memantau performa, dan memberikan dukungan selama 30 hari setelah peluncuran tanpa biaya tambahan.",
      },
    ],
    team: [
      { name: "Ali Hasyimi Assegaf", role: "Founder & Head of Engineering" },
      {
        name: "Bimantara Tito Wahyudi",
        role: "Chief Technology Officer · Head of Backend & AI Engineering",
      },
      { name: "Achmad Zidan Ramdani", role: "Head of Frontend & Mobile" },
      { name: "Rachmatullah Rizaldi", role: "Head of UI/UX Design" },
      { name: "Miqdad Hanif Mutawally", role: "Chief Business Officer" },
    ],
  },
  en: {
    heroEyebrow: "Software House / Indonesia",
    tagline: "Software that works for your business.",
    discover: "Discover TreapLabs",
    intro:
      "TreapLabs builds mobile apps, websites, and custom AI solutions for startups, small businesses, and enterprises across Indonesia.",
    build: "Build With TreapLabs",
    explore: "Explore Our Work",
    availability: "Available for new projects - ",
    technologiesEyebrow: "Tech mastery",
    technologiesTitle: "Modern tools to move your business forward.",
    technologyGroups: [
      {
        category: "Front-end",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Back-end & Database",
        technologies: ["Laravel", "Supabase", "PostgreSQL", "FastAPI"],
      },
      { category: "Mobile", technologies: ["Flutter", "React Native", "Dart"] },
      {
        category: "AI & Automation",
        technologies: [
          "Python",
          "PyTorch",
          "n8n",
          "LangGraph",
          "Ollama",
        ],
      },
      {
        category: "Infrastructure",
        technologies: ["Docker", "Kubernetes", "GitHub Actions"],
      },
    ],
    clientsTitle: "Trusted by teams at",
    servicesEyebrow: "What we do",
    servicesTitle: "Four ways we help you launch products.",
    workEyebrow: "Selected work",
    workTitle: "Products built for real work.",
    articlesEyebrow: "Featured story",
    articlesTitle: "See our products at work in the real world.",
    processTitle: "How we work.",
    processPromises: ["Two-week sprints", "Weekly demos", "Fixed-price option"],
    aboutEyebrow: "About us",
    aboutTitle: "Focused leadership, ",
    aboutTitleMuted: "solid execution.",
    aboutParagraphs: [
      "TreapLabs brings together business strategy, design, and technology to build relevant digital products. Our leadership team guides each discipline, aligning product vision, quality, and business needs.",
      "Every project is managed through cross-functional collaboration, strong development standards, and transparent communication. We build lasting partnerships through measurable processes and clear accountability.",
    ],
    leadershipTitle: "Leadership Team",
    contactTitle: "Let’s bring your idea to life.",
    contactDescription:
      "Tell us about the product you want to build. We’ll explain honestly how we can help.",
    consultation: "Schedule a 30-minute consultation",
    whatsappMessage:
      "Hello TreapLabs, I am interested in scheduling a free 30-minute consultation. Is there a time available?",
    services: [
      {
        index: "01",
        title: "Mobile App Development",
        description:
          "Cross-platform Flutter apps that feel native on iOS and Android, launch quickly, and scale easily.",
        tags: ["Flutter", "iOS", "Android", "Dart"],
        href: "/jasa-pembuatan-aplikasi/",
      },
      {
        index: "02",
        title: "Web Platforms",
        description:
          "Full-stack web applications with modern architecture, high performance, and room to grow with your business.",
        tags: ["Next.js", "Laravel", "Supabase"],
        href: "/jasa-pembuatan-website/",
      },
      {
        index: "03",
        title: "AI Automation & Integration",
        description:
          "Custom AI solutions that automate workflows, integrate models into applications, and improve operational efficiency.",
        tags: ["Python", "AI Integration", "Automation"],
        href: "/solusi-ai-bisnis/",
      },
      {
        index: "04",
        title: "Technology Consulting",
        description:
          "Architecture reviews, technology audits, and direct support from senior engineers to strengthen your team.",
        tags: ["Architecture", "Audit", "Team Augmentation"],
        href: "/konsultasi-teknologi/",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We map goals, constraints, and user needs through a structured two-week kickoff.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "High-fidelity prototypes are prepared before production code, making the outcome clear from the start.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "We work in two-week sprints with weekly demos, keeping you involved in every stage of progress.",
      },
      {
        number: "04",
        title: "Launch & Support",
        description:
          "We launch your product, monitor performance, and provide 30 days of post-launch support at no extra cost.",
      },
    ],
    team: [
      { name: "Ali Hasyimi Assegaf", role: "Founder & Head of Engineering" },
      {
        name: "Bimantara Tito Wahyudi",
        role: "Chief Technology Officer · Head of Backend & AI Engineering",
      },
      { name: "Achmad Zidan Ramdani", role: "Head of Frontend & Mobile" },
      { name: "Rachmatullah Rizaldi", role: "Head of UI/UX Design" },
      { name: "Miqdad Hanif Mutawally", role: "Chief Business Officer" },
    ],
  },
} as const satisfies Record<Locale, HomeContent>;
