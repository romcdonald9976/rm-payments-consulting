"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      details: String(formData.get("details") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setState("success");
      setMessage("Message sent. RM Payments Consulting will respond shortly.");
    } catch {
      setState("error");
      setMessage("Unable to send right now. Please try again in a few minutes.");
    }
  }

  return (
    <section id="contact" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 sm:p-10"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
            CONTACT
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Engage RM Payments Consulting
          </h2>
          <p className="text-gray-100">
            Share your current architecture or target outcomes. We will map a
            practical path to measurable performance gains.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm text-gray-100">Name</span>
            <input
              required
              name="name"
              type="text"
              aria-label="Full name"
              className="rounded-sm border border-white/25 bg-black px-4 py-3 text-gray-100 outline-none ring-white focus-visible:ring-2"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-gray-100">Work Email</span>
            <input
              required
              name="email"
              type="email"
              aria-label="Work email address"
              className="rounded-sm border border-white/25 bg-black px-4 py-3 text-gray-100 outline-none ring-white focus-visible:ring-2"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-gray-100">Company</span>
            <input
              name="company"
              type="text"
              aria-label="Company name"
              className="rounded-sm border border-white/25 bg-black px-4 py-3 text-gray-100 outline-none ring-white focus-visible:ring-2"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-gray-100">How can we help?</span>
            <textarea
              required
              name="details"
              rows={5}
              aria-label="Project details and goals"
              className="rounded-sm border border-white/25 bg-black px-4 py-3 text-gray-100 outline-none ring-white focus-visible:ring-2"
            />
          </label>

          <button
            type="submit"
            disabled={state === "loading"}
            aria-label={
              state === "loading"
                ? "Sending consulting inquiry"
                : "Send consulting inquiry to RM Payments Consulting"
            }
            className="inline-flex items-center justify-center rounded-sm border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "loading" ? "Sending..." : "Send Inquiry"}
          </button>

          {message ? (
            <p
              aria-live="polite"
              className={state === "error" ? "text-red-300" : "text-gray-100"}
            >
              {message}
            </p>
          ) : null}
        </form>
      </motion.div>
    </section>
  );
}
