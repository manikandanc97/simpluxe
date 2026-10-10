"use client";

import { STEP_VISUAL_LAUNCH_COPY } from "@/lib/content/how-we-work";

import { ActivityIcon } from "@animateicons/react/lucide/activity-icon";
import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import { RocketIcon } from "@animateicons/react/lucide/rocket-icon";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { WifiIcon } from "@animateicons/react/lucide/wifi-icon";
import { useId } from "react";
import { CldImage } from "@/components/ui/cld-image";
import { scene } from "./step-visual-classes";

export function StepVisualLaunch() {
  const chartGradientId = useId();

  return (
    <div className={scene.scene}>
      <div className={scene.canvas}>
        <div className={scene.blueprint} aria-hidden="true">
          <div className={scene.blueprintHeader}>
            <ActivityIcon className="text-emerald-500" /><span>{STEP_VISUAL_LAUNCH_COPY.liveGrowing}</span>
          </div>
          <div className="absolute top-3/10 left-9/100 flex w-41/50 items-center justify-between gap-scene-1 @max-scene-xs/process:top-7/25 @max-scene-xs/process:flex-col @max-scene-xs/process:items-start">
            <div className="flex flex-col gap-scene-0-5 @max-scene-xs/process:flex-row @max-scene-xs/process:items-center @max-scene-xs/process:gap-scene-1">
              <span className="text-scene-2 font-semibold whitespace-nowrap text-zinc-500 uppercase @max-scene-xs/process:max-w-scene-13 @max-scene-xs/process:text-2xs @max-scene-xs/process:whitespace-normal">{STEP_VISUAL_LAUNCH_COPY.activeUsers}</span>
              <strong className="text-scene-11 leading-none font-black text-zinc-800 @max-scene-xs/process:text-lg">{STEP_VISUAL_LAUNCH_COPY.text104k}</strong>
            </div>
            <div className="flex items-center gap-scene-0-4 rounded-scene-3 bg-emerald-50 px-scene-0-8 py-scene-0-6 text-scene-1 font-bold whitespace-nowrap text-chart-5 icon:size-scene-icon-1-7cqw icon:shrink-0 @max-scene-xs/process:px-scene-1 @max-scene-xs/process:py-scene-0-5"><TrendingUpIcon /><span>{STEP_VISUAL_LAUNCH_COPY.text42}</span></div>
          </div>
          <svg className="absolute top-31/50 left-9/100 h-6/25 w-41/50 overflow-visible @max-scene-xs/process:top-43/50 @max-scene-xs/process:h-3/25" viewBox="0 0 200 40" fill="none">
            <path d="M2 35Q20 30 40 25T80 15T120 20T160 5T198 2" stroke={`url(#${chartGradientId})`} strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id={chartGradientId} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9333EA" /><stop offset="1" stopColor="#E11D48" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={scene.ideas} aria-hidden="true">
          <div className={scene.ideasHeader}>
            <RocketIcon /><span className="font-handwriting">{STEP_VISUAL_LAUNCH_COPY.goLive}</span>
          </div>
          <div className={`${scene.ideasList} font-handwriting`}>
            <span>{STEP_VISUAL_LAUNCH_COPY.seoReady}</span><span>{STEP_VISUAL_LAUNCH_COPY.fastLoad}</span>
          </div>
          <svg className={scene.ideasArrow} viewBox="0 0 28 28" fill="none">
            <path d="M6 4C10 12 14 16 22 22M14 22H22L20 14" />
          </svg>
        </div>

        <div className={`${scene.annotation} font-handwriting`} aria-hidden="true">
          <span>{STEP_VISUAL_LAUNCH_COPY.weAre}<br />{STEP_VISUAL_LAUNCH_COPY.live}</span>
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M4 18C10 10 18 10 24 6M16 6H24L22 14" />
          </svg>
        </div>

        <div className={`${scene.market} ${scene.marketSurface}`} aria-hidden="true">
          <div className={scene.marketHeader}>
            <span>{STEP_VISUAL_LAUNCH_COPY.serverStatus}</span><GlobeIcon className="text-blue-500" />
          </div>
          <div className="mt-scene-1-6 flex flex-col gap-scene-1-1 text-scene-3 leading-snug font-semibold text-zinc-500 direct-div:flex direct-div:items-center direct-div:justify-between direct-div:gap-scene-0-7">
            {[[STEP_VISUAL_LAUNCH_COPY.ssl, STEP_VISUAL_LAUNCH_COPY.active], [STEP_VISUAL_LAUNCH_COPY.cdn, STEP_VISUAL_LAUNCH_COPY.global], [STEP_VISUAL_LAUNCH_COPY.uptime, STEP_VISUAL_LAUNCH_COPY.text999]].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <span className="flex items-center gap-scene-0-8 font-bold whitespace-nowrap text-zinc-800 indicator:size-scene-1-3 indicator:shrink-0 indicator:rounded-full indicator:bg-emerald-500"><i />{value}</span>
              </div>
            ))}
          </div>
          <svg className={scene.marketArrow} viewBox="0 0 32 48" fill="none">
            <path d="M12 4C12 20 20 30 20 44M12 36L20 44L28 36" />
          </svg>
        </div>

        <div className={`${scene.result} flex items-center gap-scene-0-8 icon:size-scene-icon-1-9cqw icon:shrink-0 icon:text-chart-5 font-handwriting`} aria-hidden="true">
          <WifiIcon /><span>{STEP_VISUAL_LAUNCH_COPY.subSecond}<br />{STEP_VISUAL_LAUNCH_COPY.load}</span>
        </div>

        <div className={scene.character}>
          <CldImage
            src="simpluxe/process/launch"
            alt={STEP_VISUAL_LAUNCH_COPY.simpluxeLaunchPhaseCelebratingALive}
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
