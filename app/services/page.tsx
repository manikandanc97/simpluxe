import { SERVICES_PAGE_COPY } from "@/lib/content/metadata";
import { ServicesView } from "@/components/pages/services-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES_PAGE_COPY.title,
  description: SERVICES_PAGE_COPY.description,
};

export default function ServicesPage() {
  return <ServicesView />;
}
