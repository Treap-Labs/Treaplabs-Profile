import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import type { ServiceContent } from "@/content/services";
import { servicePages } from "@/content/services";
import { siteConfig } from "@/content/site";

const whatsappMessage = encodeURIComponent(
  "Halo TreapLabs, saya ingin berdiskusi mengenai layanan pengembangan software untuk bisnis saya.",
);

export function ServicePage({ service }: { service: ServiceContent }) {
  const url = `${siteConfig.url}/${service.slug}/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.title,
      description: service.description,
      url,
      areaServed: { "@type": "Country", name: "Indonesia" },
      provider: { "@id": `${siteConfig.url}/#organization` },
      serviceType: service.eyebrow,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: service.title, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-canvas pb-24 pt-36 md:pb-32 md:pt-44">
        <Container>
          <p className="eyebrow mb-6">{service.eyebrow} / Indonesia</p>
          <h1 className="max-w-5xl text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[.98] tracking-[-.04em]">
            {service.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 md:text-xl">{service.intro}</p>
          <a href={`https://wa.me/6285183170436?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="button button-primary mt-10 px-7 py-3.5 text-base">
            Diskusikan proyek Anda <ArrowRight className="size-4" />
          </a>
        </Container>
      </section>

      <section className="section-pad bg-deep dark-section">
        <Container>
          <p className="eyebrow mb-6 text-white/40">Manfaat untuk bisnis</p>
          <h2 className="section-title max-w-3xl">Software yang dibangun dengan tujuan yang jelas.</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <article key={benefit.title} className="service-tile rounded-xl p-7">
                <span className="text-xs font-semibold text-white/30">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-bold">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/50">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-canvas">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow mb-6">Yang Anda dapatkan</p>
            <h2 className="section-title">Lingkup kerja yang transparan.</h2>
            <ul className="mt-10 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-hairline pb-4 text-ink">
                  <Check className="size-4 text-blue" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-6">Teknologi</p>
            <h2 className="section-title">Tools yang tepat untuk kebutuhan Anda.</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {service.technologies.map((item) => (
                <span key={item} className="rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink">{item}</span>
              ))}
            </div>
            {service.caseStudy ? (
              <div className="mt-12 rounded-xl border border-hairline bg-surface p-7">
                <p className="eyebrow mb-4">Contoh proyek</p>
                <h3 className="text-2xl font-bold">{service.caseStudy.title}</h3>
                <p className="mt-3 leading-7">{service.caseStudy.result}</p>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <p className="eyebrow mb-6">Pertanyaan umum</p>
          <h2 className="section-title">Sebelum memulai proyek.</h2>
          <div className="mt-12 divide-y divide-hairline border-y border-hairline">
            {service.faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none font-display text-xl font-bold text-ink">{item.question}</summary>
                <p className="mt-4 max-w-3xl leading-7">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-deep text-center dark-section">
        <Container>
          <h2 className="text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-none tracking-[-.03em]">Mari wujudkan produk Anda.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">Ceritakan kebutuhan bisnis Anda dan dapatkan konsultasi awal selama 30 menit.</p>
          <a href={`https://wa.me/6285183170436?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="button button-primary mt-10 px-8 py-4 text-base">Hubungi TreapLabs</a>
        </Container>
      </section>

      <section className="bg-deep pb-20 dark-section">
        <Container>
          <p className="eyebrow mb-5 text-white/35">Layanan lainnya</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {servicePages.filter((item) => item.slug !== service.slug).map((item) => (
              <a key={item.slug} href={`/${item.slug}/`} className="text-sm text-white/55 transition-colors hover:text-white">{item.eyebrow} <span aria-hidden="true">→</span></a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
