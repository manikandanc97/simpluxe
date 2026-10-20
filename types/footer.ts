import type { StaticIconName } from "@/components/ui/static-icon";

interface FooterCapabilityItem {
  label: string;
  icon: StaticIconName;
  id?: string;
}

export interface FooterData {
  navIcons: Record<string, StaticIconName>;
  capabilities: FooterCapabilityItem[];
  brandDescription: string;
  exploreTitle: string;
  capabilitiesTitle: string;
  connectTitle: string;
  ctaPillText: string;
  ctaTitle: string;
  ctaDescription: string;
  copyrightText: string;
  privacyPolicyText: string;
  termsOfServiceText: string;
  sitemapText: string;
  bottomBadgeText: string;
}
