"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { useSitePathname } from "@/components/layout/site-path-provider";
import { uiContent } from "@/content/ui";
import { getLocaleFromPathname, getLocalizedPath } from "@/lib/i18n";

export function NotFoundContent() {
  const locale = getLocaleFromPathname(useSitePathname());
  const copy = uiContent[locale].notFound;

  return (
    <Container className="flex min-h-[65vh] flex-col justify-center py-20">
      <p className="mb-4 font-mono text-sm text-[var(--muted)]">404</p>
      <h1 className="mb-6 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
        {copy.title}
      </h1>
      <Link className="w-fit border-b border-current pb-1" href={getLocalizedPath("/", locale)}>
        {copy.returnHome}
      </Link>
    </Container>
  );
}
