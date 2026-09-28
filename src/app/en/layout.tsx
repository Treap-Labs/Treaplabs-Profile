import type { ReactNode } from "react";

import { SiteDocument, sharedMetadata } from "@/components/layout/site-document";
import { getPageMetadata } from "@/lib/metadata";

export { viewport } from "@/components/layout/site-document";

export const metadata = { ...sharedMetadata, ...getPageMetadata({ locale: "en" }) };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
