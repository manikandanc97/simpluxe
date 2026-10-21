import { CldImage } from "@/components/ui/cld-image";
import { type ServiceViewData } from "@/lib/content/services";

interface ServicesMockupWindowProps {
  service: ServiceViewData;
}

export function ServicesMockupWindow({ service }: ServicesMockupWindowProps) {
  return (
    <div className="lg:col-span-7 relative flex items-center justify-center">
      {/* Subtle Ambient Backlight Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent-soft/30 to-accent-soft/30 rounded-3xl blur-2xl -z-10" />

      <div className="relative w-full rounded-2xl overflow-hidden sm:rounded-3xl">
        <CldImage
          src={service.image}
          alt={service.name}
          width={1200}
          height={800}
          sizes="(max-width: 1023px) 100vw, 60vw"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
