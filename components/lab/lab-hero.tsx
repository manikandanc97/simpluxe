"use client";

import { PageHero } from "@/components/ui/page-hero";
import { LAB_VIEW_COPY } from "@/lib/content/lab";

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
    />
  );
}
