import { COMMON } from "../common";

const SERVICE_DETAIL_ROUTES: Record<string, string> = {
  websites: "/expertise/web-development",
  "web-apps": "/expertise/web-application-development",
  ecommerce: "/expertise/ecommerce-development",
  "mobile-apps": "/expertise/mobile-app-development",
  saas: "/expertise/saas-development",
  branding: "/expertise/brand-identity",
  "ui-ux": "/expertise/ui-ux-design",
  "custom-software": "/expertise/custom-software-development",
};

export function getServicePath(serviceId: string) {
  return SERVICE_DETAIL_ROUTES[serviceId] ?? "/expertise";
}

export function getServiceSlug(serviceId: string) {
  return getServicePath(serviceId).split(COMMON.symbols.slash).at(-1) ?? "";
}
