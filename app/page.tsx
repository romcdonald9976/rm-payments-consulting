import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sidekick Intelligence LLC",
  description:
    "The holding and development entity for agentic commerce and enterprise payment strategy.",
  openGraph: {
    title: "Sidekick Intelligence LLC",
    description:
      "The holding and development entity for agentic commerce and enterprise payment strategy.",
    url: "/",
    images: [
      {
        url: "https://example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sidekick Intelligence social preview image",
      },
    ],
  },
};

const projectCards = [
  {
    title: "Chikoh",
    description: "Agentic Commerce / AI Assistant.",
    href: "https://chikoh.com",
  },
  {
    title: "RM Payments Consulting",
    description: "Enterprise Payment Strategy.",
    href: "https://rmpaymentsconsulting.com",
  },
  {
    title: "Open Source",
    description: "Infrastructure & Tooling.",
    href: "https://github.com/romcdonald9976/rm-payments-consulting",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main className="px-6 py-20 lg:px-8 lg:py-28">
        <section className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Sidekick Intelligence LLC.
            </h1>
            <p className="text-zinc-400">
              The holding and development entity for agentic commerce and enterprise
              payment strategy.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${card.title} in a new tab`}
                className="rounded-md border border-zinc-800 bg-zinc-950/60 p-6 transition-colors hover:border-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-zinc-400">{card.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl border-t border-zinc-800 pt-6 text-sm text-zinc-400">
          © 2026 Sidekick Intelligence LLC.
        </div>
      </footer>
    </div>
  );
}
