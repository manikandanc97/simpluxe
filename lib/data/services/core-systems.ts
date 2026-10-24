import { PackageIcon } from "@animateicons/react/lucide/package-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { COMMON } from "../common";
import type { ServiceData } from "@/types/service";

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
      "Audit logging & enterprise compliance readiness",
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
    "description": "We build robust, subscription-driven software platforms featuring frictionless self-serve onboarding, tiered billing, workspace permissions, and audit-ready security.",
    "stats": [
      {
        "value": "Cloud-native",
        "label": "High-availability deployment"
      },
      {
        "value": "Self-serve",
        "label": "Streamlined user onboarding"
      },
      {
        "value": "Multi-tenant",
        "label": "Isolated data security"
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
        "description": "Track user events, feature usage, retention funnels, and enterprise compliance logs.",
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
        "answer": "We implement PostgreSQL Row-Level Security (RLS) combined with organization schema namespaces, establishing strict tenant data isolation at the database engine level."
      },
      {
        "question": "Can we charge per seat, per usage, or a flat monthly fee?",
        "answer": "Yes. We support all common billing models in Stripe: per-seat licensing, tier-based feature gating, and metered usage with automated overage invoicing."
      },
      {
        "question": "How do team invites and member permissions work?",
        "answer": "We build magic-link team invitation workflows where workspace administrators can assign granular roles (Admin, Editor, Viewer, Billing Only) with instant permission propagation."
      },
      {
        "question": "Can enterprise clients use Single Sign-On (SAML / Okta)?",
        "answer": "Yes. We can architect enterprise SSO integration (SAML 2.0, Okta, Google Workspace, Azure AD) for frictionless corporate IT compliance."
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
    "description": "When off-the-shelf software falls short, we engineer custom backend systems, resilient microservices, and dedicated business engines built precisely for your organizational requirements.",
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
    "whatWeBuildSubtitle": "Dedicated software engineering tailored to your proprietary operations.",
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
      "Complete source code repository handover"
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
        "desc": "Modernizing outdated infrastructure without interrupting daily revenue operations.",
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
        "answer": "You receive complete code repositories, database schemas, and documentation upon final delivery with no ongoing licensing lock-in."
      },
      {
        "question": "Can you modernize our existing old software without stopping business?",
        "answer": "Yes. We use the Strangler Fig pattern to build modern micro-modules around your existing system, migrating traffic gradually to minimize operational disruption."
      },
      {
        "question": "Can this software be hosted on our own private cloud or on-prem servers?",
        "answer": "Yes. We package all solutions in Docker containers with infrastructure-as-code scripts, deployable to your AWS, Azure, GCP, or private servers."
      },
      {
        "question": "How do you ensure data integrity and prevent system crashes?",
        "answer": "We implement atomic database transactions, rigorous automated regression testing, database connection pooling, and automated error tracking."
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
