"use client";

import { Plus } from "lucide-react";
import { MotionConfig, useReducedMotion } from "motion/react";

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/primitives/radix/accordion";
import type { ServiceContent } from "@/content/services";

export function ServiceInteractions({ faq }: { faq: ServiceContent["faq"] }) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <Accordion type="single" collapsible className="min-w-0 border-t border-hairline">
        {faq.slice(0, 3).map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index + 1}`} className="border-b border-hairline">
            <AccordionHeader>
              <AccordionTrigger className="group flex min-h-20 w-full items-center gap-4 py-6 text-left font-display text-lg font-medium leading-relaxed text-ink hover:text-blue focus-visible:relative focus-visible:z-10 md:gap-6">
                <span aria-hidden="true" className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1">{item.question}</span>
                <Plus aria-hidden="true" className="size-5 shrink-0 text-blue transition-transform duration-200 group-data-[state=open]:rotate-45 motion-reduce:transition-none" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: "hidden" }}
            >
              <p className="pb-7 pl-8 pr-9 text-sm leading-7 text-body md:pl-10">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MotionConfig>
  );
}
