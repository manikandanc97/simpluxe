type ServiceType = "Websites" | "Web Apps" | "Mobile Apps";

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
  logo?: string;
  result: string;
  stack: string[];
}

export interface SelectedWorkSectionContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  archiveLinkText: string;
  buildsTextSuffix: string;
  liveClientSiteText: string;
}
