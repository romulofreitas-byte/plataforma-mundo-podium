"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "gold" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  trackConversion?: boolean;
  scrollTo?: string;
};

export function Button({
  variant = "gold",
  href,
  onClick,
  children,
  className,
  size = "md",
  trackConversion = false,
  scrollTo,
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = cn(
    "inline-flex items-center justify-center rounded-[10px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    sizes[size],
    variant === "gold"
      ? "cta-glow bg-gold text-base hover:shadow-gold"
      : "border border-line bg-transparent text-white transition-all hover:border-gold/50 hover:text-gold",
    className,
  );

  const handleClick = () => {
    if (trackConversion) trackCtaClick();
    if (scrollTo) {
      document.querySelector(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        onClick={() => {
          if (trackConversion) trackCtaClick();
        }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} onClick={handleClick}>
      {children}
    </button>
  );
}
