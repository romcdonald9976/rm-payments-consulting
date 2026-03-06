"use client";

import { motion } from "framer-motion";

export default function ProfessionalNarrative() {
  return (
    <section id="professional-narrative" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <article className="rounded-md border border-zinc-800 bg-zinc-950/80 p-8 lg:p-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">DEEP DIVE</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            From Rails to Agents
          </h2>

          <div className="mt-6 space-y-4 text-gray-100">
            <p className="leading-relaxed">
              Over <span className="font-mono">24</span> years, the throughline has stayed
              constant: lead product direction, business architecture, and operations so
              payment systems deliver measurable commercial impact. That started with
              foundational rail strategy and global scale challenges at Amazon and PayPal,
              where low-latency authorization and direct network connectivity became core
              operating principles.
            </p>
            <p className="leading-relaxed">
              The next chapter translated product, architecture, and operational leadership into
              merchant outcomes-working across brands like Starbucks and Kendra Scott to raise
              approval performance, reduce checkout friction, and improve margin through smarter
              optimization sequencing. Today, that same logic powers Chikoh, an AI-native venture
              exploring agentic commerce infrastructure and machine-native payment behavior with
              engineering partners.
            </p>
          </div>

          <div className="mt-8 rounded-sm border border-zinc-800 bg-black/40 p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-100">
              CONSULTING PHILOSOPHY
            </p>
            <p className="mt-3 text-gray-100 leading-relaxed">
              Payments should operate as a revenue engine, not a back-office cost center: first
              maximize reliability and authorization performance, then optimize interchange and
              routing cost on top of that stronger conversion base. The stack that wins is the
              stack that compounds-better approvals, lower friction, and programmable intelligence
              aligned to real-time conditions.
            </p>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
