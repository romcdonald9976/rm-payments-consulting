"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    id: "01",
    title: "Core Infrastructure & Direct Acquiring",
    detail:
      "Design and modernization of resilient payment cores, gateway integrations, and direct network acquiring stacks.",
  },
  {
    id: "02",
    title: "Auth Optimization & Scheme Routing",
    detail:
      "Fine-grained transaction routing, dynamic retries, and authorization strategy tuned to issuer and scheme behavior.",
  },
  {
    id: "03",
    title: "High-Concurrency Data (168+ endpoints)",
    detail:
      "Real-time observability and decisioning architecture engineered for high-throughput, multi-endpoint environments.",
  },
  {
    id: "04",
    title: "DevEx & Agentic Commerce (HTTP 402/PX-402)",
    detail:
      "Developer-centric workflows and machine-native payment rails that enable secure, autonomous transaction operations.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
            ENTERPRISE PILLARS
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Built for Reliability at Global Scale
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-md border border-zinc-800 bg-zinc-950/70 p-8 transition-colors hover:border-blue-500/50"
            >
              <p className="font-mono text-sm text-zinc-300">{pillar.id}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-100">{pillar.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
