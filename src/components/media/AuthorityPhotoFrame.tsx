"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaSlot } from "./MediaSlot";

type AuthorityPhotoFrameProps = {
  src: string;
  alt: string;
};

function isValidAsset(src: string): boolean {
  return Boolean(src && !src.includes("TODO_ASSET"));
}

export function AuthorityPhotoFrame({ src, alt }: AuthorityPhotoFrameProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(!isValidAsset(src));

  return (
    <div className="media-frame relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-gold/20 to-transparent"
        aria-hidden
      />
      {error ? (
        <MediaSlot variant="portrait" label={alt} className="h-full" />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, 400px"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
