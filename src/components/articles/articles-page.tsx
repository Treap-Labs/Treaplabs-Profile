import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import Image from "next/image";

import { ArticleContact } from "@/components/articles/article-contact";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { articleContent, articleLabels, formatArticleDate, getArticleReadingTime } from "@/content/articles";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";
import { getLocalizedPath } from "@/lib/i18n";

export function ArticlesPage({ locale }: { locale: Locale }) {
  const copy = articleLabels[locale];
  const articles = articleContent[locale];
  const url = `${siteConfig.url}${getLocalizedPath("/articles/", locale)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.pageTitle,
    description: copy.description,
    url,
    inLanguage: locale === "id" ? "id-ID" : "en-US",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `${siteConfig.url}${getLocalizedPath(`/articles/${article.slug}/`, locale)}`,
      })),
    },
  };

  return (
    <div lang={locale}>
      <JsonLd data={schema} />
      <header className="bg-canvas pb-14 pt-36 md:pb-20 md:pt-44">
        <Container>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-blue" aria-hidden="true" />
            <p className="eyebrow">TreapLabs / {copy.title}</p>
          </div>
          <h1 className="mt-8 max-w-4xl text-balance text-[clamp(3.25rem,7vw,6.5rem)] font-bold leading-[.98] tracking-[-.045em]">
            {copy.heading}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 md:text-xl">{copy.description}</p>
        </Container>
      </header>

      <section className="bg-canvas pb-20 md:pb-32" aria-labelledby="latest-story">
        <Container>
          <div className="mb-8 flex items-center justify-between border-t border-hairline pt-6">
            <h2 id="latest-story" className="eyebrow">{copy.featured}</h2>
            <span className="font-mono text-xs text-muted" aria-hidden="true">{String(articles.length).padStart(2, "0")}</span>
          </div>
          <div className="space-y-12">
            {articles.map((article) => (
              <article key={article.slug}>
                <a
                  href={getLocalizedPath(`/articles/${article.slug}/`, locale)}
                  className="article-feature group grid overflow-hidden rounded-xl border border-hairline bg-surface lg:grid-cols-[1.15fr_1fr]"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-hairline lg:aspect-auto lg:min-h-[500px]">
                    <Image
                      src={article.cover.src}
                      alt={article.cover.alt}
                      fill
                      priority
                      sizes="(min-width: 1280px) 642px, (min-width: 1024px) 54vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-deep/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.1em] text-white backdrop-blur-sm md:left-7 md:top-7">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-start p-6 sm:p-9 lg:p-10 xl:p-12">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-body">
                      <span>{copy.published} <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time></span>
                      <span className="inline-flex items-center gap-1.5"><Clock3 className="size-3.5" aria-hidden="true" />{getArticleReadingTime(article)} {copy.readingTime}</span>
                    </div>
                    <h3 className="mt-7 text-balance text-[clamp(1.75rem,2.9vw,2.75rem)] font-bold leading-[1.1] tracking-[-.03em] transition-colors group-hover:text-blue group-focus-visible:text-blue">
                      {article.title}
                    </h3>
                    <p className="mb-9 mt-5 leading-7">{article.excerpt}</p>
                    <div className="mt-auto w-full border-t border-hairline pt-6">
                      {article.event ? (
                        <p className="mb-6 inline-flex items-center gap-2 text-xs text-body">
                          <MapPin className="size-4 shrink-0" aria-hidden="true" />{article.event.venue}
                        </p>
                      ) : null}
                      <span className="flex w-full items-center justify-between gap-4 text-sm font-semibold text-ink">
                        {copy.read}
                        <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ArticleContact locale={locale} />
    </div>
  );
}
