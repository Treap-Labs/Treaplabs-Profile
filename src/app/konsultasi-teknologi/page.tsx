import type { Metadata } from "next";

import { ServicePage } from "@/components/layout/service-page";
import { getService } from "@/content/services";

const service = getService("konsultasi-teknologi")!;

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.description,
  alternates: { canonical: `/${service.slug}/` },
  openGraph: { title: service.metaTitle, description: service.description, url: `/${service.slug}/`, images: ["/images/treaplabs-og.png"] },
  twitter: { card: "summary_large_image", title: service.metaTitle, description: service.description, images: ["/images/treaplabs-og.png"] },
};

export default function Page() {
  return <ServicePage service={service} />;
}
