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
  caseStudy?: { title: string; result: string };
  faq: readonly { question: string; answer: string }[];
};

export const servicePages = [
  {
    slug: "jasa-pembuatan-aplikasi",
    title: "Jasa Pembuatan Aplikasi Mobile untuk Bisnis",
    metaTitle: "Jasa Pembuatan Aplikasi Mobile | TreapLabs",
    description:
      "Jasa pembuatan aplikasi Android dan iOS custom dengan Flutter untuk startup, UMKM, dan perusahaan di seluruh Indonesia.",
    eyebrow: "Mobile App Development",
    intro:
      "Kami merancang dan membangun aplikasi mobile custom yang cepat, stabil, dan mudah dikembangkan. Satu codebase Flutter membantu bisnis meluncurkan produk ke Android dan iOS dengan lebih efisien.",
    benefits: [
      { title: "Fokus pada pengguna", description: "Alur aplikasi dirancang berdasarkan kebutuhan pengguna dan tujuan bisnis, bukan sekadar daftar fitur." },
      { title: "Siap berkembang", description: "Arsitektur yang terstruktur membuat aplikasi lebih mudah dirawat, diuji, dan ditambah fiturnya." },
      { title: "Transparan sejak awal", description: "Anda mendapat update rutin, demo mingguan, serta gambaran timeline dan biaya yang jelas." },
    ],
    deliverables: ["Aplikasi Android dan iOS", "UI implementation", "Integrasi API dan backend", "Quality assurance", "Publikasi dan dukungan peluncuran"],
    technologies: ["Flutter", "Dart", "Android", "iOS", "Supabase", "REST API"],
    caseStudy: { title: "Kami HRIS", result: "Memangkas proses payroll dari 3 hari menjadi 20 menit melalui pengalaman mobile-first." },
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
    eyebrow: "Web Development",
    intro:
      "TreapLabs membangun website bisnis, dashboard, sistem internal, dan aplikasi web custom dengan fokus pada performa, kemudahan penggunaan, dan fondasi teknis yang sehat.",
    benefits: [
      { title: "Cepat dan responsif", description: "Pengalaman web dioptimalkan untuk desktop dan mobile dengan perhatian pada Core Web Vitals." },
      { title: "SEO-ready", description: "Struktur semantic HTML, metadata, sitemap, dan performa disiapkan agar mesin pencari memahami website Anda." },
      { title: "Terintegrasi", description: "Hubungkan website dengan sistem internal, payment gateway, analytics, atau layanan pihak ketiga." },
    ],
    deliverables: ["Company profile", "Aplikasi web custom", "Dashboard dan sistem internal", "CMS dan integrasi API", "Deployment dan monitoring"],
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
    eyebrow: "AI Automation & Integration",
    intro:
      "Kami membantu bisnis mengotomasi workflow, mengintegrasikan model AI ke aplikasi, dan membangun solusi custom yang menghasilkan dampak operasional terukur.",
    benefits: [
      { title: "Dimulai dari kebutuhan", description: "Kami memvalidasi workflow, data, dan tujuan bisnis sebelum merekomendasikan teknologi atau model AI." },
      { title: "Efisiensi terukur", description: "Keberhasilan solusi dinilai melalui waktu proses, pengurangan pekerjaan manual, biaya operasional, atau kualitas output." },
      { title: "Terintegrasi ke sistem", description: "Model tidak berhenti di eksperimen; kami menghubungkannya dengan aplikasi dan workflow yang sudah digunakan." },
    ],
    deliverables: ["AI feasibility study", "Workflow automation", "Model AI custom", "Integrasi AI ke aplikasi", "API dan integrasi sistem", "Monitoring model"],
    technologies: ["Python", "PyTorch", "FastAPI", "LLM API", "PostgreSQL", "Cloud"],
    caseStudy: { title: "Defect Eye", result: "Salah satu implementasi AI TreapLabs untuk membantu inspeksi operasional, dengan deteksi 94% cacat permukaan pada kecepatan 3x inspeksi manual." },
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
    eyebrow: "Technology Consulting",
    intro:
      "Dapatkan perspektif engineer berpengalaman untuk mengevaluasi sistem, menyusun roadmap teknologi, mengurangi risiko, dan memperkuat kapasitas tim internal Anda.",
    benefits: [
      { title: "Keputusan lebih jelas", description: "Rekomendasi disusun berdasarkan kondisi sistem, kebutuhan bisnis, risiko, dan kapasitas tim." },
      { title: "Risiko teridentifikasi", description: "Audit membantu menemukan masalah performa, keamanan, maintainability, dan technical debt lebih awal." },
      { title: "Pendampingan langsung", description: "Kami dapat membantu implementasi rekomendasi atau bekerja bersama tim engineering Anda." },
    ],
    deliverables: ["Technical audit", "Architecture review", "Technology roadmap", "Code review", "Performance review", "Team augmentation"],
    technologies: ["Architecture", "Cloud", "Database", "DevOps", "Security", "Quality Assurance"],
    faq: [
      { question: "Apa hasil dari audit software?", answer: "Anda menerima temuan yang diprioritaskan, penjelasan dampak, serta rekomendasi langkah perbaikan yang dapat ditindaklanjuti." },
      { question: "Apakah konsultasi harus dilanjutkan dengan development?", answer: "Tidak. Hasil konsultasi dapat digunakan oleh tim internal atau vendor lain. Kami juga dapat membantu implementasi bila dibutuhkan." },
      { question: "Bisakah TreapLabs membantu tim untuk periode tertentu?", answer: "Bisa. Team augmentation dapat disusun berdasarkan kebutuhan peran, lingkup pekerjaan, dan durasi yang disepakati." },
    ],
  },
] as const satisfies readonly ServiceContent[];

export function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
