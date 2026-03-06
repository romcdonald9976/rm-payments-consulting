import type { Metadata } from "next";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import ProfessionalNarrative from "../components/ProfessionalNarrative";
import TechnicalProof from "../components/TechnicalProof";

export const metadata: Metadata = {
  title: "Enterprise Payments Infrastructure and Agentic Commerce",
  description:
    "RM Payments Consulting helps platforms and merchants improve authorization, reduce friction, and architect AI-native commerce infrastructure.",
  openGraph: {
    title: "Enterprise Payments Infrastructure and Agentic Commerce",
    description:
      "RM Payments Consulting helps platforms and merchants improve authorization, reduce friction, and architect AI-native commerce infrastructure.",
    url: "/",
    images: [
      {
        url: "https://example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RM Payments Consulting social preview image",
      },
    ],
  },
};

const insights = [
  {
    title: "Agentic Payments",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7435157163431313408/?originTrackingId=eXIgsW3D7JECxlsR%2F%2Fi5fQ%3D%3D",
    cta: "Read Full Breakdown",
  },
  {
    title: "Inference Cost Optimization",
    href: "https://www.linkedin.com/posts/romcdonald_i-cut-my-ai-inference-costs-by-80-the-activity-7430808491134627840-j2Wq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABAxmsBGC9JqNC-z-2BSQOEtb6PbRDP06I",
    cta: "Read Full Breakdown",
  },
  {
    title: "HTTP 402",
    href: "https://www.linkedin.com/posts/romcdonald_payments-ai-fintech-activity-7429811932603305984-tyrD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABAxmsBGC9JqNC-z-2BSQOEtb6PbRDP06I",
    cta: "Read Full Breakdown",
  },
  {
    title: "Infrastructure at Scale",
    href: "https://www.linkedin.com/posts/romcdonald_payments-infrastructure-fintech-activity-7428271809424343040-vkRB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABAxmsBGC9JqNC-z-2BSQOEtb6PbRDP06I",
    cta: "Read Full Breakdown",
  },
  {
    title: "Auth Rate First",
    href: "https://www.linkedin.com/posts/romcdonald_payments-paymentsoptimization-authrates-activity-7427543231413886977-_LE0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABAxmsBGC9JqNC-z-2BSQOEtb6PbRDP06I",
    cta: "Read Full Breakdown",
  },
  {
    title: "Flexibility Paradox",
    href: "https://www.linkedin.com/posts/romcdonald_payments-paymentorchestration-enterprisearchitecture-activity-7426012176781561856-WMwv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABAxmsBGC9JqNC-z-2BSQOEtb6PbRDP06I",
    cta: "Read Full Breakdown",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <ProfessionalNarrative />
        <TechnicalProof />
        <About />

        <section id="insights" className="border-b border-zinc-800 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.24em] text-gray-100">
                INSIGHTS
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Current Thinking for Payment and Agentic Systems
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {insights.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Read full LinkedIn breakdown for ${item.title} (opens in a new tab)`}
                  className="rounded-md border border-zinc-800 bg-zinc-950/70 p-8 transition-colors hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  <p className="font-mono text-sm text-gray-100">LinkedIn</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-gray-100 underline decoration-white/60 underline-offset-4">
                    {item.cta}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />

        <section className="border-b border-zinc-800 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-8">
            <p className="max-w-5xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              Don&apos;t just build payments. Build efficient, high-converting, agentic
              commerce. I bring <span className="font-mono">24</span> years of engineering
              and strategic experience to your stack.
            </p>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-100">
              CONSULTING FRAMEWORK
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-md border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-lg font-semibold text-white">Infrastructure &amp; Scale</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Architecting for high-concurrency, global volume, and low-latency
                  authorization.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <p>PayPal: Rails and geo-expansion architecture at global scale.</p>
                  <p>Block: High-concurrency routing and platform resiliency design.</p>
                  <p>Amazon: Low-latency authorization infrastructure for global commerce.</p>
                </div>
              </article>
              <article className="rounded-md border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-lg font-semibold text-white">Optimization &amp; Conversion</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Turning payment stacks into profit centers-reducing friction and increasing
                  auth rates.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <p>Starbucks: Checkout optimization and measurable approval improvements.</p>
                  <p>Alterra Mountain Company: Interchange and routing strategy tuning.</p>
                  <p>Kendra Scott: Omnichannel auth optimization for stronger conversion.</p>
                  <p>Newstore: Agentic commerce readiness and payment stack performance.</p>
                  <p>Newswire: Merchant-side orchestration to reduce payment friction.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-6xl border-t border-zinc-800 pt-8 text-sm text-gray-100">
          © 2026 RM Payments Solutions LLC
        </div>
      </footer>
    </div>
  );
}
