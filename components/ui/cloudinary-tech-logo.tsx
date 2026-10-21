import { cloudinaryTechLogoUrl } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CloudinaryTechLogoProps {
  slug: string;
  className?: string;
}

export function CloudinaryTechLogo({ slug, className }: CloudinaryTechLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs transition-transform duration-300 group-hover:scale-105",
        className
      )}
    >
      <Image
        src={cloudinaryTechLogoUrl(slug)}
        alt=""
        width={128}
        height={128}
        sizes="40px"
        className="size-full object-contain"
      />
    </span>
  );
}
