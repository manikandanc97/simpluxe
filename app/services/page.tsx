import { SERVICES_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema, getServicesSchema } from "@/lib/schema";
import { ServicesView } from "@/components/pages/services-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: SERVICES_PAGE_COPY.title,
  description: SERVICES_PAGE_COPY.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.services, path: "/services" },
          ]),
          ...getServicesSchema(),
        ]}
      />
      <ServicesView />
    </>
  );
}
