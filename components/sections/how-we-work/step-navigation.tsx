"use client";

import { CheckIcon } from "@animateicons/react/lucide/check-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { cn } from "@/lib/utils";
import { STEPS } from "@/lib/content/how-we-work";
import React from "react";

interface StepNavigationProps {
  navContainerRef: React.RefObject<HTMLDivElement | null>;
  activeStepIndex: number;
  onSelectStep: (index: number) => void;
}

export function StepNavigation({
  navContainerRef,
  activeStepIndex,
  onSelectStep,
}: StepNavigationProps) {
  return (
    <div
      ref={navContainerRef}
      className="relative flex items-center justify-start md:justify-center gap-2 sm:gap-4 md:gap-4.5 overflow-x-auto py-1 sm:py-1.5 w-full scrollbar-none [mask-image:linear-gradient(to_right,black_85%,transparent_100%)] lg:[mask-image:none] pr-12 lg:pr-0"
    >
      {STEPS.map((step, index) => {
        const isActive = activeStepIndex === index;
        const isCompleted = activeStepIndex > index;
        const StepIcon = step.icon;

        return (
          <div key={step.id} className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Step Button Card */}
            <button
              type="button"
              role="tab"
              data-slot="tab"
              data-step={index}
              onClick={() => onSelectStep(index)}
              className={cn(
                "relative group flex items-center gap-2 sm:gap-4 px-4 sm:px-4.5 py-2 sm:py-2.5 transition-all duration-300 cursor-pointer text-left rounded-2xl select-none overflow-hidden border",
                isActive
                  ? "bg-white border-pink-200/90 ring-1 ring-pink-100 shadow-xs"
                  : isCompleted
                  ? "bg-white/60 hover:bg-white border-neutral-200/70"
                  : "hover:bg-white/80 border-transparent hover:border-neutral-200/80"
              )}
            >
              {/* Step Number Circle */}
              <div
                className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors shrink-0",
                  isActive
                    ? "bg-[var(--primary-hover)] text-white shadow-xs"
                    : isCompleted
                    ? "bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/60"
                    : "bg-purple-50 text-purple-700 font-bold group-hover:bg-purple-100"
                )}
              >
                {isCompleted ? <AnimatedIcon icon={CheckIcon} size={14} className="w-3.5 h-3.5 stroke-[2.5]" /> : step.number}
              </div>

              {/* Step Icon */}
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors",
                  isActive
                    ? "bg-rose-50 text-rose-500"
                    : isCompleted
                    ? "bg-neutral-100 text-neutral-600"
                    : "bg-neutral-100 text-neutral-500 group-hover:text-neutral-700"
                )}
              >
                <AnimatedIcon icon={StepIcon} size={14} className="w-3.5 h-3.5" />
              </div>

              {/* Step Titles */}
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xs sm:text-sm font-bold leading-tight transition-colors",
                    isActive ? "text-neutral-900" : "text-neutral-700 group-hover:text-neutral-900"
                  )}
                >
                  {step.title}
                </span>
                <span className="text-xs sm:text-xs text-neutral-400 font-medium leading-tight whitespace-nowrap mt-0.5">
                  {step.subtitle}
                </span>
              </div>


            </button>

            {/* Dotted Curved Arrow to Next Step */}
            {index < STEPS.length - 1 && (
              <div className="hidden md:flex items-center justify-center px-0.5">
                {index === 0 && (
                  <svg
                    className={cn(
                      "w-8 lg:w-12 h-5 shrink-0 transition-colors duration-500",
                      activeStepIndex > index ? "text-primary drop-shadow-sm" : "text-pink-300/80"
                    )}
                    viewBox="0 0 56 24"
                    fill="none"
                  >
                    <path
                      d="M 4 8 C 20 20, 36 20, 50 8"
                      stroke="currentColor"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M 43 9 L 50 8 L 48 15"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    className={cn(
                      "w-8 lg:w-12 h-6 shrink-0 transition-colors duration-500",
                      activeStepIndex > index ? "text-primary drop-shadow-sm" : "text-pink-300/80"
                    )}
                    viewBox="0 0 56 32"
                    fill="none"
                  >
                    <path
                      d="M 4 14 C 16 14, 22 26, 14 26 C 6 26, 6 14, 22 10 C 36 6, 46 14, 52 22"
                      stroke="currentColor"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M 51 15 L 52 22 L 46 19"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    className={cn(
                      "w-8 lg:w-12 h-5 shrink-0 transition-colors duration-500",
                      activeStepIndex > index ? "text-primary drop-shadow-sm" : "text-pink-300/80"
                    )}
                    viewBox="0 0 56 24"
                    fill="none"
                  >
                    <path
                      d="M 4 18 C 20 6, 36 6, 50 18"
                      stroke="currentColor"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M 48 11 L 50 18 L 43 17"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
