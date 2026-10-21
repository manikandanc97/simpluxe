import type { COMMON } from "@/lib/data/common";

type ServiceType = typeof COMMON.serviceNames.websites | typeof COMMON.serviceNames.webAppsFilter | typeof COMMON.serviceNames.mobileAppsFilter;

interface ProjectImage {
  publicId: string;
  version: string;
  width: number;
  height: number;
}

interface ProjectShowcaseImages {
  desktop: ProjectImage;
  mobile: ProjectImage;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  domain: string;
  serviceType: ServiceType;
  category: string;
  year: string;
  url: string;
  previewImage?: ProjectImage;
  showcaseImages?: ProjectShowcaseImages;
  result: string;
  stack: string[];
}
