"use client";

import { usePathname } from "next/navigation";
import { createContext, type ReactNode, useContext, useSyncExternalStore } from "react";

const SitePathContext = createContext<string | null>(null);
const subscribe = () => () => {};

export function SitePathProvider({ children, initialPathname }: {
  children: ReactNode;
  initialPathname?: string;
}) {
  const pathname = usePathname();
  // A static host serves the same 404 HTML at any URL. Hydrate its default
  // content first, then resolve the requested path and language in the browser.
  const resolvedPathname = useSyncExternalStore(
    subscribe,
    () => pathname,
    () => initialPathname ?? pathname,
  );

  return <SitePathContext value={resolvedPathname}>{children}</SitePathContext>;
}

export function useSitePathname() {
  const pathname = useContext(SitePathContext);
  if (pathname === null) throw new Error("useSitePathname must be used within SitePathProvider");
  return pathname;
}
