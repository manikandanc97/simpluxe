"use client";

import { m as motion, useAnimation } from "motion/react";
import { CldImage } from "next-cloudinary";
import { useEffect } from "react";

/**
 * Loading
 * ─────────────────────────────────────────────────────────────────
 * Branded full-viewport Suspense fallback for Simpluxe.
 *
 * Slot: replaces only <main> children while a page streams in.
 * TopBar / SiteNavbar / MobileBottomNav remain mounted above/around.
 *
 * Anatomy
 * 1. Ambient glow disc behind the logo
 * 2. CENTRAL PIECE: Original logo — enters grayscale, reveals to full color
 * 3. Three micro-dot "thinking" indicator beneath the logo
 * 4. Visually-hidden accessible label
 *
 * Motion contract
 * - Logo: opacity+scale enter → CSS filter grayscale(1)→grayscale(0) reveal
 * - MotionConfig reducedMotion="user" (set in MotionProvider) collapses loops
 * - Color: CSS vars only — never hardcoded hex.
 */



export default function Loading() {
  const logoControls = useAnimation();

  useEffect(() => {
    // Sequence: fade+scale in (gray) → then transition to full color
    logoControls.start({
      opacity: 1,
      scale: 1,
      filter: "grayscale(0) brightness(1)",
      transition: {
        opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        filter: { duration: 1.4, delay: 0.6, ease: "easeOut" },
      },
    });
  }, [logoControls]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* ── Accessible hidden label ─────────────────────────────── */}
      <span className="sr-only">Loading Simpluxe…</span>

      {/* ── Ambient glow behind logo ─────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={{
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 18%, transparent) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Logo: grayscale → color reveal ───────────────────────── */}
      <motion.div
        className="relative z-10 mb-10"
        initial={{ opacity: 0, scale: 0.88, filter: "grayscale(1) brightness(0.7)" }}
        animate={logoControls}
      >
        <CldImage
          src="simpluxe/logo/logo"
          alt="Simpluxe Logo"
          width={220}
          height={52}
          className="h-12 w-auto object-contain"
          priority
        />
      </motion.div>

      {/* ── Thinking dots ─────────────────────────────────────────── */}
      <motion.div
        role="presentation"
        className="relative z-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block rounded-full bg-primary"
            style={{ width: 5, height: 5 }}
            animate={{
              opacity: [0.25, 1, 0.25],
              scale: [0.75, 1.2, 0.75],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8 + i * 0.2,
              repeatDelay: 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
