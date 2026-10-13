import { COMMON } from "./common";
import { TAGLINE } from "./site";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { StarIcon } from "@animateicons/react/lucide/star-icon";
import type { HeroContent } from "@/types/hero";

// hero
export const HERO_CONTENT: HeroContent = {
  eyebrow: "Design-led digital studio",
  headlineLine1: TAGLINE.line1,
  headlineLine2Prefix: TAGLINE.line2Prefix,
  headlineHighlight: TAGLINE.highlight,
  description: "We design and build premium websites, mobile apps, and scalable digital products — from first idea to launch and beyond.",
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

// workbench
export const HERO_3D_CODER_COPY = {
  ideas: COMMON.pages.ideas,
  design: COMMON.process.design,
  develop: COMMON.process.develop,
  launch: COMMON.process.launch,
  fromIdea: "From Idea",
  toLaunch: "to Launch",
  simpluxe3dDeveloperCharacter: "Simpluxe 3D Developer Character",
  modernDesign: "Modern Design",
  cleanCode: "Clean Code",
  scalableSolutions: "Scalable Solutions",
  intoImpact: "into Impact",
} as const;
