import type { TechItem } from "@/types/tech";
import { FRONTEND_TECH } from "./tech-stack/frontend";
import { MOBILE_TECH } from "./tech-stack/mobile";
import { BACKEND_TECH } from "./tech-stack/backend";
import { DATABASE_TECH } from "./tech-stack/database";
import { DESIGN_TECH } from "./tech-stack/design";

export { CATEGORIES, CATEGORY_ICONS, type Category } from "./tech-stack/categories";
export {
  TECH_STACK_SECTION_CONTENT,
  TECH_CATEGORY_TABS_COPY,
  TECH_VALUE_STRIP_COPY,
  TECH_STACK_INTERACTIVE_COPY,
} from "./tech-stack/copy";
export {
  TECH_DETAILS,
  type ServiceTechDetails,
  type ServiceTechSlug,
} from "./tech-stack/service-technologies";

export const TECH_STACK: TechItem[] = [
  ...FRONTEND_TECH,
  ...MOBILE_TECH,
  ...BACKEND_TECH,
  ...DATABASE_TECH,
  ...DESIGN_TECH,
];
