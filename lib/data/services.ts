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
import type { ServiceData } from "./services/types";

export type { ServiceData, ServiceViewData } from "./services/types";
export { getServicePath, getServiceSlug } from "./services/routes";
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
