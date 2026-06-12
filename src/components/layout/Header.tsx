"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-base/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-4">
          <Badge variant="live" className="hidden sm:inline-flex">
            AO VIVO toda semana
          </Badge>
          <CtaButton size="sm" className="whitespace-nowrap">
            <span className="hidden sm:inline">Entrar na casa</span>
            <span className="sm:hidden">Entrar</span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
