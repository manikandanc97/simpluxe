"use client";

import { LAB_VIEW_COPY } from "@/lib/content/lab";

import { ExperimentCard } from "@/components/sections/lab/experiment-card";
import { PageBanner } from "@/components/ui/page-banner";
import { EXPERIMENTS } from "@/lib/content/lab";
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
          { label: LAB_VIEW_COPY.home, href: "/" },
          { label: LAB_VIEW_COPY.ideas },
        ]}
        badge={LAB_VIEW_COPY.badge}
        title={
          <span>
            {LAB_VIEW_COPY.ideas2}<span className="text-primary">{LAB_VIEW_COPY.prototypes}</span>
          </span>
        }
        description={LAB_VIEW_COPY.description}
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
