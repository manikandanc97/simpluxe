import { COMMON } from "../common";

export const SERVICES_DELIVERABLES_CONTENT = {
  eyebrow: "Deliverables",
  title: "Everything included",
  description: "A complete solution from planning to launch.",
  perfectForTitle: "Perfect for",
  perfectForDesc: "Tailored for your business stage",
};

// services
export const SERVICES_ACTIVE_SHOWCASE_COPY = {
  projectInterest: (name: string) => `Interested in ${name} services.`,
  symbol: COMMON.symbols.bullet,
  startAProject: COMMON.actions.startProject,
  viewRelatedWork: "View related work",
  exploreService: (name: string) => `Explore ${name}`,
} as const;

export const SERVICE_DETAIL_PAGE_COPY = {
  metadataTitle: (name: string) => `${name} Services`,
  craftsmanship: "Built with precision.",
} as const;

export const SERVICES_HERO_COPY = {
  digitalServicesFor: "Software and digital services for ",
  yourBusiness: "your business.",
  fromWebsitesAndMobileProductsTo: "From custom web applications and SaaS platforms to mobile apps and bespoke business systems, we engineer software built for speed, clarity, and scale.",
  customSoftwareDeepDive: "Explore Custom Software Development Overview",
} as const;

export const SERVICES_TECH_STACK_COPY = {
  techStack: COMMON.labels.techStack,
  recommendedTechStacks: "Recommended tools",
  title: "Recommended",
  highlightedText: "tools",
  projectFitNote: "We confirm the final tools after understanding your project, budget and existing systems.",
} as const;

export const SERVICES_WHAT_WE_BUILD_COPY = {
  capabilitiesCount: (count: number) => `${count} Capabilities`,
  whatWeBuild: "What we build",
} as const;
