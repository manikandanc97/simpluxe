import { ABOUT_PAGE_COPY } from "@/lib/content/metadata";
import { AboutView } from "@/components/pages/about-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ABOUT_PAGE_COPY.title,
  description:
    ABOUT_PAGE_COPY.description,
};

export default function AboutPage() {
  return <AboutView />;
}
