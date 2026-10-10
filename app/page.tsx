import { WorkbenchHero } from "@/components/workbench/workbench-hero";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { SelectedWork } from "@/components/sections/selected-work";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhySimpluxe } from "@/components/sections/philosophy";
import { TechStack } from "@/components/sections/tech-stack";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full relative">
      <AmbientBackground screen="home" />
      <div className="relative z-10 w-full flex flex-col">
        <WorkbenchHero />
        <WhatWeBuild />
        <SelectedWork />
        <HowWeWork />
        <WhySimpluxe />
        <TechStack />
        <FAQ />
        <CTA />
      </div>
    </div>
  );
}
