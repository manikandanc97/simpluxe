"use client";

import type React from "react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { IconBaseProps } from "@/components/ui/animated-icons/types";
import { cn } from "@/lib/utils";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import { HeartIcon } from "@animateicons/react/lucide/heart-icon";
import { HouseIcon } from "@animateicons/react/lucide/house-icon";
import { InfoIcon } from "@animateicons/react/lucide/info-icon";
import { LaptopIcon } from "@animateicons/react/lucide/laptop-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { MailIcon } from "@animateicons/react/lucide/mail-icon";
import { PaletteIcon } from "@animateicons/react/lucide/palette-icon";
import { PhoneIcon } from "@animateicons/react/lucide/phone-icon";
import { PencilIcon } from "@animateicons/react/lucide/pencil-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { GithubIcon } from "@animateicons/react/huge/github-icon";
import { InstagramIcon } from "@animateicons/react/huge/instagram-icon";
import { Linkedin01Icon } from "@animateicons/react/huge/linkedin-0-1-icon";
import { NewTwitterIcon } from "@animateicons/react/huge/new-twitter-icon";
import { YoutubeIcon } from "@animateicons/react/huge/youtube-icon";

export type FooterIconName =
  | "briefcase"
  | "github"
  | "globe"
  | "heart"
  | "home"
  | "info"
  | "instagram"
  | "laptop"
  | "layers"
  | "linkedin"
  | "mail"
  | "palette"
  | "phone"
  | "pencil"
  | "smartphone"
  | "twitter"
  | "youtube";

const FOOTER_ICONS: Record<FooterIconName, React.ComponentType<IconBaseProps>> = {
  briefcase: BriefcaseIcon,
  github: GithubIcon,
  globe: GlobeIcon,
  heart: HeartIcon,
  home: HouseIcon,
  info: InfoIcon,
  instagram: InstagramIcon,
  laptop: LaptopIcon,
  layers: LayersIcon,
  linkedin: Linkedin01Icon,
  mail: MailIcon,
  palette: PaletteIcon,
  phone: PhoneIcon,
  pencil: PencilIcon,
  smartphone: SmartphoneIcon,
  twitter: NewTwitterIcon,
  youtube: YoutubeIcon,
};

interface FooterAnimatedIconProps {
  name: FooterIconName;
  className?: string;
  size?: number;
}

export function FooterAnimatedIcon({
  name,
  className,
  size = 16,
}: FooterAnimatedIconProps) {
  return (
    <AnimatedIcon
      icon={FOOTER_ICONS[name]}
      size={size}
      className={className}
      oncePerInteraction
    />
  );
}

interface FooterAnimatedBadgeProps {
  name: FooterIconName;
  isActive?: boolean;
  className?: string;
  size?: number;
}

export function FooterAnimatedBadge({
  name,
  isActive = false,
  className,
  size = 15,
}: FooterAnimatedBadgeProps) {
  return (
    <span
      data-slot="footer-icon-badge"
      className={cn(
        "size-8 rounded-full flex items-center justify-center shrink-0 border transition-colors",
        isActive
          ? "bg-primary text-white border-primary shadow-sm shadow-primary/25"
          : "bg-primary/10 text-primary border-primary/15 shadow-2xs group-hover:bg-primary group-hover:text-white group-hover:border-primary",
        className
      )}
      aria-hidden="true"
    >
      <FooterAnimatedIcon name={name} size={size} />
    </span>
  );
}
