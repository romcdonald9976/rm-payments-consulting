"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    id: "01",
    title: "Payments Product Strategy & Business Architecture",
    detail:
      "Define target-state payment capabilities, operating models, and partner strategies that engineering teams can implement with clarity.",
  },
  {
    id: "02",
    title: "Authorization, Conversion, and Commercial Performance",
    detail:
      "Prioritize initiatives that reduce checkout friction, improve approval rates, and convert payment operations into measurable profit levers.",
  },
  {
    id: "03",
    title: "Operations Leadership for High-Scale Payment Programs",
    detail:
      "Operationalize governance, incident response, and KPI-driven execution across high-volume, multi-market payment environments.",
  },
  {
    id: "04",
    title: "AI-Native Commerce Roadmapping (HTTP 402/PX-402)",
    detail:
      "Translate emerging agentic commerce patterns into practical product roadmaps and collaborate with engineering to deliver safely.",
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
            Built for Strategic Outcomes at Enterprise Scale
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
