"use client";

import { AUTOMATION_COPY } from "@/lib/content/services";

import { m as motion } from "motion/react";
import { MockupWrapper } from "./mockup-wrapper";

const WORKFLOW_NODES = [
  { label: AUTOMATION_COPY.triggerNewEmail,  color: "#0891B2", icon: "→", delay: 0 },
  { label: AUTOMATION_COPY.extractKeyData,   color: "#7C3AED", icon: "⬡", delay: 0.4 },
  { label: AUTOMATION_COPY.aiClassifyIntent, color: "#059669", icon: "✦", delay: 0.8 },
  { label: AUTOMATION_COPY.actionAutoReply,  color: "#F97316", icon: "↗", delay: 1.2 },
] as const;

export function AutomationMockup({ isActive }: { isActive?: boolean }) {
  return (
    <MockupWrapper
      isActive={isActive}
      gradientClass="bg-gradient-to-tr from-emerald-50/60 via-green-50/50 to-violet-100/60"
      innerClassName="max-w-80 p-3.5 gap-3"
      floatDuration={5}
    >
        {/* Header */}
        <div className="flex items-center gap-2 pb-1.5 border-b border-black/[0.05]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground ml-1">{AUTOMATION_COPY.aiAgentRunning}</span>
          <motion.div
            animate={isActive ? { opacity: [1, 0, 1] } : { opacity: 1 }}
            transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
            className="w-1.5 h-1.5 rounded-full bg-chart-5 ml-auto"
          />
        </div>

        {/* Workflow nodes */}
        <div className="flex flex-col gap-2">
          {WORKFLOW_NODES.map((node, i) => (
            <motion.div
              key={i}
              animate={isActive ? {
                x: [0, 2, 0],
                boxShadow: [
                  `0 0 0 1px ${node.color}20`,
                  `0 0 0 1.5px ${node.color}60`,
                  `0 0 0 1px ${node.color}20`,
                ],
              } : { x: 0 }}
              transition={{ duration: 2.5, delay: node.delay, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
              className="flex items-center gap-2 rounded-xl px-3 py-2 border"
              style={{
                backgroundColor: `${node.color}08`,
                borderColor: `${node.color}25`,
              }}
            >
              {/* Icon badge */}
              <motion.div
                animate={isActive ? { opacity: [0.6, 1, 0.6] } : { opacity: 1 }}
                transition={{ duration: 1.2, delay: node.delay, repeat: isActive ? Infinity : 0 }}
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{ backgroundColor: `${node.color}18`, color: node.color }}
              >
                {node.icon}
              </motion.div>

              <span className="text-xs font-semibold text-zinc-800 flex-1">{node.label}</span>

              {/* Active pulse bar */}
              {isActive && (
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, delay: node.delay + 0.5, repeat: Infinity }}
                  className="w-1 h-3.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: node.color }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Terminal output — light style */}
        <div className="bg-slate-50 border border-black/[0.05] rounded-xl px-3 py-2 flex items-center gap-1.5 font-mono text-2xs">
          <motion.div
            animate={isActive ? { opacity: [1, 0, 1] } : { opacity: 1 }}
            transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
            className="w-1 h-3 rounded-full bg-foreground/40 flex-shrink-0"
          />
          <span className="text-chart-5 font-semibold">{AUTOMATION_COPY.processing}</span>
          <span className="text-muted-foreground"> {AUTOMATION_COPY.text3Workflows}</span>
          <span className="text-chart-3 font-semibold">{AUTOMATION_COPY.text98Faster}</span>
        </div>

    </MockupWrapper>
  );
}


