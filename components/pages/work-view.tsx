import { Suspense } from "react";
import { ShowcaseSkeleton } from "@/components/ui/skeleton";
import { Hero } from "@/components/work/hero";
import { ProjectBrowser } from "@/components/work/project-browser";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/lib/data/projects";

export function WorkView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <Hero />

      {/* ── Main Structured Showcase Area ── */}
      <Container
        id="work-projects-container"
        className="flex flex-col gap-16 py-12 md:py-16 lg:py-24"
      >
        {/* ── 2. Showcase Controls and Split View ── */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <ProjectBrowser projects={PROJECTS} />
        </Suspense>
      </Container>
    </>
  );
}

