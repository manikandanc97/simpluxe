import { CONTACT_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { COMMON } from "@/lib/data/common";
import { JsonLd } from "@/components/shared/json-ld";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/schema";
import { ContactView } from "@/components/pages/contact-view";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: CONTACT_PAGE_COPY.title,
  description: CONTACT_PAGE_COPY.description,
  path: "/connect",
});

export default function ConnectPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.connect, path: "/connect" },
          ]),
          getContactPageSchema(),
        ]}
      />
      <ContactView />
    </>
  );
}
