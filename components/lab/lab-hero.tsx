import { PageHero } from "@/components/ui/page-hero";
import { COMMON } from "@/lib/data/common";
import { LAB_VIEW_COPY } from "@/lib/data/lab";

export function LabHero() {
  return (
    <PageHero
      currentPage={COMMON.pages.ideas}
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
