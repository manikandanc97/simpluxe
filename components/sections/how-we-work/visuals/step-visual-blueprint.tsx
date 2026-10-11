"use client";

import { DecorativeArrow } from "@/components/ui/decorative-arrow";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { STEP_VISUAL_BLUEPRINT_COPY } from "@/lib/content/how-we-work";

import { ChartBarIcon } from "@animateicons/react/lucide/chart-bar-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { FileTextIcon } from "@animateicons/react/lucide/file-text-icon";
import { GitForkIcon } from "@animateicons/react/lucide/git-fork-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { LightbulbIcon } from "@animateicons/react/lucide/lightbulb-icon";
import { TargetIcon } from "@animateicons/react/lucide/target-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { CldImage } from "@/components/ui/cld-image";
import { scene } from "./step-visual-classes";

export function StepVisualBlueprint() {
  return (
    <div className={scene.scene}>
      {/* Cards share the image canvas, with room for every label to float. */}
      <div className={scene.canvas}>
        <div data-animated-icon-target className={scene.blueprint} aria-hidden="true">
          <div className={scene.blueprintHeader}>
            <AnimatedIcon icon={GitForkIcon} />
            <span>{STEP_VISUAL_BLUEPRINT_COPY.projectBlueprint}</span>
          </div>
          <svg className="absolute inset-0 size-full text-zinc-100" viewBox="0 0 580 300" preserveAspectRatio="none" fill="none">
            <path
              d="M290 117V135H151V153M290 135H429V153M151 210V222H290V234M429 210V222H290"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <div data-animated-icon-target className="absolute flex items-center justify-center gap-scene-1 rounded-scene-5 border border-zinc-100 bg-white text-scene-6 leading-tight font-semibold text-zinc-600 shadow-card icon:size-scene-icon-1-9cqw icon-frame:size-scene-icon-1-9cqw icon:shrink-0 top-13/50 left-3/20 h-13/100 w-7/10">
            <AnimatedIcon icon={UsersIcon} className="text-purple-500" />
            <span>{STEP_VISUAL_BLUEPRINT_COPY.businessGoals}</span>
          </div>
          <div data-animated-icon-target className="absolute flex items-center justify-center gap-scene-1 rounded-scene-5 border border-zinc-100 bg-white text-scene-6 leading-tight font-semibold text-zinc-600 shadow-card icon:size-scene-icon-1-9cqw icon-frame:size-scene-icon-1-9cqw icon:shrink-0 top-51/100 left-1/25 h-19/100 w-11/25">
            <AnimatedIcon icon={TargetIcon} className="text-rose-500" />
            <span>{STEP_VISUAL_BLUEPRINT_COPY.user}<br />{STEP_VISUAL_BLUEPRINT_COPY.research}</span>
          </div>
          <div data-animated-icon-target className="absolute flex items-center justify-center gap-scene-1 rounded-scene-5 border border-zinc-100 bg-white text-scene-6 leading-tight font-semibold text-zinc-600 shadow-card icon:size-scene-icon-1-9cqw icon-frame:size-scene-icon-1-9cqw icon:shrink-0 top-51/100 left-13/25 h-19/100 w-11/25">
            <AnimatedIcon icon={FileTextIcon} className="text-purple-500" />
            <span>{STEP_VISUAL_BLUEPRINT_COPY.feature}<br />{STEP_VISUAL_BLUEPRINT_COPY.scope}</span>
          </div>
          <div data-animated-icon-target className="absolute flex items-center justify-center gap-scene-1 rounded-scene-5 border border-zinc-100 bg-white text-scene-6 leading-tight font-semibold text-zinc-600 shadow-card icon:size-scene-icon-1-9cqw icon-frame:size-scene-icon-1-9cqw icon:shrink-0 top-39/50 left-3/20 h-13/100 w-7/10">
            <AnimatedIcon icon={LayersIcon} className="text-blue-500" />
            <span>{STEP_VISUAL_BLUEPRINT_COPY.technicalPlan}</span>
          </div>
        </div>

        <div data-animated-icon-target className={scene.ideas} aria-hidden="true">
          <div className={scene.ideasHeader}>
            <AnimatedIcon icon={LightbulbIcon} />
            <span className="font-handwriting">{STEP_VISUAL_BLUEPRINT_COPY.ideas}</span>
          </div>
          <div className={`${scene.ideasList} font-handwriting`}>
            <span>{STEP_VISUAL_BLUEPRINT_COPY.businessGoals2}</span>
            <span>{STEP_VISUAL_BLUEPRINT_COPY.targetAudience}</span>
          </div>
          <DecorativeArrow direction="down-right" className={scene.ideasArrow} />
        </div>

        <div className={`${scene.annotation} font-handwriting`} aria-hidden="true">
          <span>{STEP_VISUAL_BLUEPRINT_COPY.fromStrategy}<br />{STEP_VISUAL_BLUEPRINT_COPY.toProduct}</span>
          <DecorativeArrow direction="up-right" className="ml-auto size-scene-3-7 text-primary" />
        </div>

        <div data-animated-icon-target className={`${scene.market} ${scene.marketSurface}`} aria-hidden="true">
          <div className={scene.marketHeader}>
            <span>{STEP_VISUAL_BLUEPRINT_COPY.marketResearch}</span>
            <AnimatedIcon icon={ChartBarIcon} className="text-primary" />
          </div>
          <div className="mt-scene-1-1 mb-scene-1-6 flex flex-col gap-scene-0-6 span:h-scene-0-9 span:w-scene-9-2 span:rounded-scene-1 span:bg-neutral-200 span-following:w-scene-5-2 span-following:bg-neutral-100">
            <span />
            <span />
          </div>
          <div className="flex flex-col gap-scene-1 direct-div:flex direct-div:items-center direct-div:gap-scene-1 direct-div:text-scene-5 direct-div:leading-snug direct-div:font-semibold direct-div:text-zinc-600 icon:size-scene-icon-1-9cqw icon-frame:size-scene-icon-1-9cqw icon:shrink-0 icon:text-purple-500">
            {[STEP_VISUAL_BLUEPRINT_COPY.competitorAnalysis, STEP_VISUAL_BLUEPRINT_COPY.userInsights, STEP_VISUAL_BLUEPRINT_COPY.featurePriorities].map((item) => (
              <div key={item}>
                <AnimatedIcon icon={CircleCheckIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <DecorativeArrow direction="down" className={scene.marketArrow} />
        </div>

        <div className={`${scene.result} font-handwriting`} aria-hidden="true">
          <span>{STEP_VISUAL_BLUEPRINT_COPY.clearPlan}<br />{STEP_VISUAL_BLUEPRINT_COPY.betterResults}</span>
        </div>

        <div className={scene.character}>
          <CldImage
            src="simpluxe/process/discover"
            alt={STEP_VISUAL_BLUEPRINT_COPY.simpluxeDiscoveryPhasePlanningAProject}
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
