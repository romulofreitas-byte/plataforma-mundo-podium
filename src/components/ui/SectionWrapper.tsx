import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  warm?: boolean;
  as?: "section" | "div" | "footer";
};

export function SectionWrapper({
  id,
  children,
  className,
  warm = false,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "diagonal-bands vignette cold-glow-top relative py-24 md:py-28 lg:py-36",
        warm && "warm-glow",
        className,
      )}
    >
      <div className="section-content mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
