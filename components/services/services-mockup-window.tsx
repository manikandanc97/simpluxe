import { type ServiceViewData } from "@/lib/data/services";
import { cloudinaryImageUrl } from "@/lib/cloudinary";
import { ThemeImage } from "@/components/ui/theme-image";

interface ServicesMockupWindowProps {
  service: ServiceViewData;
}

export function ServicesMockupWindow({ service }: ServicesMockupWindowProps) {
  const { image } = service.mockup;

  return (
    <div className="flex items-center justify-center lg:col-span-7">
      <ThemeImage
        key={image.publicId}
        src={cloudinaryImageUrl(image)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 54vw, (min-width: 640px) 92vw, 100vw"
        priority={service.id === "websites"}
        variant="showcase"
        containerClassName="w-full rounded-2xl sm:rounded-3xl shadow-luxury"
        className="h-auto w-full rounded-2xl object-contain sm:rounded-3xl"
      />
    </div>
  );
}
