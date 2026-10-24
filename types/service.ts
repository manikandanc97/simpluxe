import type { COMMON } from "@/lib/data/common";
import type { PROJECT_TYPES } from "@/lib/data/leads";
import type { ServiceTechSlug } from "@/lib/data/tech-stack";
import type { ElementType as LucideIcon } from "react";

export interface ServiceData {
  id: string;
  number: string;
  name: (typeof PROJECT_TYPES)[number];
  tabLabel: string;
  icon: LucideIcon;
  category: typeof COMMON.categories.clientInterface | typeof COMMON.categories.coreSystems | typeof COMMON.categories.foundation;
  outcome: string;
  shortTagline: string;
  
  headline: {
    normal: string;
    highlight: string;
  };
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  whatWeBuildSubtitle: string;
  whatWeBuild: {
    title: string;
    description: string;
    bgColor: string;
    iconColor: string;
  }[];
  deliverables: string[];
  perfectFor: {
    title: string;
    desc: string;
    icon: string;
  }[];
  techStackSummary: string;
  techStack: { slug: ServiceTechSlug; purpose: string }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedWorkUrl: string;
  detailPageLabel?: string;
  mockup: {
    type: "dashboard" | "websites" | "ecommerce" | "mobile" | "saas" | "branding" | "design" | "ai" | "custom";
    title: string;
    badge: string;
    subtitle: string;
    image: {
      publicId: string;
      version: string;
      width: number;
      height: number;
      alt: string;
    };
  };
}

export type ServiceViewData = Omit<ServiceData, "icon">;
