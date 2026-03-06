"use client";

import { motion } from "framer-motion";

const coreInfrastructure = [
  "PayPal: Built direct network connectivity and low-latency authorization pathways across global payment rails — increased authorization performance from 75% to 85% in key markets.",
  "Block: Architected high-concurrency platform infrastructure for multi-PSP scale and resilient routing — enabled peak-volume operations contributing to $110M in annual savings.",
  "Amazon: Designed global-scale payment core patterns for distributed authorization workloads — reduced transaction path latency to sub-150ms in critical payment corridors.",
];

const strategyOptimization = [
  "Starbucks: Led merchant-side authorization and retry strategy across processor pathways — improved approval performance by 4.2 percentage points while reducing checkout friction.",
  "Alterra Mountain Company: Reworked acquiring and interchange optimization strategy for card mix and routing logic — reduced effective processing cost by 18 basis points.",
  "Kendra Scott: Implemented auth optimization and issuer-aware routing controls for omnichannel transaction flows — lifted checkout conversion by 6.1 percentage points.",
  "Newstore: Advised on payment architecture and agentic commerce readiness for modern retail orchestration — cut payment failure rates by 23% across prioritized flows.",
];

function TrackGroup({
  title,
  focus,
  items,
}: {
  title: string;
  focus: string;
  items: string[];
}) {
  return (
    <article className="rounded-md border border-zinc-800 bg-zinc-950/70 p-8">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-400">{focus}</p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <p key={item} className="text-sm leading-relaxed text-gray-400">
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function TrackRecord() {
  return (
    <section id="track-record" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-400">
            TRACK RECORD
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Platform Depth Across Infrastructure and Merchant Strategy
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TrackGroup
            title="Core Infrastructure (PayPal, Block, Amazon)"
            focus="Focus: Global platform scale, direct network connectivity, and low-latency authorization. Impact: Scaling infrastructure for high-concurrency environments."
            items={coreInfrastructure}
          />
          <TrackGroup
            title="Strategy & Optimization (Starbucks, Alterra Mountain Company, Kendra Scott, Newstore)"
            focus="Focus: Merchant-side optimization, auth rate lift, and agentic commerce strategy. Impact: Reducing friction and optimizing interchange at the merchant level."
            items={strategyOptimization}
          />
        </div>
      </motion.div>
    </section>
  );
}
