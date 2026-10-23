import { CUSTOM_SOFTWARE_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { ServiceDetailView } from "@/components/pages/service-detail-view";
import { SERVICES_LIST } from "@/lib/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: CUSTOM_SOFTWARE_PAGE_COPY.title,
  description: CUSTOM_SOFTWARE_PAGE_COPY.description,
  path: "/services/custom-software-development",
});

export default function CustomSoftwarePage() {
  const customSoftwareService = SERVICES_LIST.find(
    (service) => service.id === "custom-software"
  );

  if (!customSoftwareService) {
    throw new Error("Custom software service data is missing.");
  }

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.services, path: "/services" },
            {
              name: customSoftwareService.name,
              path: "/services/custom-software-development",
            },
          ]),
          getServiceSchema(customSoftwareService),
        ]}
      />
      <ServiceDetailView service={customSoftwareService} />
    </>
  );
}
