import { HERO_CONTENT } from "@/lib/data/hero";
import { Container } from "@/components/ui/container";
import { HeroActions } from "./hero-actions";
import { HeroCollage } from "./hero-collage";

function WorkbenchHeroIntro() {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="type-h1 text-white">
          <span className="block">{HERO_CONTENT.headlineLine1}</span>
          <span className="block">
            {HERO_CONTENT.headlineLine2Prefix}{" "}
            <span className="text-sky-100">{HERO_CONTENT.headlineHighlight}</span>
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {HERO_CONTENT.description}
        </p>
      </div>

      <HeroActions />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-screen bg-primary"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/15 via-transparent to-slate-950/20" />
      </div>
      <Container className="relative z-10 flex flex-col items-center gap-12 sm:gap-16">
        <div className="w-full max-w-4xl">
          <WorkbenchHeroIntro />
        </div>
        <HeroCollage />
      </Container>
    </section>
  );
}
