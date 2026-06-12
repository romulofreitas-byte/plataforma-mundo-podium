"use client";

import Image from "next/image";
import { useState } from "react";
import { AssetPlaceholder } from "./AssetPlaceholder";

type AuthorityImageProps = {
  src: string;
  alt: string;
};

export function AuthorityImage({ src, alt }: AuthorityImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <AssetPlaceholder
        label="TODO_ASSET: romulo.jpg"
        aspect="portrait"
        className="h-full"
      />
    );
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
