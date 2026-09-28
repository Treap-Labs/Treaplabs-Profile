import type { ReactNode } from "react";

import { SiteDocument, sharedMetadata } from "@/components/layout/site-document";
import { getPageMetadata } from "@/lib/metadata";

export { viewport } from "@/components/layout/site-document";

export const metadata = { ...sharedMetadata, ...getPageMetadata({ locale: "id" }) };

export default function IndonesianLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="id">{children}</SiteDocument>;
}
