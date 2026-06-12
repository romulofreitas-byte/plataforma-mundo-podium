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
      {/* Mobile bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 border-t border-line bg-base/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden",
          visible ? "translate-y-0" : "translate-y-full",
        )}
      >
        <CtaButton size="lg" className="w-full">
          {site.precoMensal}/mês · Entrar na casa
        </CtaButton>
      </div>

      {/* Desktop floating */}
      <div
        className={cn(
          "fixed bottom-8 right-8 z-50 hidden transition-all duration-300 md:block",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <CtaButton size="lg" className="shadow-gold-lg">
          {site.precoMensal}/mês · Entrar na casa
        </CtaButton>
      </div>
    </>
  );
}
