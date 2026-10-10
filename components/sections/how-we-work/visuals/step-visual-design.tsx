"use client";

import { STEP_VISUAL_DESIGN_COPY } from "@/lib/content/how-we-work";

import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { MousePointerIcon } from "@animateicons/react/lucide/mouse-pointer-icon";
import { PaletteIcon } from "@animateicons/react/lucide/palette-icon";
import { PencilIcon } from "@animateicons/react/lucide/pencil-icon";
import { CldImage } from "@/components/ui/cld-image";
import { scene } from "./step-visual-classes";

export function StepVisualDesign() {
  return (
    <div className={scene.scene}>
      <div className={scene.canvas}>
        {/* Keep the palette and typography in the clear space beside the image. */}
        <div className={scene.blueprint} aria-hidden="true">
          <div className={scene.blueprintHeader}>
            <PaletteIcon />
            <span>{STEP_VISUAL_DESIGN_COPY.designSystem}</span>
          </div>
          <div className="absolute top-7/25 left-3/20 flex h-9/50 w-7/10 items-center justify-center gap-scene-1-3 rounded-scene-5 border border-zinc-100 bg-white shadow-card span:size-scene-3-2 span:rounded-full span:bg-primary span-second:bg-chart-2 span-third:bg-blue-500 span-fourth:bg-chart-5">
            <span /><span /><span /><span />
          </div>
          <svg className="absolute top-23/50 left-47/100 h-3/25 w-3/50 text-zinc-200" viewBox="0 0 20 40" fill="none">
            <path d="M10 0V40" stroke="currentColor" strokeDasharray="3 3" />
          </svg>
          <div className="absolute top-29/50 left-3/20 flex h-3/10 w-7/10 flex-col items-center justify-center gap-scene-0-4 rounded-scene-2 border border-zinc-100 bg-white shadow-card span-first:text-scene-10 span-first:leading-none span-first:font-black span-first:text-zinc-800 span-following:text-scene-2 span-following:leading-tight span-following:font-medium span-following:whitespace-nowrap span-following:text-zinc-500">
            <span className="font-satoshi">{STEP_VISUAL_DESIGN_COPY.aa}</span>
            <span>{STEP_VISUAL_DESIGN_COPY.satoshiInter}</span>
          </div>
        </div>

        <div className={scene.ideas} aria-hidden="true">
          <div className={scene.ideasHeader}>
            <PencilIcon />
            <span className="font-handwriting">{STEP_VISUAL_DESIGN_COPY.uiUx}</span>
          </div>
          <div className={`${scene.ideasList} font-handwriting`}>
            <span>{STEP_VISUAL_DESIGN_COPY.pixelPerfect}</span>
            <span>{STEP_VISUAL_DESIGN_COPY.userFirst}</span>
          </div>
          <svg className={scene.ideasArrow} viewBox="0 0 28 28" fill="none">
            <path d="M6 4C10 12 14 16 22 22M14 22H22L20 14" />
          </svg>
        </div>

        <div className={`${scene.annotation} font-handwriting`} aria-hidden="true">
          <span>{STEP_VISUAL_DESIGN_COPY.beautiful}<br />{STEP_VISUAL_DESIGN_COPY.intuitive}</span>
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M4 18C10 10 18 10 24 6M16 6H24L22 14" />
          </svg>
        </div>

        <div className={`${scene.market} ${scene.marketSurface}`} aria-hidden="true">
          <div className={scene.marketHeader}>
            <span>{STEP_VISUAL_DESIGN_COPY.components}</span>
            <LayoutDashboardIcon className="text-purple-500" />
          </div>
          <div className="mt-scene-1-7 flex flex-col gap-scene-1-3">
            <div className="flex h-scene-4 items-center justify-center rounded-scene-1 bg-primary span:h-scene-0-7 span:w-scene-5-2 span:rounded-scene-1 span:bg-white/50"><span /></div>
            <div className="flex h-scene-4 items-center rounded-scene-1 border border-zinc-200 bg-neutral-100 px-scene-1-5 span:h-scene-0-7 span:w-scene-7-8 span:rounded-scene-1 span:bg-neutral-300"><span /></div>
            <div className="mt-scene-0-3 flex items-center justify-between direct-span:h-scene-0-7 direct-span:w-scene-6-5 direct-span:rounded-scene-1 direct-span:bg-neutral-200">
              <span />
              <div className="relative h-scene-2 w-scene-4 rounded-scene-2 bg-purple-500 span:absolute span:top-scene-0-3 span:right-scene-0-3 span:size-scene-1-4 span:rounded-full span:bg-white"><span /></div>
            </div>
          </div>
          <svg className={scene.marketArrow} viewBox="0 0 32 48" fill="none">
            <path d="M12 4C12 20 20 30 20 44M12 36L20 44L28 36" />
          </svg>
        </div>

        <div className={`${scene.result} flex items-center gap-scene-0-8 icon:size-scene-icon-1-9cqw icon:shrink-0 icon:text-purple-500 font-handwriting`} aria-hidden="true">
          <MousePointerIcon />
          <span>{STEP_VISUAL_DESIGN_COPY.interactive}<br />{STEP_VISUAL_DESIGN_COPY.prototypes}</span>
        </div>

        <div className={scene.character}>
          <CldImage
            src="simpluxe/process/design-develop"
            alt={STEP_VISUAL_DESIGN_COPY.simpluxeDesignPhaseCreatingInterfacesAt}
            width={1774}
            height={887}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 550px"
            className={scene.image}
          />
        </div>
      </div>
    </div>
  );
}
