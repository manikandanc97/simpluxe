"use client";

import { useEffect } from "react";
import { useTransform, useSpring, useMotionValue, useMotionValueEvent, useReducedMotion, animate } from "motion/react";

interface EnhancerProps {
  heroRef: React.RefObject<HTMLElement | null>;
  parallaxCanvasRef: React.RefObject<HTMLDivElement | null>;
  underlineRef: React.RefObject<SVGSVGElement | null>;
}

export default function HeroInteractionEnhancer({
  heroRef,
  parallaxCanvasRef,
  underlineRef,
}: EnhancerProps) {
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), {
    stiffness: 150,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-4, 4]), {
    stiffness: 150,
    damping: 30,
  });

  useMotionValueEvent(rotateX, "change", (latest) => {
    if (parallaxCanvasRef.current) {
      const currentRY = rotateY.get();
      parallaxCanvasRef.current.style.transform = `rotateX(${latest}deg) rotateY(${currentRY}deg)`;
    }
  });
  useMotionValueEvent(rotateY, "change", (latest) => {
    if (parallaxCanvasRef.current) {
      const currentRX = rotateX.get();
      parallaxCanvasRef.current.style.transform = `rotateX(${currentRX}deg) rotateY(${latest}deg)`;
    }
  });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxCanvasRef.current) return;
      const rect = parallaxCanvasRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      hero.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (hero) {
        hero.removeEventListener("mousemove", handleMouseMove);
        hero.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY, heroRef, parallaxCanvasRef, reducedMotion]);

  // ── Entry Animations ──
  useEffect(() => {
    if (underlineRef.current) {
      const paths = underlineRef.current.querySelectorAll("path");
      if (reducedMotion) {
        paths.forEach((path) => { path.style.opacity = "1"; });
        return;
      }
      if (paths[0]) {
        animate(paths[0], { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] });
      }
      if (paths[1]) {
        animate(paths[1], { pathLength: [0, 1], opacity: [0, 0.85] }, { duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] });
      }
      if (paths[2]) {
        animate(paths[2], { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.3, delay: 1.4, ease: "easeOut" });
      }
    }
  }, [underlineRef, reducedMotion]);

  return null;
}
