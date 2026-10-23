import type { InsightPost } from "@/types/insight";

export const ARCHITECTURE_BEFORE_FEATURES_INSIGHT: InsightPost = {
  slug: "architecture-before-features",
  title: "Why architecture should be decided before the feature list grows",
  excerpt:
    "A practical way to shape boundaries, data ownership, and delivery decisions before product complexity becomes expensive.",
  category: "Software architecture",
  publishedAt: "2026-10-14",
  publishedLabel: "14 October 2026",
  readingTime: "7 min",
  author: "Simpluxe Engineering",
  featured: true,
  icon: "layers",
  tone: "ocean",
  image: "/images/insights/architecture-before-features.webp",
  takeaways: [
    "Start with business boundaries, not frameworks.",
    "Make data ownership explicit before integrations multiply.",
    "Choose architecture that supports the next stage, not every imagined future.",
  ],
  sections: [
    {
      heading: "Architecture is a product decision",
      paragraphs: [
        "Architecture is often treated as a technical step that begins after requirements are complete. In practice, it shapes what the product can change quickly, what it can measure reliably, and where operational risk accumulates.",
        "A useful architecture conversation starts with the decisions the business needs to make: who owns each workflow, which information must stay consistent, and what must remain available when another system fails.",
      ],
      callout:
        "The best early architecture is not the most elaborate. It is the one that makes ownership and change easy to understand.",
    },
    {
      heading: "Draw boundaries before choosing tools",
      paragraphs: [
        "Frameworks are implementation choices. Boundaries describe the product itself. Define the major responsibilities first, then select tools that support those responsibilities without adding unnecessary ceremony.",
      ],
      bullets: [
        "Identify the source of truth for every important record.",
        "Separate customer-facing journeys from internal operating workflows.",
        "Mark integrations that can fail without blocking the core experience.",
      ],
    },
    {
      heading: "Design for the next credible stage",
      paragraphs: [
        "Premature scale creates complexity that the team must carry every day. Under-planning creates rewrites at the first sign of traction. The practical middle ground is to design for the next credible stage of users, data, and team size.",
        "That usually means a modular core, clear interfaces, observable failures, and a deployment path the current team can operate confidently.",
      ],
    },
  ],
};

export const API_FIRST_PRODUCT_FOUNDATIONS_INSIGHT: InsightPost = {
  slug: "api-first-product-foundations",
  title: "Building API-first systems that survive client-side rewrites",
  excerpt:
    "How clean contracts, idempotent mutations, and typed schemas decouple frontend velocity from backend stability.",
  category: "Software architecture",
  publishedAt: "2026-08-22",
  publishedLabel: "22 August 2026",
  readingTime: "6 min",
  author: "Simpluxe Architecture",
  icon: "laptop",
  tone: "ocean",
  image: "/images/insights/api-first-product-foundations.webp",
  takeaways: [
    "Design interfaces around workflows, not database rows.",
    "Idempotency tokens make payment and checkout retries safe.",
    "Typed contracts prevent multi-platform version drift.",
  ],
  sections: [
    {
      heading: "Contracts before implementations",
      paragraphs: [
        "When web, mobile, and third-party integrations consume the same core platform, schemas become the actual product boundary.",
        "Starting with OpenAPI or typed RPC contracts lets frontend and backend teams build in parallel without waiting on endpoint deployments.",
      ],
      callout:
        "The best API is not the one with the most endpoints. It is the one that makes breaking changes mathematically impossible to deploy quietly.",
    },
    {
      heading: "Make mutations safe by default",
      paragraphs: [
        "Network drops and client retries are normal in mobile environments. Idempotency keys prevent duplicate payments, double bookings, and corrupted state.",
      ],
      bullets: [
        "Require unique idempotency keys on all critical state mutations.",
        "Cache responses at the API gateway layer for duplicate requests.",
        "Return uniform error structures that client SDKs can parse deterministically.",
      ],
    },
    {
      heading: "Version by deprecation, not duplication",
      paragraphs: [
        "Avoid maintaining dozens of parallel API versions. Add additive fields, deprecate old fields with clear telemetry, and sunset endpoints using real usage metrics.",
      ],
    },
  ],
};

export const SCALING_SAAS_DATA_LAYERS_INSIGHT: InsightPost = {
  slug: "scaling-saas-data-layers",
  title: "Multi-tenant database architectures: Isolation vs simplicity",
  excerpt:
    "Comparing shared schemas, row-level security, and separate tenant databases for high-growth SaaS applications.",
  category: "Software architecture",
  publishedAt: "2026-07-28",
  publishedLabel: "28 July 2026",
  readingTime: "9 min",
  author: "Simpluxe Engineering",
  icon: "layers",
  tone: "cyan",
  image: "/images/insights/scaling-saas-data-layers.webp",
  takeaways: [
    "Row-level security provides enterprise isolation without database sprawl.",
    "Tenant-aware caching prevents cross-account cache poisoning.",
    "Plan migrations with backward compatibility from day one.",
  ],
  sections: [
    {
      heading: "The multi-tenant spectrum",
      paragraphs: [
        "Every SaaS team faces the tradeoff between operational simplicity and strict enterprise data isolation.",
        "Shared databases with row-level security offer the highest efficiency, while tenant-per-database models suit regulated enterprise compliance.",
      ],
    },
    {
      heading: "Enforcing boundaries at the engine layer",
      paragraphs: [
        "Application-level tenant filtering is prone to human error. PostgreSQL Row-Level Security (RLS) ensures that queries cannot leak data across tenant boundaries even if a developer forgets a WHERE clause.",
      ],
      bullets: [
        "Bind tenant IDs to the active database connection context.",
        "Isolate background jobs by tenant queue to prevent noisy neighbors.",
        "Benchmark multi-tenant indexes to maintain sub-10ms query times.",
      ],
      callout:
        "Security rules belong inside the database engine, not scattered across hundreds of application controllers.",
    },
    {
      heading: "Zero-downtime schema evolution",
      paragraphs: [
        "Run migrations in two phases: expand first by adding nullable columns, backfill data, and contract in a separate deployment.",
      ],
    },
  ],
};
