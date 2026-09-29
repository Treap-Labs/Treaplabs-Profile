import { DEFAULT_LOCALE, type Locale } from "@/lib/constants";

export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  benefits: readonly { title: string; description: string }[];
  deliverables: readonly string[];
  technologies: readonly string[];
  caseStudy?: { title: string; client?: string; result: string };
  faq: readonly { question: string; answer: string }[];
};

export const servicePagesId = [
  {
    slug: "jasa-pembuatan-aplikasi",
    title: "Jasa Pembuatan Aplikasi Mobile untuk Bisnis",
    metaTitle: "Jasa Pembuatan Aplikasi Mobile | TreapLabs",
    description:
      "Jasa pembuatan aplikasi Android dan iOS custom dengan Flutter untuk startup, UMKM, dan perusahaan di seluruh Indonesia.",
    eyebrow: "Pengembangan Aplikasi Mobile",
    intro:
      "Kami merancang dan membangun aplikasi mobile custom yang cepat, stabil, dan mudah dikembangkan. Satu codebase Flutter membantu bisnis meluncurkan produk ke Android dan iOS dengan lebih efisien.",
    benefits: [
      { title: "Fokus pada pengguna", description: "Alur aplikasi dirancang berdasarkan kebutuhan pengguna dan tujuan bisnis, bukan sekadar daftar fitur." },
      { title: "Siap berkembang", description: "Arsitektur yang terstruktur membuat aplikasi lebih mudah dirawat, diuji, dan ditambah fiturnya." },
      { title: "Transparan sejak awal", description: "Anda mendapat update rutin, demo mingguan, serta gambaran timeline dan biaya yang jelas." },
    ],
    deliverables: ["Aplikasi Android dan iOS", "Implementasi antarmuka", "Integrasi API dan backend", "Pengujian kualitas", "Publikasi dan dukungan peluncuran"],
    technologies: ["Flutter", "Dart", "Android", "iOS", "Supabase", "REST API"],
    caseStudy: { title: "Ikigawe HRIS", client: "Spectra Komputer", result: "Memangkas proses payroll dari 3 hari menjadi 20 menit melalui pengalaman mobile-first." },
    faq: [
      { question: "Berapa lama proses pembuatan aplikasi?", answer: "Durasi bergantung pada ruang lingkup. MVP umumnya dimulai dari 8-12 minggu setelah tahap discovery dan desain disepakati." },
      { question: "Apakah aplikasi dibuat untuk Android dan iOS?", answer: "Ya. Kami menggunakan Flutter untuk membangun aplikasi lintas platform dengan pengalaman yang konsisten di Android dan iOS." },
      { question: "Apakah TreapLabs dapat melanjutkan aplikasi yang sudah ada?", answer: "Bisa. Kami akan melakukan audit kode dan arsitektur terlebih dahulu untuk menentukan pendekatan yang aman dan efisien." },
    ],
  },
  {
    slug: "jasa-pembuatan-website",
    title: "Jasa Pembuatan Website dan Aplikasi Web Custom",
    metaTitle: "Jasa Pembuatan Website Custom | TreapLabs",
    description:
      "Jasa pembuatan website dan aplikasi web custom yang cepat, responsif, SEO-friendly, dan siap berkembang bersama bisnis Anda.",
    eyebrow: "Pengembangan Web",
    intro:
      "TreapLabs membangun website bisnis, dashboard, sistem internal, dan aplikasi web custom dengan fokus pada performa, kemudahan penggunaan, dan fondasi teknis yang sehat.",
    benefits: [
      { title: "Cepat dan responsif", description: "Pengalaman web dioptimalkan untuk desktop dan mobile dengan perhatian pada Core Web Vitals." },
      { title: "Siap untuk SEO", description: "Struktur HTML semantik, metadata, sitemap, dan performa disiapkan agar mesin pencari memahami website Anda." },
      { title: "Terintegrasi", description: "Hubungkan website dengan sistem internal, payment gateway, analytics, atau layanan pihak ketiga." },
    ],
    deliverables: ["Website profil perusahaan", "Aplikasi web khusus", "Dashboard dan sistem internal", "CMS dan integrasi API", "Peluncuran dan pemantauan"],
    technologies: ["Next.js", "TypeScript", "Laravel", "Supabase", "PostgreSQL", "Tailwind CSS"],
    faq: [
      { question: "Apakah website sudah termasuk SEO?", answer: "Kami menyiapkan technical SEO dasar seperti metadata, semantic HTML, sitemap, robots, structured data, dan optimasi performa." },
      { question: "Bisakah website terhubung ke sistem yang sudah ada?", answer: "Bisa. Integrasi dilakukan melalui API atau mekanisme lain setelah kami mempelajari dokumentasi dan keamanan sistem Anda." },
      { question: "Apakah website dapat dikelola sendiri?", answer: "Ya. Bila diperlukan, kami dapat menambahkan CMS agar tim Anda dapat memperbarui konten tanpa mengubah kode." },
    ],
  },
  {
    slug: "solusi-ai-bisnis",
    title: "Solusi AI Custom untuk Kebutuhan Bisnis",
    metaTitle: "AI Automation dan Integrasi untuk Bisnis | TreapLabs",
    description:
      "Pengembangan AI automation, model custom, dan integrasi AI ke aplikasi untuk meningkatkan efisiensi operasional bisnis di Indonesia.",
    eyebrow: "Otomasi & Integrasi AI",
    intro:
      "Kami membantu bisnis mengotomasi workflow, mengintegrasikan model AI ke aplikasi, dan membangun solusi custom yang menghasilkan dampak operasional terukur.",
    benefits: [
      { title: "Dimulai dari kebutuhan", description: "Kami memvalidasi workflow, data, dan tujuan bisnis sebelum merekomendasikan teknologi atau model AI." },
      { title: "Efisiensi terukur", description: "Keberhasilan solusi dinilai melalui waktu proses, pengurangan pekerjaan manual, biaya operasional, atau kualitas output." },
      { title: "Terintegrasi ke sistem", description: "Model tidak berhenti di eksperimen; kami menghubungkannya dengan aplikasi dan workflow yang sudah digunakan." },
    ],
    deliverables: ["Studi kelayakan AI", "Otomasi alur kerja", "Model AI khusus", "Integrasi AI ke aplikasi", "API dan integrasi sistem", "Pemantauan model"],
    technologies: ["Python", "PyTorch", "FastAPI", "LLM API", "PostgreSQL", "Cloud"],
    caseStudy: { title: "Walk Around Check", client: "Klien inspeksi kendaraan (anonim)", result: "Integrasi analisis AI pada alur inspeksi kendaraan, dengan deteksi 94% cacat permukaan pada kecepatan 3x inspeksi manual." },
    faq: [
      { question: "Workflow apa yang dapat diotomasi dengan AI?", answer: "AI dapat membantu klasifikasi data, pemrosesan dokumen, pencarian informasi, rekomendasi, quality control, dan pekerjaan berulang lain yang memiliki pola serta tujuan jelas." },
      { question: "Bisakah AI diintegrasikan ke aplikasi yang sudah digunakan?", answer: "Bisa. Kami dapat menyediakan API atau integrasi langsung sesuai arsitektur aplikasi, keamanan data, dan kebutuhan operasional Anda." },
      { question: "Apakah TreapLabs menggunakan model yang sudah ada atau membuat model custom?", answer: "Keduanya memungkinkan. Kami memilih model siap pakai, fine-tuning, atau model custom berdasarkan kebutuhan, data, biaya, dan target performa." },
    ],
  },
  {
    slug: "konsultasi-teknologi",
    title: "Konsultasi Teknologi dan Audit Software",
    metaTitle: "Konsultasi Teknologi dan Audit Software | TreapLabs",
    description:
      "Konsultasi teknologi, audit software, review arsitektur, dan team augmentation untuk membantu bisnis mengambil keputusan teknis yang tepat.",
    eyebrow: "Konsultasi Teknologi",
    intro:
      "Dapatkan perspektif engineer berpengalaman untuk mengevaluasi sistem, menyusun roadmap teknologi, mengurangi risiko, dan memperkuat kapasitas tim internal Anda.",
    benefits: [
      { title: "Keputusan lebih jelas", description: "Rekomendasi disusun berdasarkan kondisi sistem, kebutuhan bisnis, risiko, dan kapasitas tim." },
      { title: "Risiko teridentifikasi", description: "Audit membantu menemukan masalah performa, keamanan, maintainability, dan technical debt lebih awal." },
      { title: "Pendampingan langsung", description: "Kami dapat membantu implementasi rekomendasi atau bekerja bersama tim engineering Anda." },
    ],
    deliverables: ["Audit teknis", "Evaluasi arsitektur", "Peta pengembangan teknologi", "Tinjauan kode", "Evaluasi performa", "Pendampingan tim pengembang"],
    technologies: ["Arsitektur", "Cloud", "Basis Data", "DevOps", "Keamanan", "Pengujian Kualitas"],
    faq: [
      { question: "Apa hasil dari audit software?", answer: "Anda menerima temuan yang diprioritaskan, penjelasan dampak, serta rekomendasi langkah perbaikan yang dapat ditindaklanjuti." },
      { question: "Apakah konsultasi harus dilanjutkan dengan development?", answer: "Tidak. Hasil konsultasi dapat digunakan oleh tim internal atau vendor lain. Kami juga dapat membantu implementasi bila dibutuhkan." },
      { question: "Bisakah TreapLabs membantu tim untuk periode tertentu?", answer: "Bisa. Team augmentation dapat disusun berdasarkan kebutuhan peran, lingkup pekerjaan, dan durasi yang disepakati." },
    ],
  },
] as const satisfies readonly ServiceContent[];

export const servicePages = [
  {
    slug: "jasa-pembuatan-aplikasi",
    title: "Custom Mobile App Development for Business",
    metaTitle: "Mobile App Development | TreapLabs",
    description: "Custom Android and iOS app development with Flutter for startups, small businesses, and enterprises across Indonesia.",
    eyebrow: "Mobile App Development",
    intro: "We design and build fast, stable, and scalable custom mobile apps. A single Flutter codebase helps businesses launch products on Android and iOS more efficiently.",
    benefits: [
      { title: "User focused", description: "Every app flow is designed around user needs and business goals, not merely a feature checklist." },
      { title: "Built to scale", description: "A well-structured architecture makes your app easier to maintain, test, and expand." },
      { title: "Transparent from day one", description: "You receive regular updates, weekly demos, and a clear view of timelines and costs." },
    ],
    deliverables: ["Android and iOS apps", "UI implementation", "API and backend integration", "Quality assurance", "Publishing and launch support"],
    technologies: ["Flutter", "Dart", "Android", "iOS", "Supabase", "REST API"],
    caseStudy: { title: "Ikigawe HRIS", client: "Spectra Komputer", result: "Reduced payroll processing from three days to 20 minutes through a mobile-first experience." },
    faq: [
      { question: "How long does app development take?", answer: "The timeline depends on the scope. An MVP typically starts at 8-12 weeks after the discovery and design phases are approved." },
      { question: "Will the app work on Android and iOS?", answer: "Yes. We use Flutter to build cross-platform apps with a consistent experience on Android and iOS." },
      { question: "Can TreapLabs continue an existing app?", answer: "Yes. We first audit the code and architecture to determine the safest and most efficient approach." },
    ],
  },
  {
    slug: "jasa-pembuatan-website",
    title: "Custom Website and Web App Development",
    metaTitle: "Custom Website Development | TreapLabs",
    description: "Fast, responsive, SEO-friendly custom websites and web applications built to grow with your business.",
    eyebrow: "Web Development",
    intro: "TreapLabs builds business websites, dashboards, internal systems, and custom web applications with a focus on performance, usability, and a sound technical foundation.",
    benefits: [
      { title: "Fast and responsive", description: "Web experiences are optimized for desktop and mobile with close attention to Core Web Vitals." },
      { title: "SEO-ready", description: "Semantic HTML, metadata, sitemaps, and performance are prepared so search engines can understand your website." },
      { title: "Connected", description: "Connect your website to internal systems, payment gateways, analytics, or third-party services." },
    ],
    deliverables: ["Company profile", "Custom web application", "Dashboards and internal systems", "CMS and API integration", "Deployment and monitoring"],
    technologies: ["Next.js", "TypeScript", "Laravel", "Supabase", "PostgreSQL", "Tailwind CSS"],
    faq: [
      { question: "Does the website include SEO?", answer: "We provide essential technical SEO, including metadata, semantic HTML, sitemaps, robots directives, structured data, and performance optimization." },
      { question: "Can the website connect to an existing system?", answer: "Yes. We integrate through APIs or another suitable mechanism after reviewing your system documentation and security requirements." },
      { question: "Can our team manage the website?", answer: "Yes. When needed, we can add a CMS so your team can update content without changing code." },
    ],
  },
  {
    slug: "solusi-ai-bisnis",
    title: "Custom AI Solutions for Business",
    metaTitle: "AI Automation and Integration | TreapLabs",
    description: "AI automation, custom models, and application integrations that improve operational efficiency for businesses in Indonesia.",
    eyebrow: "AI Automation & Integration",
    intro: "We help businesses automate workflows, integrate AI models into applications, and build custom solutions that deliver measurable operational impact.",
    benefits: [
      { title: "Needs first", description: "We validate workflows, data, and business goals before recommending any AI technology or model." },
      { title: "Measurable efficiency", description: "Success is measured through processing time, reduced manual work, operating costs, or output quality." },
      { title: "Integrated into your systems", description: "Models do not stop at experiments; we connect them to the applications and workflows your team already uses." },
    ],
    deliverables: ["AI feasibility study", "Workflow automation", "Custom AI model", "AI application integration", "API and system integration", "Model monitoring"],
    technologies: ["Python", "PyTorch", "FastAPI", "LLM API", "PostgreSQL", "Cloud"],
    caseStudy: { title: "Walk Around Check", client: "Vehicle inspection client (anonymous)", result: "AI analysis integrated into a vehicle inspection workflow, detecting 94% of surface defects at three times the speed of manual inspection." },
    faq: [
      { question: "What workflows can AI automate?", answer: "AI can support data classification, document processing, information retrieval, recommendations, quality control, and other repetitive work with clear patterns and goals." },
      { question: "Can AI integrate with an application we already use?", answer: "Yes. We can provide an API or direct integration based on your application architecture, data security, and operational needs." },
      { question: "Does TreapLabs use existing models or build custom ones?", answer: "Both are possible. We choose ready-made models, fine-tuning, or custom models based on your needs, data, budget, and performance targets." },
    ],
  },
  {
    slug: "konsultasi-teknologi",
    title: "Technology Consulting and Software Audits",
    metaTitle: "Technology Consulting and Software Audits | TreapLabs",
    description: "Technology consulting, software audits, architecture reviews, and team augmentation to help businesses make sound technical decisions.",
    eyebrow: "Technology Consulting",
    intro: "Get an experienced engineer's perspective to evaluate your systems, shape a technology roadmap, reduce risk, and strengthen your internal team.",
    benefits: [
      { title: "Clearer decisions", description: "Recommendations are grounded in your system, business needs, risks, and team capacity." },
      { title: "Risks identified early", description: "Audits uncover performance, security, maintainability, and technical debt issues before they become costly." },
      { title: "Hands-on support", description: "We can implement the recommendations or work alongside your engineering team." },
    ],
    deliverables: ["Technical audit", "Architecture review", "Technology roadmap", "Code review", "Performance review", "Team augmentation"],
    technologies: ["Architecture", "Cloud", "Database", "DevOps", "Security", "Quality Assurance"],
    faq: [
      { question: "What do we receive from a software audit?", answer: "You receive prioritized findings, an explanation of their impact, and actionable recommendations for improvement." },
      { question: "Does consulting have to continue into development?", answer: "No. Your internal team or another vendor can use the findings. We can also help with implementation when needed." },
      { question: "Can TreapLabs support our team for a fixed period?", answer: "Yes. Team augmentation can be arranged around the roles, scope, and duration you need." },
    ],
  },
] as const satisfies readonly ServiceContent[];

export function getService(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return (locale === "id" ? servicePagesId : servicePages).find((service) => service.slug === slug);
}
