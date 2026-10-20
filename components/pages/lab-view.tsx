import { LabExperiments } from "@/components/lab/lab-experiments";
import { LabHero } from "@/components/lab/lab-hero";
import { Container } from "@/components/ui/container";

export function LabView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <LabHero />

      <Container className="flex flex-col gap-16 py-12 md:py-16 lg:py-24">
        <LabExperiments />
      </Container>
    </>
  );
}
