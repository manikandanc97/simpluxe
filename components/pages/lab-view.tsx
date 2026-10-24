import { ExperimentsGrid } from "@/components/lab/experiments-grid";
import { Hero } from "@/components/lab/hero";
import { Container } from "@/components/ui/container";

export function LabView() {
  return (
    <>
      {/* ── 1. Full-Width Hero Section ── */}
      <Hero />

      <Container className="flex flex-col gap-16 py-12 md:py-16 lg:py-24">
        <ExperimentsGrid />
      </Container>
    </>
  );
}
