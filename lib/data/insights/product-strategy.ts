import type { InsightPost } from "@/types/insight";

export const MVP_WITHOUT_THROWAWAY_CODE_INSIGHT: InsightPost = {
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
};

export const TECHNICAL_DEBT_REPAYMENT_STRATEGY_INSIGHT: InsightPost = {
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
};
