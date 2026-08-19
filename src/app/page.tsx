import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";

import { TrackedWhatsAppLink } from "@/components/analytics/tracked-whatsapp-link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import defectAi from "@/images/optimized/defect-ai.webp";
import heroImage from "@/images/optimized/hero.webp";
import mobileHris from "@/images/optimized/mobile-hris.webp";

const whatsappMessage = encodeURIComponent(
  "Halo TreapLabs, saya tertarik untuk menjadwalkan konsultasi gratis selama 30 menit. Apakah ada jadwal yang tersedia?",
);

const technologies = [
  "Flutter",
  "Next.js",
  "Laravel",
  "Python",
  "PyTorch",
  "Supabase",
  "React Native",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
];

const clients = ["Spectra Komputer", "Mahdaly"];

const services = [
  {
    index: "01",
    title: "Mobile App Development",
    description:
      "Aplikasi lintas platform berbasis Flutter yang terasa native di iOS dan Android - cepat diluncurkan dan mudah dikembangkan.",
    tags: ["Flutter", "iOS", "Android", "Dart"],
    href: "/jasa-pembuatan-aplikasi/",
    large: true,
  },
  {
    index: "02",
    title: "Web Platforms",
    description:
      "Aplikasi web full-stack dengan arsitektur modern, performa tinggi, dan siap berkembang bersama bisnis Anda.",
    tags: ["Next.js", "Laravel", "Supabase"],
    href: "/jasa-pembuatan-website/",
    large: false,
  },
  {
    index: "03",
    title: "AI Automation & Integration",
    description:
      "Solusi AI custom untuk mengotomasi workflow, mengintegrasikan model ke aplikasi, dan meningkatkan efisiensi operasional bisnis.",
    tags: ["Python", "AI Integration", "Automation"],
    href: "/solusi-ai-bisnis/",
    large: false,
  },
  {
    index: "04",
    title: "Konsultasi Teknologi",
    description:
      "Review arsitektur, audit teknologi, dan dukungan langsung dari engineer senior untuk memperkuat tim Anda.",
    tags: ["Arsitektur", "Audit", "Team Augmentation"],
    href: "/konsultasi-teknologi/",
    large: false,
  },
] as const;

const caseStudies = [
  {
    categories: ["Mobile App", "HRIS"],
    title:
      "Kami HRIS - Pengelolaan HR mobile-first untuk perusahaan dengan 200 karyawan",
    outcome: "Memangkas proses payroll dari 3 hari menjadi 20 menit",
    image: mobileHris,
    alt: "Aplikasi mobile HRIS yang menampilkan payroll dan pengelolaan karyawan",
  },
  {
    categories: ["AI", "Automation"],
    title: "Defect Eye - Inspeksi bodi mobil berbasis AI",
    outcome:
      "Mendeteksi 94% cacat permukaan dengan kecepatan 3x inspeksi manual",
    image: defectAi,
    alt: "Sistem AI computer vision yang menganalisis cacat permukaan kendaraan",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Kami memetakan tujuan, batasan, dan kebutuhan pengguna melalui kickoff terstruktur selama 2 minggu.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Prototipe high-fidelity disiapkan sebelum kode produksi dibuat, sehingga hasil akhirnya dapat dipahami sejak awal.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Pengerjaan dalam sprint 2 minggu dengan demo mingguan agar Anda selalu terlibat dalam setiap perkembangan.",
  },
  {
    number: "04",
    title: "Peluncuran & Dukungan",
    description:
      "Kami meluncurkan produk, memantau performa, dan memberikan dukungan selama 30 hari setelah peluncuran tanpa biaya tambahan.",
  },
] as const;

const team = [
  {
    name: "Ali Hasyimi Assegaf",
    role: "Founder & Lead Engineer",
  },
  {
    name: "Bimantara Tito Wahyudi",
    role: "CTO & Backend Engineer",
  },
  {
    name: "Achmad Zidan Ramdani",
    role: "Frontend Developer & Mobile Developer",
  },
  {
    name: "Rachmatullah Rizaldi",
    role: "Backend Developer",
  },
] as const;

const stats = [
  { value: "5", label: "Proyek diselesaikan" },
  { value: "12+", label: "Tahun pengalaman gabungan" },
  { value: "100%", label: "Retensi klien" },
  { value: "<4j", label: "Rata-rata waktu respons" },
] as const;

function SectionHeader({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      {eyebrow ? (
        <p className={`eyebrow mb-6 ${dark ? "text-white/40" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-canvas pt-36 md:pt-40">
        <Container>
          <Reveal>
            <p className="eyebrow mb-6">Software House / Indonesia</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-5xl text-[clamp(2.75rem,6.67vw,6rem)] font-bold leading-[.98] tracking-[-.04em]">
              Jasa pembuatan aplikasi yang bekerja untuk bisnis Anda.
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <p className="max-w-[480px] text-lg leading-8 md:text-xl">
              TreapLabs membangun aplikasi mobile, website, dan solusi AI custom
              untuk startup, UMKM, serta perusahaan di seluruh Indonesia.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href="#contact"
                className="button button-primary px-7 py-3.5 text-base"
              >
                Bangun Bersama TreapLabs
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 font-medium text-ink"
              >
                Lihat Produk Kami{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>
            <div className="mt-11 flex items-center gap-2.5 text-[13px] text-muted">
              <span className="pulse-dot size-2 rounded-full bg-lime" />
              <span>
                Tersedia untuk proyek baru -{" "}
                <strong className="text-body">Kuartal IV 2026</strong>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="mt-16 md:mt-[72px]">
            <div className="image-zoom relative aspect-video overflow-hidden rounded-t-xl bg-hairline">
              <Image
                src={heroImage}
                alt="Dashboard aplikasi mobile HRIS untuk pengelolaan karyawan"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
        <div
          className="marquee border-y border-hairline py-4"
          aria-label="Teknologi yang kami gunakan"
        >
          <div className="marquee-track">
            {[...technologies, ...technologies].map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                className="px-7 text-[13px] font-medium uppercase tracking-[.06em] text-muted"
              >
                {technology}
                <span className="ml-7 text-hairline">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-canvas py-16 md:py-[72px]">
        <Container>
          <Reveal>
            <p className="eyebrow mb-9 text-center">Dipercaya oleh tim di</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-16">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-display text-xl font-bold tracking-[-.02em] text-ink opacity-40 transition-opacity hover:opacity-100 md:text-2xl"
                >
                  {client}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="services"
        className="dark-section section-pad scroll-mt-20 bg-deep"
      >
        <Container>
          <SectionHeader
            eyebrow="Yang kami kerjakan"
            title="Empat cara kami membantu Anda meluncurkan produk."
            dark
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {services.map((service, index) => (
              <Reveal
                key={service.index}
                delay={index * 0.07}
                className={
                  service.large
                    ? "md:col-span-2 lg:row-span-2 lg:col-span-1"
                    : ""
                }
              >
                <a
                  href={service.href}
                  className={`service-tile flex h-full min-h-56 flex-col justify-between rounded-xl p-7 ${service.large ? "lg:min-h-[456px] lg:p-9" : ""}`}
                >
                  <div>
                    <div className="mb-6 flex items-start justify-between text-xs font-semibold tracking-[.1em] text-white/30">
                      <span>{service.index}</span>
                      <ArrowUpRight className="corner-arrow size-5" />
                    </div>
                    <h3
                      className={`font-bold leading-[1.1] tracking-[-.02em] ${service.large ? "text-3xl" : "text-[22px]"}`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-6 text-white/50">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="work" className="section-pad scroll-mt-20 bg-canvas">
        <Container>
          <SectionHeader
            eyebrow="Proyek pilihan"
            title="Hasil nyata, bukan sekedar janji."
          />
          <div className="mt-16 space-y-20 md:mt-20 md:space-y-24">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title}>
                <article className="case-row grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div
                    className={`image-zoom relative aspect-[4/3] overflow-hidden rounded-xl bg-hairline ${index % 2 ? "md:order-2" : ""}`}
                  >
                    <Image
                      src={study.image}
                      alt={study.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={index % 2 ? "md:order-1" : ""}>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {study.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full border border-hairline px-3 py-1 text-[11px] font-semibold uppercase tracking-[.1em] text-muted"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-[1.15] tracking-[-.02em]">
                      <span className="case-title">{study.title}</span>
                    </h3>
                    <p className="mt-5 flex items-start gap-2.5 text-base">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                      {study.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="process"
        className="dark-section section-pad scroll-mt-20 bg-deep"
      >
        <Container>
          <SectionHeader title="Cara kami bekerja." dark />
          <div className="mt-16 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.08}
                className="border-b border-white/10 pb-8 sm:px-6 sm:first:pl-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <article>
                  <p className="select-none font-display text-[92px] font-bold leading-none tracking-[-.04em] text-white/[.045] lg:text-[110px]">
                    {step.number}
                  </p>
                  <h3 className="-mt-8 text-[22px] font-bold tracking-[-.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-9">
            {["Sprint 2 minggu", "Demo mingguan", "Opsi harga tetap"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.08em] text-lime"
                >
                  <Check className="size-4" />
                  {item}
                </span>
              ),
            )}
          </Reveal>
        </Container>
      </section>

      <section
        id="about"
        className="section-pad relative scroll-mt-20 bg-canvas"
      >
        <span
          id="careers"
          className="absolute top-0 scroll-mt-20"
          aria-hidden="true"
        />
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-6">Tentang kami</p>
              <h2 className="section-title max-w-lg">
                Tim kecil,{" "}
                <span className="text-muted">dengan alasan yang jelas.</span>
              </h2>
              <div className="mt-8 max-w-[480px] space-y-5 text-lg leading-[1.7]">
                <p>
                  Kami tidak menambah anggota tim hanya untuk memenangkan
                  proyek. Setiap proyek TreapLabs dikerjakan oleh engineer
                  berpengalaman yang telah meluncurkan produk nyata.
                </p>
                <p>
                  Anda berkomunikasi langsung dengan engineer yang mengerjakan
                  produk Anda, tanpa perantara. Kami percaya transparansi
                  proses, timeline, dan biaya adalah dasar kemitraan jangka
                  panjang.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.06}>
                  <article className="team-card flex min-h-40 flex-col justify-between rounded-xl border border-hairline bg-surface p-6 sm:min-h-44 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs tracking-[.12em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="team-card-mark" aria-hidden="true" />
                    </div>
                    <div className="mt-10">
                      <h3 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold leading-tight tracking-[-.025em]">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{member.role}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-20 grid grid-cols-2 gap-8 border-t border-hairline pt-12 lg:mt-24 lg:grid-cols-4 lg:pt-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-bold leading-none tracking-[-.04em] text-ink md:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* <section id="testimonials" className="section-pad bg-canvas pt-0 md:pt-0">
        <Container>
          <p className="eyebrow mb-8">What clients say</p>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.1}>
                <figure className="flex h-full min-h-80 flex-col justify-between rounded-xl border border-hairline bg-surface p-7 transition-shadow hover:shadow-[0_16px_48px_var(--card-shadow)] md:p-11">
                  <blockquote className="font-display text-xl font-medium leading-[1.45] tracking-[-.01em] text-ink md:text-[22px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-3.5">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {testimonial.name}
                      </p>
                      <p className="text-[13px] text-muted">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section> */}

      <section
        id="contact"
        className="dark-section section-pad relative scroll-mt-20 overflow-hidden bg-deep text-center"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,73,255,.08),transparent_70%)]" />
        <Container className="relative">
          <Reveal>
            <h2 className="text-[clamp(2.75rem,5.5vw,5rem)] font-bold leading-none tracking-[-.03em]">
              Mari wujudkan ide Anda.
            </h2>
            <p className="mt-6 text-lg text-white/50">
              Ceritakan produk yang ingin Anda bangun. Kami akan menjelaskan
              secara jujur bagaimana kami dapat membantu.
            </p>
            <TrackedWhatsAppLink
              href={`https://wa.me/6285183170436?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              service="general"
              ctaLocation="contact"
              className="button button-primary mt-11 px-9 py-4 text-base"
            >
              Jadwalkan konsultasi 30 menit
            </TrackedWhatsAppLink>
            <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
              <a
                className="transition-colors hover:text-white/80"
                href="mailto:treaplabs@gmail.com"
              >
                treaplabs@gmail.com
              </a>
              <span className="text-white/15">/</span>
              <TrackedWhatsAppLink
                className="transition-colors hover:text-white/80"
                href="https://wa.me/6285183170436"
                service="general"
                ctaLocation="contact_text_link"
              >
                WhatsApp <span aria-hidden="true">→</span>
              </TrackedWhatsAppLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
