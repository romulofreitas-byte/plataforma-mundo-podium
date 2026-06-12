"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MediaSlot } from "./MediaSlot";

type ImageLightboxProps = {
  images: string[];
  altPrefix?: string;
  framed?: boolean;
  placeholderCount?: number;
};

export function ImageLightbox({
  images,
  altPrefix = "Print da plataforma",
  framed = false,
  placeholderCount = 3,
}: ImageLightboxProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const validImages = images.filter(
    (src) => src && !src.includes("TODO_ASSET"),
  );

  if (validImages.length === 0) {
    return (
      <div
        className={cn(
          "grid gap-4",
          placeholderCount <= 2
            ? "sm:grid-cols-2"
            : placeholderCount === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {Array.from({ length: placeholderCount }, (_, i) => (
          <div
            key={i}
            className={cn(framed && "media-frame overflow-hidden rounded-[14px]")}
          >
            <MediaSlot
              variant="image"
              label={`${altPrefix} ${i + 1}`}
              className={framed ? "!rounded-none" : "rounded-[14px] border border-line"}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {validImages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelected(src)}
            className={cn(
              "group relative aspect-video overflow-hidden rounded-[14px] border border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              framed && "media-frame border-transparent",
            )}
          >
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="object-cover transition group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelected(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-line px-3 py-1 text-sm text-white"
            onClick={() => setSelected(null)}
            aria-label="Fechar"
          >
            Fechar
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={selected}
              alt={altPrefix}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
