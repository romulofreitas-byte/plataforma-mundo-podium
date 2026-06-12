"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { VideoSource } from "@/config/site";
import { hasVideoSource } from "@/lib/video";
import { MediaSlot } from "./MediaSlot";

type VideoFullHDProps = {
  source?: VideoSource | null;
  label?: string;
  className?: string;
  autoplayOnView?: boolean;
};

export function VideoFullHD({
  source,
  label = "Vídeo",
  className = "",
  autoplayOnView = false,
}: VideoFullHDProps) {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoplayOnView || !hasVideoSource(source)) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoplayOnView, source]);

  if (!hasVideoSource(source)) {
    return <MediaSlot variant="video" className={className} label={label} />;
  }

  const poster = source.poster;

  if (!active) {
    return (
      <div
        ref={containerRef}
        className={`relative aspect-video w-full overflow-hidden rounded-[14px] border border-line bg-card ${className}`}
      >
        {poster ? (
          <Image
            src={poster}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-bg-1 to-bg-2" />
        )}
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label="Reproduzir vídeo"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-base shadow-gold-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A0B10" aria-hidden>
              <polygon points="8,5 19,12 8,19" />
            </svg>
          </span>
        </button>
      </div>
    );
  }

  if (source.type === "youtube") {
    return (
      <div
        className={`aspect-video w-full overflow-hidden rounded-[14px] border border-line ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`aspect-video w-full overflow-hidden rounded-[14px] border border-line ${className}`}
    >
      <video
        src={source.src}
        controls
        playsInline
        className="h-full w-full bg-black object-contain"
        poster={source.poster}
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
