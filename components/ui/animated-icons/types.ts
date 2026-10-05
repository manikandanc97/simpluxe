import React from "react";

export type AnimatedIconName =
  | "arrow-right"
  | "arrow-left"
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
  | "play";

export interface AnimateIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface CustomIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  duration?: number;
  isAnimated?: boolean;
  color?: string;
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
  solid?: boolean;
  hoverDelay?: number; // Milliseconds to wait before animating on hover (e.g. 1000 for menu items)
  oncePerInteraction?: boolean; // When true, hover and click combined only animates once per hover session
  parentSelector?: string; // Optional custom selector for the interactive parent element
}
