"use client";

import {
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_EVENTS,
  type AnalyticsConsent,
  getPageContext,
  trackEvent,
} from "@/lib/analytics/events";
import { ANALYTICS_CONSENT_COPY } from "@/lib/data/analytics";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const configuredGaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
const GA_ID = configuredGaId && /^G-[A-Z0-9]+$/.test(configuredGaId)
  ? configuredGaId
  : undefined;
const IS_ANALYTICS_CONFIGURED =
  process.env.NODE_ENV === "production" && Boolean(GA_ID);

function readConsent(): AnalyticsConsent | null {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

function writeConsent(consent: AnalyticsConsent) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent);
  } catch {
    // Consent still applies for the current page when storage is unavailable.
  }
}

function updateGoogleConsent(command: "default" | "update", consent: AnalyticsConsent) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    // Google gtag.js expects its command queue entries to be Arguments objects.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("consent", command, {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
  });
}

function configureGoogleAnalytics() {
  if (!GA_ID) return;

  window.gtag?.("js", new Date());
  window.gtag?.("set", {
    send_page_view: false,
  });
  window.gtag?.("config", GA_ID, {
    send_page_view: false,
  });
}

function ContentViewTracker({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      lastTrackedPath.current = null;
      return;
    }
    if (lastTrackedPath.current === pathname) return;

    lastTrackedPath.current = pathname;
    const { pageType, contentSlug } = getPageContext(pathname);
    const contentParameters = {
      page_path: pathname,
      page_type: pageType,
    };

    trackEvent(ANALYTICS_EVENTS.pageView, {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
    });

    if (pageType === "service" && contentSlug) {
      trackEvent(ANALYTICS_EVENTS.serviceView, {
        ...contentParameters,
        service_slug: contentSlug,
      });
    }

    if (pageType === "article" && contentSlug) {
      trackEvent(ANALYTICS_EVENTS.articleView, {
        ...contentParameters,
        article_slug: contentSlug,
      });
    }
  }, [enabled, pathname]);

  return null;
}

function GoogleAnalyticsScript({ gaId }: { gaId: string }) {
  return (
    <Script
      id="simpluxe-ga4"
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      strategy="afterInteractive"
    />
  );
}

function closestWithData(element: Element, key: string) {
  let current: Element | null = element;

  while (current) {
    if (current instanceof HTMLElement && current.dataset[key] !== undefined) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

function InteractionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a");
      const pathname = window.location.pathname;

      if (link) {
        const commonParameters = {
          page_path: pathname,
          link_location: link.dataset.analyticsLocation || "content",
        };

        if (link.protocol === "tel:") {
          trackEvent(ANALYTICS_EVENTS.phoneClick, {
            ...commonParameters,
            contact_method: "phone",
          });
        } else if (link.protocol === "mailto:") {
          trackEvent(ANALYTICS_EVENTS.emailClick, {
            ...commonParameters,
            contact_method: "email",
          });
        } else if (link.hostname === "wa.me" || link.hostname.endsWith("whatsapp.com")) {
          trackEvent(ANALYTICS_EVENTS.whatsappClick, {
            ...commonParameters,
            contact_method: "whatsapp",
          });
        }

        if (link.dataset.analyticsPortfolio) {
          trackEvent(ANALYTICS_EVENTS.portfolioInteraction, {
            page_path: pathname,
            interaction_type: link.dataset.analyticsPortfolio,
            project_id: link.dataset.analyticsProject,
          });
        }
      }

      const cta = closestWithData(event.target, "analyticsCta");
      if (cta) {
        trackEvent(ANALYTICS_EVENTS.primaryCtaClick, {
          page_path: pathname,
          cta_name: cta.dataset.analyticsCta,
          cta_location: cta.dataset.analyticsLocation || "content",
        });
      }

      const portfolioControl = closestWithData(event.target, "analyticsPortfolio");
      if (portfolioControl && !link) {
        trackEvent(ANALYTICS_EVENTS.portfolioInteraction, {
          page_path: pathname,
          interaction_type: portfolioControl.dataset.analyticsPortfolio,
          project_id: portfolioControl.dataset.analyticsProject,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

function ConsentControls({
  consent,
  onChange,
  onReset,
}: {
  consent: AnalyticsConsent | null;
  onChange: (consent: AnalyticsConsent) => void;
  onReset: () => void;
}) {
  if (!IS_ANALYTICS_CONFIGURED) return null;

  if (consent) {
    return (
      <button
        type="button"
        onClick={onReset}
        className="fixed bottom-4 left-4 z-40 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground shadow-card transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {ANALYTICS_CONSENT_COPY.settings}
      </button>
    );
  }

  return (
    <section
      aria-label={ANALYTICS_CONSENT_COPY.ariaLabel}
      className="fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-elevated sm:left-auto sm:max-w-lg sm:p-5"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-bold text-heading">{ANALYTICS_CONSENT_COPY.heading}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {ANALYTICS_CONSENT_COPY.description}{" "}
          <Link href="/privacy" className="font-semibold text-primary underline underline-offset-4">
            {ANALYTICS_CONSENT_COPY.privacyPolicy}
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange("granted")}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {ANALYTICS_CONSENT_COPY.accept}
        </button>
        <button
          type="button"
          onClick={() => onChange("denied")}
          className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {ANALYTICS_CONSENT_COPY.decline}
        </button>
      </div>
    </section>
  );
}

export function AnalyticsProvider() {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);

  useEffect(() => {
    if (!IS_ANALYTICS_CONFIGURED) return;

    const storedConsent = readConsent();
    updateGoogleConsent("default", "denied");
    if (storedConsent === "granted") {
      updateGoogleConsent("update", "granted");
      configureGoogleAnalytics();
    }
    queueMicrotask(() => setConsent(storedConsent));
  }, []);

  const handleConsent = (nextConsent: AnalyticsConsent) => {
    writeConsent(nextConsent);
    updateGoogleConsent("update", nextConsent);
    if (nextConsent === "granted") configureGoogleAnalytics();
    setConsent(nextConsent);
  };

  const resetConsent = () => {
    handleConsent("denied");
    try {
      window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
    } catch {
      // The controls can still be reopened when storage is unavailable.
    }
    setConsent(null);
  };

  return (
    <>
      <ContentViewTracker enabled={consent === "granted" && Boolean(GA_ID)} />
      <InteractionTracker />
      <ConsentControls consent={consent} onChange={handleConsent} onReset={resetConsent} />
      {IS_ANALYTICS_CONFIGURED && consent === "granted" && GA_ID ? (
        <GoogleAnalyticsScript gaId={GA_ID} />
      ) : null}
    </>
  );
}

