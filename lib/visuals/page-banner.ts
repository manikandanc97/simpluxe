

// page-banner
export interface TechPositionConfig {
  className: string;
  duration: number;
  delay: number;
  yOffset: number;
  rotateOffset: number;
  hideOnMobile: boolean;
}

export const DEFAULT_TECH_SLUGS: string[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwindcss",
  "supabase",
  "docker",
];

export const TECH_POSITIONS: TechPositionConfig[] = [
  {
    className: "top-2/25 sm:top-3/25 left-1/50 sm:left-1/20 lg:left-2/25",
    duration: 6.5,
    delay: 0,
    yOffset: 8,
    rotateOffset: 3,
    hideOnMobile: true,
  },
  {
    className: "top-banner-icon sm:top-banner-icon-lg left-3/200 sm:left-3/100 lg:left-1/20",
    duration: 8,
    delay: 1.2,
    yOffset: 10,
    rotateOffset: -3,
    hideOnMobile: false,
  },
  {
    className: "bottom-2/25 sm:bottom-3/25 left-3/100 sm:left-3/50 lg:left-9/100",
    duration: 7,
    delay: 0.4,
    yOffset: 7,
    rotateOffset: 2.5,
    hideOnMobile: true,
  },
  {
    className: "top-2/25 sm:top-3/25 right-1/50 sm:right-1/20 lg:right-2/25",
    duration: 7.2,
    delay: 0.8,
    yOffset: 9,
    rotateOffset: -3,
    hideOnMobile: true,
  },
  {
    className: "top-banner-icon sm:top-banner-icon-lg right-3/200 sm:right-3/100 lg:right-1/20",
    duration: 6,
    delay: 1.6,
    yOffset: 8,
    rotateOffset: 3,
    hideOnMobile: false,
  },
  {
    className: "bottom-2/25 sm:bottom-3/25 right-3/100 sm:right-3/50 lg:right-9/100",
    duration: 8.5,
    delay: 0.2,
    yOffset: 10,
    rotateOffset: -2.5,
    hideOnMobile: true,
  },
];
