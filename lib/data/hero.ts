import { COMMON } from "./common";
import { TAGLINE } from "./site";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { StarIcon } from "@animateicons/react/lucide/star-icon";
import type { HeroContent } from "@/types/hero";

// hero
export const HERO_CONTENT: HeroContent = {
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
      value: COMMON.labels.direct,
      label: "Engineer Partnership",
      icon: UsersIcon,
    },
    {
      value: "Bespoke",
      label: COMMON.labels.projectsDelivered,
      icon: BriefcaseIcon,
    },
    {
      value: "Complete",
      label: COMMON.labels.fullCodeOwnership,
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
export const HERO_COLLAGE_COPY = {
  selectedWorkEyebrow: "Selected work",
  selectedWorkTitle: "Built with purpose.",
  selectedWorkHighlightedText: "Proven in practice.",
  selectedWorkDescription: "Explore the thinking, craft, and measurable outcomes behind a selection of our digital products.",
  featuredDescription: "Strategy, design and engineering in one focused build.",
  featuredLabel: "Featured",
  websiteAlt: (name: string) => `${name} website preview`,
} as const;

export const HERO_SHOWCASE_COPY = {
  centerHeadline: "Bring Your Ideas Online",
  centerSubtitle: "Create stunning, high-performance websites with ease and bring your brand, business, and ideas to life.",
  contactAction: "Contact Us",
  aboutAction: "About Us",
  startAction: "Get Started",
  brandName: "Simpluxe",
  cardTitles: {
    storefront: "Digital commerce & retail storefronts",
    cyberMatrix: "High-performance software & cloud engineering",
    pagoda: "Artisan brand identity & creative design",
    studio: "End-to-end strategy, UI/UX, and development",
    gradient: "Design systems & 3D visual experiences",
    creator: "Collaborative partnership with senior builders",
    storyboard: "Interactive user journeys & agile delivery",
  },
} as const;
