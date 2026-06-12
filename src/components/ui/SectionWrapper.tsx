import { WarmParallaxGlow } from "@/components/ui/WarmParallaxGlow";
import { cn } from "@/lib/utils";

export type SectionVariant = "dark" | "warm" | "bands";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  /** Stronger warm glow for climax sections (offer) */
  warmGlow?: "default" | "strong";
  /** Subtler bands texture for footer */
  bandsSubtle?: boolean;
  as?: "section" | "div" | "footer";
};

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-dark",
  warm: "bg-warm",
  bands: "bg-bands",
};

export function SectionWrapper({
  id,
  children,
  className,
  variant = "dark",
  warmGlow = "default",
  bandsSubtle = false,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "section vignette relative py-24 md:py-32",
        variantClasses[variant],
        variant === "warm" && warmGlow === "strong" && "bg-warm-strong",
        variant === "bands" && bandsSubtle && "bg-bands-subtle",
        className,
      )}
    >
      {variant === "warm" && <WarmParallaxGlow />}
      <div className="section-content mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
