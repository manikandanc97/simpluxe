import { COMMON } from "./common";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { FileTextIcon } from "@animateicons/react/lucide/file-text-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { LightbulbIcon } from "@animateicons/react/lucide/lightbulb-icon";
import { PencilIcon } from "@animateicons/react/lucide/pencil-icon";
import { RocketIcon } from "@animateicons/react/lucide/rocket-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { TargetIcon } from "@animateicons/react/lucide/target-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";

const DEVELOPMENT_IMAGE = "simpluxe/process/design-develop";

// how-we-work
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
        title: COMMON.labels.businessGoals,
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
    nextStepName: COMMON.process.design,
    imageSrc: "simpluxe/process/discover",
  },
  {
    id: "design",
    number: "02",
    stepKicker: "STEP 02 / 04",
    title: COMMON.process.design,
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
        title: COMMON.labels.designTokens,
        desc: "Strict color, typography, and spacing system.",
      },
      {
        icon: TargetIcon,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        title: COMMON.labels.designSystems,
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
    nextStepName: COMMON.process.develop,
    imageSrc: DEVELOPMENT_IMAGE,
  },
  {
    id: "develop",
    number: "03",
    stepKicker: "STEP 03 / 04",
    title: COMMON.process.develop,
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
        desc: "Next.js 16, TypeScript, Tailwind, and serverless backend.",
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
        title: COMMON.labels.cleanArchitecture,
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
    nextStepName: COMMON.process.launch,
    imageSrc: DEVELOPMENT_IMAGE,
  },
  {
    id: "launch",
    number: "04",
    stepKicker: "STEP 04 / 04",
    title: COMMON.process.launch,
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
  highlightedText: COMMON.labels.workHighlight,
  descriptionLine1: "A clear 4-step delivery process to turn your ideas into real, scalable digital products.",
  descriptionLine2: "No confusion. No black boxes. Just results.",
  trustNote: "Dedicated senior engineers · Direct communication · Production warranty.",
  scrollExplore: "See your idea take shape",
  scrollContinue: "Ready to build with us?",
};

// how-we-work
export const STEP_NARRATIVE_COPY = {
  nextStep: (step: string | undefined) => `Next Step: ${step}`,
  symbol: " / ",
  startYourProject: "Start Your Project",
  orScrollDown: "or scroll down",
} as const;

export const STEP_VISUAL_BLUEPRINT_COPY = {
  projectBlueprint: "Project Blueprint",
  businessGoals: COMMON.labels.businessGoals,
  user: "User",
  research: "Research",
  feature: "Feature",
  scope: "Scope",
  technicalPlan: "Technical Plan",
  ideas: COMMON.pages.ideas,
  businessGoals2: "• Business Goals",
  targetAudience: "• Target Audience",
  fromStrategy: "From Strategy",
  toProduct: "to Product",
  marketResearch: "Market Research",
  competitorAnalysis: "Competitor Analysis",
  userInsights: "User Insights",
  featurePriorities: "Feature Priorities",
  clearPlan: "Clear Plan",
  betterResults: "Better Results",
  simpluxeDiscoveryPhasePlanningAProject: "Simpluxe discovery phase: planning a project at the desk",
} as const;

export const STEP_VISUAL_DESIGN_COPY = {
  designSystem: "Design System",
  aa: COMMON.symbols.typeSample,
  satoshiInter: "Satoshi / Inter",
  uiUx: "UI / UX",
  pixelPerfect: "• Pixel Perfect",
  userFirst: "• User First",
  beautiful: "Beautiful &",
  intuitive: "Intuitive",
  components: "Components",
  interactive: "Interactive",
  prototypes: COMMON.labels.prototypes,
  simpluxeDesignPhaseCreatingInterfacesAt: "Simpluxe design phase: creating interfaces at the desk",
} as const;

export const STEP_VISUAL_ENGINEERING_COPY = {
  architecture: COMMON.labels.architecture,
  db: "DB",
  api: "API",
  client: "CLIENT",
  techStack: COMMON.labels.techStack,
  nextJs16: "• Next.js 16",
  typescript: "• TypeScript",
  builtTo: "Built to",
  scale: "Scale",
  bash: "bash",
  symbol: "$",
  npmRunBuild: " npm run build",
  compiling: "Compiling...",
  compiledIn21s: "✓ Compiled in 2.1s",
  zero: COMMON.labels.zero,
  downtime: "Downtime",
  simpluxeDevelopmentPhaseBuildingSoftwareAt: "Simpluxe development phase: building software at the desk",
} as const;

export const STEP_VISUAL_LAUNCH_COPY = {
  liveGrowing: "Live & Growing",
  activeUsers: "Active Users",
  text104k: "10.4k",
  text42: "+42%",
  goLive: "Go Live",
  seoReady: "• SEO Ready",
  fastLoad: "• Fast Load",
  weAre: "We are",
  live: "Live!",
  serverStatus: "Server Status",
  ssl: COMMON.labels.ssl,
  active: COMMON.labels.active,
  cdn: "CDN",
  global: "Global",
  uptime: COMMON.labels.uptime,
  text999: "99.9%",
  subSecond: "Sub-second",
  load: "Load",
  simpluxeLaunchPhaseCelebratingALive: "Simpluxe launch phase: celebrating a live product at the desk",
} as const;

// sections
export const HOW_WE_WORK_INTERACTIVE_COPY = {
  step0404: "Step 04 / 04 · ",
  step0: "Step 0",
  text04: " / 04 · ",
} as const;
