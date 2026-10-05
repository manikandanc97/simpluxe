import { UsersIcon, BriefcaseIcon, StarIcon } from "@animateicons/react/lucide";
import { HeroContent } from "@/types/hero";

export const HERO_CONTENT: HeroContent = {
  headlineLine1: "Keep It Simple.",
  headlineLine2Prefix: "Make It ",
  headlineHighlight: "Luxury.",
  description: "We turn complex ideas into simple, high-quality digital experiences that help businesses grow.",
  ctaPrimary: "Start a project",
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
      label: "Projects Delivered",
      icon: BriefcaseIcon,
    },
    {
      value: "5 ★",
      label: "Client Satisfaction",
      icon: StarIcon,
    },
  ],
};
