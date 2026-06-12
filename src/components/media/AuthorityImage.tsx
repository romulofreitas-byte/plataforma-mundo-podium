"use client";

import Image from "next/image";
import { useState } from "react";

type AuthorityImageProps = {
  src: string;
  alt: string;
};

function isValidAsset(src: string): boolean {
  if (!src || src.includes("TODO_ASSET")) return false;
  return true;
}

export function AuthorityImage({ src, alt }: AuthorityImageProps) {
  const [error, setError] = useState(false);

  if (!isValidAsset(src) || error) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 400px"
      onError={() => setError(true)}
    />
  );
}
