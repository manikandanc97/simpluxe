"use client";

import { FLOATING_CALL_BUTTON_COPY } from "@/lib/content/contact";

import { SITE } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, m as motion } from "motion/react";
import { MessageCircleIcon } from "@animateicons/react/lucide/message-circle-icon";
import { PhoneIcon } from "@animateicons/react/lucide/phone-icon";
import { XIcon } from "@animateicons/react/lucide/x-icon";
import { WhatsAppIcon } from "@/components/work/tech-icons";
import { useEffect, useState, useRef } from "react";
import { hoverLift, tapScale } from "@/lib/motion";

const PHONE_RAW = SITE.phone.replace(/\s/g, "");
const WA_NUM = SITE.whatsapp;
const WA_MESSAGE = encodeURIComponent(FLOATING_CALL_BUTTON_COPY.whatsappMessage);
const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MESSAGE}`;

const ACTION_ITEMS = [
  {
    id: "whatsapp",
    label: FLOATING_CALL_BUTTON_COPY.whatsapp,
    href: WA_URL,
    Icon: WhatsAppIcon,
    bg: "bg-whatsapp text-white",
    hoverBg: "hover:bg-whatsapp-hover",
  },
  {
    id: "call",
    label: FLOATING_CALL_BUTTON_COPY.callUs,
    href: `tel:${PHONE_RAW}`,
    Icon: PhoneIcon,
    bg: "bg-primary text-primary-foreground",
    hoverBg: "hover:bg-primary/90",
  },
] as const;

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (open && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  if (!visible) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className="relative z-50 flex flex-col items-end gap-3"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="flex flex-col gap-3 items-end"
            >
              {ACTION_ITEMS.filter((item) => item.id === "whatsapp" ? Boolean(WA_NUM) : Boolean(PHONE_RAW)).map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.id === "whatsapp" ? "_blank" : undefined}
                  rel={item.id === "whatsapp" ? "noopener noreferrer" : undefined}
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  whileHover={hoverLift}
                  whileTap={tapScale}
                  className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-card/95 backdrop-blur-md border border-border shadow-elevated cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                      item.bg
                    )}
                  >
                    {item.id === "whatsapp" ? (
                      <item.Icon className="w-5 h-5 text-white" />
                    ) : (
                      <item.Icon size={18}  />
                    )}
                  </div>
                  <span className="text-sm font-bold text-foreground tracking-tight">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label={open ? FLOATING_CALL_BUTTON_COPY.closeContactOptions : FLOATING_CALL_BUTTON_COPY.openContactOptions}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          whileHover={hoverLift}
          whileTap={tapScale}
          className={cn(
            "relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-elevated transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring",
            open ? "bg-foreground/90" : "bg-primary"
          )}
        >
          {/* Subtle pulse ring when closed */}
          <AnimatePresence>
            {!open && (
              <motion.span
                className="absolute inset-0 rounded-full bg-primary"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0, 0.4, 0], scale: [1, 1.3, 1.7] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          <motion.div
            initial={false}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10"
          >
            {open ? (
              <XIcon size={24} className="text-foreground" />
            ) : (
              <MessageCircleIcon size={24} />
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
