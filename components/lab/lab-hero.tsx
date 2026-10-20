"use client";

import { PageHero } from "@/components/ui/page-hero";
import { LAB_VIEW_COPY } from "@/lib/content/lab";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";

const features = [
  { ...LAB_VIEW_COPY.valueProps[0], icon: SparklesIcon },
  { ...LAB_VIEW_COPY.valueProps[1], icon: ZapIcon },
  { ...LAB_VIEW_COPY.valueProps[2], icon: CodeIcon },
];

export function LabHero() {
  return (
    <PageHero
      homeLabel={LAB_VIEW_COPY.home}
      currentPage={LAB_VIEW_COPY.ideas}
      heading={
        <>
          {LAB_VIEW_COPY.ideas2}{" "}
          <span className="text-white/95">{LAB_VIEW_COPY.prototypes}</span>
        </>
      }
      description={LAB_VIEW_COPY.description}
      features={features}
    />
  );
}
