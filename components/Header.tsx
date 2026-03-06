"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const navItems = [
  { label: "Capabilities", href: "#pillars" },
  { label: "Case Study", href: "#technical-proof" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          aria-label="RM Payments Consulting home"
          className="text-sm font-semibold tracking-[0.14em] text-white"
        >
          RM PAYMENTS CONSULTING
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={`Go to ${item.label} section`}
              className="text-sm text-gray-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/romcdonald"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Rob McDonald on LinkedIn (opens in a new tab)"
            className="inline-flex items-center gap-2 rounded-sm border border-zinc-700 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:border-blue-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <Linkedin size={15} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="#contact"
            aria-label="Jump to contact form"
            className="inline-flex items-center justify-center rounded-sm border border-white bg-white px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
