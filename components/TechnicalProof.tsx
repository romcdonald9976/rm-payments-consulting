"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Specialized AI Agents", value: "91+" },
  { label: "Inference Cost Reduction", value: "80%" },
  { label: "Orchestration", value: "MCP-Based" },
];

export default function TechnicalProof() {
  return (
    <section id="technical-proof" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl space-y-10"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
            FEATURED CASE STUDY
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Featured Venture: Chikoh (Agentic Commerce / AI Assistant)
          </h2>
          <p className="max-w-4xl text-gray-100">
            Chikoh is the featured product launch and a live case study for agentic
            commerce infrastructure, built as an AI assistant platform where enterprise
            payment routing principles are applied to machine-native decisioning.
          </p>
        </div>

        <div className="rounded-md border border-zinc-800 bg-zinc-950/70 p-8 lg:p-10">
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-gray-100">
              The same routing logic used to optimize payment rails at PayPal was adapted
              to model triage and orchestration, enabling Chikoh to scale with{" "}
              <span className="font-mono">91+</span> specialized AI agents and reduce
              inference costs by <span className="font-mono">80%</span>.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 * index }}
                  className="rounded-sm border border-zinc-800 bg-black/30 px-5 py-5"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-gray-100">
                    {item.label}
                  </p>
                  <p className="mt-2 font-mono text-3xl text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
