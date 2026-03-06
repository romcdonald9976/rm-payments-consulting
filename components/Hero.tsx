"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="border-b border-zinc-800 px-6 py-24 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl flex-col gap-12"
      >
        <div className="max-w-4xl space-y-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
            ENTERPRISE PAYMENTS STRATEGY
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Leading Product Strategy for Global Payments and Agentic Commerce.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-100">
            <span className="font-mono">24</span> years in product management, payments
            business architecture, and operations leadership across Block, PayPal, and
            Amazon-partnering with engineers to design and build the right solutions.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-sm border border-white/15 bg-zinc-950/70">
          <div className="px-4 py-4 text-center text-sm text-zinc-100 sm:px-6 sm:text-base">
            <span className="font-mono tracking-wide">
              $1.53T Peak Volume Managed | $110M Annual Savings | 75% -&gt; 85% Auth
              Rate Lift.
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
