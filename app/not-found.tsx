import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested does not exist on RM Payments Consulting.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-24 text-white lg:px-8">
      <section className="mx-auto max-w-3xl rounded-md border border-zinc-800 bg-zinc-950/70 p-8">
        <h1 className="text-3xl font-semibold">Page Not Found</h1>
        <p className="mt-4 text-gray-300">
          The page you requested is unavailable. Return to the home page to continue.
        </p>
      </section>
    </main>
  );
}
