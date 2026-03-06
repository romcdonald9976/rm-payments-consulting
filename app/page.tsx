import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import TechnicalProof from "../components/TechnicalProof";

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
          <div className="mx-auto max-w-6xl space-y-6">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-100">
              SELECT TRACK RECORD
            </h2>
            <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
              <p className="text-sm text-gray-400">
                PayPal: Rails architecture and geo-expansion execution.
              </p>
              <p className="text-sm text-gray-400">
                Block: High-concurrency routing and platform reliability.
              </p>
              <p className="text-sm text-gray-400">
                Amazon: Global payment infrastructure and low-latency authorization.
              </p>
              <p className="text-sm text-gray-400">
                Starbucks: Merchant auth optimization and checkout friction reduction.
              </p>
              <p className="text-sm text-gray-400">
                Alterra Mountain Company: Interchange-aware optimization strategy.
              </p>
              <p className="text-sm text-gray-400">
                Kendra Scott: Omnichannel authorization and conversion lift.
              </p>
              <p className="text-sm text-gray-400">
                Newstore: Agentic commerce readiness and payment-stack optimization.
              </p>
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
