import { FooterData } from "@/types/footer";

export const FOOTER_DATA: FooterData = {
  navIcons: {
    "/": "home",
    "/work": "briefcase",
    "/services": "layers",
    "/about": "info",
    "/contact": "mail",
  },
  capabilities: [
    { label: "Websites & Landing Pages", icon: "globe", id: "websites" },
    { label: "Web Applications", icon: "laptop", id: "web-apps" },
    { label: "Mobile Apps (iOS & Android)", icon: "smartphone", id: "mobile-apps" },
    { label: "SaaS Platforms", icon: "layers", id: "saas" },
    { label: "Branding & Identity", icon: "palette", id: "branding" },
  ],
};
