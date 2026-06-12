import { cn } from "@/lib/utils";

type BadgeProps = {
  variant?: "live" | "default";
  children: React.ReactNode;
  className?: string;
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variant === "live"
          ? "border-gold/60 text-gold"
          : "border-line text-muted",
        className,
      )}
    >
      {variant === "live" && (
        <span
          className="h-2 w-2 rounded-full bg-gold animate-pulse-live"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
