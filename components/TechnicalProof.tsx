"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Specialized AI Agents", value: "91" },
  { label: "Orchestration Pattern", value: "MCP-Based" },
  { label: "Real-Time Data Endpoints", value: "168+" },
];

export default function TechnicalProof() {
  return (
    <section id="technical-proof" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
            TECHNICAL PROOF / CHIKOH CASE STUDY
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Chikoh: Enterprise Routing Patterns Applied to AI Infrastructure
          </h2>
          <p className="text-gray-100">
            Chikoh was built with <span className="font-mono text-gray-100">91</span>{" "}
            specialized AI agents,{" "}
            <span className="font-mono text-gray-100">MCP-based orchestration</span>, and{" "}
            <span className="font-mono text-gray-100">168+</span> real-time data endpoints.
          </p>
          <p className="text-gray-100">
            The same routing logic used to optimize payment rails at PayPal was applied to
            cut AI inference costs by{" "}
            <span className="font-mono text-gray-100">80%</span>, while maintaining speed,
            reliability, and control under load.
          </p>
        </div>

        <div className="grid gap-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 * index }}
              className="rounded-sm border border-white/15 bg-zinc-950/70 px-5 py-5"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-gray-100">
                {item.label}
              </p>
              <p className="mt-2 font-mono text-3xl text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
