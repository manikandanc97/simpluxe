import { HERO_COLLAGE_COPY } from "@/lib/data/hero";
import { SectionHeader } from "@/components/ui/section-header";
import { SelectedWorkClient } from "./selected-work/selected-work-client";

function SelectedWorkIntro() {
  return (
    <SectionHeader
      eyebrow={HERO_COLLAGE_COPY.selectedWorkEyebrow}
      title={HERO_COLLAGE_COPY.selectedWorkTitle}
      highlightedText={HERO_COLLAGE_COPY.selectedWorkHighlightedText}
      description={HERO_COLLAGE_COPY.selectedWorkDescription}
      centered
      maxWidth="max-w-3xl"
      headingId="selected-work-heading"
    />
  );
}

export function SelectedWork() {
  return <SelectedWorkClient intro={<SelectedWorkIntro />} />;
}
