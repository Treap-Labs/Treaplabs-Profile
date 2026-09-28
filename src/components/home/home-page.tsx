import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import {
  siDocker,
  siFlutter,
  siKubernetes,
  siLaravel,
  siNextdotjs,
  siPostgresql,
  siPytorch,
  siPython,
  siReact,
  siSupabase,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

import { TrackedWhatsAppLink } from "@/components/analytics/tracked-whatsapp-link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { clients, homeContent } from "@/content/home";
import heroImage from "@/images/optimized/hero.webp";
import type { Locale } from "@/lib/constants";
import { getLocalizedPath } from "@/lib/i18n";

const technologyIcons: Record<string, SimpleIcon> = {
  Docker: siDocker,
  Flutter: siFlutter,
  Kubernetes: siKubernetes,
  Laravel: siLaravel,
  "Next.js": siNextdotjs,
  PostgreSQL: siPostgresql,
  PyTorch: siPytorch,
  Python: siPython,
  "React Native": siReact,
  Supabase: siSupabase,
  TypeScript: siTypescript,
};

function TechnologyIcon({ technology }: { technology: string }) {
  const icon = technologyIcons[technology];

  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0 text-muted"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

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

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeContent[locale];
  const whatsappMessage = encodeURIComponent(copy.whatsappMessage);

  return (
    <div lang={locale}>
      <section id="hero" className="bg-canvas">
        <div className="hero-cinema">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-cinema-image"
          />
          <div className="hero-cinema-shade" aria-hidden="true" />
          <div className="hero-cinema-copy">
            <p className="hero-cinema-eyebrow">{copy.heroEyebrow}</p>
            <p className="hero-cinema-wordmark" aria-label="TreapLabs">
              TREAPLABS<span aria-hidden="true">.</span>
            </p>
            <h1 className="hero-cinema-tagline">
              {copy.tagline}
            </h1>
          </div>
          <a className="hero-cinema-down" href="#hero-intro">
            {copy.discover}
            <ArrowRight className="size-4 rotate-90" aria-hidden="true" />
          </a>
        </div>
        <Container>
          <div id="hero-intro" className="scroll-mt-28 py-12 md:py-16">
            <p className="max-w-[480px] text-lg leading-8 md:text-xl">
              {copy.intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href="#contact"
                className="button button-primary px-7 py-3.5 text-base"
              >
                {copy.build}
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 font-medium text-ink"
              >
                {copy.explore}{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>
            <div className="mt-11 flex items-center gap-2.5 text-[13px] text-muted">
              <span className="pulse-dot size-2 rounded-full bg-lime" />
              <span>
                {copy.availability}
                <strong className="text-body">Q4 2026</strong>
              </span>
            </div>
          </div>
        </Container>
        <div className="border-y border-hairline py-20 md:py-24">
          <Container>
            <SectionHeader
              eyebrow={copy.technologiesEyebrow}
              title={copy.technologiesTitle}
            />
            <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
              {copy.technologyGroups.map((group, index) => (
                <Reveal key={group.category} delay={index * 0.06}>
                  <div className="border-t border-hairline pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-muted">
                      {String(index + 1).padStart(2, "0")} / {group.category}
                    </p>
                    <ul className="mt-7 space-y-2.5">
                      {group.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="flex items-center gap-3 font-display text-xl font-semibold tracking-[-.02em] text-ink md:text-2xl"
                        >
                          <TechnologyIcon technology={technology} />
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-hairline bg-canvas py-16 md:py-[72px]">
        <Container>
          <Reveal>
            <p className="eyebrow mb-9 text-center">
              {copy.clientsTitle}
            </p>
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
            eyebrow={copy.servicesEyebrow}
            title={copy.servicesTitle}
            dark
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {copy.services.map((service, index) => (
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
                  href={getLocalizedPath(service.href, locale)}
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
            eyebrow={copy.workEyebrow}
            title={copy.workTitle}
          />
          <div className="mt-16 space-y-20 md:mt-20 md:space-y-24">
            {copy.caseStudies.map((study, index) => (
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
                      {study.title}
                    </h3>
                    <p className="mt-5 flex items-start gap-2.5 text-base">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                      {study.description}
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
          <SectionHeader
            title={copy.processTitle}
            dark
          />
          <div className="mt-16 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {copy.processSteps.map((step, index) => (
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
            {copy.processPromises.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.08em] text-lime"
              >
                <Check className="size-4" />
                {item}
              </span>
            ))}
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
              <p className="eyebrow mb-6">
                {copy.aboutEyebrow}
              </p>
              <h2 className="section-title max-w-lg">
                {copy.aboutTitle}
                <span className="text-muted">
                  {copy.aboutTitleMuted}
                </span>
              </h2>
              <div className="mt-8 max-w-[480px] space-y-5 text-lg leading-[1.7]">
                {copy.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
            <section aria-labelledby="leadership-heading" className="min-w-0">
              <Reveal>
                <h3 id="leadership-heading" className="eyebrow mb-6">
                  {copy.leadershipTitle}
                </h3>
              </Reveal>
              <div className="grid gap-4">
                {copy.team.map((member, index) => (
                  <Reveal key={member.name} delay={index * 0.06}>
                    <article className="team-card grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-xl border border-hairline bg-surface p-5 sm:gap-6 sm:p-6">
                      <span className="font-mono text-xs tracking-[.12em] text-muted" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xl font-bold leading-tight tracking-[-.025em] break-words sm:text-2xl">
                          {member.name}
                        </h4>
                        <p lang="en" className="mt-2 text-sm leading-6 text-body break-words">
                          {member.role}
                        </p>
                      </div>
                      <span className="team-card-mark" aria-hidden="true" />
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
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
              {copy.contactTitle}
            </h2>
            <p className="mt-6 text-lg text-white/50">
              {copy.contactDescription}
            </p>
            <TrackedWhatsAppLink
              href={`https://wa.me/6285183170436?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              service="general"
              ctaLocation="contact"
              className="button button-primary mt-11 px-9 py-4 text-base"
            >
              {copy.consultation}
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
    </div>
  );
}
