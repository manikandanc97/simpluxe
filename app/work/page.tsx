import { WORK_PAGE_COPY } from "@/lib/content/metadata";
import { WorkView } from "@/components/pages/work-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: WORK_PAGE_COPY.title,
  description: WORK_PAGE_COPY.description,
};

export default function WorkPage() {
  return <WorkView />;
}
