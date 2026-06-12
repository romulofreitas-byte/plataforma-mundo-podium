import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export function Card({ children, className, accent = false }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[14px] border border-line bg-card p-6",
        accent && "pt-7",
        className,
      )}
    >
      {accent && (
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gold"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
