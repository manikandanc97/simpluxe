import { cn } from "@/lib/utils";
import { CLOUDINARY_BRAND_MARK, cloudinaryImageUrl } from "@/lib/cloudinary";
import Image from "next/image";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Image
      src={cloudinaryImageUrl(CLOUDINARY_BRAND_MARK)}
      alt=""
      width={CLOUDINARY_BRAND_MARK.width}
      height={CLOUDINARY_BRAND_MARK.height}
      sizes="64px"
      className={cn(
        "size-9 shrink-0 rounded-xl object-contain shadow-sm",
        className
      )}
    />
  );
}
