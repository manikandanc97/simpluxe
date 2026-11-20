import { COMMON } from "./common";
import { BUSINESS_ENTITY, SITE } from "./site";

// about
export interface AboutMetric {
  value: string;
  label: string;
  sub: string;
}

export interface AboutPrinciple {
  number: string;
  tag: string;
  title: string;
  summary: string;
  description: string;
  deliverable: string;
}

export interface AboutComparison {
  aspect: string;
  traditional: string;
  simpluxe: string;
}

export const METRICS: AboutMetric[] = [
  {
    value: COMMON.labels.direct,
    label: "Project Access",
    sub: "Direct collaboration with the people responsible for the agreed work",
  },
  {
    value: "Fast",
    label: "Load Speeds",
    sub: "Performance-focused architecture on modern production networks",
  },
  {
    value: "Clean",
    label: "Code Handover",
    sub: "Structured repository, schema, and production asset handover",
  },
  {
    value: SITE.responseTime || "Scoped",
    label: "Project Response",
    sub: "Communication arrangements are confirmed for each engagement",
  },
];

export const PRINCIPLES: AboutPrinciple[] = [
  {
    number: "01",
    tag: "Clarity",
    title: "Clarity over cleverness",
    summary: "Code should be easy to read. Interfaces should be effortless to use.",
    description:
      "We don't build things to show off technical trivia; we build them to solve real customer and business problems efficiently. If a concept cannot be explained plainly, it is too complex. Simplicity creates resilience.",
    deliverable: "Readable, well-documented architecture that any engineering team can step into.",
  },
  {
    number: "02",
    tag: "Purpose",
    title: "Purpose-driven scope",
    summary: "Every single feature must earn its place in the production build.",
    description:
      "If a proposed feature doesn't serve the primary reason someone uses the product, it gets cut. This discipline prevents scope bloat, accelerates time-to-market, and protects you from endless maintenance debt.",
    deliverable: "Laser-focused releases that solve customer needs and drive immediate ROI.",
  },
  {
    number: "03",
    tag: "Detail",
    title: "Difference is in the details",
    summary: "Simplicity never means generic, uninspired, or boring.",
    description:
      "By stripping away visual clutter and extraneous controls, we create space for refined typography, fluid motion physics, responsive performance, and a distinctive brand presence that commands respect.",
    deliverable: "Bespoke digital experiences that stand out clearly from generic templates.",
  },
];

export const COMPARISONS: AboutComparison[] = [
  {
    aspect: "Engineering Team",
    traditional: "Layers of account managers, junior temps, and outsourced developers.",
    simpluxe: "Direct collaboration with the people responsible for the agreed project work.",
  },
  {
    aspect: "Technology Foundation",
    traditional: "Bloated off-the-shelf WordPress themes, brittle plugins, and slow templates.",
    simpluxe: "Custom Next.js, TypeScript, React Native, and high-performance cloud backends.",
  },
  {
    aspect: "Delivery Velocity",
    traditional: "Months of bureaucratic 'discovery' decks before touching working code.",
    simpluxe: "A delivery cadence and preview schedule defined after project discovery.",
  },
  {
    aspect: "Code Delivery & Handover",
    traditional: "Proprietary lock-in, licensing dependencies, and captive hosting fees.",
    simpluxe: "Repositories, assets, documentation and licence terms defined in the project agreement.",
  },
];

export const ABOUT_SECTION_CONTENT = {
  eyebrow: "Our Ethos & Origin",
  title: "Engineered for",
  highlightedText: "High-Stakes Scale.",
  description: `${BUSINESS_ENTITY.name} is a focused software and digital product studio working with founders, product teams and engineering leaders.`,
  globalBase: "Delivery Model",
  remoteEngineering: "Remote Project Collaboration",
  pillar1Title: "Direct project collaboration",
  pillar1Desc: "Project communication is kept close to the people responsible for the agreed strategy, design and engineering work.",
  pillar2Title: "Architectural Longevity",
  pillar2Desc: "We use maintainable Next.js 16 and React systems with TypeScript, with architecture selected around the project's requirements.",
  pillar3Title: "Defined Code & Deliverable Handover",
  pillar3Desc: "Repositories, design files, deployment configuration and ownership terms are documented in the project agreement, including third-party licence constraints.",
};

export const ABOUT_COMPARISON_CONTENT = {
  eyebrow: "Comparative Standards",
  title: "A focused studio",
  highlightedText: "model.",
  description: "A practical comparison between layered delivery and Simpluxe's focused studio model.",
  evaluationMetric: "Evaluation Metric",
  traditionalAgencies: "Traditional Agencies",
  simpluxeModel: "The Simpluxe Studio Model",
  recommendedBadge: "Recommended",
};

export const ABOUT_PRINCIPLES_CONTENT = {
  eyebrow: "Guiding Philosophy",
  title: "The Three Core",
  highlightedText: "Principles.",
  description: "The core tenets that guide every architectural decision, interface, and line of code we ship.",
};

// about
export const ABOUT_HERO_COPY = {
  engineeringExcellenceShapedAround: "Engineering excellence shaped around ",
  yourVision: "your vision.",
  weAreADedicatedSoftwareStudio: BUSINESS_ENTITY.description,
} as const;

export const ABOUT_METRICS_COPY = {
  verified: "Verified",
} as const;

export const HOME_ABOUT_CONTENT = {
  eyebrow: "About Simpluxe",
  title: "Focused studio model.",
  highlightedText: "Clear project decisions.",
  description:
    "Projects bring strategy, interface design and production engineering into one scoped delivery process, from discovery through the agreed handover.",
  cta: "Discover our approach",
  panelEyebrow: "Operating standard",
  panelTitle: "Enterprise discipline. Studio agility.",
  panelDescription:
    "A focused delivery model built around clear collaboration, maintainable architecture and documented handover terms.",
  status: "Direct engineering partnership",
  panelPillars: [
    "Direct project collaboration",
    "Scoped delivery cadence and previews",
    "Documented source and IP terms",
  ],
  standards: [
    {
      number: "01",
      tag: "Execution",
      title: "Direct delivery",
      description:
        "Collaborate directly with the people accountable for the agreed project work, with communication channels defined at kickoff.",
      deliverable: "Agreed project communication",
    },
    {
      number: "02",
      tag: COMMON.labels.architecture,
      title: "Built for longevity",
      description:
        "Clear domain boundaries, strict TypeScript typing, and modular Next.js foundations that your internal team can confidently inherit and scale.",
      deliverable: "Type-safe, production-ready stack",
    },
    {
      number: "03",
      tag: "Independence",
      title: "Defined ownership",
      description:
        "The agreement identifies the repositories, documentation, design assets and deployment configuration included in handover, along with applicable licence terms.",
      deliverable: "Documented IP & handover terms",
    },
  ],
} as const;

// pages
export const ABOUT_VIEW_COPY = {
  symbol: " • ",
} as const;
