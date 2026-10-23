import { COMMON } from "./common";
import { SITE } from "./site";

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
    label: "Engineering Access",
    sub: "Direct collaboration with engineers, zero junior outsourcing layers",
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
    value: SITE.responseTime || COMMON.labels.direct,
    label: "Engineer Response",
    sub: "Direct communication with engineers who know your codebase",
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
    simpluxe: "Direct collaboration with dedicated software engineers crafting your system.",
  },
  {
    aspect: "Technology Foundation",
    traditional: "Bloated off-the-shelf WordPress themes, brittle plugins, and slow templates.",
    simpluxe: "Custom Next.js, TypeScript, React Native, and high-performance cloud backends.",
  },
  {
    aspect: "Delivery Velocity",
    traditional: "Months of bureaucratic 'discovery' decks before touching working code.",
    simpluxe: "Rapid 1-2 week release sprints with live staging previews and continuous feedback.",
  },
  {
    aspect: "Code Delivery & Handover",
    traditional: "Proprietary lock-in, licensing dependencies, and captive hosting fees.",
    simpluxe: "Complete code repositories, assets, and documentation delivered directly to your team.",
  },
];

export const ABOUT_SECTION_CONTENT = {
  eyebrow: "Our Ethos & Origin",
  title: "Engineered for",
  highlightedText: "High-Stakes Scale.",
  description: "We are a focused software development studio partnering directly with founders, CEOs, and engineering leaders who demand architectural rigor over agency overhead.",
  globalBase: "Global Delivery Base",
  remoteEngineering: "Remote Engineering Worldwide",
  pillar1Title: "Direct partnership with experienced engineers — zero junior delegation",
  pillar1Desc: "When you collaborate with Simpluxe, you don't get passed through account managers or fragmented tiers. Every architecture decision, database schema, and interface interaction is authored and reviewed by experienced engineers.",
  pillar2Title: "Architectural Longevity",
  pillar2Desc: "Zero framework bloat. We build maintainable Next.js 16 and React systems with strict TypeScript typing that your internal team can inherit effortlessly.",
  pillar3Title: "Complete Code & Deliverable Handover",
  pillar3Desc: "You receive clean code repositories, design files, and deployment configurations upon milestone completion, with no proprietary vendor lock-in.",
};

export const ABOUT_COMPARISON_CONTENT = {
  eyebrow: "Comparative Standards",
  title: "Why Founders Choose",
  highlightedText: "Simpluxe.",
  description: "A clear, transparent comparison between agency layers and our focused software studio model.",
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
  home: COMMON.pages.home,
  symbol: COMMON.symbols.slash,
  about: COMMON.pages.about,
  engineeringExcellenceShapedAround: "Engineering excellence shaped around ",
  yourVision: "your vision.",
  weAreADedicatedSoftwareStudio: "We are a dedicated software studio engineering custom software, scalable web applications, and robust digital systems with thoughtful craft and zero unnecessary overhead.",
} as const;

export const ABOUT_METRICS_COPY = {
  verified: "Verified",
} as const;

export const HOME_ABOUT_CONTENT = {
  eyebrow: "About Simpluxe",
  title: "Small, focused team.",
  highlightedText: "Serious product outcomes.",
  description: "We work directly with founders and leadership teams to turn complex requirements into clear, scalable digital systems. Strategy, interface design, and production engineering stay aligned from the first decision to final handover.",
  cta: "Discover our approach",
  panelEyebrow: "Operating standard",
  panelTitle: "Enterprise discipline. Studio agility.",
  panelDescription: "A senior-led delivery model designed for decisive collaboration, maintainable systems, and long-term product ownership.",
  status: "Direct engineering partnership",
  standards: [
    {
      number: "01",
      title: "Senior-led delivery",
      description: "Work directly with engineers who understand the architecture, product context, and business priorities.",
    },
    {
      number: "02",
      title: "Built for longevity",
      description: "Clear system boundaries, strict typing, and maintainable foundations that internal teams can confidently extend.",
    },
    {
      number: "03",
      title: "Complete ownership",
      description: "Receive the production codebase, assets, documentation, and deployment configuration without vendor lock-in.",
    },
  ],
} as const;

// pages
export const ABOUT_VIEW_COPY = {
  symbol: " • ",
} as const;
