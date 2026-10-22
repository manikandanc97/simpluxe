import { COMMON } from "./common";
import { TAGLINE } from "./site";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { StarIcon } from "@animateicons/react/lucide/star-icon";
import type { HeroContent } from "@/types/hero";

// hero
export const HERO_CONTENT: HeroContent = {
  eyebrow: "Digital, done beautifully.",
  headlineLine1: TAGLINE.line1,
  headlineLine2Prefix: TAGLINE.line2Prefix,
  headlineHighlight: TAGLINE.highlight,
  description: "We engineer custom software, scalable web applications, and mobile platforms — built for clarity, performance, and real business impact.",
  ctaPrimary: COMMON.actions.startProject,
  ctaSecondaryTitle: "See our work",
  ctaSecondarySubtitle: "Explore selected projects",
  scrollIndicatorLabel: "Scroll down to explore capabilities",
  scrollIndicatorText: "Discover more",
  scrollIndicatorTitle: "Scroll to explore",
  stats: [
    {
      value: "50+",
      label: "Happy Clients",
      icon: UsersIcon,
    },
    {
      value: "100+",
      label: COMMON.labels.projectsDelivered,
      icon: BriefcaseIcon,
    },
    {
      value: "5 ★",
      label: "Client Satisfaction",
      icon: StarIcon,
    },
  ],
};

export const WORKBENCH_COPY = {
  sectionNumber: "S/01",
  selectedWork: "Selected digital work",
  tagline: "Let’s start first, then we can make it look better.",
  chooseProject: "Choose a project",
  projectIndex: "Project index",
  outcomeHeading: "Outcome, not output",
  outcomeDescription: "Strategy, design and engineering working as one.",
  canvasLabel: "Live project canvas",
  projectCountSuffix: " / 04",
  featuredBuild: "Featured build",
  featuredDescription: "Built for clarity, conversion and scale.",
  websiteAlt: (name: string) => `${name} website preview`,
  mobileAlt: (name: string) => `${name} mobile preview`,
} as const;
