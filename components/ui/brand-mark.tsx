import { cn } from "@/lib/utils";
import { CLOUDINARY_BRAND_MARK, cloudinaryImageUrl } from "@/lib/cloudinary";
import { ThemeImage } from "@/components/ui/theme-image";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <ThemeImage
      src={cloudinaryImageUrl(CLOUDINARY_BRAND_MARK)}
      alt=""
      width={CLOUDINARY_BRAND_MARK.width}
      height={CLOUDINARY_BRAND_MARK.height}
      sizes="64px"
      variant="icon"
      containerClassName={cn(
        "size-9 shrink-0 rounded-xl shadow-sm",
        className
      )}
      className="size-full rounded-xl object-contain"
    />
  );
}
