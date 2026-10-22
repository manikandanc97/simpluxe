import { WORK_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { WorkView } from "@/components/pages/work-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: WORK_PAGE_COPY.title,
  description: WORK_PAGE_COPY.description,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: COMMON.pages.home, path: "/" },
          { name: COMMON.pages.work, path: "/work" },
        ])}
      />
      <WorkView />
    </>
  );
}
