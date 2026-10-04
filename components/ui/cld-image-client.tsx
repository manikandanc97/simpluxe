"use client";

import { CldImage as BaseCldImage, type CldImageProps } from "next-cloudinary";

export function CldImage(props: CldImageProps) {
  return <BaseCldImage {...props} />;
}
