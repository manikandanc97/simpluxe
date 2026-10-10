"use client";

import Image, { ImageProps } from "next/image";

const cloudinaryLoader = ({ src, width, quality, format = "auto" }: { src: string; width: number; quality?: number | string; format?: string }) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "drdl4pdnx";
  
  if (src.startsWith("http")) return src;
  
  // Cloudinary optimization params
  const q = quality === "auto:eco" ? "auto:eco" : (quality || "auto");
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_${format},c_limit,w_${width},q_${q}/${src}`;
};

export interface CldImageProps extends Omit<ImageProps, "src" | "quality"> {
  src: string;
  format?: string;
  quality?: number | string;
}

export function CldImage({ format, quality, ...props }: CldImageProps) {
  const nextQuality = typeof quality === "number" ? quality : undefined;
  const loaderStrQuality = typeof quality === "string" ? quality : undefined;

  return (
    <Image
      loader={(p) => cloudinaryLoader({ ...p, format, quality: loaderStrQuality || p.quality })}
      {...props}
      quality={nextQuality}
    />
  );
}
