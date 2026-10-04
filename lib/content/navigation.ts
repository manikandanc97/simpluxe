import { Briefcase, Home, Info, Layers, Mail, type LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  route: string;
  icon: LucideIcon;
  commandName: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", route: "/", icon: Home, commandName: "Go to Home" },
  { label: "Work", route: "/work", icon: Briefcase, commandName: "Go to Work" },
  { label: "Services", route: "/services", icon: Layers, commandName: "Go to Services" },
  { label: "About", route: "/about", icon: Info, commandName: "Go to About" },
  { label: "Contact", route: "/contact", icon: Mail, commandName: "Go to Contact" },
];

export interface NavbarContent {
  availabilityText: string;
  ctaText: string;
}

export const NAVBAR_CONTENT: NavbarContent = {
  availabilityText: "Available for projects",
  ctaText: "Start a project",
};
