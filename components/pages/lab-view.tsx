"use client";

import { ExperimentCard } from "@/components/sections/lab/experiment-card";
import { PageBanner } from "@/components/ui/page-banner";
import { EXPERIMENTS } from "@/lib/content/experiments";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Container } from "@/components/ui/container";
import { m as motion } from "motion/react";

export function LabView() {
  const featured = EXPERIMENTS[0];
  const rest = EXPERIMENTS.slice(1);

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      <AmbientBackground variant="subpage" />
      <PageBanner
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Ideas" },
        ]}
        badge="Software R&D & Prototypes"
        title={
          <span>
            Ideas & <span className="text-primary">Prototypes.</span>
          </span>
        }
        description="Experiments, concepts, and things we're exploring. A space for testing interactive ideas, generative interfaces, and design physics before client builds."
        techStack={["openai", "huggingface", "langchain", "pytorch", "fastapi", "typescript"]}
      />

      <Container className="py-12 md:py-16 lg:py-20">

      {/* Editorial Grid: Featured canvas + Asymmetric cards */}
      <div className="space-y-8">
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
