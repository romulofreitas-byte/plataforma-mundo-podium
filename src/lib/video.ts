import type { VideoSource } from "@/config/site";

export function hasVideoSource(source: VideoSource | null | undefined): source is VideoSource {
  if (!source) return false;
  if (source.type === "youtube") return Boolean(source.id);
  return Boolean(source.src);
}
