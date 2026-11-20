import { PackageIcon } from "@animateicons/react/lucide/package-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { COMMON } from "../common";
import type { ServiceData } from "@/types/service";
import { SERVICE_DESCRIPTIONS } from "./service-seo";

export const SAAS_SERVICE: ServiceData = {
    "id": "saas",
    "number": "05",
    "name": COMMON.serviceNames.saas,
    "category": COMMON.categories.coreSystems,
    "icon": PackageIcon,
    "outcome": "From first release to scalable product systems.",
    "shortTagline": "End-to-end SaaS platforms with modern architecture and business-ready features.",
    "deliverables": [
      "Multi-tenant database schema architecture",
      "Stripe Subscriptions & customer portal",
      "Self-serve onboarding & invite flow",
      "Role-Based Access Control (Owner/Admin/Member)",
      "API key generation & rate-limiting middleware",
      "Webhook dispatcher & failure retry system",
      "Audit logging and compliance-supporting controls where scoped",
      "Real-time team collaboration / websockets",
      "Automated transactional emails (Resend)",
      "Backward-compatible database migration tooling",
      "Health check monitoring & telemetry alerts"
    ],
    "tabLabel": "SaaS Products",
    "headline": {
      "normal": "Multi-tenant software platforms engineered from ",
      "highlight": "MVP to enterprise scale."
    },
    "description": SERVICE_DESCRIPTIONS.saas,
    "stats": [
      {
        "value": "Cloud-native",
        "label": "Deployment plan matched to requirements"
      },
      {
        "value": "Self-serve",
        "label": "Streamlined user onboarding"
      },
      {
        "value": "Multi-tenant",
        "label": "Tenant isolation by design"
      }
    ],
    "whatWeBuildSubtitle": "Modern cloud software designed for recurring subscription growth.",
    "whatWeBuild": [
      {
        "title": "Multi-Tenant Workspaces",
        "description": "Organization-level data isolation, custom domains, and granular role permissions.",
        "bgColor": "bg-purple-50",
        "iconColor": "text-purple-600"
      },
      {
        "title": "Subscription & Metered Billing",
        "description": "Stripe billing with seat pricing, usage thresholds, coupons, and tax automation.",
        "bgColor": "bg-indigo-50",
        "iconColor": "text-indigo-600"
      },
      {
        "title": "API-First Micro-SaaS",
        "description": "Developer API keys, rate-limiting, documentation, and webhook delivery engines.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      },
      {
        "title": "Product Analytics & Audit Logs",
        "description": "Track agreed product events, feature usage and audit records for operational review.",
        "bgColor": "bg-emerald-50",
        "iconColor": "text-emerald-600"
      }
    ],
    "perfectFor": [
      {
        "title": "B2B SaaS Founders",
        "desc": "Launching subscription software without accumulating crippling early tech debt.",
        "icon": "rocket"
      },
      {
        "title": "Service agencies productizing",
        "desc": "Transforming bespoke consulting workflows into recurring software revenue.",
        "icon": "package"
      },
      {
        "title": "Enterprise spin-offs",
        "desc": "Commercializing internal proprietary tools into standalone commercial platforms.",
        "icon": "building"
      },
      {
        "title": "Bootstrapped builders",
        "desc": "Iterating fast on product-market fit with rock-solid underlying engineering.",
        "icon": "zap"
      }
    ],
    "techStackSummary": "A manageable starting stack for a subscription product, expanded as the product grows.",
    "techStack": [
      { slug: "nextjs", purpose: "Product screens and server logic" },
      { slug: "typescript", purpose: "Reliable product code" },
      { slug: "tailwindcss", purpose: "Consistent product interfaces" },
      { slug: "supabase", purpose: "Customer data, accounts and storage" },
      { slug: "stripe", purpose: "Subscription billing where supported" },
      { slug: "vercel", purpose: "Product hosting and deployment" }
    ],
    "faqs": [
      {
        "question": "How do you handle tenant data isolation in multi-tenant SaaS?",
        "answer": "Tenant isolation is designed for the application's risk model and may use PostgreSQL row-level security, separate schemas or another reviewed approach."
      },
      {
        "question": "Can we charge per seat, per usage, or a flat monthly fee?",
        "answer": "Billing models are selected during scoping and can include seat-based, tiered or usage-based charging where supported by the chosen payment platform."
      },
      {
        "question": "How do team invites and member permissions work?",
        "answer": "Invitation flows, roles and permission updates are designed around the product's organization model and access requirements."
      },
      {
        "question": "Can enterprise clients use Single Sign-On (SAML / Okta)?",
        "answer": "Enterprise SSO can be scoped for SAML or supported identity providers after reviewing the customer's identity, security and administrative requirements."
      }
    ],
    "relatedWorkUrl": "/creations",
    "mockup": {
      "type": "saas",
      "title": "Simpluxe Multi-Tenant Core",
      "badge": "SaaS Scale",
      "subtitle": "Stripe Billing & Workspace RBAC",
      "image": {
        "publicId": "simpluxe/services/SaaS_bllypd",
        "version": "1791116452",
        "width": 1536,
        "height": 1024,
        "alt": "A SaaS administration dashboard showing revenue, customers, plans and upcoming tasks"
      }
    },
};

export const CUSTOM_SOFTWARE_SERVICE: ServiceData = {
    "id": "custom-software",
    "number": "08",
    "name": COMMON.serviceNames.customSoftware,
    "category": COMMON.categories.coreSystems,
    "icon": CpuIcon,
    "outcome": "Tailored software solutions engineered for specific business operations.",
    "shortTagline": "Bespoke software architecture engineered for complex enterprise logic.",

    "tabLabel": "Custom Software",
    "headline": {
      "normal": "Bespoke software architecture engineered for ",
      "highlight": "complex enterprise logic."
    },
    "description": SERVICE_DESCRIPTIONS.customSoftware,
    "stats": [
      {
        "value": COMMON.labels.zero,
        "label": "Vendor lock-in or bloat"
      },
      {
        "value": "Robust",
        "label": "Custom API & data pipelines"
      },
      {
        "value": "Enterprise",
        "label": "Scalable cloud architecture"
      }
    ],
    "whatWeBuildSubtitle": "Custom software engineering tailored to your proprietary operations.",
    "whatWeBuild": [
      {
        "title": "Enterprise Backoffices & ERPs",
        "description": "Unified command centers integrating inventory, procurement, and team operations.",
        "bgColor": "bg-blue-50",
        "iconColor": "text-blue-600"
      },
      {
        "title": "High-Throughput API Bridges",
        "description": "Low-latency REST & GraphQL microservices bridging disparate legacy systems.",
        "bgColor": "bg-purple-50",
        "iconColor": "text-purple-600"
      },
      {
        "title": COMMON.labels.legacyModernization,
        "description": "Gradual refactoring of monolithic legacy code into modern stacks.",
        "bgColor": "bg-emerald-50",
        "iconColor": "text-emerald-600"
      },
      {
        "title": "Data Pipelines & ETL",
        "description": "Automated aggregation, transformation, and warehousing of large datasets.",
        "bgColor": "bg-amber-50",
        "iconColor": "text-amber-600"
      }
    ],
    "deliverables": [
      "Technical discovery & system architecture blueprint",
      "Normalized relational database modeling (PostgreSQL)",
      "High-performance REST & GraphQL API services",
      "Microservice containerization with Docker",
      "Role-based permissions & audit log trails",
      "Automated unit, integration & end-to-end test suites",
      "CI/CD deployment pipelines with rollback safety",
      "Asynchronous background worker queues (Redis/BullMQ)",
      "Cloud infrastructure provisioning (AWS / Cloudflare)",
      "Comprehensive Swagger / OpenAPI documentation",
      "Source repository handover as agreed"
    ],
    "perfectFor": [
      {
        "title": "Businesses outgrowing SaaS tools",
        "desc": "Escaping prohibitive subscription fees and inflexible pre-made feature sets.",
        "icon": "unlock"
      },
      {
        "title": "Organizations with proprietary logic",
        "desc": "Requiring exact calculation rules and workflows no off-the-shelf software offers.",
        "icon": "cpu"
      },
      {
        "title": "Companies with legacy systems",
        "desc": "Planning staged modernization around operational constraints and agreed downtime.",
        "icon": "refresh"
      },
      {
        "title": "Security-critical enterprises",
        "desc": "Demanding private on-prem or isolated private cloud deployments.",
        "icon": "shield"
      }
    ],
    "techStackSummary": "A focused stack for custom business systems, with integrations chosen for your workflow.",
    "techStack": [
      { slug: "react", purpose: "Custom dashboards and interfaces" },
      { slug: "typescript", purpose: "Reliable application code" },
      { slug: "nestjs", purpose: "Business logic and integrations" },
      { slug: "postgresql", purpose: "Structured business data" },
      { slug: "hostingervps", purpose: "Server hosting and deployment" }
    ],
    "faqs": [
      {
        "question": "Who owns the code and intellectual property of custom software?",
        "answer": "Repository, documentation and ownership terms are defined in the project agreement, including any third-party or open-source licensing constraints."
      },
      {
        "question": "Can you modernize our existing old software without stopping business?",
        "answer": "We assess operational constraints and plan staged migration where feasible. Any downtime requirements and rollback plan are agreed before implementation."
      },
      {
        "question": "Can this software be hosted on our own private cloud or on-prem servers?",
        "answer": "Hosting and packaging are selected for the target environment. Private-cloud or on-premises deployment is confirmed after infrastructure and security review."
      },
      {
        "question": "How do you ensure data integrity and prevent system crashes?",
        "answer": "We reduce operational risk through project-appropriate transaction handling, testing, observability and database safeguards; no system can be guaranteed never to fail."
      }
    ],
    "relatedWorkUrl": "/creations",
    "detailPageLabel": "Explore custom software overview",
    "mockup": {
      "type": "custom",
      "title": "Simpluxe Enterprise System Core",
      "badge": "Custom Engine",
      "subtitle": "High-throughput API & database mesh",
      "image": {
        "publicId": "simpluxe/services/custom_sofware_k29sx9",
        "version": "1791118195",
        "width": 1536,
        "height": 1024,
        "alt": "A custom enterprise operations dashboard with business metrics, workflows and system controls"
      }
    }
};
