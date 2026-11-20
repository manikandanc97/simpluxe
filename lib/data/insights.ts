import type { InsightPost, PublishedInsightPost } from "@/types/insight";
import {
  API_FIRST_PRODUCT_FOUNDATIONS_INSIGHT,
  ARCHITECTURE_BEFORE_FEATURES_INSIGHT,
  SCALING_SAAS_DATA_LAYERS_INSIGHT,
} from "./insights/software-architecture";
import {
  DESIGN_TOKENS_AT_SCALE_INSIGHT,
  DESIGNING_CALM_BUSINESS_SOFTWARE_INSIGHT,
} from "./insights/product-design";
import {
  MVP_WITHOUT_THROWAWAY_CODE_INSIGHT,
  TECHNICAL_DEBT_REPAYMENT_STRATEGY_INSIGHT,
} from "./insights/product-strategy";
import {
  MOBILE_OFFLINE_FIRST_ARCHITECTURE_INSIGHT,
  OBSERVABILITY_BEYOND_MONITORING_INSIGHT,
  WHEN_TO_MODERNIZE_INTERNAL_TOOLS_INSIGHT,
} from "./insights/digital-operations";
import { TIRUPPUR_TEXTILE_WEBSITES_INSIGHT } from "./insights/tiruppur-textile-websites";

export { INSIGHTS_PAGE_COPY } from "./insights/copy";
export type { InsightPost, PublishedInsightPost } from "@/types/insight";

const ALL_INSIGHTS: readonly InsightPost[] = [
  ARCHITECTURE_BEFORE_FEATURES_INSIGHT,
  DESIGNING_CALM_BUSINESS_SOFTWARE_INSIGHT,
  MVP_WITHOUT_THROWAWAY_CODE_INSIGHT,
  WHEN_TO_MODERNIZE_INTERNAL_TOOLS_INSIGHT,
  API_FIRST_PRODUCT_FOUNDATIONS_INSIGHT,
  DESIGN_TOKENS_AT_SCALE_INSIGHT,
  SCALING_SAAS_DATA_LAYERS_INSIGHT,
  MOBILE_OFFLINE_FIRST_ARCHITECTURE_INSIGHT,
  TECHNICAL_DEBT_REPAYMENT_STRATEGY_INSIGHT,
  OBSERVABILITY_BEYOND_MONITORING_INSIGHT,
  TIRUPPUR_TEXTILE_WEBSITES_INSIGHT,
];

export function isPublishedInsight(
  insight: InsightPost
): insight is PublishedInsightPost {
  return insight.status === "published";
}

/** Public article collection. Draft content must only be accessed through getInsight. */
export const INSIGHTS: readonly PublishedInsightPost[] = ALL_INSIGHTS.filter(isPublishedInsight);

export function getInsight(slug: string) {
  return ALL_INSIGHTS.find((insight) => insight.slug === slug);
}
