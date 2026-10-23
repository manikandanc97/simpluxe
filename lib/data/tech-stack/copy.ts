import { COMMON } from "@/lib/data/common";

export const TECH_STACK_SECTION_CONTENT = {
  eyebrow: "Our tech stack",
  title: "The right stack for",
  highlightedText: "products that last.",
  descriptionLine1: "Battle-tested technologies — Next.js, TypeScript, React Native, Supabase, and cloud-native architectures —",
  descriptionLine2: "selected for reliability, performance, and long-term maintainability.",
  footerNote: "We choose tools that fit your project — not the other way around.",
};

export const TECH_CATEGORY_TABS_COPY = {
  tools: "Tools",
  weLove: "we love",
  technologyCategories: "Technology categories",
} as const;

export const TECH_VALUE_STRIP_COPY = {
  reliable: "Reliable",
  battleTestedInRealProjects: "Battle-tested in real projects",
  performant: COMMON.labels.performant,
  optimizedForSpeed: "Optimized for speed",
  scalable: "Scalable",
  growsWithYourBusiness: "Grows with your business",
  futureReady: "Future-ready",
  alwaysEvolvingWithBestTools: "Always evolving with best tools",
} as const;

export const TECH_STACK_INTERACTIVE_COPY = {
  technologiesLabel: (category: string) => `${category} technologies`,
} as const;
