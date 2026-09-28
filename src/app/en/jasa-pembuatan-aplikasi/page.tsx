import { ServicePage } from "@/components/layout/service-page";
import { getService } from "@/content/services";
import { getPageMetadata } from "@/lib/metadata";

const service = getService("jasa-pembuatan-aplikasi", "en")!;

export const metadata = getPageMetadata({
  locale: "en",
  path: `/${service.slug}/`,
  title: service.metaTitle,
  description: service.description,
});

export default function Page() {
  return <ServicePage service={service} locale="en" />;
}
