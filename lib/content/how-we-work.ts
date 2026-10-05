import { ClockIcon, CodeIcon, FileTextIcon, LayersIcon, LightbulbIcon, PencilIcon, RocketIcon, ShieldCheckIcon, SparklesIcon, TargetIcon, UsersIcon } from "@animateicons/react/lucide";

interface StepFeature {
  icon: typeof UsersIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

interface StepConfig {
  id: string;
  number: string;
  stepKicker: string;
  title: string;
  subtitle: string;
  icon: typeof LightbulbIcon;
  headlineFirst: string;
  headlineAccent: string;
  summary: string;
  features: StepFeature[];
  nextStepName: string;
  imageSrc?: string;
}

export const STEPS: StepConfig[] = [
  {
    id: "discover",
    number: "01",
    stepKicker: "STEP 01 / 04",
    title: "Discover",
    subtitle: "Understand & Plan",
    icon: LightbulbIcon,
    headlineFirst: "Understand",
    headlineAccent: "before we build.",
    summary:
      "We take time to understand your business, users and goals. This helps us create a clear roadmap and technical blueprint for a successful product.",
    features: [
      {
        icon: UsersIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Business Goals",
        desc: "Understand your vision and market opportunity.",
      },
      {
        icon: TargetIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "User Research",
        desc: "Identify user needs and key problem areas.",
      },
      {
        icon: FileTextIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "Project Scope",
        desc: "Define features, timeline and required resources.",
      },
      {
        icon: LayersIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Technical Blueprint",
        desc: "Plan architecture and scalability for the future.",
      },
    ],
    nextStepName: "Design",
    imageSrc: "simpluxe/process/discover",
  },
  {
    id: "design",
    number: "02",
    stepKicker: "STEP 02 / 04",
    title: "Design",
    subtitle: "UI/UX & Prototype",
    icon: PencilIcon,
    headlineFirst: "Clarity before",
    headlineAccent: "we code.",
    summary:
      "Interactive Figma prototypes and a production token library. You test and validate the screens and interactions before development begins.",
    features: [
      {
        icon: LayersIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Interactive Flows",
        desc: "Clickable prototypes validating real user journeys.",
      },
      {
        icon: SparklesIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "Design Tokens",
        desc: "Strict color, typography, and spacing system.",
      },
      {
        icon: TargetIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "Design Systems",
        desc: "Reusable component library with accessibility built-in.",
      },
      {
        icon: UsersIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Usability Testing",
        desc: "Pre-code feedback loops with real stakeholder testing.",
      },
    ],
    nextStepName: "Develop",
    imageSrc: "simpluxe/process/design-develop",
  },
  {
    id: "develop",
    number: "03",
    stepKicker: "STEP 03 / 04",
    title: "Develop",
    subtitle: "Build & Integrate",
    icon: CodeIcon,
    headlineFirst: "Code built",
    headlineAccent: "to scale.",
    summary:
      "Next.js App Router, TailwindCSS, TypeScript, and serverless backend architecture. Demo deployments let you watch the product come alive.",
    features: [
      {
        icon: CodeIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Modern Stack",
        desc: "Next.js 15, TypeScript, Tailwind, and serverless backend.",
      },
      {
        icon: ClockIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "Weekly Staging Builds",
        desc: "Live demo environments to test sprint deliverables.",
      },
      {
        icon: ShieldCheckIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Clean Architecture",
        desc: "Secure endpoints, structured databases, and clean code.",
      },
      {
        icon: RocketIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "CI/CD Pipelines",
        desc: "Automated test suites and zero-downtime deployments.",
      },
    ],
    nextStepName: "Launch",
    imageSrc: "simpluxe/process/design-develop",
  },
  {
    id: "launch",
    number: "04",
    stepKicker: "STEP 04 / 04",
    title: "Launch",
    subtitle: "Deploy & Grow",
    icon: RocketIcon,
    headlineFirst: "Launch is just",
    headlineAccent: "the beginning.",
    summary:
      "DNS cutover, SEO indexing check, telemetry dashboards, and post-launch support to ensure a smooth transition to production.",
    features: [
      {
        icon: RocketIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "Production Cutover",
        desc: "Secure SSL, DNS propagation, and edge caching.",
      },
      {
        icon: TargetIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "SEO & Analytics",
        desc: "Sitemaps, structured data, and real-time tracking.",
      },
      {
        icon: ShieldCheckIcon,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Performance Audits",
        desc: "Sub-second load times and 95+ Core Web Vitals.",
      },
      {
        icon: UsersIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: "Post-Launch Warranty",
        desc: "30 days dedicated support and ongoing maintenance.",
      },
    ],
    nextStepName: "Start Project",
    imageSrc: "simpluxe/process/launch",
  },
];

export const HOW_WE_WORK_SECTION_CONTENT = {
  eyebrow: "OUR PROCESS",
  title: "How We",
  highlightedText: "Work.",
  descriptionLine1: "A clear 4-step delivery process to turn your ideas into real, scalable digital products.",
  descriptionLine2: "No confusion. No black boxes. Just results.",
  trustNote: "Dedicated senior engineers · Direct communication · Production warranty.",
  scrollExplore: "Scroll to explore",
  scrollContinue: "Scroll down to continue",
};
