import { AnimatedIconName } from "@/components/ui/animated-icon";

interface FooterCapabilityItem {
  label: string;
  icon: AnimatedIconName;
  id?: string;
}

export interface FooterData {
  navIcons: Record<string, AnimatedIconName>;
  capabilities: FooterCapabilityItem[];
  brandDescription: string;
  exploreTitle: string;
  capabilitiesTitle: string;
  ctaPillText: string;
  ctaTitle: string;
  ctaDescription: string;
  copyrightText: string;
  privacyPolicyText: string;
  termsOfServiceText: string;
  sitemapText: string;
  bottomBadgeText: string;
}
