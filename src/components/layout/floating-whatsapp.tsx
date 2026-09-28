"use client";

import { TrackedWhatsAppLink } from "@/components/analytics/tracked-whatsapp-link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useSitePathname } from "@/components/layout/site-path-provider";
import { siteConfig } from "@/content/site";
import { uiContent } from "@/content/ui";
import { getLocaleFromPathname } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const pathname = useSitePathname();
  const copy = uiContent[getLocaleFromPathname(pathname)].floatingWhatsApp;
  const phone = siteConfig.phone.replace(/\D/g, "");
  const service = /^\/(?:en\/)?(jasa-pembuatan-aplikasi|jasa-pembuatan-website|solusi-ai-bisnis|konsultasi-teknologi)\/?$/.exec(pathname)?.[1] ?? "general";

  return (
    <TrackedWhatsAppLink
      href={`https://wa.me/${phone}?text=${encodeURIComponent(copy.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      service={service}
      ctaLocation="floating_whatsapp"
      className="floating-whatsapp"
      aria-label={copy.ariaLabel}
      title={copy.ariaLabel}
    >
      <WhatsAppIcon className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-label">{copy.label}</span>
    </TrackedWhatsAppLink>
  );
}
