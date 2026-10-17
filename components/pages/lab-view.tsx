"use client";

import { ExperimentCard } from "@/components/sections/lab/experiment-card";
import { LabHero } from "@/components/lab/lab-hero";
import { EXPERIMENTS } from "@/lib/content/lab";
import { Container } from "@/components/ui/container";
import { m as motion } from "motion/react";

export function LabView() {
  const featured = EXPERIMENTS[0];
  const rest = EXPERIMENTS.slice(1);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* ── Fixed navbar height spacer so full-width banner starts cleanly below the header ── */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      {/* ── 1. Full-Width Hero Section ── */}
      <LabHero />

      <Container className="pt-10 sm:pt-12 lg:pt-14 pb-20 md:pb-24 lg:pb-32 flex flex-col gap-14 sm:gap-16">
        {/* Editorial Grid: Featured canvas + Asymmetric cards */}
        <div className="flex flex-col gap-8">
          {/* Large Feature Idea: 01 Generative UI */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ExperimentCard experiment={featured} isFeatured={true} />
            </motion.div>
          )}

          {/* Remaining Experiments Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {rest.map((experiment) => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
