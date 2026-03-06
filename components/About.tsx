"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]"
      >
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-white/15 bg-zinc-900">
          <Image
            src="/headshot.jpeg"
            alt="Portrait of the RM Payments Consulting founder"
            width={700}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
            ABOUT THE LEAD
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            A Product, Architecture, and Operations Leader.
          </h2>
          <p className="text-gray-100">
            RM Payments Consulting bridges a{" "}
            <span className="font-mono">24-year</span> enterprise history across
            large-scale payment systems with active R&amp;D leadership at Sidekick
            Intelligence.
          </p>
          <p className="text-gray-100">
            The focus is practical transformation: define the right product strategy,
            business architecture, and operating model, then work directly with
            engineering teams to design and build the solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
