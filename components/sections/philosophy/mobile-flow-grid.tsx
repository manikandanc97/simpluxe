import { MOBILE_FLOW_GRID_COPY } from "@/lib/content/philosophy";
import { FLOW_NODES } from "@/lib/content/philosophy";
import { BoxIcon } from "@animateicons/react/lucide/box-icon";
import { LayoutGridIcon } from "@animateicons/react/lucide/layout-grid-icon";
import { LightbulbIcon } from "@animateicons/react/lucide/lightbulb-icon";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CldImage } from "@/components/ui/cld-image";

export function MobileFlowGrid() {
  return (
    <div className="flex flex-col items-center gap-4 w-full py-2 md:hidden">
      {/* Centered Brand Medallion */}
      <div className="relative flex flex-col items-center justify-center py-1">
        <div aria-hidden="true" className="pointer-events-none absolute size-36 rounded-3xl bg-primary/10 blur-xl" />
        <div className="relative rounded-3xl border border-primary/20 bg-secondary p-2 shadow-elevated">
          <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-primary/50" />
          <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-primary/50" />
          <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-primary/50" />
          <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-primary/50" />
          <div className="flex size-20 items-center justify-center rounded-2xl border border-white bg-white p-3 shadow-xs xs:size-24">
            <CldImage
              src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1791901666/simpluxe/favicon/Bright_Blue_S_Monogram_Logo_spudvz.png"
              alt={MOBILE_FLOW_GRID_COPY.simpluxeLogo}
              width={64}
              height={64}
              className="size-12 select-none object-contain drop-shadow-sm xs:size-14"
              priority
            />
          </div>
        </div>
      </div>

      {/* 4 Feature Nodes in a clean responsive grid */}
      <div className="grid grid-cols-1 gap-2.5 w-full xs:grid-cols-2">
        {/* 1. Direct access */}
        <div data-animated-icon-target data-slot="card" className="bg-white rounded-2xl border border-neutral-100/90 shadow-card p-3 flex flex-col gap-2 relative group">
          <div className="flex items-center justify-between">
            <div className="size-7 flex items-center justify-center text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={LightbulbIcon} size={14} className="w-3.5 h-3.5" />
            </div>
            <span className="inline-flex items-center gap-1 text-2xs font-bold px-2 py-0.5 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-2.5 h-2.5" /> {FLOW_NODES.topLeft.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs text-neutral-900 leading-tight sm:text-sm">
              {FLOW_NODES.topLeft.title}
            </p>
            <p className="text-xs text-neutral-500 leading-snug">
              {FLOW_NODES.topLeft.desc}
            </p>
          </div>
        </div>

        {/* 2. Weekly progress */}
        <div data-animated-icon-target data-slot="card" className="bg-white rounded-2xl border border-neutral-100/90 shadow-card p-3 flex flex-col gap-2 relative group">
          <div className="flex items-center justify-between">
            <div className="size-7 flex items-center justify-center text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={TrendingUpIcon} size={14} className="w-3.5 h-3.5" />
            </div>
            <span className="inline-flex items-center gap-1 text-2xs font-bold px-2 py-0.5 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-2.5 h-2.5" /> {FLOW_NODES.topRight.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs text-neutral-900 leading-tight sm:text-sm">
              {FLOW_NODES.topRight.title}
            </p>
            <p className="text-xs text-neutral-500 leading-snug">
              {FLOW_NODES.topRight.desc}
            </p>
          </div>
        </div>

        {/* 3. Production quality */}
        <div data-animated-icon-target data-slot="card" className="bg-white rounded-2xl border border-neutral-100/90 shadow-card p-3 flex flex-col gap-2 relative group">
          <div className="flex items-center justify-between">
            <div className="size-7 flex items-center justify-center text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={BoxIcon} size={14} className="w-3.5 h-3.5" />
            </div>
            <span className="inline-flex items-center gap-1 text-2xs font-bold px-2 py-0.5 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-2.5 h-2.5" /> {FLOW_NODES.bottomLeft.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs text-neutral-900 leading-tight sm:text-sm">
              {FLOW_NODES.bottomLeft.title}
            </p>
            <p className="text-xs text-neutral-500 leading-snug">
              {FLOW_NODES.bottomLeft.desc}
            </p>
          </div>
        </div>

        {/* 4. Clear ownership */}
        <div data-animated-icon-target data-slot="card" className="bg-white rounded-2xl border border-neutral-100/90 shadow-card p-3 flex flex-col gap-2 relative group">
          <div className="flex items-center justify-between">
            <div className="size-7 flex items-center justify-center text-primary bg-primary/10 rounded-full">
              <AnimatedIcon icon={UsersIcon} size={14} className="w-3.5 h-3.5" />
            </div>
            <span className="inline-flex items-center gap-1 text-2xs font-bold px-2 py-0.5 rounded-md border shadow-2xs bg-primary/8 text-primary border-primary/20 uppercase tracking-widest leading-none">
              <AnimatedIcon icon={LayoutGridIcon} className="w-2.5 h-2.5" /> {FLOW_NODES.bottomRight.badge}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xs text-neutral-900 leading-tight sm:text-sm">
              {FLOW_NODES.bottomRight.title}
            </p>
            <p className="text-xs text-neutral-500 leading-snug">
              {FLOW_NODES.bottomRight.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
