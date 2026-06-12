"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" variant="dark">
      <RevealOnScroll>
        <HighlightHeadline
          text="Perguntas frequentes."
          highlight="frequentes"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <div className="mt-10 space-y-3">
        {site.faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <RevealOnScroll key={item.pergunta} delay={i * 0.04}>
              <div className="overflow-hidden rounded-[14px] border border-line bg-card">
                <button
                  id={`faq-button-${i}`}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-semibold text-white">{item.pergunta}</span>
                  <span
                    className={cn(
                      "shrink-0 text-gold transition-transform",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={cn(
                    "grid transition-all",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-sm font-medium leading-relaxed text-muted">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
