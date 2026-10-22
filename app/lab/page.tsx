import { LAB_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { LabView } from "@/components/pages/lab-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: LAB_PAGE_COPY.title,
  description: LAB_PAGE_COPY.description,
  path: "/lab",
});

export default function LabPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: COMMON.pages.home, path: "/" },
          { name: COMMON.pages.ideas, path: "/lab" },
        ])}
      />
      <LabView />
    </>
  );
}
