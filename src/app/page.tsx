import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import heroImage from "@/images/hero.png";
import mobileHris from "@/images/caseStudies/mobile_hris.png";
import defectAi from "@/images/caseStudies/defect_ai.png";

const technologies = [
  "Flutter",
  "Next.js",
  "Laravel",
  "Python",
  "PyTorch",
  "Supabase",
  "React Native",
  "YOLO",
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
      "Cross-platform apps built in Flutter that feel native on iOS and Android - shipped fast, maintained long.",
    tags: ["Flutter", "iOS", "Android", "Dart"],
    large: true,
  },
  {
    index: "02",
    title: "Web Platforms",
    description:
      "Full-stack web applications with modern architecture and serious performance.",
    tags: ["Next.js", "Laravel", "Supabase"],
    large: false,
  },
  {
    index: "03",
    title: "AI & Computer Vision",
    description:
      "Custom AI models and vision pipelines that solve real operational problems.",
    tags: ["Python", "YOLO", "PyTorch"],
    large: false,
  },
  {
    index: "04",
    title: "Technology Consulting",
    description:
      "Architecture reviews, tech audits, and hands-on team augmentation from senior engineers.",
    tags: ["Architecture", "Audits", "Team Aug"],
    large: false,
  },
] as const;

const caseStudies = [
  {
    categories: ["Mobile App", "HRIS"],
    title: "Kami HRIS - Mobile-first HR for 200-person companies",
    outcome: "Cut payroll processing from 3 days to 20 minutes",
    image: mobileHris,
    alt: "HRIS mobile app showing payroll and employee management screens",
  },
  {
    categories: ["AI", "Computer Vision"],
    title: "Defect Eye - AI-powered car body inspection",
    outcome: "Detected 94% of surface defects at 3x human inspection speed",
    image: defectAi,
    alt: "AI computer vision system analyzing automotive surface defects",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your goals, constraints, and user needs in a structured 2-week kickoff. No skipped steps.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "High-fidelity prototypes before a single line of production code. You see exactly what you're getting.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "2-week sprints with weekly demos. You're involved throughout, not surprised at the end.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We ship to production, monitor performance, and stay on for 30 days post-launch at no extra charge.",
  },
] as const;

const team = [
  {
    name: "Ali Hasyimi Assegaf",
    role: "Founder & Mobile Developer",
  },
  {
    name: "Bimantara Tito Wahyudi",
    role: "CTO & Backend Engineer",
  },
  {
    name: "Achmad Zidan Ramdani",
    role: "Frontend Developer",
  },
  {
    name: "Rachmatullah Rizaldi",
    role: "Backend Developer",
  },
] as const;

const stats = [
  { value: "47", label: "Projects delivered" },
  { value: "12+", label: "Years combined XP" },
  { value: "94%", label: "Client retention" },
  { value: "<4h", label: "Avg response time" },
] as const;

const testimonials = [
  {
    quote:
      "TreapLabs was the first dev partner that actually pushed back on our spec. They told us we were building the wrong thing and proposed a leaner MVP. They were right. We launched in six weeks and validated the market.",
    name: "Budi Santoso",
    role: "Co-founder",
    company: "Kami HRIS",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&auto=format&facepad=3",
  },
  {
    quote:
      "The defect detection system they built saved us two full-time QA roles. What impressed me most was how transparent they were about what the model could and couldn't do before we signed anything.",
    name: "Hartono Wijaya",
    role: "Head of Operations",
    company: "AutoVision Indonesia",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&auto=format&facepad=3",
  },
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
            <p className="eyebrow mb-6">Software House / Jakarta, Indonesia</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-5xl text-[clamp(2.75rem,6.67vw,6rem)] font-bold leading-[.98] tracking-[-.04em]">
              We build software that earns its keep.
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <p className="max-w-[480px] text-lg leading-8 md:text-xl">
              A senior engineering team in Jakarta building mobile apps, web
              platforms, and AI products for startups and growing businesses.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <Link
                href="#contact"
                className="button button-primary px-7 py-3.5 text-base"
              >
                Start a project
              </Link>
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 font-medium text-ink"
              >
                See our work{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
            <div className="mt-11 flex items-center gap-2.5 text-[13px] text-muted">
              <span className="pulse-dot size-2 rounded-full bg-lime" />
              <span>
                Available for new projects -{" "}
                <strong className="text-body">Q4 2026</strong>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="mt-16 md:mt-[72px]">
            <div className="image-zoom relative aspect-video overflow-hidden rounded-t-xl bg-hairline">
              <Image
                src={heroImage}
                alt="HRIS mobile app dashboard showing employee management interface"
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
          aria-label="Technologies we use"
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
            <p className="eyebrow mb-9 text-center">Trusted by teams at</p>
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
            eyebrow="What we do"
            title="Four ways we help you ship."
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
                <article
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
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="work" className="section-pad scroll-mt-20 bg-canvas">
        <Container>
          <SectionHeader eyebrow="Selected work" title="Proof, not promises." />
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
                    <Link
                      href="#"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                    >
                      Read case study{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center md:mt-20">
            <Link href="#" className="button button-ghost">
              View all projects
            </Link>
          </Reveal>
        </Container>
      </section>

      <section
        id="process"
        className="dark-section section-pad scroll-mt-20 bg-deep"
      >
        <Container>
          <SectionHeader title="How we work." dark />
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
            {["2-week sprints", "Weekly demos", "Fixed-price options"].map(
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
              <p className="eyebrow mb-6">Who we are</p>
              <h2 className="section-title max-w-lg">
                A small team, <span className="text-muted">on purpose.</span>
              </h2>
              <div className="mt-8 max-w-[480px] space-y-5 text-lg leading-[1.7]">
                <p>
                  We don&apos;t scale headcount to win projects. Every TreapLabs
                  engagement is staffed with senior engineers who have shipped
                  real products - not juniors learning on your budget.
                </p>
                <p>
                  You get direct Slack access to the engineer writing your code.
                  No account managers, no layers. We believe transparency about
                  process, timeline, and cost is the only way to build lasting
                  partnerships.
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

      <section id="testimonials" className="section-pad bg-canvas pt-0 md:pt-0">
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
      </section>

      <section
        id="contact"
        className="dark-section section-pad relative scroll-mt-20 overflow-hidden bg-deep text-center"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,73,255,.08),transparent_70%)]" />
        <Container className="relative">
          <Reveal>
            <h2 className="text-[clamp(2.75rem,5.5vw,5rem)] font-bold leading-none tracking-[-.03em]">
              Let&apos;s build the thing.
            </h2>
            <p className="mt-6 text-lg text-white/50">
              Tell us what you&apos;re building. We&apos;ll tell you honestly if
              we can help.
            </p>
            <a
              href="mailto:treaplabs@gmail.com"
              className="button button-primary mt-11 px-9 py-4 text-base"
            >
              Book a 30-minute call
            </a>
            <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
              <a
                className="transition-colors hover:text-white/80"
                href="mailto:treaplabs@gmail.com"
              >
                treaplabs@gmail.com
              </a>
              <span className="text-white/15">/</span>
              <a
                className="transition-colors hover:text-white/80"
                href="https://wa.me/6285183170436"
              >
                WhatsApp <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
