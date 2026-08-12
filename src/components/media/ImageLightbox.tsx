"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { MediaSlot } from "./MediaSlot";

type ImageLightboxProps = {
  images: string[];
  altPrefix?: string;
  framed?: boolean;
  placeholderCount?: number;
};

type ImageLightboxOverlayProps = {
  images: string[];
  index: number;
  alt?: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ImageLightboxOverlay({
  images,
  index,
  alt = "Depoimento",
  onClose,
  onIndexChange,
}: ImageLightboxOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const validImages = images.filter(
    (src) => src && !src.includes("TODO_ASSET"),
  );
  const safeIndex = Math.min(Math.max(index, 0), Math.max(validImages.length - 1, 0));
  const current = validImages[safeIndex];
  const hasNav = validImages.length > 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!hasNav) return;
      if (e.key === "ArrowLeft") {
        onIndexChange((safeIndex - 1 + validImages.length) % validImages.length);
      }
      if (e.key === "ArrowRight") {
        onIndexChange((safeIndex + 1) % validImages.length);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [hasNav, onClose, onIndexChange, safeIndex, validImages.length]);

  if (!current || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 pt-20"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-20 rounded-full border border-line px-3 py-1 text-sm text-white sm:top-4"
        onClick={onClose}
        aria-label="Fechar"
      >
        Fechar
      </button>

      {hasNav && (
        <>
          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-black/50 px-3 py-2 text-white sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((safeIndex - 1 + validImages.length) % validImages.length);
            }}
            aria-label="Imagem anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-black/50 px-3 py-2 text-white sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((safeIndex + 1) % validImages.length);
            }}
            aria-label="Próxima imagem"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative h-[80vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {hasNav && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted">
          {safeIndex + 1} / {validImages.length}
        </p>
      )}
    </div>,
    document.body,
  );
}

export function ImageLightbox({
  images,
  altPrefix = "Print da plataforma",
  framed = false,
  placeholderCount = 3,
}: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
            onClick={() => setSelectedIndex(i)}
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

      {selectedIndex !== null && (
        <ImageLightboxOverlay
          images={validImages}
          index={selectedIndex}
          alt={altPrefix}
          onClose={() => setSelectedIndex(null)}
          onIndexChange={setSelectedIndex}
        />
      )}
    </>
  );
}
