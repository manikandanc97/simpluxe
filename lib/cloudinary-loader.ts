"use client";

import type { ImageLoaderProps } from "next/image";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() || "drdl4pdnx";

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith("/")) {
    return src;
  }

  const url = new URL(src);
  const uploadPath = `/${cloudName}/image/upload/`;

  if (url.hostname !== "res.cloudinary.com" || !url.pathname.startsWith(uploadPath)) {
    throw new Error("Cloudinary loader received an unsupported image URL.");
  }

  const resize = `c_limit,w_${width}`;
  const optimization = `f_auto/q_${quality ?? "auto:eco"}`;
  url.pathname = url.pathname.replace(uploadPath, `${uploadPath}${resize}/${optimization}/`);
  return url.toString();
}
