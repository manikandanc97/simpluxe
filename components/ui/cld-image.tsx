"use client";

import { type ImageProps } from "next/image";
import { LoadingImage } from "./loading-image";

const cloudinaryLoader = ({ src, width, quality, format = "auto" }: { src: string; width: number; quality?: number | string; format?: string }) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "drdl4pdnx";
  
  if (src.startsWith("/") || (src.startsWith("http") && !src.startsWith("https://res.cloudinary.com/"))) return src;
  
  // Cloudinary optimization params
  const q = quality === "auto:eco" ? "auto:eco" : (quality || "auto");
  
  const transformation = `f_${format},c_limit,w_${width},q_${q}`;
  if (src.startsWith("https://res.cloudinary.com/")) {
    return src.replace("/image/upload/", `/image/upload/${transformation}/`);
  }
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${src}`;
};

export interface CldImageProps extends Omit<ImageProps, "src" | "quality"> {
  src: string;
  format?: string;
  quality?: number | string;
}

export function CldImage({ alt, format, quality, ...props }: CldImageProps) {
  const nextQuality = typeof quality === "number" ? quality : undefined;
  const loaderStrQuality = typeof quality === "string" ? quality : undefined;

  return (
    <LoadingImage
      loader={(p) => cloudinaryLoader({ ...p, format, quality: loaderStrQuality || p.quality })}
      {...props}
      alt={alt}
      quality={nextQuality}
    />
  );
}
