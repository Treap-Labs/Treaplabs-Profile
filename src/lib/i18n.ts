import { DEFAULT_LOCALE, type Locale } from "@/lib/constants";

export function getLocaleFromPathname(pathname: string): Locale {
  return /^\/en(?:\/|$)/.test(pathname) ? "en" : DEFAULT_LOCALE;
}

/** Localize an internal URL while retaining its query string and fragment. */
export function getLocalizedPath(path: string, locale: Locale): string {
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const unprefixedPath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const normalizedPath = unprefixedPath.endsWith("/") ? unprefixedPath : `${unprefixedPath}/`;

  return `${locale === "en" ? "/en" : ""}${normalizedPath}${suffix}`;
}

export function getLanguageAlternates(path: string) {
  return {
    id: getLocalizedPath(path, "id"),
    en: getLocalizedPath(path, "en"),
    "x-default": getLocalizedPath(path, DEFAULT_LOCALE),
  };
}
