"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { LOADING_COPY } from "@/lib/data/ui";
import { Skeleton } from "@/components/ui/skeleton";

type ThemeImageVariant = "showcase" | "mobile" | "window" | "icon" | "none";

export interface ThemeImageProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string;
  skeletonClassName?: string;
  variant?: ThemeImageVariant;
  onLoad?: ComponentProps<typeof Image>["onLoad"];
}

export function ThemeImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  containerClassName,
  skeletonClassName,
  variant = "showcase",
  onLoad,
  ...rest
}: ThemeImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const currentSrcKey = typeof src === "string" ? src : JSON.stringify(src);
  const isLoaded = loadedSrc === currentSrcKey;

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoadedSrc(currentSrcKey);
    }
  }, [currentSrcKey]);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill ? "size-full" : "block",
        containerClassName
      )}
    >
      {/* ── Genuine Theme Skeleton (No spinners/loading screen) ── */}
      {variant !== "none" && (
        <div
          role="status"
          aria-hidden={isLoaded}
          className={cn(
            "absolute inset-0 z-10 overflow-hidden transition-opacity duration-500 ease-out select-none pointer-events-none",
            isLoaded ? "opacity-0" : "opacity-100",
            skeletonClassName
          )}
        >
          <span className="sr-only">{LOADING_COPY.imagePreview}</span>

          <Skeleton className="relative size-full overflow-hidden rounded-inherit">
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-400/10 to-transparent animate-ocean-shimmer" />
            </div>
          </Skeleton>
        </div>
      )}

      {/* ── Next.js Image with smooth load transition ── */}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-500 ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(event) => {
          setLoadedSrc(currentSrcKey);
          onLoad?.(event);
        }}
        {...rest}
      />
    </div>
  );
}
