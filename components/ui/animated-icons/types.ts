import type React from "react";

export type AnimatedIconName =
  | "arrow-right"
  | "arrow-left"
  | "arrow-up"
  | "sparkles"
  | "home"
  | "briefcase"
  | "layers"
  | "lightbulb"
  | "info"
  | "contact"
  | "palette"
  | "type"
  | "sun"
  | "moon"
  | "send"
  | "check"
  | "rotate-ccw"
  | "mail"
  | "message-square"
  | "x"
  | "menu"
  | "grid"
  | "chevron-down"
  | "chevron-right"
  | "external-link"
  | "zap"
  | "pencil"
  | "list-checks"
  | "globe"
  | "smartphone"
  | "laptop"
  | "cpu"
  | "help-circle"
  | "folder"
  | "sliders"
  | "search"
  | "code"
  | "play"
  | "phone"
  | "refresh"
  | "arrow-up-right";

export interface AnimateIconHandle {
  startAnimation: () => void | Promise<void>;
  stopAnimation: () => void | Promise<void>;
}

export interface IconBaseProps {
  size?: number;
  className?: string;
  isAnimated?: boolean;
  color?: string;
  ref?: React.Ref<AnimateIconHandle>;
}

export interface AnimatedIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: AnimatedIconName;
  icon?: React.ComponentType<IconBaseProps> | React.ComponentType<unknown> | React.ElementType;
  size?: number | string;
  className?: string;
  animateOnHover?: boolean;
  loop?: boolean;
  hoverDelay?: number; // Milliseconds to wait before animating on hover (e.g. 1000 for menu items)
  oncePerInteraction?: boolean; // When true, hover and click combined only animates once per hover session
  parentSelector?: string; // Optional custom selector for the interactive parent element
}
