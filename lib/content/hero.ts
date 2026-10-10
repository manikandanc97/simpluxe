import { COMMON } from "./common";
import { TAGLINE } from "./site";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { StarIcon } from "@animateicons/react/lucide/star-icon";
import { HeroContent } from "@/types/hero";

// hero
export const HERO_CONTENT: HeroContent = {
  headlineLine1: TAGLINE.line1,
  headlineLine2Prefix: TAGLINE.line2Prefix,
  headlineHighlight: TAGLINE.highlight,
  description: "We turn complex ideas into simple, high-quality digital experiences that help businesses grow.",
  ctaPrimary: COMMON.actions.startProject,
  ctaSecondaryTitle: "See our work",
  ctaSecondarySubtitle: "2 min overview",
  scrollIndicatorLabel: "Scroll down to explore capabilities",
  scrollIndicatorText: "scroll",
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
