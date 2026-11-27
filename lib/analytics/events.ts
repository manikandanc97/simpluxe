"use client";

export const ANALYTICS_CONSENT_KEY = "simpluxe_analytics_consent";

export type AnalyticsConsent = "granted" | "denied";

type AnalyticsValue = string | number | boolean;
type AnalyticsParameters = Record<string, AnalyticsValue | undefined>;

export const ANALYTICS_EVENTS = {
  pageView: "page_view",
  serviceView: "service_view",
  articleView: "article_view",
  whatsappClick: "whatsapp_click",
  phoneClick: "phone_click",
  emailClick: "email_click",
  contactFormSubmit: "contact_form_submit",
  generateLead: "generate_lead",
  primaryCtaClick: "primary_cta_click",
  portfolioInteraction: "portfolio_interaction",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const hasAnalyticsConfiguration =
  process.env.NODE_ENV === "production" &&
  Boolean(process.env.NEXT_PUBLIC_GA_ID?.trim());

function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  parameters: AnalyticsParameters = {}
) {
  if (!hasAnalyticsConfiguration || !hasAnalyticsConsent()) return;

  const safeParameters = Object.fromEntries(
    Object.entries(parameters).filter((entry): entry is [string, AnalyticsValue] =>
      entry[1] !== undefined
    )
  );

  window.gtag?.("event", event, safeParameters);
}

export function getPageContext(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "expertise" && segments[1]) {
    return { pageType: "service", contentSlug: segments[1] } as const;
  }

  if (segments[0] === "insights" && segments[1]) {
    return { pageType: "article", contentSlug: segments[1] } as const;
  }

  return {
    pageType: segments[0] || "home",
    contentSlug: undefined,
  } as const;
}

