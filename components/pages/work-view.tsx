import { Suspense } from "react";
import { ShowcaseSkeleton } from "@/components/ui/skeleton";
import { WorkHero } from "@/components/work/work-hero";
import { WorkProjectBrowser } from "@/components/work/work-project-browser";
import { Container } from "@/components/ui/container";

export function WorkView() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* ── Fixed navbar height spacer so full-width banner starts cleanly below the header ── */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      {/* ── 1. Full-Width Hero Section ── */}
      <WorkHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container
        id="work-projects-container"
        className="pt-10 sm:pt-12 lg:pt-14 pb-20 md:pb-24 lg:pb-32 flex flex-col gap-14 sm:gap-16"
      >
        {/* ── 2. Showcase Controls and Split View ── */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <WorkProjectBrowser />
        </Suspense>
      </Container>
    </div>
  );
}

