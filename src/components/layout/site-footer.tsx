"use client";

import { useSitePathname } from "@/components/layout/site-path-provider";
import { uiContent } from "@/content/ui";
import { getLocaleFromPathname, getLocalizedPath } from "@/lib/i18n";

export function SiteFooter() {
  const locale = getLocaleFromPathname(useSitePathname());
  const copy = uiContent[locale].footer;

  return (
    <footer className="dark-section bg-deep px-5 pb-10 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden border-b border-white/10">
          <p className="outlined-wordmark">TREAPLABS</p>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-white">
              TreapLabs
            </p>
            <p className="mt-3 max-w-60 text-sm leading-6 text-white/45">
              {copy.description}
            </p>
          </div>
          {copy.columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow mb-5 text-white/35">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href.startsWith("/") ? getLocalizedPath(link.href, locale) : link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TreapLabs · {copy.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
