import { ArrowRight } from "lucide-react";

import { TrackedWhatsAppLink } from "@/components/analytics/tracked-whatsapp-link";
import { Container } from "@/components/layout/container";
import { articleLabels } from "@/content/articles";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/lib/constants";

export function ArticleContact({ locale }: { locale: Locale }) {
  const copy = articleLabels[locale];

  return (
    <section className="dark-section section-pad bg-deep">
      <Container className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-3xl">
          <h2 className="section-title text-balance">{copy.contactTitle}</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">{copy.contactDescription}</p>
        </div>
        <TrackedWhatsAppLink
          href={`https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(copy.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          service="heelwa"
          ctaLocation="articles"
          className="button button-primary shrink-0 px-6 py-4"
        >
          {copy.contact} <ArrowRight className="size-4" aria-hidden="true" />
        </TrackedWhatsAppLink>
      </Container>
    </section>
  );
}
