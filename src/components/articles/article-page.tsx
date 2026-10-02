import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import Image from "next/image";

import { ArticleContact } from "@/components/articles/article-contact";
import { ArticleVideo } from "@/components/articles/article-video";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { articleLabels, formatArticleDate, getArticleReadingTime, type Article, type ArticleImage } from "@/content/articles";
import { getProject } from "@/content/projects";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";
import { getLocalizedPath } from "@/lib/i18n";

function ArticleFigure({ image, className = "" }: { image: ArticleImage; className?: string }) {
  return (
    <figure className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={image.width > image.height
          ? "(min-width: 1280px) 820px, (min-width: 1024px) 70vw, 100vw"
          : "(min-width: 1280px) 398px, (min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"}
        className="h-auto w-full rounded-xl bg-hairline"
      />
      <figcaption className="mt-3 text-sm leading-6">{image.caption}</figcaption>
    </figure>
  );
}

export function ArticlePage({ article, locale }: { article: Article; locale: Locale }) {
  const copy = articleLabels[locale];
  const project = getProject(article.projectSlug, locale);
  const homeUrl = `${siteConfig.url}${getLocalizedPath("/", locale)}`;
  const articlesUrl = `${siteConfig.url}${getLocalizedPath("/articles/", locale)}`;
  const url = `${siteConfig.url}${getLocalizedPath(`/articles/${article.slug}/`, locale)}`;
  const contents = [
    ...article.sections.map((section) => ({ id: section.id, title: section.title })),
    ...(article.gallery.length ? [{ id: "gallery", title: copy.gallery }] : []),
    ...(article.video ? [{ id: "video", title: copy.video }] : []),
    ...(article.demoVideo ? [{ id: "website-demo", title: copy.demoVideo }] : []),
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.excerpt,
      image: [`${siteConfig.url}${article.cover.src}`],
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      publisher: { "@id": `${siteConfig.url}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: locale === "id" ? "id-ID" : "en-US",
      articleSection: article.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.home, item: homeUrl },
        { "@type": "ListItem", position: 2, name: copy.title, item: articlesUrl },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <div lang={locale}>
      <JsonLd data={schema} />
      <article>
        <header className="bg-canvas pb-10 pt-36 md:pb-14 md:pt-44">
          <Container>
            <a href={getLocalizedPath("/articles/", locale)} className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-blue">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />{copy.back}
            </a>
            <p className="eyebrow mb-6 mt-12 md:mt-16">{copy.title} / {article.category}</p>
            <h1 className="max-w-5xl text-balance text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1.04] tracking-[-.04em]">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 md:text-xl">{article.excerpt}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-hairline pt-6 text-xs md:text-sm">
              <span>{copy.by} <span className="font-semibold text-ink">{article.author}</span></span>
              <span>{copy.published} <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time></span>
              <span className="inline-flex items-center gap-2"><Clock3 className="size-4" aria-hidden="true" />{getArticleReadingTime(article)} {copy.readingTime}</span>
            </div>
          </Container>
        </header>

        <Container className="pb-16 md:pb-20">
          <figure>
            <Image
              src={article.cover.src}
              alt={article.cover.alt}
              width={article.cover.width}
              height={article.cover.height}
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full rounded-xl bg-hairline"
            />
            <figcaption className="mt-4 text-sm leading-6">{article.cover.caption}</figcaption>
          </figure>
        </Container>

        <div className="border-t border-hairline bg-surface py-16 md:py-24">
          <Container className="grid items-start gap-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <aside className="space-y-9 lg:sticky lg:top-28" aria-label={copy.contents}>
              <nav aria-labelledby="article-contents">
                <h2 id="article-contents" className="eyebrow mb-5">{copy.contents}</h2>
                <ol className="space-y-4 border-l border-hairline pl-5">
                  {contents.map((item, index) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex items-start gap-3 text-sm leading-6 text-body transition-colors hover:text-ink">
                        <span className="mt-0.5 font-mono text-[10px] text-muted" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              {article.event ? (
                <div className="border-t border-hairline pt-7">
                  <h2 className="eyebrow mb-5">{copy.event}</h2>
                  <dl className="space-y-5 text-sm leading-6">
                    <div>
                      <dt className="text-xs">{copy.eventDate}</dt>
                      <dd className="mt-1 font-semibold text-ink"><time dateTime={article.event.date}>{formatArticleDate(article.event.date, locale)}</time></dd>
                    </div>
                    <div>
                      <dt className="text-xs">{copy.venue}</dt>
                      <dd className="mt-1 font-semibold text-ink">{article.event.venue}<span className="block font-normal text-body">{article.event.city}</span></dd>
                    </div>
                  </dl>
                </div>
              ) : null}
              {project ? (
                <a href={getLocalizedPath(`/projects/${article.projectSlug}/`, locale)} className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-blue">
                  {copy.project}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              ) : null}
            </aside>

            <div className="min-w-0">
              <div className="space-y-6 text-lg leading-[1.9]">
                {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="article-section mt-14 md:mt-16">
                  <h2 id={`${section.id}-heading`} className="mb-6 max-w-2xl text-balance text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-.03em]">{section.title}</h2>
                  <div className="space-y-6 text-base leading-[1.9] md:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.highlights ? (
                    <ul className="my-9 grid gap-6 sm:grid-cols-2">
                      {section.highlights.map((highlight, index) => (
                        <li key={highlight.title} className="rounded-lg border border-hairline bg-canvas p-6">
                          <span className="font-mono text-xs text-muted" aria-hidden="true">0{index + 1}</span>
                          <h3 className="mb-3 mt-5 text-xl font-bold leading-tight tracking-[-.02em]">{highlight.title}</h3>
                          <p className="text-sm leading-7">{highlight.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.image ? <ArticleFigure image={section.image} className="mt-9" /> : null}
                </section>
              ))}

              <div className="my-14 border-y border-hairline py-10 md:my-16">
                <span className="mb-5 block h-1 w-10 rounded-full bg-blue" aria-hidden="true" />
                <p className="max-w-2xl font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.2] tracking-[-.025em] text-ink">{article.takeaway}</p>
              </div>

              {article.gallery.length ? (
                <section id="gallery" className="article-section" aria-labelledby="gallery-heading">
                  <h2 id="gallery-heading" className="text-3xl font-bold leading-tight tracking-[-.03em] md:text-4xl">{copy.gallery}</h2>
                  <p className="mb-9 mt-4 leading-7">{copy.galleryDescription}</p>
                  <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                    {article.gallery.map((image) => (
                      <ArticleFigure key={image.src} image={image} className={image.width > image.height ? "sm:col-span-2" : ""} />
                    ))}
                  </div>
                </section>
              ) : null}

              {article.video ? (
                <section id="video" className="article-section mt-14 md:mt-16" aria-labelledby="video-heading">
                  <p className="eyebrow mb-4">{copy.video}</p>
                  <h2 id="video-heading" className="mb-8 text-3xl font-bold leading-tight tracking-[-.03em] md:text-4xl">{article.video.title}</h2>
                  <ArticleVideo video={article.video} locale={locale} />
                </section>
              ) : null}

              {article.demoVideo ? (
                <section id="website-demo" className="article-section mt-14 md:mt-16" aria-labelledby="website-demo-heading">
                  <p className="eyebrow mb-4">{copy.demoVideo}</p>
                  <h2 id="website-demo-heading" className="mb-8 text-3xl font-bold leading-tight tracking-[-.03em] md:text-4xl">{article.demoVideo.title}</h2>
                  <ArticleVideo video={article.demoVideo} locale={locale} />
                </section>
              ) : null}

              <p className="mt-10 border-t border-hairline pt-6 text-xs leading-6">{copy.mediaCredit}</p>

              {project ? (
                <a href={getLocalizedPath(`/projects/${article.projectSlug}/`, locale)} className="group mt-10 flex items-center justify-between gap-4 rounded-xl border border-hairline bg-canvas p-6 text-ink sm:p-8">
                  <div>
                    <p className="eyebrow mb-3">{copy.project}</p>
                    <p className="font-display text-2xl font-bold tracking-[-.02em]">{project.title}</p>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-body">{project.description}</p>
                  </div>
                  <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </Container>
        </div>
      </article>
      <ArticleContact locale={locale} />
    </div>
  );
}
