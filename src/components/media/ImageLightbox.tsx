"use client";

import Image from "next/image";
import { useState } from "react";
import { AssetPlaceholder } from "./AssetPlaceholder";

type ImageLightboxProps = {
  images: string[];
  altPrefix?: string;
};

export function ImageLightbox({
  images,
  altPrefix = "Print da plataforma",
}: ImageLightboxProps) {
  const [selected, setSelected] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <AssetPlaceholder key={i} label="TODO_ASSET" aspect="video" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelected(src)}
            className="group relative aspect-video overflow-hidden rounded-[14px] border border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
