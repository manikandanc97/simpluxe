import { LAB_PAGE_COPY } from "@/lib/content/metadata";
import { LabView } from "@/components/pages/lab-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: LAB_PAGE_COPY.title,
  description: LAB_PAGE_COPY.description,
};

export default function LabPage() {
  return <LabView />;
}
