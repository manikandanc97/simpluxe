import { COMMON } from "./common";
import { BoxIcon } from "@animateicons/react/lucide/box-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { DatabaseIcon } from "@animateicons/react/lucide/database-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { LightbulbIcon } from "@animateicons/react/lucide/lightbulb-icon";
import { TargetIcon } from "@animateicons/react/lucide/target-icon";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";

// philosophy
export const PROCESS_STEPS = [
  {
    num: "01",
    icon: LightbulbIcon,
    title: "Clarity",
    desc: "Clear goals.",
    subDesc: "No confusion.",
    active: true,
  },
  {
    num: "02",
    icon: ZapIcon,
    title: "Speed",
    desc: "Move fast.",
    subDesc: "Ship early.",
    active: false,
  },
  {
    num: "03",
    icon: LayersIcon,
    title: "Craft",
    desc: "Pixel perfect.",
    subDesc: "Production ready.",
    active: false,
  },
  {
    num: "04",
    icon: UsersIcon,
    title: "Ownership",
    desc: "Direct access.",
    subDesc: "We stand with you.",
    active: false,
  },
];

export const FLOW_NODES = {
  topLeft: {
    id: "direct-access",
    badge: "IDEA",
    badgeColor: "rose",
    title: "Direct access",
    desc: "Work directly with the team building your product.",
    icon: LightbulbIcon,
  },
  topRight: {
    id: "weekly-progress",
    badge: "PLAN",
    badgeColor: "purple",
    title: "Weekly progress",
    desc: "Transparent updates and real milestones every week.",
    icon: TrendingUpIcon,
  },
  bottomLeft: {
    id: "production-quality",
    badge: "BUILD",
    badgeColor: "rose",
    title: "Production quality",
    desc: "Modern tech, clean designs, and scalable architecture.",
    icon: BoxIcon,
  },
  bottomRight: {
    id: "clear-ownership",
    badge: "DELIVER",
    badgeColor: "purple",
    title: "Clear ownership",
    desc: "No handoff friction. We take responsibility end to end.",
    icon: UsersIcon,
  },
};

export const REAL_OUTCOMES = [
  {
    value: 5,
    suffix: "+",
    label: "Projects shipped",
    icon: BriefcaseIcon,
  },
  {
    value: 3,
    suffix: "×",
    label: "Faster iteration",
    icon: ZapIcon,
  },
  {
    value: 100,
    suffix: "%",
    label: "Milestone visibility",
    icon: TargetIcon,
  },
  {
    value: 500,
    prefix: "<",
    suffix: "ms",
    label: "Performance target",
    icon: DatabaseIcon,
  },
];

export const PHILOSOPHY_SECTION_CONTENT = {
  eyebrow: "WHY SIMPLUXE",
  title: "Built simple. Delivered",
  highlightedText: "sharp.",
  description: "A focused team, a clear process, and production-ready work without unnecessary layers.",
};

// philosophy
export const DESKTOP_FLOW_CANVAS_COPY = {
  simpluxeLogo: COMMON.brand.logoAlt,
} as const;

export const FLOW_DIAGRAM_COPY = {
  signal01: "SIGNAL / 01",
  simpleSystem: "SIMPLE SYSTEM",
  yourIdea: "YOUR IDEA",
  realImpact: "REAL IMPACT",
} as const;

export const MOBILE_FLOW_GRID_COPY = {
  simpluxeLogo: COMMON.brand.logoAlt,
} as const;

export const PHILOSOPHY_OUTCOMES_COPY = {
  from: "From",
  ideaToImpact: "Idea to Impact",
  realOutcomes: "REAL OUTCOMES",
} as const;

export const PHILOSOPHY_PROCESS_STEPS_COPY = {
  process04: "PROCESS / 04",
  simpleProcess: "Simple Process",
  realResults: "Real Results",
} as const;
