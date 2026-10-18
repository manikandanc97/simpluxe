import { LabExperiments } from "@/components/lab/lab-experiments";
import { LabHero } from "@/components/lab/lab-hero";
import { Container } from "@/components/ui/container";

export function LabView() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* ── Fixed navbar height spacer so full-width banner starts cleanly below the header ── */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      {/* ── 1. Full-Width Hero Section ── */}
      <LabHero />

      <Container className="pt-10 sm:pt-12 lg:pt-14 pb-20 md:pb-24 lg:pb-32 flex flex-col gap-14 sm:gap-16">
        <LabExperiments />
      </Container>
    </div>
  );
}
