import type { COMMON } from "@/lib/data/common";

type ServiceType = typeof COMMON.serviceNames.websites | typeof COMMON.serviceNames.webAppsFilter | typeof COMMON.serviceNames.mobileAppsFilter;

export interface Project {
  id: string;
  number: string;
  name: string;
  domain: string;
  serviceType: ServiceType;
  category: string;
  year: string;
  url: string;
  desktopImage?: string;
  mobileImage?: string;
  fullPageImage?: string;
  logo?: string;
  result: string;
  stack: string[];
}
