import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import dynamic from "next/dynamic";
import { ProcessSkeleton } from "@/components/ui/skeleton";

const InteractiveStepper = dynamic(
  () => import("./how-we-work/interactive-stepper").then((mod) => mod.InteractiveStepper),
  { ssr: true, loading: () => <ProcessSkeleton /> }
);

export function HowWeWork() {
  return (
    <Section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative z-10 border-y border-primary/25 bg-secondary"
    >
      <Container>
        <InteractiveStepper />
      </Container>
    </Section>
  );
}
