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
      className="relative overflow-hidden bg-primary pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/15 via-transparent to-slate-950/20" />
      </div>
      <Container className="relative z-10 flex justify-center pb-12 sm:pb-16">
        <div className="w-full max-w-4xl">
          <WorkbenchHeroIntro />
        </div>
      </Container>

      <div className="relative z-10 bg-background pb-16 sm:pb-20 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-primary"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/10" />
        </div>
        <Container className="relative z-10 flex justify-center">
          <HeroCollage />
        </Container>
      </div>
    </section>
  );
}
