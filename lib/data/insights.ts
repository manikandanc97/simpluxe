import type { InsightPost } from "@/types/insight";
import { COMMON } from "@/lib/data/common";

export const INSIGHTS_PAGE_COPY = {
  metadataTitle: "Insights on Software, Product Design & Architecture",
  metadataDescription:
    "Practical notes from Simpluxe on software architecture, product design, engineering decisions, and building digital products that stay clear as they scale.",
  currentPage: COMMON.pages.insights,
  heroTitle: "Thinking behind",
  heroHighlight: "the build.",
  heroDescription:
    "Practical field notes on product decisions, software architecture, and the details that make digital products easier to use and maintain.",
  featuredEyebrow: "Featured perspective",
  latestEyebrow: "Studio journal",
  latestTitle: "Latest insights",
  latestDescription:
    "Short, useful perspectives for teams planning, designing, or improving a digital product.",
  readArticle: "Read insight",
  minReadSuffix: "read",
  writtenBy: "Written by",
  published: "Published",
  keyTakeaways: "Key takeaways",
  articleContents: "In this insight",
  relatedEyebrow: "Continue exploring",
  relatedTitle: "Related insights",
  backToInsights: "Back to insights",
  contactTitle: "Have a product decision to work through?",
  contactDescription:
    "Bring us the context. We will help turn the moving parts into a clear, buildable direction.",
  contactAction: "Start a conversation",
  sectionLabel: (index: number) => String(index + 1).padStart(2, "0"),
  coverCode: (index: number) => `S/${String(index + 1).padStart(2, "0")}`,
  articlePath: (slug: string) => `/insights/${slug}`,
  allTopics: "All perspectives",
  searchPlaceholder: "Search insights...",
  searchAriaLabel: "Search insights",
  clearSearch: "Clear search",
  showingCount: (shown: number, total: number) => `Showing ${shown} of ${total} perspectives`,
  noMatchesTitle: "No matching insights found",
  noMatchesDescription: "Try adjusting your search query or selecting another topic.",
  resetFilters: "Reset filters",
  leadPerspectiveBadge: "Lead perspective",
  coreTakeawayQuote: "Core takeaway",
  previousPage: "First",
  nextPage: "Last",
  firstPage: "First",
  lastPage: "Last",
  pageIndicator: (current: number, total: number) => `Page ${current} of ${total}`,
  paginationAriaLabel: "Insights pagination",
  latestFirst: "Latest First",
  oldestFirst: "Oldest First",
  alphabetical: "Alphabetical",
} as const;

export const INSIGHTS: readonly InsightPost[] = [
  {
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
    image: "/images/insights/architecture-before-features.jpg",
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
  },
  {
    slug: "designing-calm-business-software",
    title: "Designing calm software for complex business workflows",
    excerpt:
      "How hierarchy, progressive disclosure, and predictable actions turn dense operational tools into focused working environments.",
    category: "Product design",
    publishedAt: "2026-10-02",
    publishedLabel: "2 October 2026",
    readingTime: "6 min",
    author: "Simpluxe Design",
    icon: "palette",
    tone: "sky",
    image: "/images/insights/designing-calm-business-software.jpg",
    takeaways: [
      "Complexity should be organized, not hidden.",
      "Every screen needs one dominant decision or task.",
      "Consistency reduces training time and operational mistakes.",
    ],
    sections: [
      {
        heading: "Calm is a form of clarity",
        paragraphs: [
          "Business software can contain many states, permissions, and exceptions without feeling chaotic. Calm interfaces give each layer of information a clear purpose and reveal detail when it becomes relevant.",
          "This is less about visual minimalism and more about helping a person understand where they are, what changed, and what action matters next.",
        ],
      },
      {
        heading: "Build a visible hierarchy",
        paragraphs: [
          "Strong hierarchy separates navigation, context, content, and actions. Repeating the same hierarchy across workflows makes unfamiliar screens feel learnable.",
        ],
        bullets: [
          "Keep primary actions stable in position and language.",
          "Use status, ownership, and deadlines as navigational signals.",
          "Move advanced controls behind deliberate disclosure.",
        ],
      },
      {
        heading: "Measure friction in the real workflow",
        paragraphs: [
          "A polished prototype can still fail inside a busy operating environment. Test with realistic records, interruptions, and handoffs. The most valuable improvements often appear between screens rather than inside a single screen.",
        ],
        callout:
          "A calm product is one that continues to make sense when the user is rushed, interrupted, or returning after time away.",
      },
    ],
  },
  {
    slug: "mvp-without-throwaway-code",
    title: "How to build an MVP without creating throwaway software",
    excerpt:
      "A focused delivery model for validating the riskiest assumptions while keeping the foundation ready for real customers.",
    category: "Product strategy",
    publishedAt: "2026-09-18",
    publishedLabel: "18 September 2026",
    readingTime: "8 min",
    author: "Simpluxe Product",
    icon: "lightbulb",
    tone: "cyan",
    image: "/images/insights/mvp-without-throwaway-code.jpg",
    takeaways: [
      "Reduce scope, not engineering discipline.",
      "Validate one complete customer journey.",
      "Keep product evidence close to delivery decisions.",
    ],
    sections: [
      {
        heading: "Minimum does not mean temporary",
        paragraphs: [
          "An MVP should minimize the number of assumptions being tested at once. It should not minimize reliability, security, or the clarity of the code that supports the core journey.",
          "The useful question is not how little can be built. It is what is the smallest complete experience that produces trustworthy evidence.",
        ],
      },
      {
        heading: "Protect the core journey",
        paragraphs: [
          "Select one audience, one meaningful problem, and one end-to-end outcome. Supporting features should earn their place by making that journey possible or measurable.",
        ],
        bullets: [
          "Use real authentication and data ownership rules.",
          "Instrument the decisions that define product value.",
          "Defer secondary roles, settings, and automation until evidence demands them.",
        ],
      },
      {
        heading: "Create options, not abstractions",
        paragraphs: [
          "Good MVP architecture leaves clear places to extend without building every extension in advance. A small number of well-named modules and explicit interfaces usually creates more flexibility than a large abstraction layer.",
        ],
        callout:
          "Build the first version so the next decision is inexpensive—not so every future decision has already been made.",
      },
    ],
  },
  {
    slug: "when-to-modernize-internal-tools",
    title: "Five signals your internal tools need modernization",
    excerpt:
      "Operational warning signs that indicate spreadsheets, manual handoffs, or legacy dashboards are now limiting the business.",
    category: "Digital operations",
    publishedAt: "2026-09-05",
    publishedLabel: "5 September 2026",
    readingTime: "5 min",
    author: "Simpluxe Engineering",
    icon: "refresh",
    tone: "slate",
    image: "/images/insights/when-to-modernize-internal-tools.jpg",
    takeaways: [
      "Repeated reconciliation is a system problem.",
      "Manual handoffs hide both delay and risk.",
      "Modernization should begin with the highest-friction workflow.",
    ],
    sections: [
      {
        heading: "The cost appears between systems",
        paragraphs: [
          "Legacy tools rarely fail all at once. Their cost appears gradually through duplicate entry, delayed reporting, unclear ownership, and work that depends on one person's memory.",
          "These symptoms matter because they compound. Every new customer, location, or service creates more reconciliation work instead of more leverage.",
        ],
      },
      {
        heading: "Look for operational signals",
        paragraphs: [
          "Modernization becomes valuable when the workflow itself is constraining decisions or service quality—not simply because the technology is old.",
        ],
        bullets: [
          "Teams maintain parallel spreadsheets to trust the official system.",
          "Customers wait while information moves between departments.",
          "Reporting requires manual cleanup before it can guide a decision.",
          "Small process changes require developer intervention or vendor workarounds.",
          "Access rules are understood socially instead of enforced technically.",
        ],
      },
      {
        heading: "Modernize one valuable path first",
        paragraphs: [
          "A full replacement is not always the safest first move. Start with the workflow where delay, duplication, or error has the clearest business cost. Build a reliable path around it, integrate where necessary, and expand from evidence.",
        ],
      },
    ],
  },
  {
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
    image: "/images/insights/api-first-product-foundations.jpg",
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
  },
  {
    slug: "design-tokens-at-scale",
    title: "Design tokens that engineering teams actually enjoy using",
    excerpt:
      "A systematic approach to mathematical spacing, color contrast scales, and semantic tokens across web and mobile.",
    category: "Product design",
    publishedAt: "2026-08-10",
    publishedLabel: "10 August 2026",
    readingTime: "5 min",
    author: "Simpluxe Design",
    icon: "palette",
    tone: "sky",
    image: "/images/insights/design-tokens-at-scale.jpg",
    takeaways: [
      "Name tokens by semantic intent, not literal color value.",
      "Keep spacing scales strictly mathematical to eliminate visual noise.",
      "Single source of truth bridges Figma and production code.",
    ],
    sections: [
      {
        heading: "Intent over appearance",
        paragraphs: [
          "A token named 'blue-500' breaks as soon as dark mode or a rebranding happens. A token named 'color-brand-primary' retains meaning regardless of the theme.",
          "Semantic naming separates the design decision from the hex code, allowing teams to evolve themes without rewriting component classes.",
        ],
      },
      {
        heading: "Mathematical rhythm creates calm",
        paragraphs: [
          "Arbitrary pixel margins create visual friction. Constraining layouts to a strict 4px or 8px grid creates rhythm that makes dense business tools feel orderly.",
        ],
        bullets: [
          "Restrict spacing to a fixed scale of 8 named steps.",
          "Derive border radii and typography line heights from matching scales.",
          "Audit pull requests for arbitrary bracket values and one-off colors.",
        ],
        callout:
          "Consistency in design systems is not about restriction. It is about removing decisions that do not add customer value.",
      },
      {
        heading: "Automate token synchronization",
        paragraphs: [
          "Export tokens from design tools directly into JSON and generate typed CSS variables and Tailwind utilities during build time to eliminate drift.",
        ],
      },
    ],
  },
  {
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
    image: "/images/insights/scaling-saas-data-layers.jpg",
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
  },
  {
    slug: "mobile-offline-first-architecture",
    title: "Offline-first mobile apps that handle intermittent connectivity",
    excerpt:
      "Architecting optimistic mutations, local SQLite persistence, and conflict-free reconciliation for field software.",
    category: "Digital operations",
    publishedAt: "2026-07-14",
    publishedLabel: "14 July 2026",
    readingTime: "7 min",
    author: "Simpluxe Engineering",
    icon: "smartphone",
    tone: "slate",
    image: "/images/insights/mobile-offline-first-architecture.jpg",
    takeaways: [
      "Optimistic UI updates give immediate feedback even in poor networks.",
      "Store delta changes locally before syncing with central servers.",
      "Conflict resolution rules should favor customer data preservation.",
    ],
    sections: [
      {
        heading: "Network availability is an exception",
        paragraphs: [
          "Field workers, travelers, and warehouse operators frequently work in cellular dead zones. Software that requires constant connectivity frustrates users and halts business operations.",
          "An offline-first architecture treats local storage as the primary source of truth, synchronizing with the cloud in the background when connectivity returns.",
        ],
      },
      {
        heading: "Optimistic updates and local queues",
        paragraphs: [
          "When a user presses Save, update the local SQLite database and render the new state immediately. Queue the network mutation with retry backoff.",
        ],
        bullets: [
          "Assign client-generated UUIDs so entities exist before server confirmation.",
          "Record change deltas with logical timestamps rather than whole-row snapshots.",
          "Notify users of sync status through subtle ambient indicators, not blocking modals.",
        ],
        callout:
          "A great offline experience does not feel offline. It feels instantaneous.",
      },
      {
        heading: "Conflict resolution strategies",
        paragraphs: [
          "Use deterministic Last-Write-Wins or Field-Level Merging to resolve concurrent edits automatically without prompting users with confusing diff dialogues.",
        ],
      },
    ],
  },
  {
    slug: "technical-debt-repayment-strategy",
    title: "How to pay down technical debt without pausing product delivery",
    excerpt:
      "A sustainable framework for refactoring critical paths during active feature cycles using the Strangler Fig pattern.",
    category: "Product strategy",
    publishedAt: "2026-06-30",
    publishedLabel: "30 June 2026",
    readingTime: "6 min",
    author: "Simpluxe Product",
    icon: "lightbulb",
    tone: "ocean",
    image: "/images/insights/technical-debt-repayment-strategy.jpg",
    takeaways: [
      "Treat refactoring as routine maintenance, not a quarterly emergency.",
      "Carve out small, self-contained modules behind feature flags.",
      "Measure delivery velocity before and after architectural fixes.",
    ],
    sections: [
      {
        heading: "The myth of the total rewrite",
        paragraphs: [
          "Stopping all product development for a six-month ground-up rewrite is one of the riskiest decisions a software company can make. Competitors move forward while customers receive zero updates.",
          "Sustainable engineering teams pay down technical debt continuously by migrating critical workflows piece by piece behind stable interfaces.",
        ],
        callout:
          "You do not need a rewrite. You need clear boundaries around legacy code.",
      },
      {
        heading: "Apply the Strangler Fig pattern",
        paragraphs: [
          "Intercept incoming requests at the routing layer and direct specific endpoints to new micro-services or modular handlers while legacy code handles the rest.",
        ],
        bullets: [
          "Allocate 20% of every sprint to architectural cleanup and automated testing.",
          "Use dark launching to run new and old implementations in parallel.",
          "Decommission deprecated code paths as soon as traffic shifts completely.",
        ],
      },
      {
        heading: "Align refactoring with business goals",
        paragraphs: [
          "Do not refactor code simply because it is old. Focus on code paths where customer-reported bugs or feature delays are actively costing the company money.",
        ],
      },
    ],
  },
  {
    slug: "observability-beyond-monitoring",
    title: "Observability for business software: Tracing what actually matters",
    excerpt:
      "Why standard uptime pings miss silent transaction failures and how structured telemetry protects revenue.",
    category: "Digital operations",
    publishedAt: "2026-06-12",
    publishedLabel: "12 June 2026",
    readingTime: "8 min",
    author: "Simpluxe Architecture",
    icon: "globe",
    tone: "sky",
    image: "/images/insights/observability-beyond-monitoring.jpg",
    takeaways: [
      "Monitor completion rates of key user journeys, not just HTTP 200s.",
      "Correlate frontend sessions with backend trace IDs for fast triage.",
      "Alert on business anomalies before customers report them.",
    ],
    sections: [
      {
        heading: "Green dashboards can hide broken products",
        paragraphs: [
          "A health check pinging '/' can return 200 OK while the checkout flow or payment gateway integration is completely broken for real users.",
          "Modern observability focuses on business-critical journeys: signup completions, checkout success rates, and webhook processing latencies.",
        ],
      },
      {
        heading: "Structured logs and distributed traces",
        paragraphs: [
          "Pass a unified request ID from the user click in the browser through API gateways down to database queries. When an error occurs, engineers can inspect the exact timeline in seconds.",
        ],
        bullets: [
          "Emit JSON logs with standardized tenant, user, and journey tags.",
          "Track 95th and 99th percentile latencies to catch degraded performance.",
          "Set up synthetic probes that execute end-to-end user transactions every 5 minutes.",
        ],
        callout:
          "If your team learns about production outages from angry customers, your monitoring is already obsolete.",
      },
      {
        heading: "Alert on trends, not noise",
        paragraphs: [
          "Transient spikes happen. Alert on sustained degradation over a multi-minute window to prevent alert fatigue while catching real incidents immediately.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((insight) => insight.slug === slug);
}
