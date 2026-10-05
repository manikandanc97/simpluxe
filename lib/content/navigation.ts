import { ElementType as LucideIcon } from "react";
import { BriefcaseIcon, InfoIcon, LayersIcon, MailIcon } from "@animateicons/react/lucide";

export interface NavItem {
  label: string;
  route: string;
  icon: LucideIcon;
  commandName: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", route: "/work", icon: BriefcaseIcon, commandName: "Go to Work" },
  { label: "Services", route: "/services", icon: LayersIcon, commandName: "Go to Services" },
  { label: "About", route: "/about", icon: InfoIcon, commandName: "Go to About" },
  { label: "Contact", route: "/contact", icon: MailIcon, commandName: "Go to Contact" },
];

export interface NavbarContent {
  availabilityText: string;
  ctaText: string;
}

export const NAVBAR_CONTENT: NavbarContent = {
  availabilityText: "Available for projects",
  ctaText: "Start a project",
};
