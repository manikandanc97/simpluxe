import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StaticIcon } from "@/components/ui/static-icon";
import { HOME_ABOUT_CONTENT } from "@/lib/data/about";
import { cn } from "@/lib/utils";

export function HomeAbout() {
  return (
    <Section
      id="about-simpluxe"
      aria-labelledby="about-simpluxe-heading"
      className="border-b border-slate-200 bg-background font-satoshi"
    >
      <Container className="flex flex-col gap-6 sm:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeader
            eyebrow={HOME_ABOUT_CONTENT.eyebrow}
            title={HOME_ABOUT_CONTENT.title}
            highlightedText={HOME_ABOUT_CONTENT.highlightedText}
            description={HOME_ABOUT_CONTENT.description}
            centered
            maxWidth="max-w-4xl"
            headingId="about-simpluxe-heading"
          />

          <div className="flex justify-center">
            <Link
              href="/inside"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group")}
            >
              {HOME_ABOUT_CONTENT.cta}
              <StaticIcon
                name="arrow-up-right"
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-card">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-10 bg-dark p-7 text-white sm:p-9 lg:col-span-4 lg:p-10">
              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-sky-200">
                  {HOME_ABOUT_CONTENT.panelEyebrow}
                </span>
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {HOME_ABOUT_CONTENT.panelTitle}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {HOME_ABOUT_CONTENT.panelDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  {HOME_ABOUT_CONTENT.status}
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 lg:col-span-8">
              {HOME_ABOUT_CONTENT.standards.map((standard, index) => (
                <article
                  key={standard.number}
                  className="flex flex-col justify-between gap-10 border-b border-slate-200 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-8 lg:p-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold text-primary">
                      {standard.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}/{String(HOME_ABOUT_CONTENT.standards.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight text-heading">
                      {standard.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {standard.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
