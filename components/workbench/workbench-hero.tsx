"use client";

import { useLead } from "@/components/leads/lead-provider";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useRef } from "react";
import { HERO_CONTENT } from "@/lib/content/hero";
import { Hero3DCoder } from "./hero-3d-coder";
import { HeroGridAccents } from "./hero-grid-accents";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroInteractionEnhancer = dynamic(() => import("./hero-interaction-enhancer"), { ssr: false });

export function WorkbenchHero() {
  const { openLead } = useLead();
  const heroRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const parallaxCanvasRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGSVGElement>(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("capabilities") || document.getElementById("what-we-build");
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-0 lg:min-h-screen pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Background Elements */}
      <HeroGridAccents />

      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* LEFT: Text Content */}
          <div 
            ref={textColRef}
            className="hero-text-col lg:col-span-5 xl:col-span-6 flex flex-col items-start text-left max-w-xl z-10 gap-6 sm:gap-10"
          >
            <div className="flex flex-col gap-4 sm:gap-6">

            {/* Headline */}
            <h1 
              className="font-satoshi font-extrabold tracking-tighter text-foreground leading-[1.08] sm:leading-none text-4xl xs:text-5xl sm:text-6xl lg:text-7xl flex flex-col gap-1.5 sm:gap-2"
            >
              <div className="overflow-hidden pb-1 -mb-1">
                <span className="block hero-line-1">
                  {HERO_CONTENT.headlineLine1}
                </span>
              </div>
              <div className="overflow-hidden pb-4 -mb-4">
                <span className="block relative inline-block hero-line-2 will-change-transform">
                  <span className="inline-block overflow-hidden">
                    <span className="inline-block animate-hero-word-reveal" style={{ animationDelay: '0.2s' }}>
                      {HERO_CONTENT.headlineLine2Prefix}
                    </span>
                  </span>
                  <span className="relative inline-block ml-3">
                    <span className="inline-block overflow-hidden">
                      <span className="inline-block animate-hero-word-reveal brand-gradient-char" style={{ animationDelay: '0.35s' }}>
                        {HERO_CONTENT.headlineHighlight}
                      </span>
                    </span>
                    {/* Hand-drawn style SVG underline — draws in after text animates */}
                    <svg
                      ref={underlineRef}
                      className="hero-underline absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-3.5 overflow-visible pointer-events-none"
                      viewBox="0 0 240 24"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M4 14 C60 4, 150 6, 230 12"
                        stroke="#922F55"
                        strokeLinecap="round"
                        strokeWidth="4"
                        className="opacity-0"
                      />
                      <path
                        d="M40 18 C105 13, 175 14, 215 17"
                        stroke="#D23D78"
                        strokeLinecap="round"
                        strokeWidth="4"
                        className="opacity-0"
                      />
                      <path
                        d="M224 8 L234 12 L227 18"
                        stroke="#6C2BB8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        className="opacity-0"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </h1>

            {/* Paragraph */}
            <p
              className="hero-desc type-lead text-muted-foreground max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              <span className="inline-block overflow-hidden">
                <span className="inline-block animate-hero-word-reveal" style={{ animationDelay: '0.4s' }}>
                  {HERO_CONTENT.description}
                </span>
              </span>
            </p>
            </div>

            <div className="flex flex-col gap-8 sm:gap-16 w-full">
            {/* CTA Buttons */}
            <div
              className="hero-cta flex flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto font-satoshi"
            >
              <Button
                id="hero-start-project"
                onClick={() => openLead({ source: "cta" })}
                size="lg"
                className="group shadow-elevated w-auto"
              >
                <span className="text-sm sm:text-base whitespace-nowrap">{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRightIcon size={16} className="text-white shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <div
                className="opacity-0 translate-y-[15px]"
                style={{ animation: 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards' }}
              >
                <Link
                  href="#selected-work-scroll-anchor"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("selected-work-scroll-anchor");
                    const header = document.querySelector("header");

                    if (!target) return;

                    const headerBottom =
                      header?.getBoundingClientRect().bottom ?? 0;

                    const targetTop =
                      target.getBoundingClientRect().top +
                      window.scrollY;

                    const scrollTop =
                      targetTop - headerBottom - 16;

                    window.scrollTo({
                      top: Math.max(0, scrollTop),
                      behavior: "smooth",
                    });
                  }}
                  className="group flex items-center justify-start gap-2 sm:gap-4.5 hover:opacity-85 transition-opacity py-1 w-auto text-left"
                >
                  <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-[rgba(30,24,30,0.08)] text-foreground group-hover:scale-105 group-hover:border-primary/25 transition-all pl-0.5 shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground transition-colors group-hover:text-primary"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <div className="flex flex-col text-left shrink-0">
                    <span className="text-xs sm:text-base font-bold text-foreground leading-tight tracking-tight whitespace-nowrap block">{HERO_CONTENT.ctaSecondaryTitle}</span>
                    <span className="text-[10px] sm:text-xs font-medium text-muted-foreground mt-0.5 whitespace-nowrap block">{HERO_CONTENT.ctaSecondarySubtitle}</span>
                  </div>
                </Link>
              </div>
            </div>

            </div>
          </div>

          {/* RIGHT: 3D Character & Floating UI Cards */}
          <div
            ref={artworkRef}
            className="hero-artwork lg:col-span-7 xl:col-span-6 flex justify-center items-center w-full relative min-h-64 sm:min-h-96"
          >
            <Hero3DCoder parallaxCanvasRef={parallaxCanvasRef} cardsRef={cardsRef} />
          </div>
          
        </div>
      </Container>
      
      {/* Interactive scroll indicator button */}
      <button
        type="button"
        id="hero-scroll-indicator"
        aria-label={HERO_CONTENT.scrollIndicatorLabel}
        onClick={handleScrollDown}
        className="hero-scroll group relative mt-6 lg:mt-0 lg:absolute lg:bottom-4 left-auto lg:left-1/2 lg:-translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-400 hover:text-foreground cursor-pointer focus:outline-none transition-all select-none"
      >
        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
          {HERO_CONTENT.scrollIndicatorText}
        </span>
        <div
          className="w-4 h-4 rounded-full border-[1.5px] border-slate-300 group-hover:border-primary/50 flex items-center justify-center transition-colors animate-bounce"
        >
          <ChevronDownIcon size={12} className="h-2.5 w-2.5 text-slate-400 group-hover:text-primary transition-colors" />
        </div>
      </button>

      <HeroInteractionEnhancer 
        heroRef={heroRef}
        textColRef={textColRef}
        artworkRef={artworkRef}
        parallaxCanvasRef={parallaxCanvasRef}
        cardsRef={cardsRef}
        underlineRef={underlineRef}
      />
    </section>
  );
}

