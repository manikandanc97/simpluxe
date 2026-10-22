import type { ElementType } from "react";
import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import { LayoutDashboardIcon } from "@animateicons/react/lucide/layout-dashboard-icon";
import { ShoppingBagIcon } from "@animateicons/react/lucide/shopping-bag-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { PackageIcon } from "@animateicons/react/lucide/package-icon";
import { PaletteIcon } from "@animateicons/react/lucide/palette-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { COMMON } from "./common";

export interface HomeService {
  id: string;
  name: string;
  icon: ElementType;
}

/**
 * The homepage only needs these three fields. Keeping this projection separate
 * prevents the full services catalogue (FAQs, deliverables and tech stacks)
 * from being serialized into the homepage client bundle.
 */
export const HOME_SERVICES: HomeService[] = [
  { id: "websites", name: COMMON.serviceNames.websites, icon: GlobeIcon },
  { id: "web-apps", name: COMMON.serviceNames.webApplications, icon: LayoutDashboardIcon },
  { id: "ecommerce", name: COMMON.serviceNames.ecommerce, icon: ShoppingBagIcon },
  { id: "mobile-apps", name: COMMON.serviceNames.mobileApps, icon: SmartphoneIcon },
  { id: "saas", name: COMMON.serviceNames.saas, icon: PackageIcon },
  { id: "branding", name: COMMON.serviceNames.branding, icon: PaletteIcon },
  { id: "ui-ux", name: COMMON.serviceNames.uiUx, icon: LayersIcon },
  { id: "custom-software", name: COMMON.serviceNames.customSoftware, icon: CpuIcon },
];

export const SERVICES_SECTION_CONTENT = {
  eyebrow: "Capabilities",
  title: "From Ideas to ",
  highlightedText: "Impact.",
  description: "We engineer custom software, scalable web applications, and mobile platforms — with reliable architecture and zero unnecessary overhead.",
} as const;

export const WHAT_WE_BUILD_CARD_COPY = {
  explore: "Explore service",
  cards: {
    websites: {
      category: "Web Presence",
      description: "Distinctive websites that earn trust at first glance and turn visitors into customers.",
    },
    "web-apps": {
      category: "Business Platforms",
      description: "Powerful web tools built to simplify your most demanding and complex daily work.",
    },
    ecommerce: {
      category: "Digital Commerce",
      description: "Considered storefronts designed to make the buying experience fast and effortless.",
    },
    "mobile-apps": {
      category: "Mobile Experiences",
      description: "Thoughtful apps crafted for the moments that truly matter to your users.",
    },
    saas: {
      category: "Cloud Products",
      description: "Scalable subscription products engineered to grow alongside your expanding team.",
    },
    branding: {
      category: "Brand Identity",
      description: "Clear, memorable identities that people recognise and trust across every touchpoint.",
    },
    "ui-ux": {
      category: "Product Design",
      description: "Intuitive user journeys carefully shaped around the needs of real people.",
    },
    "custom-software": {
      category: "Custom Engineering",
      description: "Tailored systems and tools built precisely for the way your business operates.",
    },
  },
} as const;

export const WHAT_WE_BUILD_NAV_COPY = {
  slideToExplore: "Slide to explore",
  previousService: "Previous service",
  nextService: "Next service",
} as const;
