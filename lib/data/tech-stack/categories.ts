import { COMMON } from "@/lib/data/common";
import { type AnimatedIconName } from "@/components/ui/animated-icon";
import type { TechCategory } from "@/types/tech";

export const CATEGORIES = [
  COMMON.categories.frontend,
  COMMON.categories.mobile,
  COMMON.categories.backend,
  COMMON.categories.database,
  COMMON.categories.design,
] as const;

export type Category = TechCategory;

export const CATEGORY_ICONS: Record<Category, AnimatedIconName> = {
  [COMMON.categories.frontend]: "laptop",
  [COMMON.categories.mobile]: "smartphone",
  [COMMON.categories.backend]: "cpu",
  [COMMON.categories.database]: "layers",
  [COMMON.categories.design]: "palette",
};
