"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageLightboxOverlay } from "@/components/media/ImageLightbox";

export type CasaProofCardProps = {
  images: readonly string[];
  highlight: string;
  name: string;
  role: string;
  bodyQuote?: string;
  alt: string;
  /** spotlight = destaque; grid = peça alinhada do mural */
  variant?: "spotlight" | "grid";
  priority?: boolean;
  className?: string;
};

export function CasaProofCard({
  images,
  highlight,
  name,
  role,
  bodyQuote,
  alt,
  variant = "grid",
  priority = false,
  className,
}: CasaProofCardProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const cover = images[0];
  const hasParts = images.length > 1;
  const showImage = Boolean(cover) && !imgError;

  const openLightbox = () => {
    setIndex(0);
    setOpen(true);
  };

  const partsBadge = hasParts ? (
    <span className="absolute bottom-2 right-2 rounded-md border border-line bg-black/70 px-2 py-0.5 text-xs text-white">
      {images.length} partes
    </span>
  ) : null;

  const lightbox =
    open && showImage ? (
      <ImageLightboxOverlay
        images={[...images]}
        index={index}
        alt={alt}
        onClose={() => setOpen(false)}
        onIndexChange={setIndex}
      />
    ) : null;

  if (variant === "spotlight") {
    return (
      <>
        <article
          className={cn(
            "grid items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10",
            className,
          )}
        >
          <div className="min-w-0">
            {showImage ? (
              <button
                type="button"
                onClick={openLightbox}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-[14px] border border-line bg-[#0c0d12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`Ampliar depoimento de ${name}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- contain no frame */}
                <img
                  src={cover}
                  alt={alt}
                  className="mx-auto block h-auto max-h-[min(52vh,440px)] w-full object-contain p-3 transition group-hover:opacity-95"
                  loading={priority ? "eager" : "lazy"}
                  decoding="async"
                  onError={() => setImgError(true)}
                />
                {partsBadge}
              </button>
            ) : cover ? (
              <div className="rounded-[14px] border border-line bg-card px-3 py-8 text-center text-sm text-muted">
                Print indisponível
              </div>
            ) : null}
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-2xl font-semibold leading-snug text-gold sm:text-3xl">
              &ldquo;{highlight}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-white sm:text-lg">{name}</p>
              <p className="mt-1 text-sm text-gold/90">{role}</p>
            </div>
            {bodyQuote && (
              <blockquote className="mt-5 border-l-2 border-gold/30 pl-3 text-sm leading-relaxed text-muted">
                &ldquo;{bodyQuote}&rdquo;
              </blockquote>
            )}
            <p className="mt-6 text-sm text-muted">É isso que a casa gera.</p>
          </div>
        </article>
        {lightbox}
      </>
    );
  }

  // grid — mesma altura visual; print inteiro (contain), sem crop
  return (
    <>
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card",
          className,
        )}
      >
        {showImage ? (
          <button
            type="button"
            onClick={openLightbox}
            className="group flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={`Ampliar depoimento de ${name}`}
          >
            <div className="relative flex h-56 items-center justify-center bg-[#0c0d12] sm:h-64">
              {/* eslint-disable-next-line @next/next/no-img-element -- contain no slot fixo */}
              <img
                src={cover}
                alt={alt}
                className="max-h-full max-w-full object-contain p-2 transition group-hover:opacity-95"
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                onError={() => setImgError(true)}
              />
              {partsBadge}
            </div>
            <div className="flex flex-1 flex-col border-t border-line px-3.5 py-3">
              <p className="line-clamp-2 text-sm font-semibold leading-snug text-gold">
                &ldquo;{highlight}&rdquo;
              </p>
              <p className="mt-2 truncate text-sm font-semibold text-white">{name}</p>
              <p className="truncate text-xs text-gold/90">{role}</p>
            </div>
          </button>
        ) : (
          <div className="flex flex-1 items-center justify-center px-3 py-8 text-sm text-muted">
            Print indisponível
          </div>
        )}
      </article>
      {lightbox}
    </>
  );
}
