"use client";

import { STEP_VISUAL_ENGINEERING_COPY } from "@/lib/content/how-we-work";

import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { DatabaseIcon } from "@animateicons/react/lucide/database-icon";
import { MonitorIcon } from "@animateicons/react/lucide/monitor-icon";
import { ServerIcon } from "@animateicons/react/lucide/server-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { CldImage } from "@/components/ui/cld-image";
import { scene } from "./step-visual-classes";

export function StepVisualEngineering() {
  return (
    <div className={scene.scene}>
      <div className={scene.canvas}>
        <div className={scene.blueprint} aria-hidden="true">
          <div className={scene.blueprintHeader}>
            <DatabaseIcon />
            <span>{STEP_VISUAL_ENGINEERING_COPY.architecture}</span>
          </div>
          <div className="absolute top-3/10 left-2/25 grid h-27/50 w-21/25 grid-cols-process grid-rows-process">
            <svg className="absolute inset-0 size-full text-zinc-200" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
              <path d="M25 21H75V50H50V79" stroke="currentColor" strokeDasharray="3 3" />
            </svg>
            <div className="relative flex items-center justify-center gap-scene-0-7 rounded-scene-1-8 border border-zinc-100 bg-white text-scene-4 font-bold text-zinc-500 shadow-card icon:size-scene-icon-3cqw icon:shrink-0 row-start-1 col-start-1 icon:text-blue-500"><DatabaseIcon /><span>{STEP_VISUAL_ENGINEERING_COPY.db}</span></div>
            <div className="relative flex items-center justify-center gap-scene-0-7 rounded-scene-1-8 border border-zinc-100 bg-white text-scene-4 font-bold text-zinc-500 shadow-card icon:size-scene-icon-3cqw icon:shrink-0 row-start-1 col-start-3 icon:text-purple-500"><ServerIcon /><span>{STEP_VISUAL_ENGINEERING_COPY.api}</span></div>
            <div className="relative flex items-center justify-center gap-scene-0-7 rounded-scene-1-8 border border-zinc-100 bg-white text-scene-4 font-bold text-zinc-500 shadow-card icon:size-scene-icon-3cqw icon:shrink-0 w-13/20 justify-self-center row-start-3 col-start-1 col-end-4 icon:text-pink-500"><MonitorIcon /><span>{STEP_VISUAL_ENGINEERING_COPY.client}</span></div>
          </div>
        </div>

        <div className={scene.ideas} aria-hidden="true">
          <div className={scene.ideasHeader}>
            <CodeIcon /><span className="font-handwriting">{STEP_VISUAL_ENGINEERING_COPY.techStack}</span>
          </div>
          <div className={`${scene.ideasList} font-handwriting`}>
            <span>{STEP_VISUAL_ENGINEERING_COPY.nextJs16}</span><span>{STEP_VISUAL_ENGINEERING_COPY.typescript}</span>
          </div>
          <svg className={scene.ideasArrow} viewBox="0 0 28 28" fill="none">
            <path d="M6 4C10 12 14 16 22 22M14 22H22L20 14" />
          </svg>
        </div>

        <div className={`${scene.annotation} font-handwriting`} aria-hidden="true">
          <span>{STEP_VISUAL_ENGINEERING_COPY.builtTo}<br />{STEP_VISUAL_ENGINEERING_COPY.scale}</span>
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M4 18C10 10 18 10 24 6M16 6H24L22 14" />
          </svg>
        </div>

        <div className={`${scene.market} border-zinc-800 bg-zinc-900 shadow-elevated`} aria-hidden="true">
          <div className="flex items-center gap-scene-0-8 indicator:size-scene-1-6 indicator:rounded-full indicator:bg-red-400 indicator-second:bg-amber-400 indicator-third:bg-emerald-500 span:ml-scene-1 span:font-mono span:text-scene-2 span:text-zinc-400">
            <i /><i /><i /><span>{STEP_VISUAL_ENGINEERING_COPY.bash}</span>
          </div>
          <div className="mt-scene-1-6 flex flex-col gap-scene-0-7 font-mono text-scene-2 leading-snug wrap-anywhere text-zinc-100 span:text-pink-500 direct-div-second:text-zinc-400 direct-div-last:text-emerald-400">
            <div><span>{STEP_VISUAL_ENGINEERING_COPY.symbol}</span> {STEP_VISUAL_ENGINEERING_COPY.npmRunBuild}</div>
            <div>{STEP_VISUAL_ENGINEERING_COPY.compiling}</div>
            <div>{STEP_VISUAL_ENGINEERING_COPY.compiledIn21s}</div>
          </div>
          <svg className={scene.marketArrow} viewBox="0 0 32 48" fill="none">
            <path d="M12 4C12 20 20 30 20 44M12 36L20 44L28 36" />
          </svg>
        </div>

        <div className={`${scene.result} flex items-center gap-scene-0-8 icon:size-scene-icon-1-9cqw icon:shrink-0 icon:text-blue-500 font-handwriting`} aria-hidden="true">
          <ShieldCheckIcon /><span>{STEP_VISUAL_ENGINEERING_COPY.zero}<br />{STEP_VISUAL_ENGINEERING_COPY.downtime}</span>
        </div>

        <div className={scene.character}>
          <CldImage
            src="simpluxe/process/design-develop"
            alt={STEP_VISUAL_ENGINEERING_COPY.simpluxeDevelopmentPhaseBuildingSoftwareAt}
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
