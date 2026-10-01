import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { TrackedWhatsAppLink } from "@/components/analytics/tracked-whatsapp-link";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { articleLabels, getProjectArticles } from "@/content/articles";
import { homeContent } from "@/content/home";
import { projectContent, projectLabels, type Project } from "@/content/projects";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";
import { getLocalizedPath } from "@/lib/i18n";

export function ProjectPage({ project, locale }: { project: Project; locale: Locale }) {
  const copy = projectLabels[locale];
  const relatedArticles = getProjectArticles(project.slug, locale);
  const articleCopy = articleLabels[locale];
  const projects = projectContent[locale];
  const nextProject = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  const homeUrl = `${siteConfig.url}${getLocalizedPath("/", locale)}`;
  const url = `${siteConfig.url}${getLocalizedPath(`/projects/${project.slug}/`, locale)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: siteConfig.name, item: homeUrl },
      { "@type": "ListItem", position: 2, name: homeContent[locale].workEyebrow, item: `${homeUrl}#work` },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  };

  return (
    <div lang={locale}>
      <JsonLd data={schema} />
      <article>
        <header className="bg-canvas pb-16 pt-36 md:pb-24 md:pt-44">
          <Container>
            <a href={getLocalizedPath("/#work", locale)} className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-blue">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              {copy.back}
            </a>
            <div className="mt-14 max-w-4xl md:mt-20">
              <p className="eyebrow mb-6">{homeContent[locale].workEyebrow} / {project.title}</p>
              <h1 className="text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[.98] tracking-[-.045em]">
                {project.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 md:text-xl">{project.description}</p>
              {project.status ? (
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[.1em] text-ink">
                  <span className="size-2 rounded-full bg-lime" aria-hidden="true" />
                  {project.status}
                </p>
              ) : null}
            </div>
            <div className="mt-10 flex flex-wrap gap-2 border-t border-hairline pt-6 md:mt-14">
              {project.categories.map((category) => (
                <span key={category} className="rounded-full border border-hairline px-4 py-1.5 text-xs font-semibold uppercase tracking-[.08em] text-muted">
                  {category}
                </span>
              ))}
            </div>
          </Container>
        </header>

        <section className="bg-canvas pb-20 md:pb-28" aria-label={copy.preview}>
          <Container>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-hairline">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Container>
        </section>

        <section className="section-pad border-t border-hairline bg-surface">
          <Container className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-20">
            <div>
              <p className="eyebrow mb-6">01 / {copy.overview}</p>
              <h2 className="section-title max-w-md">{copy.overview}</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 md:pt-11 md:text-xl">{project.overview}</p>
          </Container>
        </section>

        <section className="section-pad bg-canvas">
          <Container>
            <p className="eyebrow mb-6">02 / {copy.highlights}</p>
            <h2 className="section-title">{copy.highlights}</h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
              {project.highlights.map((highlight, index) => (
                <div key={highlight.title} className="border-t border-hairline pt-6">
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  <h3 className="mt-10 text-2xl font-bold tracking-[-.02em]">{highlight.title}</h3>
                  <p className="mt-4 max-w-sm leading-7">{highlight.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </article>

      {relatedArticles.length ? (
        <section className="border-t border-hairline bg-surface py-16 md:py-24">
          <Container>
            <p className="eyebrow mb-6">{articleCopy.related}</p>
            <h2 className="section-title">{articleCopy.relatedHeading}</h2>
            <div className="mt-10 space-y-8">
              {relatedArticles.map((article) => (
                <a key={article.slug} href={getLocalizedPath(`/articles/${article.slug}/`, locale)} className="group grid gap-6 rounded-xl border border-hairline bg-canvas p-5 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8 md:p-8">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-hairline sm:aspect-auto sm:min-h-44">
                    <Image src={article.cover.src} alt={article.cover.alt} fill sizes="(min-width: 640px) 220px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-balance text-2xl font-bold leading-tight tracking-[-.02em] transition-colors group-hover:text-blue">{article.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7">{article.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">{articleCopy.read}<ArrowUpRight className="size-4" aria-hidden="true" /></span>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-hairline bg-canvas py-16 md:py-24">
        <Container>
          <a href={getLocalizedPath(`/projects/${nextProject.slug}/`, locale)} className="group flex items-center justify-between gap-6 text-ink">
            <div>
              <p className="eyebrow mb-5">{copy.next}</p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-.03em] transition-colors group-hover:text-blue group-focus-visible:text-blue">
                {nextProject.title}
              </h2>
            </div>
            <ArrowUpRight className="size-8 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 md:size-12" aria-hidden="true" />
          </a>
        </Container>
      </section>

      <section className="dark-section section-pad bg-deep text-center">
        <Container>
          <h2 className="text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-none tracking-[-.03em]">{copy.contactTitle}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">{copy.contactDescription}</p>
          <TrackedWhatsAppLink
            href={`https://wa.me/6285183170436?text=${encodeURIComponent(copy.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            service={project.slug}
            ctaLocation="project_detail"
            className="button button-primary mt-10 px-8 py-4 text-base"
          >
            {copy.contact} <ArrowRight className="size-4" aria-hidden="true" />
          </TrackedWhatsAppLink>
        </Container>
      </section>
    </div>
  );
}
