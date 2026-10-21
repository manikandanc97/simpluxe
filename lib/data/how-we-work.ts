import { COMMON } from "./common";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { FileTextIcon } from "@animateicons/react/lucide/file-text-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { RocketIcon } from "@animateicons/react/lucide/rocket-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { TargetIcon } from "@animateicons/react/lucide/target-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";

// how-we-work
interface StepFeature {
  icon: typeof UsersIcon;
  title: string;
  desc: string;
}

interface StepConfig {
  id: string;
  number: string;
  stepKicker: string;
  title: string;
  subtitle: string;
  headlineFirst: string;
  headlineAccent: string;
  summary: string;
  features: StepFeature[];
  nextStepName: string;
}

export const STEPS: StepConfig[] = [
  {
    id: "discover",
    number: "01",
    stepKicker: "Step 01 / 04",
    title: "Discover",
    subtitle: "Understand & Plan",
    headlineFirst: "Understand",
    headlineAccent: "before we build.",
    summary:
      "We take time to understand your business, users and goals. This helps us create a clear roadmap and technical blueprint for a successful product.",
    features: [
      {
        icon: UsersIcon,
        title: COMMON.labels.businessGoals,
        desc: "Understand your vision and market opportunity.",
      },
      {
        icon: TargetIcon,
        title: "User Research",
        desc: "Identify user needs and key problem areas.",
      },
      {
        icon: FileTextIcon,
        title: "Project Scope",
        desc: "Define features, timeline and required resources.",
      },
      {
        icon: LayersIcon,
        title: "Technical Blueprint",
        desc: "Plan architecture and scalability for the future.",
      },
    ],
    nextStepName: COMMON.process.design,
  },
  {
    id: "design",
    number: "02",
    stepKicker: "Step 02 / 04",
    title: COMMON.process.design,
    subtitle: "UI/UX & Prototype",
    headlineFirst: "Clarity before",
    headlineAccent: "we code.",
    summary:
      "Interactive Figma prototypes and a production token library. You test and validate the screens and interactions before development begins.",
    features: [
      {
        icon: LayersIcon,
        title: "Interactive Flows",
        desc: "Clickable prototypes validating real user journeys.",
      },
      {
        icon: SparklesIcon,
        title: COMMON.labels.designTokens,
        desc: "Strict color, typography, and spacing system.",
      },
      {
        icon: TargetIcon,
        title: COMMON.labels.designSystems,
        desc: "Reusable component library with accessibility built-in.",
      },
      {
        icon: UsersIcon,
        title: "Usability Testing",
        desc: "Pre-code feedback loops with real stakeholder testing.",
      },
    ],
    nextStepName: COMMON.process.develop,
  },
  {
    id: "develop",
    number: "03",
    stepKicker: "Step 03 / 04",
    title: COMMON.process.develop,
    subtitle: "Build & Integrate",
    headlineFirst: "Code built",
    headlineAccent: "to scale.",
    summary:
      "Next.js App Router, TailwindCSS, TypeScript, and serverless backend architecture. Demo deployments let you watch the product come alive.",
    features: [
      {
        icon: CodeIcon,
        title: "Modern Stack",
        desc: "Next.js 16, TypeScript, Tailwind, and serverless backend.",
      },
      {
        icon: ClockIcon,
        title: "Weekly Staging Builds",
        desc: "Live demo environments to test sprint deliverables.",
      },
      {
        icon: ShieldCheckIcon,
        title: COMMON.labels.cleanArchitecture,
        desc: "Secure endpoints, structured databases, and clean code.",
      },
      {
        icon: RocketIcon,
        title: "CI/CD Pipelines",
        desc: "Automated test suites and zero-downtime deployments.",
      },
    ],
    nextStepName: COMMON.process.launch,
  },
  {
    id: "launch",
    number: "04",
    stepKicker: "Step 04 / 04",
    title: COMMON.process.launch,
    subtitle: "Deploy & Grow",
    headlineFirst: "Launch is just",
    headlineAccent: "the beginning.",
    summary:
      "DNS cutover, SEO indexing check, telemetry dashboards, and post-launch support to ensure a smooth transition to production.",
    features: [
      {
        icon: RocketIcon,
        title: "Production Cutover",
        desc: "Secure SSL, DNS propagation, and edge caching.",
      },
      {
        icon: TargetIcon,
        title: "SEO & Analytics",
        desc: "Sitemaps, structured data, and real-time tracking.",
      },
      {
        icon: ShieldCheckIcon,
        title: "Performance Audits",
        desc: "Sub-second load times and 95+ Core Web Vitals.",
      },
      {
        icon: UsersIcon,
        title: "Post-Launch Warranty",
        desc: "30 days dedicated support and ongoing maintenance.",
      },
    ],
    nextStepName: "Start Project",
  },
];

export const HOW_WE_WORK_TRUST_POINTS = [
  "Dedicated senior engineers",
  "Direct communication",
  "Production warranty",
] as const;

export const HOW_WE_WORK_SECTION_CONTENT = {
  eyebrow: "Our process",
  title: "How We",
  highlightedText: COMMON.labels.workHighlight,
  descriptionLine1: "A clear 4-step delivery process to turn your ideas into real, scalable digital products.",
};

// how-we-work
export const STEP_NARRATIVE_COPY = {
  nextStep: (step: string | undefined) => `Next Step: ${step}`,
  startYourProject: "Start Your Project",
} as const;
