"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile bar — full width, pushes content via layout padding */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 glass border-t border-transparent p-3 transition-transform duration-300 md:hidden",
          visible ? "translate-y-0" : "translate-y-full",
        )}
        role="region"
        aria-label="Chamada para ação"
      >
        <CtaButton size="lg" className="w-full">
          {site.precoMensal}/mês · Entrar na casa
        </CtaButton>
      </div>

      {/* Desktop floating */}
      <div
        className={cn(
          "fixed bottom-8 right-8 z-40 hidden transition-all duration-300 md:block",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
        aria-hidden={!visible}
      >
        <CtaButton size="lg" className="shadow-gold-lg">
          {site.precoMensal}/mês · Entrar na casa
        </CtaButton>
      </div>
    </>
  );
}
