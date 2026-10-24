import { ExperimentCard } from "./experiment-card";
import { EXPERIMENTS } from "@/lib/data/lab";
import * as motion from "motion/react-m";

export function ExperimentsGrid() {
  const featured = EXPERIMENTS[0];
  const rest = EXPERIMENTS.slice(1);

  return (
    <div className="flex flex-col gap-8">
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ExperimentCard experiment={featured} isFeatured />
        </motion.div>
      )}

      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {rest.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </motion.div>
    </div>
  );
}
