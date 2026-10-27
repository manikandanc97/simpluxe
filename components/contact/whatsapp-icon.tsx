"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { WhatsappIcon as PackageWhatsappIcon } from "@animateicons/react/huge/whatsapp-icon";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <AnimatedIcon
      icon={PackageWhatsappIcon}
      size={20}
      className={className}
      aria-hidden="true"
    />
  );
}
