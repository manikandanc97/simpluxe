import { EXPERTISE_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema, getServicesSchema } from "@/lib/schema";
import { ServicesView } from "@/components/pages/services-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: EXPERTISE_PAGE_COPY.title,
  description: EXPERTISE_PAGE_COPY.description,
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.expertise, path: "/expertise" },
          ]),
          ...getServicesSchema(),
        ]}
      />
      <ServicesView />
    </>
  );
}
