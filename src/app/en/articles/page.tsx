import { ArticlesPage } from "@/components/articles/articles-page";
import { articleLabels } from "@/content/articles";
import { getPageMetadata } from "@/lib/metadata";

const copy = articleLabels.en;

export const metadata = getPageMetadata({
  locale: "en",
  path: "/articles/",
  title: copy.pageTitle,
  description: copy.description,
});

export default function Page() {
  return <ArticlesPage locale="en" />;
}
