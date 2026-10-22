import { COMMON } from "./common";
import type { FAQItem } from "@/types/faq";
import { TargetIcon } from "@animateicons/react/lucide/target-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { RefreshCwIcon } from "@animateicons/react/lucide/refresh-cw-icon";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";

export interface CustomSoftwareProblem {
  id: string;
  num: string;
  title: string;
  description: string;
  impact: string;
}

export interface CustomSoftwareCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface CustomSoftwareProcessStep {
  number: string;
  title: string;
  focus: string;
  description: string;
  deliverable: string;
}

export interface CustomSoftwareTechItem {
  name: string;
  category: string;
  role: string;
  whyChosen: string;
}

export interface CustomSoftwareCaseStudy {
  id: string;
  name: string;
  category: string;
  challenge: string;
  solution: string;
  stack: readonly string[];
  url: string;
}

export const CUSTOM_SOFTWARE_HERO_COPY = {
  home: COMMON.pages.home,
  services: COMMON.pages.services,
  currentPage: "Custom Software",
  symbol: COMMON.symbols.slash,
  eyebrow: "Bespoke Engineering Services",
  title: "Custom Software Development Services",
  titleHighlight: "Engineered for Real Operations.",
  description:
    "We architect and develop bespoke business software, operational workflow platforms, and resilient API backends tailored to your exact workflows — eliminating off-the-shelf limitations and vendor lock-in.",
  primaryCta: COMMON.actions.startProject,
  secondaryCta: "Explore Capabilities",
  viewWorkCta: "View Case Studies",
  badges: [
    COMMON.labels.cleanArchitecture,
    "Complete Code Handover",
    "Direct Engineering Access",
    "Zero Vendor Lock-in",
  ] as const,
} as const;

export const CUSTOM_SOFTWARE_PROBLEMS_COPY = {
  eyebrow: "Why Custom Software",
  title: "Engineered to Solve Real",
  highlightedText: "Operational Bottlenecks.",
  description:
    "Off-the-shelf tools force your business to adapt to someone else's constraints. Custom software aligns directly with how your organization actually creates value.",
  impactLabel: "Engineering Resolution",
} as const;

export const CUSTOM_SOFTWARE_PROBLEMS: readonly CustomSoftwareProblem[] = [
  {
    id: "prob-limits",
    num: "01",
    title: "Outgrowing Off-the-Shelf SaaS Constraints",
    description:
      "Pre-packaged SaaS platforms restrict feature expansion, impose arbitrary tier gates, and enforce steep per-user pricing as operational volume grows.",
    impact: "Unlocks dedicated workflows with zero recurring per-seat penalties.",
  },
  {
    id: "prob-silos",
    num: "02",
    title: "Fragmented Data Across Disconnected Systems",
    description:
      "When internal teams manually transfer operational data across spreadsheets, emails, and legacy tools, errors compound and reporting delays multiply.",
    impact: "Unifies data models into single-source-of-truth relational pipelines.",
  },
  {
    id: "prob-logic",
    num: "03",
    title: "Rigid Workflows That Resist Business Logic",
    description:
      "Commodity platforms cannot accommodate proprietary pricing engines, multi-step approval hierarchies, or complex industry compliance rules.",
    impact: "Translates proprietary business rules directly into tested software logic.",
  },
  {
    id: "prob-lockin",
    num: "04",
    title: "Vendor Lock-in & Inflexible Captive Hosting",
    description:
      "Closed ecosystem platforms limit API access, prevent private data hosting, and make migrating your own operational records costly and difficult.",
    impact: "Full source code handover deployable on your own private cloud infrastructure.",
  },
] as const;

export const CUSTOM_SOFTWARE_CAPABILITIES_COPY = {
  eyebrow: "Solutions & Capabilities",
  title: "Tailored Software Platforms",
  highlightedText: "Built to Scale.",
  description:
    "From unified enterprise command portals to resilient background pipelines, we engineer software designed for performance, clarity, and maintainability.",
  deliverablesLabel: "Key Architectural Deliverables",
} as const;

export const CUSTOM_SOFTWARE_CAPABILITIES: readonly CustomSoftwareCapability[] = [
  {
    id: "cap-portals",
    title: "Custom Business Portals & ERP Systems",
    subtitle: "Internal Operations & Team Dashboards",
    description:
      "Dedicated web applications designed to manage inventory, team operations, multi-step customer inquiries, and cross-functional company reporting.",
    deliverables: [
      "Role-Based Access Control (RBAC)",
      "Audit logging & telemetry tracking",
      "Real-time operational status views",
      "Secure administrative command suites",
    ],
  },
  {
    id: "cap-apis",
    title: "API Bridges & System Integrations",
    subtitle: "Connecting Disparate Software",
    description:
      "High-throughput REST and GraphQL API services that bridge external third-party software, payment gateways, internal databases, and partner ecosystems.",
    deliverables: [
      "OpenAPI / Swagger specifications",
      "Secure webhook event handling",
      "Rate limiting & request validation",
      "Low-latency response caching",
    ],
  },
  {
    id: "cap-automation",
    title: "Workflow Automation & Worker Pipelines",
    subtitle: "Background Processing at Scale",
    description:
      "Asynchronous worker queues and scheduled pipelines (Redis, BullMQ, and cron tasks) that process intensive background tasks without stalling user interfaces.",
    deliverables: [
      "Automated transactional notification engines",
      "Scheduled reporting & data rollups",
      "Resilient retry mechanisms & dead-letter queues",
      "Background document and asset processing",
    ],
  },
  {
    id: "cap-modernization",
    title: "Legacy Software Modernization",
    subtitle: "Gradual, Zero-Downtime Migration",
    description:
      "Step-by-step refactoring of monolithic, outdated systems into maintainable TypeScript architectures using proven incremental migration patterns.",
    deliverables: [
      "Strangler Fig micro-module rollout",
      "Database schema normalization & data migration",
      "Removal of insecure and unsupported libraries",
      "Modern Next.js & React interface replacement",
    ],
  },
  {
    id: "cap-databases",
    title: "Relational Database Design & Tuning",
    subtitle: "Structured Data Integrity",
    description:
      "Carefully modeled PostgreSQL schemas with strict foreign key constraints, atomic transactions, query indexing, and automated migration tooling.",
    deliverables: [
      "Normalized relational schema architecture",
      "Connection pooling & query optimization",
      "Automated migration pipelines via Prisma",
      "Automated backup & point-in-time recovery strategy",
    ],
  },
  {
    id: "cap-security",
    title: "Security & Multi-Tenant Architecture",
    subtitle: "Data Isolation & Compliance Readiness",
    description:
      "Enterprise security fundamentals baked into every application layer, from encrypted transport to tenant-level data isolation.",
    deliverables: [
      "PostgreSQL Row-Level Security (RLS)",
      "Secure HTTP-only session authentication",
      "Input validation & sanitization via Zod",
      "Zero cross-tenant data leakage guarantees",
    ],
  },
] as const;

export const CUSTOM_SOFTWARE_PROCESS_COPY = {
  eyebrow: "Engineering Process",
  title: "A Predictable Path",
  highlightedText: "From Scope to Delivery.",
  description:
    "A transparent 4-stage engineering lifecycle focused on technical precision, continuous milestone staging, and clean code handover.",
  deliverableLabel: "Phase Deliverable",
} as const;

export const CUSTOM_SOFTWARE_PROCESS_STEPS: readonly CustomSoftwareProcessStep[] = [
  {
    number: "01",
    title: "Architecture & Technical Scoping",
    focus: "Discovery & Blueprinting",
    description:
      "We interview your operational stakeholders, map current data flows, define schema requirements, and document an explicit technical architecture specification.",
    deliverable: "Architecture blueprint, data schema plan, and sprint milestones.",
  },
  {
    number: "02",
    title: "Iterative Sprint Engineering",
    focus: "Rapid Build & Live Staging",
    description:
      "We build in structured 1–2 week sprints, deploying working software to private staging previews so your team validates each feature against real workflows.",
    deliverable: "Functional sprint releases with continuous feedback loops.",
  },
  {
    number: "03",
    title: "Rigorous QA & Security Validation",
    focus: "Testing & Performance Tuning",
    description:
      "We execute unit tests, API integration tests, role-based permission checks, database transaction stress tests, and accessibility validations before launch.",
    deliverable: "Automated test coverage and security audit signoff.",
  },
  {
    number: "04",
    title: "Production Deployment & Handover",
    focus: "Cloud Provisioning & Support",
    description:
      "We provision your production cloud environment, execute seamless DNS switchovers, deliver complete Git repositories, and provide dedicated post-launch support.",
    deliverable: "Production deployment, complete repository handover, and initial monitoring.",
  },
] as const;

export const CUSTOM_SOFTWARE_WORK_COPY = {
  eyebrow: "Selected Real-World Systems",
  title: "Tested Architectures.",
  highlightedText: "Measurable Impact.",
  description:
    "Explore verified software platforms engineered by Simpluxe, built with modern full-stack technologies to solve demanding operational requirements.",
  viewAllWork: "View All Projects",
  challengeLabel: "Operational Challenge",
  solutionLabel: "Architectural Solution",
  liveSystemLabel: "Live Production System",
  techStackLabel: "Technology Stack",
} as const;

export const CUSTOM_SOFTWARE_CASE_STUDIES: readonly CustomSoftwareCaseStudy[] = [
  {
    id: "case-clixprocrm",
    name: "ClixPro CRM",
    category: "Customer Relationship Management Platform",
    challenge:
      "Managing complex client pipelines, contact histories, and operational communication without inflexible generic CRM tier limits.",
    solution:
      "Engineered a dedicated Next.js and PostgreSQL web application with role-based access, rapid lead capture, and relational contact history tracking.",
    stack: [COMMON.technology.nextjs, COMMON.technology.prisma, COMMON.technology.postgres, COMMON.technology.typescript],
    url: "https://clixprocrm.vercel.app/",
  },
  {
    id: "case-valparai",
    name: "Valparai Wanderer Tours",
    category: "Tour Booking & Itinerary Reservation Platform",
    challenge:
      "Handling real-world tourism inquiries, custom itinerary requests, and seasonal scheduling across mobile and desktop travelers.",
    solution:
      "Built a high-performance booking and reservation portal with responsive lead dispatching, structured package schemas, and fast page loads.",
    stack: [COMMON.technology.nextjs, COMMON.technology.tailwind, COMMON.technology.typescript],
    url: "https://valparaiwanderertours.com",
  },
  {
    id: "case-viha",
    name: "Viha Handicrafts",
    category: "E-Commerce Catalog & Artisan Showcase",
    challenge:
      "Showcasing high-variety handcrafted products and facilitating direct pan-India customer orders with low friction on mobile networks.",
    solution:
      "Engineered an optimized digital catalog with fast product filtering, WhatsApp ordering bridges, and cloud-optimized visual media assets.",
    stack: [COMMON.technology.nextjs, COMMON.technology.tailwind, COMMON.technology.typescript],
    url: "https://vihahandicrafts.com",
  },
] as const;

export const CUSTOM_SOFTWARE_TECH_COPY = {
  eyebrow: "Technology Stack",
  title: "Production-Grade Tools.",
  highlightedText: "Long-Term Maintainability.",
  description:
    "We select technologies that prioritize type safety, operational stability, and straightforward maintainability so your internal team can inherit code with confidence.",
  footerNote: "Every tool in our stack is chosen to match your software requirements and cloud environment.",
  roleLabel: "Operational Role",
  rationaleLabel: "Why We Chose It",
} as const;

export const CUSTOM_SOFTWARE_TECH_ITEMS: readonly CustomSoftwareTechItem[] = [
  {
    name: COMMON.technology.nextjs,
    category: "Frontend & Full-Stack",
    role: "Server components, edge caching, and responsive interfaces",
    whyChosen: "Fast page loads, accessible UI rendering, and unified full-stack routing.",
  },
  {
    name: COMMON.technology.typescript,
    category: "Type Safety Standard",
    role: "End-to-end typed contracts across client, server, and database",
    whyChosen: "Eliminates entire classes of runtime errors and simplifies long-term maintenance.",
  },
  {
    name: COMMON.technology.postgres,
    category: "Relational Database",
    role: "ACID-compliant business data storage, indexing, and transactions",
    whyChosen: "Decades of proven enterprise reliability, relational integrity, and advanced querying.",
  },
  {
    name: "NestJS / Node.js",
    category: "Backend Engine",
    role: "Structured microservices, background job controllers, and APIs",
    whyChosen: "Enterprise modular architecture, clean dependency injection, and native OpenAPI specs.",
  },
  {
    name: COMMON.technology.docker,
    category: "DevOps & Containers",
    role: "Reproducible runtime environments for staging and production",
    whyChosen: "Portability across any cloud provider (AWS, GCP, Azure, or private VPS) with zero lock-in.",
  },
  {
    name: COMMON.technology.prisma,
    category: "Database ORM & Migrations",
    role: "Type-safe database queries and automated schema migrations",
    whyChosen: "Prevents schema drift, ensures audit-ready migrations, and speeds up feature development.",
  },
] as const;

export const CUSTOM_SOFTWARE_FAQ_COPY = {
  eyebrow: "Frequently Asked Questions",
  title: "Clear Answers on",
  highlightedText: "Custom Software.",
  description:
    "Transparent answers to common questions about our engineering model, deliverables, timelines, and post-launch support.",
} as const;

export const CUSTOM_SOFTWARE_FAQS: readonly FAQItem[] = [
  {
    id: "faq-build-vs-buy",
    num: "01",
    category: "Build vs Buy",
    icon: TargetIcon,
    question: "When should a business invest in custom software instead of buying SaaS?",
    answer:
      "Off-the-shelf software is ideal for commodity workflows (e.g., standard email marketing). However, when proprietary business logic, complex operational rules, unique pricing engines, or steep per-seat fees create friction, custom software delivers a compounding competitive advantage and removes subscription dependency.",
  },
  {
    id: "faq-code-ownership",
    num: "02",
    category: "Code & Assets",
    icon: CodeIcon,
    question: "Who owns the code and project assets after completion?",
    answer:
      "Your company receives complete code repositories, database schemas, deployment configuration scripts, and documentation upon project handover, with no ongoing proprietary licensing fees.",
  },
  {
    id: "faq-integrations",
    num: "03",
    category: "Integrations",
    icon: ZapIcon,
    question: "Can custom software integrate with our existing accounting and operational tools?",
    answer:
      "Yes. We engineer secure API bridges, webhooks, and ETL data connectors to synchronize data with payment gateways, existing ERPs, CRMs, and third-party partner systems.",
  },
  {
    id: "faq-legacy-modernization",
    num: "04",
    category: "Legacy Systems",
    icon: RefreshCwIcon,
    question: "How do you modernize legacy software without business downtime?",
    answer:
      "We utilize incremental migration patterns (such as the Strangler Fig approach) to build modern micro-modules around your existing system, gradually routing traffic and migrating data with zero downtime.",
  },
  {
    id: "faq-maintenance",
    num: "05",
    category: "Maintenance",
    icon: ClockIcon,
    question: "What does post-launch support look like after deployment?",
    answer:
      "We provide dedicated post-launch support for initial deployment monitoring and bug fixes, followed by flexible ongoing maintenance retainers for continuous iterations, updates, and cloud infrastructure management.",
  },
  {
    id: "faq-cloud-hosting",
    num: "06",
    category: "Hosting & Cloud",
    icon: CpuIcon,
    question: "Can the software be hosted on our private cloud or servers?",
    answer:
      "Yes. All applications are containerized with Docker and infrastructure scripts, allowing seamless deployment to your AWS, GCP, Azure, or private VPS infrastructure.",
  },
] as const;

export const CUSTOM_SOFTWARE_CTA_COPY = {
  eyebrow: "Start Your Build",
  title: "Ready to Engineer Your",
  highlightedText: "Custom Software Platform?",
  description:
    "Discuss your technical requirements, architectural challenges, or product vision directly with our software engineering team.",
  primaryButtonText: COMMON.actions.startProject,
  secondaryButtonText: "Explore All Services",
  exploreWorkText: "View Case Studies",
  responseNote: "Technical consultation directly with engineers — no sales friction.",
} as const;

