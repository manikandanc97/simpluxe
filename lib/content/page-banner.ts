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

// 6 positions scattered symmetrically on outer gutters
export const TECH_POSITIONS: TechPositionConfig[] = [
  {
    className: "top-[8%] sm:top-[12%] left-[2%] sm:left-[5%] lg:left-[8%]",
    duration: 6.5,
    delay: 0,
    yOffset: 8,
    rotateOffset: 3,
    hideOnMobile: true,
  },
  {
    className: "top-[calc(50%-22px)] sm:top-[calc(50%-26px)] left-[1.5%] sm:left-[3%] lg:left-[5%]",
    duration: 8,
    delay: 1.2,
    yOffset: 10,
    rotateOffset: -3,
    hideOnMobile: false,
  },
  {
    className: "bottom-[8%] sm:bottom-[12%] left-[3%] sm:left-[6%] lg:left-[9%]",
    duration: 7,
    delay: 0.4,
    yOffset: 7,
    rotateOffset: 2.5,
    hideOnMobile: true,
  },
  {
    className: "top-[8%] sm:top-[12%] right-[2%] sm:right-[5%] lg:right-[8%]",
    duration: 7.2,
    delay: 0.8,
    yOffset: 9,
    rotateOffset: -3,
    hideOnMobile: true,
  },
  {
    className: "top-[calc(50%-22px)] sm:top-[calc(50%-26px)] right-[1.5%] sm:right-[3%] lg:right-[5%]",
    duration: 6,
    delay: 1.6,
    yOffset: 8,
    rotateOffset: 3,
    hideOnMobile: false,
  },
  {
    className: "bottom-[8%] sm:bottom-[12%] right-[3%] sm:right-[6%] lg:right-[9%]",
    duration: 8.5,
    delay: 0.2,
    yOffset: 10,
    rotateOffset: -2.5,
    hideOnMobile: true,
  },
];
