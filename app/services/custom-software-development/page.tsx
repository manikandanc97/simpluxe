import { CUSTOM_SOFTWARE_PAGE_COPY } from "@/lib/data/metadata";
import { CUSTOM_SOFTWARE_HERO_COPY } from "@/lib/data/custom-software";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema, getCustomSoftwareServiceSchema } from "@/lib/schema";
import { CustomSoftwareView } from "@/components/pages/custom-software-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: CUSTOM_SOFTWARE_PAGE_COPY.title,
  description: CUSTOM_SOFTWARE_PAGE_COPY.description,
  path: "/services/custom-software-development",
});

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.services, path: "/services" },
            {
              name: CUSTOM_SOFTWARE_HERO_COPY.currentPage,
              path: "/services/custom-software-development",
            },
          ]),
          getCustomSoftwareServiceSchema(),
        ]}
      />
      <CustomSoftwareView />
    </>
  );
}
