import { motion, AnimatePresence } from "motion/react";
import { type ServiceData } from "@/lib/content/services";

interface ServicesMockupWindowProps {
  service: ServiceData;
}

export function ServicesMockupWindow({ service }: ServicesMockupWindowProps) {
  return (
    <div className="lg:col-span-7 relative flex items-center justify-center">
      {/* Subtle Ambient Backlight Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-[var(--accent-soft)]/30 to-[var(--accent-soft)]/30 rounded-3xl blur-2xl -z-10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-auto object-contain" 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
