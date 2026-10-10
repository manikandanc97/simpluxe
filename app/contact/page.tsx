import { CONTACT_PAGE_COPY } from "@/lib/content/metadata";
import { ContactView } from "@/components/pages/contact-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: CONTACT_PAGE_COPY.title,
  description:
    CONTACT_PAGE_COPY.description,
};

export default function ContactPage() {
  return <ContactView />;
}
