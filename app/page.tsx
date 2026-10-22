import type { Metadata } from "next";
import { HOME_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { WorkbenchHero } from "@/components/workbench/workbench-hero";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhySimpluxe } from "@/components/sections/philosophy";
import { TechStack } from "@/components/sections/tech-stack";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = createPageMetadata({
  title: HOME_PAGE_COPY.title,
  description: HOME_PAGE_COPY.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
      <WorkbenchHero />
      <WhatWeBuild />
      <HowWeWork />
      <WhySimpluxe />
      <TechStack />
      <FAQ />
      <CTA />
    </>
  );
}
