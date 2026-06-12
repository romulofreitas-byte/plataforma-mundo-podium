import { IconLine } from "@/components/icons/IconLine";

type AssetPlaceholderProps = {
  label?: string;
  aspect?: "video" | "square" | "portrait";
  className?: string;
};

export function AssetPlaceholder({
  label = "TODO_ASSET",
  aspect = "video",
  className = "",
}: AssetPlaceholderProps) {
  if (!label || label.includes("TODO_ASSET")) {
    return null;
  }

  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[3/4]";

  return (
    <div
      className={`flex ${aspectClass} w-full flex-col items-center justify-center rounded-[14px] border border-dashed border-line bg-card/60 p-6 text-center ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <IconLine name="play" size={36} className="mb-3 opacity-60" />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-2">
        {label}
      </span>
    </div>
  );
}
