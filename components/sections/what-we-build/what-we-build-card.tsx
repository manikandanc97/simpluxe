"use client";

import { m as motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { SERVICES_LIST } from "@/lib/content/services";
import {
  MobileAppsMockup,
  SaaSProductsMockup,
  WebAppsMockup,
  WebsitesMockup,
  EcommerceMockup,
  BrandingMockup,
  UIUXMockup,
  AutomationMockup,
} from "./mockups/index";

const MOCKUPS: Record<string, React.ElementType> = {
  websites: WebsitesMockup,
  "web-apps": WebAppsMockup,
  ecommerce: EcommerceMockup,
  "mobile-apps": MobileAppsMockup,
  saas: SaaSProductsMockup,
  branding: BrandingMockup,
  "ui-ux": UIUXMockup,
  automation: AutomationMockup,
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function FadeUp({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{ delay, duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface WhatWeBuildCardProps {
  service: (typeof SERVICES_LIST)[number];
  index: number;
  activeIndex: number;
  totalCount: number;
  onSelect: () => void;
  onNext: () => void;
  onPrev: () => void;
  onOpenLead: (serviceName: string) => void;
}

export function WhatWeBuildCard({
  service,
  index,
  activeIndex,
  totalCount,
  onSelect,
  onNext,
  onPrev,
  onOpenLead,
}: WhatWeBuildCardProps) {
  let offset = index - activeIndex;
  const half = Math.floor(totalCount / 2);
  if (offset > half) offset -= totalCount;
  if (offset < -half) offset += totalCount;

  const isActive = offset === 0;
  const isVisible = Math.abs(offset) <= 1;

  const MockupComponent = MOCKUPS[service.id] || MOCKUPS["websites"];
  const IconComponent = service.icon;

  return (
    <motion.div
      key={service.id}
      onClick={onSelect}
      initial={false}
      animate={{
        x: `${offset * 70}%`,
        scale: isActive ? 1 : 0.75,
        rotateY: offset * -10,
        z: isActive ? 100 : -100,
        opacity: isActive ? 1 : isVisible ? 0.4 : 0,
        filter: isActive
          ? "blur(0px) brightness(1)"
          : isVisible
          ? "blur(1.5px) brightness(0.92)"
          : "blur(4px) brightness(0.8)",
      }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 36,
        mass: 0.75,
        filter: { type: "tween", duration: 0.35, ease: "easeOut" },
        opacity: { type: "tween", duration: 0.3, ease: "easeOut" },
      }}
      data-slot="card"
      className={cn(
        "group absolute top-0 w-full h-full max-w-3xl lg:max-w-4xl rounded-2xl sm:rounded-3xl p-6 pb-6 sm:pb-6 xs:p-6 sm:p-8 lg:p-10 font-satoshi cursor-pointer overflow-hidden",
        "backdrop-blur-2xl border",
        isActive
          ? "bg-card border-primary/20 z-30 pointer-events-auto"
          : "bg-card/60 border-border z-10 pointer-events-auto"
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.06}
      dragTransition={{ bounceStiffness: 450, bounceDamping: 45, power: 0.15, timeConstant: 160 }}
      whileDrag={{ cursor: "grabbing", scale: isActive ? 0.98 : 0.73 }}
      onDragEnd={(_, { offset: dragOffset, velocity }) => {
        const swipe = dragOffset.x;
        const velocityX = velocity.x;
        if (swipe < -40 || velocityX < -500) {
          onNext();
        } else if (swipe > 40 || velocityX > 500) {
          onPrev();
        }
      }}
    >
      <div className="wwb-card-content h-full w-full relative group-hover/wwb:translate-y-[-2px] transition-transform duration-500">
        {/* Ambient glow — only on active */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden
          >
            <motion.div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full"
              style={{
                background: `radial-gradient(circle, ${service.brandColor}22 0%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center w-full h-full relative z-10">
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  key={`content-${service.id}`}
                  className="flex flex-col items-start w-full gap-5 md:gap-6"
                >
                  {/* Number + Icon */}
                  <FadeUp delay={0} className="flex items-center gap-4">
                    <span
                      className="text-2xl sm:text-3xl font-black tracking-tight leading-none font-mono"
                      style={{ color: service.brandColor }}
                    >
                      {service.number}
                    </span>
                    <motion.div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${service.brandColor}1A`, color: service.brandColor }}
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <AnimatedIcon icon={IconComponent} size={16} className="w-4 h-4 stroke-[2.2]" />
                    </motion.div>
                  </FadeUp>

                  <FadeUp delay={0.07}>
                    <h3 className="type-h3 text-foreground mb-1">
                      {service.name}
                    </h3>
                  </FadeUp>

                  <FadeUp delay={0.14}>
                    <p className="type-small text-muted-foreground">
                      {service.shortTagline}
                    </p>
                  </FadeUp>

                  {/* Tags */}
                  <FadeUp delay={0.21} className="flex flex-wrap gap-2 w-full">
                    {service.shortDeliverables?.slice(0, 2).map((item, i) => (
                      <motion.span
                        key={i}
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary border border-border text-foreground type-label max-w-full whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.26 + i * 0.055, duration: 0.3, ease: "easeOut" }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </FadeUp>

                  <FadeUp delay={0.28}>
                    <Button
                      size="default"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLead(service.name);
                      }}
                    >
                      <span>Explore {service.name}</span>
                      <AnimatedArrowRight size={15} className="text-white" />
                    </Button>
                  </FadeUp>
                </motion.div>
              )}

              {/* Inactive — show minimal skeleton-like hint */}
              {!isActive && (
                <motion.div
                  key={`inactive-${service.id}`}
                  className="flex flex-col items-start w-full gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-2xl sm:text-3xl font-black tracking-tight leading-none font-mono"
                      style={{ color: service.brandColor }}
                    >
                      {service.number}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.brandColor}1A`, color: service.brandColor }}
                    >
                      <AnimatedIcon icon={IconComponent} size={16} className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>
                  <h3 className="type-h3 text-foreground">
                    {service.name}
                  </h3>
                  <p className="type-small text-muted-foreground line-clamp-2">
                    {service.shortTagline}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="md:col-span-5 flex items-start justify-center relative w-full mt-2 md:mt-0">
            <motion.div
              className="w-full"
              animate={isActive ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.92, opacity: 0.6, y: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div className="w-full max-w-xs mx-auto flex items-start justify-center px-2 sm:px-4">
                <MockupComponent isActive={isActive} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
