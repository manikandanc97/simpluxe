import { BoxIcon, BriefcaseIcon, DatabaseIcon, LayersIcon, LightbulbIcon, TargetIcon, TrendingUpIcon, UsersIcon, ZapIcon } from "@animateicons/react/lucide";

// ─── Left Column: Process Steps ─────────────────────────────────────────────
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

// ─── Center Panel: Flow Nodes ───────────────────────────────────────────────
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

// ─── Right Panel: Outcomes ──────────────────────────────────────────────────
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
