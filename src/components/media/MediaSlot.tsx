import { IconLine, type IconName } from "@/components/icons/IconLine";
import { cn } from "@/lib/utils";

type MediaSlotProps = {
  variant?: "video" | "image" | "portrait";
  className?: string;
  /** Apenas para leitores de tela */
  label?: string;
};

const config: Record<
  NonNullable<MediaSlotProps["variant"]>,
  { aspect: string; icon: IconName }
> = {
  video: { aspect: "aspect-video", icon: "play" },
  image: { aspect: "aspect-square", icon: "olho" },
  portrait: { aspect: "aspect-[3/4]", icon: "pessoas" },
};

export function MediaSlot({
  variant = "video",
  className,
  label = "Mídia em breve",
}: MediaSlotProps) {
  const { aspect, icon } = config[variant];

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-bg-1 via-card to-bg-2",
        aspect,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,183,30,0.1)_0%,transparent_65%)]"
        aria-hidden
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-gold/10 shadow-gold sm:h-16 sm:w-16">
        <IconLine name={icon} size={26} className="text-gold/80" />
      </span>
    </div>
  );
}
