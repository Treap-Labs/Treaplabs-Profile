export const SITE_LOCALE = "id-ID";

export type Locale = "en" | "id";

export const DEFAULT_LOCALE: Locale = "id";
export const LOCALES = ["id", "en"] as const satisfies readonly Locale[];
