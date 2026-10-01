import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPage } from "@/components/projects/project-page";
import { getProject, projectSlugs } from "@/content/projects";
import { getPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, "id");
  if (!project) notFound();

  return getPageMetadata({
    locale: "id",
    path: `/projects/${slug}/`,
    title: `${project.title} | TreapLabs`,
    description: project.description,
    image: { url: project.image, alt: project.alt, width: 2400, height: 1800 },
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug, "id");
  if (!project) notFound();

  return <ProjectPage project={project} locale="id" />;
}
