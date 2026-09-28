import { NotFoundContent } from "@/components/layout/not-found-content";
import { SiteDocument, sharedMetadata } from "@/components/layout/site-document";

export const metadata = {
  ...sharedMetadata,
  title: "404 | TreapLabs",
  robots: { index: false, follow: true },
};

export { viewport } from "@/components/layout/site-document";

export default function GlobalNotFound() {
  return (
    <SiteDocument locale="id" initialPathname="/404/">
      <NotFoundContent />
    </SiteDocument>
  );
}
