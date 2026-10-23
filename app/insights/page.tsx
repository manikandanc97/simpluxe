import type { Metadata } from "next";
import { InsightsView } from "@/components/pages/insights-view";
import { JsonLd } from "@/components/shared/json-ld";
import { COMMON } from "@/lib/data/common";
import { INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: INSIGHTS_PAGE_COPY.metadataTitle,
  description: INSIGHTS_PAGE_COPY.metadataDescription,
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: COMMON.pages.home, path: "/" },
          { name: INSIGHTS_PAGE_COPY.currentPage, path: "/insights" },
        ])}
      />
      <InsightsView />
    </>
  );
}
