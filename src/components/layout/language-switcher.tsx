"use client";

import { useSyncExternalStore } from "react";

import { useSitePathname } from "@/components/layout/site-path-provider";
import { uiContent } from "@/content/ui";
import { LOCALES } from "@/lib/constants";
import { getLocaleFromPathname, getLocalizedPath } from "@/lib/i18n";

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function getLocationSuffix() {
  return window.location.search + window.location.hash;
}

function getServerSuffix() {
  return "";
}

export function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useSitePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = uiContent[locale].header;
  // Real hrefs preserve normal clicks, keyboard use, and opening a new tab.
  const suffix = useSyncExternalStore(subscribeToLocation, getLocationSuffix, getServerSuffix);

  return (
    <nav className="language-switcher" aria-label={copy.language}>
      {LOCALES.map((language) => (
        <a
          key={language}
          href={getLocalizedPath(`${pathname}${suffix}`, language)}
          hrefLang={language}
          aria-current={locale === language ? "page" : undefined}
          aria-label={language === "id" ? copy.switchToId : copy.switchToEn}
          title={language === "id" ? "Bahasa Indonesia" : "English"}
          onClick={onNavigate}
        >
          {language.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
