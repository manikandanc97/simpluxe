import { Suspense } from "react";
import { ShowcaseSkeleton } from "@/components/ui/skeleton";
import { WorkHero } from "@/components/work/work-hero";
import { WorkProjectBrowser } from "@/components/work/work-project-browser";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/lib/data/projects";

export function WorkView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <WorkHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container
        id="work-projects-container"
        className="flex flex-col gap-16 py-12 md:py-16 lg:py-24"
      >
        {/* ── 2. Showcase Controls and Split View ── */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <WorkProjectBrowser projects={PROJECTS} />
        </Suspense>
      </Container>
    </>
  );
}

