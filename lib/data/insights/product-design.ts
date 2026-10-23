import type { InsightPost } from "@/types/insight";

export const DESIGNING_CALM_BUSINESS_SOFTWARE_INSIGHT: InsightPost = {
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
  image: "/images/insights/designing-calm-business-software.webp",
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
};

export const DESIGN_TOKENS_AT_SCALE_INSIGHT: InsightPost = {
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
  image: "/images/insights/design-tokens-at-scale.webp",
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
};
