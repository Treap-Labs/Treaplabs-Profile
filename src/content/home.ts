import type { Locale } from "@/lib/constants";

type HomeContent = {
  heroEyebrow: string;
  tagline: string;
  discover: string;
  intro: string;
  build: string;
  explore: string;
  availability: string;
  technologiesLabel: string;
  clientsTitle: string;
  servicesEyebrow: string;
  servicesTitle: string;
  workEyebrow: string;
  workTitle: string;
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
    large: boolean;
  }[];
  caseStudies: readonly {
    categories: readonly string[];
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  processSteps: readonly { number: string; title: string; description: string }[];
  team: readonly { name: string; role: string }[];
};

export const technologies = [
  "Flutter", "Next.js", "Laravel", "Python", "PyTorch", "Supabase",
  "React Native", "TypeScript", "PostgreSQL", "Docker", "Kubernetes",
] as const;

export const clients = ["Spectra Komputer", "Mahdaly"] as const;

export const homeContent = {
  id: {
    heroEyebrow: "Pengembangan Software / Indonesia",
    tagline: "Software yang bekerja untuk bisnis Anda.",
    discover: "Kenali TreapLabs",
    intro: "TreapLabs membangun aplikasi mobile, website, dan solusi AI khusus untuk startup, UMKM, dan perusahaan di seluruh Indonesia.",
    build: "Bangun Bersama TreapLabs",
    explore: "Lihat Proyek Kami",
    availability: "Tersedia untuk proyek baru - ",
    technologiesLabel: "Teknologi yang kami gunakan",
    clientsTitle: "Dipercaya oleh tim di",
    servicesEyebrow: "Yang kami kerjakan",
    servicesTitle: "Empat cara kami membantu Anda meluncurkan produk.",
    workEyebrow: "Proyek pilihan",
    workTitle: "Produk yang dibangun untuk pekerjaan nyata.",
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
    contactDescription: "Ceritakan produk yang ingin Anda bangun. Kami akan menjelaskan secara jujur bagaimana kami dapat membantu.",
    consultation: "Jadwalkan konsultasi 30 menit",
    whatsappMessage: "Halo TreapLabs, saya tertarik untuk menjadwalkan konsultasi gratis selama 30 menit. Apakah ada jadwal yang tersedia?",
    services: [
      {
        index: "01", title: "Pengembangan Aplikasi Mobile",
        description: "Aplikasi lintas platform berbasis Flutter yang terasa native di iOS dan Android - cepat diluncurkan dan mudah dikembangkan.",
        tags: ["Flutter", "iOS", "Android", "Dart"], href: "/jasa-pembuatan-aplikasi/", large: true,
      },
      {
        index: "02", title: "Platform Web",
        description: "Aplikasi web full-stack dengan arsitektur modern, performa tinggi, dan siap berkembang bersama bisnis Anda.",
        tags: ["Next.js", "Laravel", "Supabase"], href: "/jasa-pembuatan-website/", large: false,
      },
      {
        index: "03", title: "Otomasi & Integrasi AI",
        description: "Solusi AI khusus untuk mengotomasi alur kerja, mengintegrasikan model ke aplikasi, dan meningkatkan efisiensi operasional bisnis.",
        tags: ["Python", "Integrasi AI", "Otomasi"], href: "/solusi-ai-bisnis/", large: false,
      },
      {
        index: "04", title: "Konsultasi Teknologi",
        description: "Evaluasi arsitektur, audit teknologi, dan dukungan langsung dari pengembang senior untuk memperkuat tim Anda.",
        tags: ["Arsitektur", "Audit", "Pendampingan Tim"], href: "/konsultasi-teknologi/", large: false,
      },
    ],
    caseStudies: [
      {
        categories: ["Platform Web", "Aplikasi Mobile", "HRIS"], title: "Ikigawe HRIS",
        description: "Manajemen tenaga kerja terhubung di web dan mobile. Administrasi karyawan, kehadiran, shift, dan jadwal dengan akses berbasis izin.",
        image: "/images/portfolio/ikigawe-hris-mockup.webp",
        alt: "Ilustrasi dashboard kehadiran desktop dan mockup aplikasi mobile Ikigawe HRIS dengan data demo",
      },
      {
        categories: ["Aplikasi Mobile", "Integrasi AI"], title: "Walk Around Check",
        description: "Alur inspeksi kendaraan terpandu dengan pengambilan foto enam sudut, daftar pemeriksaan kondisi, integrasi analisis AI, dan laporan PDF.",
        image: "/images/portfolio/walk-around-check-mockup.webp",
        alt: "Dashboard mobile Walk Around Check dalam mockup ponsel dengan contoh total inspeksi",
      },
      {
        categories: ["Toko Online", "Platform Web"], title: "Heelwa",
        description: "Etalase busana yang terhubung dengan administrasi ritel, menggabungkan penelusuran produk, keranjang, dan pembayaran dengan inventaris serta kasir.",
        image: "/images/portfolio/heelwa-mockup.webp",
        alt: "Beranda etalase busana Heelwa dalam mockup desktop",
      },
      {
        categories: ["SaaS", "Platform Web", "Sistem Kasir"], title: "Juniper",
        description: "Platform kafe terhubung yang menyatukan kasir, pemesanan pelanggan, antrean dapur, pembayaran, inventaris, dan loyalitas di seluruh cabang.",
        image: "/images/portfolio/juniper-mockup.webp",
        alt: "Halaman utama platform kafe Juniper dalam mockup desktop dengan ilustrasi dashboard",
      },
    ],
    processSteps: [
      { number: "01", title: "Eksplorasi", description: "Kami memetakan tujuan, batasan, dan kebutuhan pengguna melalui tahap awal terstruktur selama 2 minggu." },
      { number: "02", title: "Desain", description: "Prototipe terperinci disiapkan sebelum kode produksi dibuat, sehingga hasil akhirnya dapat dipahami sejak awal." },
      { number: "03", title: "Pengembangan", description: "Pengerjaan dalam sprint 2 minggu dengan demo mingguan agar Anda selalu terlibat dalam setiap perkembangan." },
      { number: "04", title: "Peluncuran & Dukungan", description: "Kami meluncurkan produk, memantau performa, dan memberikan dukungan selama 30 hari setelah peluncuran tanpa biaya tambahan." },
    ],
    team: [
      { name: "Ali Hasyimi Assegaf", role: "Founder & Head of Engineering" },
      { name: "Bimantara Tito Wahyudi", role: "Chief Technology Officer & Head of Backend Engineering" },
      { name: "Achmad Zidan Ramdani", role: "Head of Frontend & Mobile" },
      { name: "Rachmatullah Rizaldi", role: "Head of UI/UX Design" },
      { name: "Miqdad Hanif Mutawally", role: "Chief Business Officer" },
    ],
  },
  en: {
    heroEyebrow: "Software House / Indonesia",
    tagline: "Software that works for your business.",
    discover: "Discover TreapLabs",
    intro: "TreapLabs builds mobile apps, websites, and custom AI solutions for startups, small businesses, and enterprises across Indonesia.",
    build: "Build With TreapLabs",
    explore: "Explore Our Work",
    availability: "Available for new projects - ",
    technologiesLabel: "Technologies we use",
    clientsTitle: "Trusted by teams at",
    servicesEyebrow: "What we do",
    servicesTitle: "Four ways we help you launch products.",
    workEyebrow: "Selected work",
    workTitle: "Products built for real work.",
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
    contactDescription: "Tell us about the product you want to build. We’ll explain honestly how we can help.",
    consultation: "Schedule a 30-minute consultation",
    whatsappMessage: "Hello TreapLabs, I am interested in scheduling a free 30-minute consultation. Is there a time available?",
    services: [
      {
        index: "01", title: "Mobile App Development",
        description: "Cross-platform Flutter apps that feel native on iOS and Android, launch quickly, and scale easily.",
        tags: ["Flutter", "iOS", "Android", "Dart"], href: "/jasa-pembuatan-aplikasi/", large: true,
      },
      {
        index: "02", title: "Web Platforms",
        description: "Full-stack web applications with modern architecture, high performance, and room to grow with your business.",
        tags: ["Next.js", "Laravel", "Supabase"], href: "/jasa-pembuatan-website/", large: false,
      },
      {
        index: "03", title: "AI Automation & Integration",
        description: "Custom AI solutions that automate workflows, integrate models into applications, and improve operational efficiency.",
        tags: ["Python", "AI Integration", "Automation"], href: "/solusi-ai-bisnis/", large: false,
      },
      {
        index: "04", title: "Technology Consulting",
        description: "Architecture reviews, technology audits, and direct support from senior engineers to strengthen your team.",
        tags: ["Architecture", "Audit", "Team Augmentation"], href: "/konsultasi-teknologi/", large: false,
      },
    ],
    caseStudies: [
      {
        categories: ["Web Platform", "Mobile App", "HRIS"], title: "Ikigawe HRIS",
        description: "Connected workforce management across web and mobile. Employee administration, attendance, shifts, and schedules with permission-based access.",
        image: "/images/portfolio/ikigawe-hris-mockup.webp",
        alt: "Illustrative Ikigawe HRIS desktop attendance dashboard and mobile app mockup with demo data",
      },
      {
        categories: ["Mobile App", "AI Integration"], title: "Walk Around Check",
        description: "A guided vehicle-inspection workflow with six-angle photo capture, condition checklists, AI-analysis integration, and PDF reporting.",
        image: "/images/portfolio/walk-around-check-mockup.webp",
        alt: "Walk Around Check mobile dashboard presented in a phone mockup with sample inspection totals",
      },
      {
        categories: ["E-Commerce", "Web Platform"], title: "Heelwa",
        description: "A fashion storefront paired with retail administration, connecting product browsing, cart and checkout flows with inventory and point-of-sale tools.",
        image: "/images/portfolio/heelwa-mockup.webp",
        alt: "Heelwa fashion storefront homepage presented in a desktop mockup",
      },
      {
        categories: ["SaaS", "Web Platform", "Point of Sale"], title: "Juniper",
        description: "A connected cafe workspace bringing point of sale, customer ordering, kitchen queues, payments, inventory tracking, and loyalty together across branches.",
        image: "/images/portfolio/juniper-mockup.webp",
        alt: "Juniper cafe platform English landing page presented in a desktop mockup, featuring an illustrative dashboard",
      },
    ],
    processSteps: [
      { number: "01", title: "Discovery", description: "We map goals, constraints, and user needs through a structured two-week kickoff." },
      { number: "02", title: "Design", description: "High-fidelity prototypes are prepared before production code, making the outcome clear from the start." },
      { number: "03", title: "Build", description: "We work in two-week sprints with weekly demos, keeping you involved in every stage of progress." },
      { number: "04", title: "Launch & Support", description: "We launch your product, monitor performance, and provide 30 days of post-launch support at no extra cost." },
    ],
    team: [
      { name: "Ali Hasyimi Assegaf", role: "Founder & Head of Engineering" },
      { name: "Bimantara Tito Wahyudi", role: "Chief Technology Officer & Head of Backend Engineering" },
      { name: "Achmad Zidan Ramdani", role: "Head of Frontend & Mobile" },
      { name: "Rachmatullah Rizaldi", role: "Head of UI/UX Design" },
      { name: "Miqdad Hanif Mutawally", role: "Chief Business Officer" },
    ],
  },
} as const satisfies Record<Locale, HomeContent>;
