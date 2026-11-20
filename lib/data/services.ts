import {
  ECOMMERCE_SERVICE,
  MOBILE_APPS_SERVICE,
  WEB_APPS_SERVICE,
  WEBSITES_SERVICE,
} from "./services/client-interface";
import {
  CUSTOM_SOFTWARE_SERVICE,
  SAAS_SERVICE,
} from "./services/core-systems";
import {
  BRANDING_SERVICE,
  UI_UX_SERVICE,
} from "./services/foundation";
import { getServiceSlug } from "./services/routes";
import { getServiceSeo } from "./services/service-seo";
import type { ServiceData } from "@/types/service";

export type { ServiceData, ServiceViewData } from "@/types/service";
export { getServicePath, getServiceSlug } from "./services/routes";
export {
  getServiceSeo,
  SERVICE_SEO_SECTION_COPY,
  type ServiceSeoData,
} from "./services/service-seo";
export {
  SERVICE_DETAIL_PAGE_COPY,
  SERVICES_ACTIVE_SHOWCASE_COPY,
  SERVICES_DELIVERABLES_CONTENT,
  SERVICES_HERO_COPY,
  SERVICES_TECH_STACK_COPY,
  SERVICES_WHAT_WE_BUILD_COPY,
} from "./services/copy";

export const SERVICES_LIST: ServiceData[] = [
  WEBSITES_SERVICE,
  WEB_APPS_SERVICE,
  ECOMMERCE_SERVICE,
  MOBILE_APPS_SERVICE,
  SAAS_SERVICE,
  BRANDING_SERVICE,
  UI_UX_SERVICE,
  CUSTOM_SOFTWARE_SERVICE,
];

export function getServiceBySlug(slug: string) {
  return SERVICES_LIST.find(
    (service) => getServiceSlug(service.id) === slug
  );
}

export function getRelatedServices(serviceId: string) {
  const seo = getServiceSeo(serviceId);
  if (!seo) return [];

  return seo.relatedServiceIds.flatMap((relatedId) => {
    const service = SERVICES_LIST.find((item) => item.id === relatedId);
    return service ? [service] : [];
  });
}
