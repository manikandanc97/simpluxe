import { ABOUT_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema, getAboutPageSchema } from "@/lib/schema";
import { AboutView } from "@/components/pages/about-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: ABOUT_PAGE_COPY.title,
  description: ABOUT_PAGE_COPY.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.about, path: "/about" },
          ]),
          getAboutPageSchema(),
        ]}
      />
      <AboutView />
    </>
  );
}
