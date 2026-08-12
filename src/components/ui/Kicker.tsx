import { cn } from "@/lib/utils";

type KickerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Kicker({ children, className }: KickerProps) {
  return (
    <div className="mb-6">
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-kicker text-gold sm:text-sm",
          className,
        )}
      >
        {children}
      </p>
      <div className="mt-3 h-1 w-16 rounded-full bg-gold" aria-hidden="true" />
    </div>
  );
}
