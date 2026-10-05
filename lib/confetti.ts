import { prefersReducedMotion } from "@/lib/motion";

export interface ConfettiOrigin {
  x: number;
  y: number;
}

/**
 * Celebratory confetti particle explosion
 * Inspired by Matt Perry's Motion+ celebratory particle physics
 */
export async function fireCelebratoryConfetti(originElement?: HTMLElement | null, customOrigin?: ConfettiOrigin) {
  if (typeof window === "undefined" || prefersReducedMotion()) return;

  const confetti = (await import("canvas-confetti")).default;

  let originCoord: ConfettiOrigin = { x: 0.5, y: 0.5 };

  if (originElement) {
    const rect = originElement.getBoundingClientRect();
    originCoord = {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    };
  } else if (customOrigin) {
    originCoord = customOrigin;
  }

  // Curated celebratory brand palette
  const colors = [
    "#e11d48", // Crimson Rose
    "#f43f5e", // Bright Pink
    "#fb7185", // Soft Rose
    "#6366f1", // Royal Indigo
    "#8b5cf6", // Electric Violet
    "#06b6d4", // Cyan
    "#34d399", // Emerald
    "#f59e0b", // Gold
    "#ffffff", // Shimmering White
  ];

  // Burst 1: High velocity directional punch directly from button
  confetti({
    particleCount: 55,
    angle: 90,
    spread: 75,
    origin: originCoord,
    startVelocity: 42,
    decay: 0.91,
    gravity: 1.05,
    scalar: 1.15,
    ticks: 240,
    colors,
    shapes: ["circle", "square"],
    disableForReducedMotion: true,
  });

  // Burst 2: Dynamic bilateral spray with slight delay for realistic explosion wave
  window.setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: originCoord,
      startVelocity: 36,
      decay: 0.92,
      gravity: 0.95,
      scalar: 0.9,
      ticks: 280,
      colors,
      shapes: ["circle", "square"],
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: originCoord,
      startVelocity: 36,
      decay: 0.92,
      gravity: 0.95,
      scalar: 0.9,
      ticks: 280,
      colors,
      shapes: ["circle", "square"],
      disableForReducedMotion: true,
    });
  }, 70);

  // Burst 3: Lightweight floating micro-particles
  window.setTimeout(() => {
    confetti({
      particleCount: 25,
      angle: 90,
      spread: 120,
      origin: originCoord,
      startVelocity: 24,
      decay: 0.94,
      gravity: 0.65,
      scalar: 0.75,
      ticks: 320,
      colors,
      shapes: ["circle"],
      disableForReducedMotion: true,
    });
  }, 140);
}
