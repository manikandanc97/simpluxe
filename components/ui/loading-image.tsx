"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Keep the image's own dimensions and positioning, including fill and inline icons.
// Keying by source resets loading/error state when a service or project changes.
export function LoadingImage(props: ImageProps) {
  const source = typeof props.src === "string" ? props.src : "src" in props.src ? props.src.src : props.src.default.src;
  return <ImageWithStatus key={source} {...props} />;
}

function ImageWithStatus({ alt, className, onLoad, onError, ...props }: ImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const failed = status === "error";

  return (
    <Image
      {...props}
      alt={alt}
      {...(failed ? { src: "/image-unavailable.svg", loader: undefined, unoptimized: true, placeholder: "empty", blurDataURL: undefined } : {})}
      aria-busy={status === "loading"}
      data-image-status={status}
      className={cn(className, status === "loading" && "image-loading", failed && "bg-surface-elevated")}
      onLoad={(event) => {
        if (!failed) {
          setStatus("loaded");
          onLoad?.(event);
        }
      }}
      onError={(event) => {
        if (!failed) {
          setStatus("error");
          onError?.(event);
        }
      }}
    />
  );
}
