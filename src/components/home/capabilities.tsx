"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MotionConfig, useReducedMotion } from "motion/react";
import Link from "next/link";

import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "@/components/animate-ui/primitives/radix/tabs";
import { servicePages } from "@/content/services";

const labels = ["Aplikasi seluler", "Website & aplikasi web", "AI & otomasi", "Konsultasi teknologi"];
const deliverableLabels: Record<string, string> = {
  "UI implementation": "Implementasi antarmuka",
  "Quality assurance": "Pengujian kualitas",
  "Company profile": "Website profil perusahaan",
  "Deployment dan monitoring": "Peluncuran dan pemantauan",
  "AI feasibility study": "Studi kelayakan AI",
  "Workflow automation": "Otomasi alur kerja",
  "Monitoring model": "Pemantauan model",
  "Technical audit": "Audit teknis",
  "Architecture review": "Evaluasi arsitektur",
  "Technology roadmap": "Peta pengembangan teknologi",
  "Code review": "Tinjauan kode",
  "Performance review": "Evaluasi performa",
  "Team augmentation": "Pendampingan tim pengembang",
};

export function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <Tabs defaultValue={servicePages[0].slug} className="mt-10 md:mt-14">
        <div className="overflow-x-auto px-1 py-2">
          <TabsList aria-label="Pilih kapabilitas TreapLabs" className="flex min-w-max border-b border-hairline md:min-w-0">
            {servicePages.map((service, index) => (
              <TabsTrigger key={service.slug} value={service.slug} className="relative flex min-h-16 shrink-0 items-center gap-3 border-b-2 border-transparent px-5 py-4 text-sm text-muted transition-colors hover:text-ink data-[state=active]:border-blue data-[state=active]:text-ink md:flex-1 md:justify-center md:px-3">
                <span className="font-mono text-[10px] text-blue">0{index + 1}</span>{labels[index]}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContents mode="layout" className="mt-6" style={{ overflow: "visible" }} transition={{ duration: reduceMotion ? 0 : 0.25 }}>
          {servicePages.map((service, index) => (
            <TabsContent key={service.slug} value={service.slug} initial={false} animate={{ opacity: 1, filter: "none" }} exit={{ opacity: 1, filter: "none" }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="relative grid gap-8 py-5 md:min-h-[380px] md:grid-cols-[.6fr_2fr_1.5fr] md:gap-10 md:py-8">
              <span aria-hidden="true" className="font-display text-7xl leading-none tracking-[-.07em] text-muted/30 md:text-[clamp(5rem,9vw,8rem)]">0{index + 1}</span>
              <div><h3 className="text-3xl font-medium leading-tight tracking-[-.035em] md:text-4xl">{labels[index]}</h3><p className="mt-5 max-w-lg text-base leading-7">{service.intro}</p><Link href={`/${service.slug}/`} className="mt-7 inline-flex min-h-12 items-center gap-4 border-b border-blue text-sm font-medium text-ink hover:text-blue">Jelajahi layanan <span className="sr-only">{labels[index]}</span><ArrowUpRight aria-hidden="true" className="size-5 text-blue" /></Link></div>
              <div className="md:border-l md:border-hairline md:pl-8"><p className="eyebrow mb-4">Yang kami kerjakan</p><ul className="space-y-3">{service.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" /><span>{deliverableLabels[item] ?? item}</span></li>)}</ul></div>
            </TabsContent>
          ))}
        </TabsContents>
      </Tabs>
    </MotionConfig>
  );
}
