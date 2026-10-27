import { WEBSITES_COPY } from "@/lib/data/what-we-build-mockups";

import { m as motion } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { ImageIcon } from "@animateicons/react/lucide/image-icon";
import { LayoutGridIcon } from "@animateicons/react/lucide/layout-grid-icon";
import { MousePointerIcon } from "@animateicons/react/lucide/mouse-pointer-icon";
import { MockupFrame } from "./mockup-frame";

export function WebsitesMockup({ isActive }: { isActive?: boolean }) {
  return (
    <MockupFrame
      gradientClass="bg-orange-50"
      innerClassName="gap-3 p-3.5 sm:p-4"
    >
        <div className="flex shrink-0 items-center justify-between border-b border-black/4 pb-1">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-orange-600" />
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <div className="w-2 h-2 rounded-full bg-orange-300" />
          </div>
          <div className="w-20 h-2 rounded-full bg-slate-100" />
        </div>

        <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-lg">
          <motion.div
            animate={isActive ? { y: [0, 0, -104, -104, 0] } : { y: 0 }}
            transition={{ duration: 9, times: [0, 0.25, 0.45, 0.75, 1], repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="flex flex-col gap-6 w-full relative"
          >
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-6 flex flex-col gap-2">
                <h4 className="text-sm font-extrabold tracking-tight text-foreground leading-snug sm:text-base">
                  {WEBSITES_COPY.buildYourNextIdea}</h4>
                <motion.div
                  animate={isActive ? { scale: [1, 1, 0.96, 1] } : { scale: 1 }}
                  transition={{ duration: 9, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                  className="w-16 h-5 rounded-md bg-orange-700 flex items-center justify-center shadow-sm"
                >
                  <div className="w-9 h-1.5 rounded-full bg-white/90" />
                </motion.div>
              </div>

              <div className="col-span-6 aspect-4/3 rounded-xl bg-orange-100 border border-orange-200 p-1.5 flex items-center justify-center relative overflow-hidden shadow-sm">
                <motion.div
                  animate={isActive ? { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] } : { opacity: 0.7, scale: 1 }}
                  transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                  className="w-full h-full rounded-lg bg-orange-200 flex items-end justify-center pb-1"
                >
                  <AnimatedIcon icon={ImageIcon} size={28} className="text-orange-700 opacity-70" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center opacity-80">
              <div className="col-span-12 flex flex-col gap-1.5">
                <div className="w-24 h-2.5 rounded-full bg-slate-200" />
                <div className="w-full h-2 rounded-full bg-slate-100" />
                <div className="w-4/5 h-2 rounded-full bg-slate-100" />
              </div>
              <div className="col-span-4 aspect-square rounded-lg bg-orange-100 border border-white/80" />
              <div className="col-span-4 aspect-square rounded-lg bg-orange-100 border border-white/80" />
              <div className="col-span-4 aspect-square rounded-lg bg-orange-200 border border-white/80" />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex shrink-0 items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 bg-slate-50/90 border border-black/5 rounded-lg p-1">
            <motion.div
              animate={isActive ? { backgroundColor: ["#ffffff", "#f8f9fa", "#ffffff"] } : { backgroundColor: "#ffffff" }}
              transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              className="w-6 h-6 rounded-md bg-white shadow-xs flex items-center justify-center text-orange-700"
            >
              <AnimatedIcon icon={ImageIcon} size={12} />
            </motion.div>
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground">
              <span className="text-xs font-bold">{WEBSITES_COPY.tt}</span>
            </div>
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground">
              <AnimatedIcon icon={LayoutGridIcon} size={12} />
            </div>
          </div>
        </div>

        <div className="absolute -top-3 -right-3 flex items-start z-20">
          <motion.div
            animate={isActive ? { rotate: [0, 3, 0, -3, 0], scale: [1, 1.02, 1] } : { rotate: 0, scale: 1 }}
            transition={{ duration: 9, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="w-8 h-8 rounded-xl bg-orange-700 shadow-md flex items-center justify-center text-white border-2 border-white"
          >
            <AnimatedIcon icon={BriefcaseIcon} size={14} />
          </motion.div>
          <motion.div
            animate={isActive ? { x: [0, -32, -32, 0], opacity: [0, 1, 1, 0] } : { x: 0, opacity: 0 }}
            transition={{ duration: 9, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="absolute -bottom-3 -right-2 transform translate-x-1 translate-y-1 drop-shadow-md z-10"
          >
            <AnimatedIcon icon={MousePointerIcon} size={18} animateOnHover={false} />
          </motion.div>
        </div>
    </MockupFrame>
  );
}


