"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { MockupSkeleton } from "@/components/ui/skeleton";
import { WHAT_WE_BUILD_CARD_COPY, type HomeService } from "@/lib/content/home-services";

const loadingSkeleton = () => <MockupSkeleton />;
const WebsitesMockup = dynamic(() => import("./mockups/websites").then((mod) => mod.WebsitesMockup), { loading: loadingSkeleton });
const WebAppsMockup = dynamic(() => import("./mockups/web-apps").then((mod) => mod.WebAppsMockup), { loading: loadingSkeleton });
const EcommerceMockup = dynamic(() => import("./mockups/ecommerce").then((mod) => mod.EcommerceMockup), { loading: loadingSkeleton });
const MobileAppsMockup = dynamic(() => import("./mockups/mobile-apps").then((mod) => mod.MobileAppsMockup), { loading: loadingSkeleton });
const SaaSProductsMockup = dynamic(() => import("./mockups/saas").then((mod) => mod.SaaSProductsMockup), { loading: loadingSkeleton });
const BrandingMockup = dynamic(() => import("./mockups/branding").then((mod) => mod.BrandingMockup), { loading: loadingSkeleton });
const UIUXMockup = dynamic(() => import("./mockups/ui-ux").then((mod) => mod.UIUXMockup), { loading: loadingSkeleton });
const AutomationMockup = dynamic(() => import("./mockups/automation").then((mod) => mod.AutomationMockup), { loading: loadingSkeleton });
const CustomSoftwareMockup = dynamic(() => import("./mockups/custom-software").then((mod) => mod.CustomSoftwareMockup), { loading: loadingSkeleton });

const MOCKUPS: Record<string, React.ElementType> = {
  websites: WebsitesMockup,
  "web-apps": WebAppsMockup,
  ecommerce: EcommerceMockup,
  "mobile-apps": MobileAppsMockup,
  saas: SaaSProductsMockup,
  branding: BrandingMockup,
  "ui-ux": UIUXMockup,
  automation: AutomationMockup,
  "custom-software": CustomSoftwareMockup,
};

interface WhatWeBuildCardProps {
  service: HomeService;
  isCurrentSlide?: boolean;
  isAnimating?: boolean;
  onActivate: (serviceId: string) => void;
  onDeactivate: () => void;
}

export const WhatWeBuildCard = memo(function WhatWeBuildCard({
  service,
  isCurrentSlide = false,
  isAnimating = false,
  onActivate,
  onDeactivate,
}: WhatWeBuildCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [shouldLoadMockup, setShouldLoadMockup] = useState(isCurrentSlide);
  const MockupComponent = MOCKUPS[service.id];
  const IconComponent = service.icon;
  const copy = WHAT_WE_BUILD_CARD_COPY.cards[service.id as keyof typeof WHAT_WE_BUILD_CARD_COPY.cards];
  const animateMockup = isAnimating && !prefersReducedMotion;

  useEffect(() => {
    if (shouldLoadMockup || isCurrentSlide) {
      if (isCurrentSlide) setShouldLoadMockup(true);
      return;
    }

    const card = cardRef.current;
    if (!card || !("IntersectionObserver" in window)) {
      setShouldLoadMockup(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadMockup(true);
        observer.disconnect();
      },
      { rootMargin: "320px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [isCurrentSlide, shouldLoadMockup]);

  return (
    <Link
      ref={cardRef}
      href={`/services#${service.id}`}
      scroll={false}
      data-animated-icon-target
      data-inactive={!isCurrentSlide}
      onMouseEnter={() => onActivate(service.id)}
      onMouseLeave={onDeactivate}
      onFocus={() => onActivate(service.id)}
      onBlur={onDeactivate}
      onPointerDown={(event) => {
        if (event.pointerType === "touch") onActivate(service.id);
      }}
      className="wwb-slider-card group snap-start flex flex-col overflow-hidden rounded-3xl border border-transparent bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      draggable={false}
    >
      <div aria-hidden="true" className="relative isolate flex h-72 items-center justify-center overflow-hidden bg-secondary p-4 lg:h-80 lg:p-6">
        <div className="relative flex h-full w-full max-w-64 items-center justify-center lg:max-w-80">
          {MockupComponent && shouldLoadMockup ? <MockupComponent isActive={animateMockup} /> : (
            <div className="flex h-40 items-center justify-center rounded-2xl border border-border bg-white">
              <AnimatedIcon icon={IconComponent} size={32} className="text-primary" />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-7">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wide text-primary">{copy.category}</span>
          <h3 className="text-xl font-semibold leading-tight text-foreground">{service.name}</h3>
          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">{copy.description}</p>
        </div>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          {WHAT_WE_BUILD_CARD_COPY.explore}
          <AnimatedArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
});
