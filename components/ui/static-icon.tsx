import type { SVGProps } from "react";

export type StaticIconName =
  | "home"
  | "briefcase"
  | "layers"
  | "lightbulb"
  | "info"
  | "mail"
  | "globe"
  | "laptop"
  | "smartphone"
  | "palette"
  | "pencil"
  | "refresh"
  | "arrow-up"
  | "arrow-up-right";

interface StaticIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: StaticIconName;
  size?: number;
}

const paths: Record<StaticIconName, React.ReactNode> = {
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
  lightbulb: <><path d="M9 18h6M10 22h4" /><path d="M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.4 1.5-1.5 2.5h-4c-.1-1-.6-1.8-1.5-2.5Z" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  laptop: <><rect x="4" y="4" width="16" height="12" rx="2" /><path d="M2 20h20" /></>,
  smartphone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18 2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H17A4 4 0 0 0 21 10c0-4-4-7-9-7Z" /><path d="M7.5 10h.01M10 6.5h.01M15 7h.01" /></>,
  pencil: <><path d="m4 20 4.5-1 10-10a2 2 0 0 0-3-3l-10 10L4 20Z" /><path d="m14 7 3 3" /></>,
  refresh: <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.1 9a7 7 0 0 1 11.6-2L20 9M4 15l2.3 2a7 7 0 0 0 11.6-2" /></>,
  "arrow-up": <><path d="m6 10 6-6 6 6M12 4v16" /></>,
  "arrow-up-right": <><path d="M7 17 17 7M7 7h10v10" /></>,
};

export function StaticIcon({ name, size = 16, className, ...props }: StaticIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
