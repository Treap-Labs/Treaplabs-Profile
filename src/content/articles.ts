import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/constants";

export const articleSlugs = ["heelwa-fashion-show-myze-hotel-sumenep"] as const;

export type ArticleImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  highlights?: readonly { title: string; description: string }[];
  image?: ArticleImage;
};

export type ArticleVideoContent = { youtubeId: string; poster?: string; posterAlt?: string; title: string; description: string };

export type Article = {
  slug: (typeof articleSlugs)[number];
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  projectSlug: Project["slug"];
  event?: { name: string; date: string; venue: string; city: string };
  cover: ArticleImage;
  socialImage: string;
  introduction: readonly string[];
  sections: readonly ArticleSection[];
  takeaway: string;
  gallery: readonly ArticleImage[];
  video?: ArticleVideoContent;
  demoVideo?: ArticleVideoContent;
};

const heelwaMedia = "/images/articles/heelwa";
const heelwaEvent = {
  name: "Heelwa Fashion Show",
  date: "2026-01-10",
  venue: "MYZE Hotel Sumenep",
  city: "Sumenep, Jawa Timur",
};

export const articleContent = {
  id: [
    {
      slug: "heelwa-fashion-show-myze-hotel-sumenep",
      title: "Aplikasi TreapLabs Mendukung Fashion Show Heelwa di MYZE Hotel Sumenep",
      excerpt:
        "Di balik presentasi koleksi Heelwa pada 10 Januari 2026, aplikasi TreapLabs mendukung katalog produk, pesanan dan checkout, kasir, serta pengelolaan stok selama acara.",
      category: "Cerita klien",
      author: "Tim TreapLabs",
      publishedAt: "2026-10-02",
      projectSlug: "heelwa",
      event: heelwaEvent,
      cover: {
        src: `${heelwaMedia}/fashion-show.webp`,
        width: 2000,
        height: 1331,
        alt: "Para model berfoto bersama dalam busana Heelwa di MYZE Hotel Sumenep, dengan pengunjung di sekitar area acara",
        caption: "Presentasi koleksi Heelwa di MYZE Hotel Sumenep, 10 Januari 2026.",
      },
      socialImage: `${heelwaMedia}/social.webp`,
      introduction: [
        "Pada 10 Januari 2026, Heelwa menggelar fashion show di MYZE Hotel Sumenep. Di balik presentasi koleksi busana, aplikasi yang dikembangkan TreapLabs digunakan untuk mendukung katalog produk, pemrosesan pesanan dan checkout, pencatatan transaksi kasir, serta pengelolaan stok selama acara.",
        "Bagi kami, momen ini memperlihatkan bagaimana sebuah produk digital menjadi bagian dari aktivitas bisnis secara langsung. Koleksi Heelwa menjadi pusat perhatian pengunjung, sementara aplikasi hadir sebagai alat kerja bagi tim yang menjalankan sisi ritel acara.",
      ],
      sections: [
        {
          id: "acara",
          title: "Koleksi di panggung, aktivitas ritel di baliknya",
          paragraphs: [
            "Dokumentasi acara memperlihatkan koleksi busana Heelwa yang dikenakan para model, sesi presentasi, serta interaksi dengan pengunjung. Warna dan detail busana tampil dalam suasana yang dekat dengan audiens, memberi ruang untuk melihat koleksi secara langsung.",
            "Sebuah fashion show juga memiliki sisi operasional. Saat produk diperkenalkan, tim perlu memiliki informasi katalog, menangani pesanan, mencatat transaksi, dan mengetahui ketersediaan barang. Pada acara Heelwa ini, keempat kebutuhan tersebut didukung oleh aplikasi TreapLabs.",
            "Penggunaan aplikasi dalam acara menjadi pertemuan antara pengalaman melihat busana secara langsung dan alur kerja digital. Produk yang hadir dalam koleksi dapat dikelola melalui perangkat yang juga mendukung proses belanja dan administrasi ritel Heelwa.",
          ],
        },
        {
          id: "aplikasi",
          title: "Empat alur kerja yang didukung aplikasi",
          paragraphs: [
            "Platform Heelwa yang kami kembangkan menghubungkan etalase busana dengan kebutuhan operasional ritel. Dalam fashion show di MYZE Hotel Sumenep, penggunaannya mencakup empat bagian yang saling berkaitan: katalog produk, pesanan dan checkout, kasir, serta inventaris.",
          ],
          highlights: [
            {
              title: "Katalog produk",
              description:
                "Katalog digunakan untuk menampilkan dan menelusuri produk Heelwa. Informasi produk menjadi bagian dari alur pelayanan saat koleksi diperkenalkan kepada pengunjung.",
            },
            {
              title: "Pesanan & checkout",
              description:
                "Aplikasi mendukung pemrosesan pesanan dan checkout selama acara. Alur ini membawa pemilihan produk ke tahap pemesanan dan penyelesaian belanja dalam platform Heelwa.",
            },
            {
              title: "Kasir / point of sale",
              description:
                "Fitur kasir digunakan untuk menangani dan mencatat transaksi penjualan. Aktivitas di lokasi acara menjadi bagian dari penggunaan aplikasi untuk operasional ritel Heelwa.",
            },
            {
              title: "Inventaris & stok",
              description:
                "Pengelolaan inventaris digunakan untuk memantau stok dan ketersediaan produk. Kebutuhan ini berjalan bersama aktivitas katalog, pesanan, dan penjualan selama acara.",
            },
          ],
          image: {
            src: `${heelwaMedia}/event-operations.webp`,
            width: 2000,
            height: 1331,
            alt: "Tim melayani pengunjung di meja acara Heelwa, dengan perangkat digital dan tas belanja di atas meja",
            caption: "Aktivitas pelayanan pengunjung di area acara Heelwa.",
          },
        },
        {
          id: "kolaborasi",
          title: "Dari pengembangan produk ke penggunaan nyata",
          paragraphs: [
            "Dalam pengembangan software, sebuah fitur memperoleh konteks yang lebih jelas ketika dipakai oleh tim bisnis. Fashion show Heelwa memperlihatkan bahwa katalog, checkout, kasir, dan inventaris bukan sekadar daftar kemampuan aplikasi: semuanya memiliki tempat dalam kegiatan yang benar-benar dijalankan.",
            "Kebutuhan brand fashion tidak berhenti pada etalase yang menarik. Ada pekerjaan di belakangnya, mulai dari mengelola koleksi hingga melayani pesanan dan mencatat penjualan. Proyek Heelwa menjadi salah satu contoh bagaimana TreapLabs membangun platform yang mencakup pengalaman pelanggan sekaligus kebutuhan administrasi bisnis.",
            "Kami senang aplikasi TreapLabs menjadi bagian dari acara Heelwa di Sumenep. Cerita ini melengkapi halaman proyek Heelwa dengan gambaran penggunaan di lapangan: teknologi yang hadir bersama koleksi, pengunjung, dan tim yang menjalankan acara.",
          ],
        },
      ],
      takeaway: "Koleksi di panggung. Operasional didukung dalam satu aplikasi.",
      gallery: [
        {
          src: `${heelwaMedia}/collection-display.webp`,
          width: 1198,
          height: 1800,
          alt: "Display busana dan hijab dengan logo Heelwa serta manekin yang mengenakan koleksi",
          caption: "Koleksi dan identitas Heelwa dalam dokumentasi acara.",
        },
        {
          src: `${heelwaMedia}/collection-presentation.webp`,
          width: 1198,
          height: 1800,
          alt: "Presentasi busana Heelwa di samping manekin dengan pengunjung menyaksikan",
          caption: "Presentasi detail busana kepada pengunjung.",
        },
        {
          src: `${heelwaMedia}/event-atmosphere.webp`,
          width: 2000,
          height: 1331,
          alt: "Seorang pembicara memperkenalkan busana Heelwa dengan mikrofon di depan pengunjung yang duduk di area hotel",
          caption: "Suasana presentasi dan interaksi dengan pengunjung di MYZE Hotel Sumenep.",
        },
      ],
      video: {
        youtubeId: "pqhEzoiEggA",
        poster: `${heelwaMedia}/runway-video-poster.webp`,
        posterAlt: "Model mengenakan busana Heelwa berwarna biru gelap di area fashion show dengan pengunjung di sekelilingnya",
        title: "Cuplikan runway Heelwa",
        description: "Salah satu cuplikan runway dari dokumentasi acara Heelwa di MYZE Hotel Sumenep.",
      },
      demoVideo: {
        youtubeId: "94c9uOW7cdM",
        title: "Demo website Heelwa untuk pelanggan",
        description: "Lihat demo website Heelwa dari sisi pelanggan untuk mengenal pengalaman belanja yang didukung platform TreapLabs.",
      },
    },
  ],
  en: [
    {
      slug: "heelwa-fashion-show-myze-hotel-sumenep",
      title: "TreapLabs’ App Supports the Heelwa Fashion Show at MYZE Hotel Sumenep",
      excerpt:
        "Behind Heelwa’s collection presentation on 10 January 2026, TreapLabs’ app supported the product catalog, orders and checkout, point of sale, and stock management throughout the event.",
      category: "Client stories",
      author: "The TreapLabs Team",
      publishedAt: "2026-10-02",
      projectSlug: "heelwa",
      event: { ...heelwaEvent, city: "Sumenep, East Java" },
      cover: {
        src: `${heelwaMedia}/fashion-show.webp`,
        width: 2000,
        height: 1331,
        alt: "Models pose together in Heelwa outfits at MYZE Hotel Sumenep, with visitors gathered around the event area",
        caption: "Heelwa’s collection presentation at MYZE Hotel Sumenep, 10 January 2026.",
      },
      socialImage: `${heelwaMedia}/social.webp`,
      introduction: [
        "On 10 January 2026, Heelwa held a fashion show at MYZE Hotel Sumenep. Behind the collection presentation, the app developed by TreapLabs was used to support the product catalog, orders and checkout, point-of-sale transactions, and stock management throughout the event.",
        "For us, this was a chance to see a digital product become part of a business’s activities in person. Heelwa’s collection took center stage for visitors, while the app served as a working tool for the team handling the retail side of the event.",
      ],
      sections: [
        {
          id: "acara",
          title: "A collection on the runway, retail operations behind it",
          paragraphs: [
            "The event photographs capture Heelwa’s collection worn by models, product presentations, and conversations with visitors. The colors and details of the garments were presented in a setting that brought the collection close to its audience, giving visitors an opportunity to see the pieces in person.",
            "A fashion show also has an operational side. As products are introduced, the team needs catalog information, a way to handle orders, transaction records, and visibility into product availability. At this Heelwa event, TreapLabs’ app supported all four of those needs.",
            "Using the app at the event brought an in-person fashion experience together with a digital workflow. The products shown in the collection could be managed through a platform that also supports Heelwa’s shopping experience and retail administration.",
          ],
        },
        {
          id: "aplikasi",
          title: "Four workflows supported by the app",
          paragraphs: [
            "The Heelwa platform we developed connects a fashion storefront with the tools needed for retail operations. At the fashion show at MYZE Hotel Sumenep, its use covered four related areas: the product catalog, orders and checkout, point of sale, and inventory.",
          ],
          highlights: [
            {
              title: "Product catalog",
              description:
                "The catalog was used to display and browse Heelwa products. Product information became part of the service workflow as the collection was introduced to visitors.",
            },
            {
              title: "Orders & checkout",
              description:
                "The app supported order processing and checkout during the event. This workflow connects product selection with placing an order and completing a purchase within the Heelwa platform.",
            },
            {
              title: "Cashier / point of sale",
              description:
                "The point-of-sale feature was used to handle and record sales transactions. On-site activity became part of the app’s role in supporting Heelwa’s retail operations.",
            },
            {
              title: "Inventory & stock",
              description:
                "Inventory tools were used to monitor stock and product availability. This need sits alongside the catalog, order, and sales activities that took place during the event.",
            },
          ],
          image: {
            src: `${heelwaMedia}/event-operations.webp`,
            width: 2000,
            height: 1331,
            alt: "The team assists visitors at the Heelwa event table, with digital devices and shopping bags on the table",
            caption: "Visitor service activity at the Heelwa event.",
          },
        },
        {
          id: "kolaborasi",
          title: "From product development to real-world use",
          paragraphs: [
            "In software development, a feature gains clearer context when a business team puts it to work. The Heelwa fashion show demonstrated that a catalog, checkout, point of sale, and inventory are more than a list of app capabilities: each has a place in the activities a business carries out.",
            "A fashion brand’s needs extend beyond an attractive storefront. There is work behind the scenes, from managing a collection to serving orders and recording sales. The Heelwa project is one example of how TreapLabs builds platforms that address both the customer experience and the administrative side of a business.",
            "We are glad TreapLabs’ app was part of Heelwa’s event in Sumenep. This story adds a real-world perspective to the Heelwa project page: technology working alongside the collection, the visitors, and the team running the event.",
          ],
        },
      ],
      takeaway: "The collection on the runway. Operations supported in one app.",
      gallery: [
        {
          src: `${heelwaMedia}/collection-display.webp`,
          width: 1198,
          height: 1800,
          alt: "Heelwa’s clothing and hijab display with its logo and mannequins wearing pieces from the collection",
          caption: "The Heelwa collection and brand identity in the event photographs.",
        },
        {
          src: `${heelwaMedia}/collection-presentation.webp`,
          width: 1198,
          height: 1800,
          alt: "A Heelwa outfit is presented beside a mannequin as visitors watch",
          caption: "Presenting garment details to visitors.",
        },
        {
          src: `${heelwaMedia}/event-atmosphere.webp`,
          width: 2000,
          height: 1331,
          alt: "A speaker introduces Heelwa clothing with a microphone in front of visitors seated in the hotel event area",
          caption: "The presentation and conversations with visitors at MYZE Hotel Sumenep.",
        },
      ],
      video: {
        youtubeId: "pqhEzoiEggA",
        poster: `${heelwaMedia}/runway-video-poster.webp`,
        posterAlt: "A model wears a dark blue Heelwa outfit on the fashion show runway, surrounded by visitors",
        title: "A moment on the Heelwa runway",
        description: "A runway clip from the Heelwa event at MYZE Hotel Sumenep.",
      },
      demoVideo: {
        youtubeId: "94c9uOW7cdM",
        title: "Heelwa customer website demo",
        description: "Watch a demo of the customer-facing Heelwa website to explore the shopping experience supported by the TreapLabs platform.",
      },
    },
  ],
} as const satisfies Record<Locale, readonly Article[]>;

export const articleLabels = {
  id: {
    title: "Artikel",
    pageTitle: "Artikel & Cerita Klien | TreapLabs",
    description: "Cerita proyek, kolaborasi, dan penggunaan aplikasi TreapLabs dalam aktivitas bisnis sehari-hari.",
    heading: "Cerita di balik produk kami.",
    featured: "Cerita terbaru",
    read: "Baca cerita lengkap",
    readingTime: "menit baca",
    published: "Dipublikasikan",
    by: "Oleh",
    back: "Semua artikel",
    home: "Beranda",
    contents: "Dalam artikel ini",
    event: "Tentang acara",
    eventDate: "Tanggal acara",
    venue: "Lokasi",
    gallery: "Dokumentasi acara",
    galleryDescription: "Koleksi, presentasi, dan suasana fashion show Heelwa dalam foto.",
    video: "Dari runway",
    demoVideo: "Demo website pelanggan",
    play: "Putar video",
    videoSource: "Video diputar melalui YouTube.",
    openVideo: "Tonton di YouTube",
    mediaCredit: "Foto dan video: dokumentasi acara Heelwa.",
    related: "Cerita terkait",
    relatedHeading: "Proyek ini di lapangan.",
    project: "Lihat proyek Heelwa",
    contactTitle: "Software untuk cerita bisnis Anda berikutnya.",
    contactDescription: "Dari etalase digital hingga operasional di lapangan, mari bicarakan kebutuhan bisnis Anda.",
    contact: "Diskusikan proyek Anda",
    whatsappMessage: "Halo TreapLabs, saya membaca artikel fashion show Heelwa dan ingin berdiskusi tentang aplikasi untuk bisnis saya.",
  },
  en: {
    title: "Articles",
    pageTitle: "Articles & Client Stories | TreapLabs",
    description: "Stories of projects, collaborations, and TreapLabs apps at work in everyday business activities.",
    heading: "Stories behind the products.",
    featured: "Latest story",
    read: "Read the full story",
    readingTime: "min read",
    published: "Published",
    by: "By",
    back: "All articles",
    home: "Home",
    contents: "In this article",
    event: "About the event",
    eventDate: "Event date",
    venue: "Location",
    gallery: "The event in pictures",
    galleryDescription: "The collection, presentations, and atmosphere of the Heelwa fashion show in photographs.",
    video: "From the runway",
    demoVideo: "Customer website demo",
    play: "Play video",
    videoSource: "Video plays through YouTube.",
    openVideo: "Watch on YouTube",
    mediaCredit: "Photos and video: Heelwa event documentation.",
    related: "Related story",
    relatedHeading: "This project in action.",
    project: "Explore the Heelwa project",
    contactTitle: "Software for your next business story.",
    contactDescription: "From a digital storefront to on-site operations, let’s talk about what your business needs.",
    contact: "Discuss your project",
    whatsappMessage: "Hello TreapLabs, I read the Heelwa fashion show article and would like to discuss an app for my business.",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function getArticle(slug: string, locale: Locale): Article | undefined {
  return articleContent[locale].find((article) => article.slug === slug);
}

export function getProjectArticles(slug: Project["slug"], locale: Locale): readonly Article[] {
  return articleContent[locale].filter((article) => article.projectSlug === slug);
}

export function formatArticleDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getArticleReadingTime(article: Article) {
  const text = [
    ...article.introduction,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.highlights ?? []).flatMap((highlight) => [highlight.title, highlight.description]),
    ]),
    article.takeaway,
  ].join(" ");

  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200));
}
