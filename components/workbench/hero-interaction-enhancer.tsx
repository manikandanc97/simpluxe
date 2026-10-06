"use client";

import { useEffect } from "react";
import { useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent, animate } from "motion/react";

interface EnhancerProps {
  heroRef: React.RefObject<HTMLElement | null>;
  textColRef: React.RefObject<HTMLDivElement | null>;
  artworkRef: React.RefObject<HTMLDivElement | null>;
  parallaxCanvasRef: React.RefObject<HTMLDivElement | null>;
  cardsRef: React.RefObject<HTMLDivElement | null>;
  underlineRef: React.RefObject<SVGSVGElement | null>;
}

export default function HeroInteractionEnhancer({
  heroRef,
  textColRef,
  artworkRef,
  parallaxCanvasRef,
  cardsRef,
  underlineRef,
}: EnhancerProps) {
  // ── Scroll Parallax ──
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yArt = useTransform(scrollY, [0, 500], [0, 50]);
  const scaleArt = useTransform(scrollY, [0, 500], [1, 1.05]);

  useMotionValueEvent(yText, "change", (latest) => {
    if (textColRef.current) textColRef.current.style.transform = `translateY(${latest}px)`;
  });
  useMotionValueEvent(opacityText, "change", (latest) => {
    if (textColRef.current) textColRef.current.style.opacity = `${latest}`;
  });
  useMotionValueEvent(yArt, "change", (latest) => {
    if (artworkRef.current) {
      const currentScale = scaleArt.get();
      artworkRef.current.style.transform = `translateY(${latest}px) scale(${currentScale})`;
    }
  });
  useMotionValueEvent(scaleArt, "change", (latest) => {
    if (artworkRef.current) {
      const currentY = yArt.get();
      artworkRef.current.style.transform = `translateY(${currentY}px) scale(${latest})`;
    }
  });

  // ── Mouse 3D Parallax ──
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
  }, [mouseX, mouseY, heroRef, parallaxCanvasRef]);

  // ── Entry Animations ──
  useEffect(() => {
    if (underlineRef.current) {
      const paths = underlineRef.current.querySelectorAll("path");
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
  }, [underlineRef]);

  return null;
}
