import { HERO_CONTENT } from "@/lib/data/hero";
import { WorkbenchHeroActions } from "./workbench-hero-actions";
import { WorkbenchHeroClient } from "./workbench-hero-client";

function WorkbenchHeroIntro() {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white xs:text-5xl sm:text-5xl lg:text-6xl font-satoshi">
          <span className="block">{HERO_CONTENT.headlineLine1}</span>
          <span className="block">
            {HERO_CONTENT.headlineLine2Prefix}{" "}
            <span className="text-sky-100">{HERO_CONTENT.headlineHighlight}</span>
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {HERO_CONTENT.description}
        </p>
      </div>

      <WorkbenchHeroActions />
    </div>
  );
}

export function WorkbenchHero() {
  return (
    <WorkbenchHeroClient
      intro={<WorkbenchHeroIntro />}
      scrollIndicatorTitle={HERO_CONTENT.scrollIndicatorTitle}
    />
  );
}
