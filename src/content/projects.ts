import type { Locale } from "@/lib/constants";

export const projectSlugs = [
  "ikigawe-hris",
  "walk-around-check",
  "heelwa",
  "juniper",
  "smantik",
] as const;

export type Project = {
  slug: (typeof projectSlugs)[number];
  title: string;
  categories: readonly string[];
  description: string;
  image: string;
  alt: string;
  overview: string;
  highlights: readonly { title: string; description: string }[];
  status?: string;
};

export const projectContent = {
  id: [
    {
      slug: "ikigawe-hris",
      title: "Ikigawe HRIS",
      categories: ["Platform Web", "Aplikasi Mobile", "HRIS"],
      description:
        "Manajemen tenaga kerja terhubung di web dan mobile. Administrasi karyawan, kehadiran, shift, dan jadwal dengan akses berbasis izin.",
      image: "/images/portfolio/ikigawe-hris-mockup.webp",
      alt: "Ilustrasi dashboard kehadiran desktop dan mockup aplikasi mobile Ikigawe HRIS dengan data demo",
      overview:
        "Ikigawe HRIS menyatukan administrasi karyawan dan pengelolaan kehadiran dalam pengalaman yang terhubung di web dan mobile. Alur shift dan jadwal tersedia bersama pengaturan akses berbasis izin agar setiap pengguna dapat bekerja sesuai perannya.",
      highlights: [
        { title: "Administrasi karyawan", description: "Pengelolaan informasi karyawan dalam satu platform HRIS." },
        { title: "Kehadiran & jadwal", description: "Alur kehadiran, shift, dan jadwal untuk pekerjaan sehari-hari." },
        { title: "Akses sesuai peran", description: "Izin akses membedakan informasi dan fungsi yang tersedia bagi pengguna." },
      ],
    },
    {
      slug: "walk-around-check",
      title: "Walk Around Check",
      categories: ["Aplikasi Mobile", "Integrasi AI"],
      description:
        "Alur inspeksi kendaraan terpandu dengan pengambilan foto enam sudut, daftar pemeriksaan kondisi, integrasi analisis AI, dan laporan PDF.",
      image: "/images/portfolio/walk-around-check-mockup.webp",
      alt: "Dashboard mobile Walk Around Check dalam mockup ponsel dengan contoh total inspeksi",
      overview:
        "Walk Around Check membantu pemeriksa mengikuti alur inspeksi kendaraan yang konsisten. Aplikasi memandu pengambilan foto dari enam sudut, mencatat kondisi melalui daftar pemeriksaan, mengintegrasikan analisis AI, dan menyiapkan laporan dalam format PDF.",
      highlights: [
        { title: "Foto enam sudut", description: "Pengambilan foto kendaraan dipandu dari enam sudut pemeriksaan." },
        { title: "Pemeriksaan kondisi", description: "Daftar pemeriksaan membantu mencatat kondisi kendaraan secara terstruktur." },
        { title: "Analisis & laporan", description: "Integrasi analisis AI dilengkapi dengan keluaran laporan PDF." },
      ],
    },
    {
      slug: "heelwa",
      title: "Heelwa",
      categories: ["Toko Online", "Platform Web"],
      description:
        "Etalase busana yang terhubung dengan administrasi ritel, menggabungkan penelusuran produk, keranjang, dan pembayaran dengan inventaris serta kasir.",
      image: "/images/portfolio/heelwa-mockup.webp",
      alt: "Beranda etalase busana Heelwa dalam mockup desktop",
      overview:
        "Heelwa menghubungkan pengalaman belanja busana dengan kebutuhan operasional ritel. Pelanggan dapat menelusuri produk, menggunakan keranjang, dan mengikuti alur pembayaran, sementara sisi administrasi mendukung inventaris serta kasir.",
      highlights: [
        { title: "Etalase produk", description: "Pengalaman penelusuran busana untuk pelanggan." },
        { title: "Keranjang & pembayaran", description: "Alur belanja dari pemilihan produk hingga pembayaran." },
        { title: "Operasional ritel", description: "Administrasi inventaris dan kasir terhubung dengan etalase." },
      ],
    },
    {
      slug: "juniper",
      title: "Juniper",
      categories: ["Produk Sendiri", "SaaS", "Dalam Pengembangan"],
      status: "Dalam pengembangan",
      description:
        "Produk SaaS internal TreapLabs yang sedang kami kembangkan: platform kafe yang menyatukan kasir, pemesanan pelanggan, antrean dapur, pembayaran, inventaris, dan loyalitas di seluruh cabang.",
      image: "/images/portfolio/juniper-mockup.webp",
      alt: "Halaman utama platform kafe Juniper dalam mockup desktop dengan ilustrasi dashboard",
      overview:
        "Juniper adalah produk SaaS internal TreapLabs yang sedang dikembangkan untuk operasional kafe. Platform ini dirancang untuk menghubungkan pemesanan pelanggan dan kasir dengan antrean dapur, pembayaran, inventaris, serta loyalitas di berbagai cabang.",
      highlights: [
        { title: "Pesanan & kasir", description: "Menghubungkan pemesanan pelanggan dengan alur kasir dan pembayaran." },
        { title: "Alur dapur", description: "Menyatukan antrean dapur dengan pesanan yang masuk." },
        { title: "Operasional cabang", description: "Merancang pengelolaan inventaris dan loyalitas di seluruh cabang." },
      ],
    },
    {
      slug: "smantik",
      title: "Smantik",
      categories: ["Platform Web", "Teknologi Pendidikan", "Web Speech API"],
      description:
        "Permainan aritmatika mental berbasis suara dengan mode murid dan guru, penilaian otomatis, serta impor paket latihan CSV dan Excel langsung di browser.",
      image: "/images/portfolio/smantik-mockup.webp",
      alt: "Wizard pengaturan latihan aritmatika mental Smantik dalam mockup desktop",
      overview:
        "Smantik menghadirkan latihan aritmatika mental berbasis suara di browser. Mode murid dan guru mendukung pengalaman latihan yang berbeda, sementara penilaian otomatis serta impor paket CSV dan Excel membantu menyiapkan dan menjalankan latihan.",
      highlights: [
        { title: "Latihan berbasis suara", description: "Permainan aritmatika mental yang menggunakan kemampuan suara di browser." },
        { title: "Mode murid & guru", description: "Pengalaman yang disesuaikan untuk murid dan guru." },
        { title: "Paket latihan", description: "Penilaian otomatis dan impor paket latihan CSV atau Excel langsung di browser." },
      ],
    },
  ],
  en: [
    {
      slug: "ikigawe-hris",
      title: "Ikigawe HRIS",
      categories: ["Web Platform", "Mobile App", "HRIS"],
      description:
        "Connected workforce management across web and mobile. Employee administration, attendance, shifts, and schedules with permission-based access.",
      image: "/images/portfolio/ikigawe-hris-mockup.webp",
      alt: "Illustrative Ikigawe HRIS desktop attendance dashboard and mobile app mockup with demo data",
      overview:
        "Ikigawe HRIS brings employee administration and attendance management together across web and mobile. Shift and scheduling workflows sit alongside permission-based access, so users can work with the information relevant to their role.",
      highlights: [
        { title: "Employee administration", description: "Manage employee information in one HRIS platform." },
        { title: "Attendance & schedules", description: "Attendance, shifts, and schedules for day-to-day operations." },
        { title: "Role-based access", description: "Permissions determine which information and functions users can access." },
      ],
    },
    {
      slug: "walk-around-check",
      title: "Walk Around Check",
      categories: ["Mobile App", "AI Integration"],
      description:
        "A guided vehicle-inspection workflow with six-angle photo capture, condition checklists, AI-analysis integration, and PDF reporting.",
      image: "/images/portfolio/walk-around-check-mockup.webp",
      alt: "Walk Around Check mobile dashboard presented in a phone mockup with sample inspection totals",
      overview:
        "Walk Around Check helps inspectors follow a consistent vehicle-inspection workflow. The app guides six-angle photo capture, records conditions with checklists, integrates AI analysis, and prepares reports in PDF format.",
      highlights: [
        { title: "Six-angle photos", description: "Guided photo capture from six inspection angles around the vehicle." },
        { title: "Condition checks", description: "Structured checklists for recording vehicle conditions." },
        { title: "Analysis & reporting", description: "AI-analysis integration alongside PDF report generation." },
      ],
    },
    {
      slug: "heelwa",
      title: "Heelwa",
      categories: ["E-Commerce", "Web Platform"],
      description:
        "A fashion storefront paired with retail administration, connecting product browsing, cart and checkout flows with inventory and point-of-sale tools.",
      image: "/images/portfolio/heelwa-mockup.webp",
      alt: "Heelwa fashion storefront homepage presented in a desktop mockup",
      overview:
        "Heelwa connects a fashion shopping experience with the tools needed to run retail operations. Customers can browse products, use a cart, and follow a checkout flow, while the administration side supports inventory and point of sale.",
      highlights: [
        { title: "Product storefront", description: "A fashion browsing experience for customers." },
        { title: "Cart & checkout", description: "Shopping flows from product selection through checkout." },
        { title: "Retail operations", description: "Inventory and point-of-sale administration connected to the storefront." },
      ],
    },
    {
      slug: "juniper",
      title: "Juniper",
      categories: ["Own Product", "SaaS", "In Development"],
      status: "In development",
      description:
        "An in-house TreapLabs SaaS product currently in development: a cafe platform bringing point of sale, customer ordering, kitchen queues, payments, inventory tracking, and loyalty together across branches.",
      image: "/images/portfolio/juniper-mockup.webp",
      alt: "Juniper cafe platform English landing page presented in a desktop mockup, featuring an illustrative dashboard",
      overview:
        "Juniper is an in-house TreapLabs SaaS product in development for cafe operations. The platform is being designed to connect customer ordering and point of sale with kitchen queues, payments, inventory, and loyalty across branches.",
      highlights: [
        { title: "Orders & point of sale", description: "Connecting customer ordering with point-of-sale and payment flows." },
        { title: "Kitchen workflow", description: "Bringing kitchen queues together with incoming orders." },
        { title: "Branch operations", description: "Planning inventory and loyalty tools across branches." },
      ],
    },
    {
      slug: "smantik",
      title: "Smantik",
      categories: ["Web Platform", "EdTech", "Web Speech API"],
      description:
        "A voice-guided mental arithmetic game with student and teacher modes, automatic scoring, and in-browser CSV and Excel exercise imports.",
      image: "/images/portfolio/smantik-mockup.webp",
      alt: "Smantik mental arithmetic exercise setup wizard presented in a desktop mockup",
      overview:
        "Smantik brings voice-guided mental arithmetic practice to the browser. Student and teacher modes support different exercise experiences, while automatic scoring and CSV or Excel imports help prepare and run practice sessions.",
      highlights: [
        { title: "Voice-guided practice", description: "A mental arithmetic game using speech capabilities in the browser." },
        { title: "Student & teacher modes", description: "Distinct experiences for students and teachers." },
        { title: "Exercise packs", description: "Automatic scoring and direct CSV or Excel exercise imports in the browser." },
      ],
    },
  ],
} as const satisfies Record<Locale, readonly Project[]>;

export const projectLabels = {
  id: {
    view: "Lihat detail proyek",
    back: "Kembali ke proyek",
    overview: "Tentang proyek",
    highlights: "Fitur utama",
    preview: "Pratinjau proyek",
    next: "Proyek berikutnya",
    contactTitle: "Punya proyek serupa?",
    contactDescription: "Ceritakan kebutuhan Anda. Mari diskusikan bagaimana TreapLabs dapat membantu.",
    contact: "Diskusikan proyek Anda",
    whatsappMessage: "Halo TreapLabs, saya ingin berdiskusi tentang proyek digital untuk bisnis saya.",
  },
  en: {
    view: "View project details",
    back: "Back to work",
    overview: "About the project",
    highlights: "Key features",
    preview: "Project preview",
    next: "Next project",
    contactTitle: "Have a similar project?",
    contactDescription: "Tell us what you need. Let's talk about how TreapLabs can help.",
    contact: "Discuss your project",
    whatsappMessage: "Hello TreapLabs, I'd like to discuss a digital project for my business.",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function getProject(slug: string, locale: Locale) {
  return projectContent[locale].find((project) => project.slug === slug);
}
