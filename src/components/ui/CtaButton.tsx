"use client";

import { site } from "@/config/site";
import { Button } from "./Button";

type CtaButtonProps = {
  children?: React.ReactNode;
  variant?: "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function CtaButton({
  children = "Entrar na Plataforma",
  variant = "gold",
  size = "md",
  className,
}: CtaButtonProps) {
  return (
    <Button
      href={site.checkoutUrl}
      variant={variant}
      size={size}
      trackConversion
      className={className}
    >
      {children}
    </Button>
  );
}
