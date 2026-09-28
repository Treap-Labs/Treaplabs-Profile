import { ServicePage } from "@/components/layout/service-page";
import { getService } from "@/content/services";
import { getPageMetadata } from "@/lib/metadata";

const service = getService("jasa-pembuatan-aplikasi")!;

export const metadata = getPageMetadata({
  locale: "id",
  path: `/${service.slug}/`,
  title: service.metaTitle,
  description: service.description,
});

export default function Page() {
  return <ServicePage service={service} locale="id" />;
}
