import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rmpaymentsconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RM Payments Consulting",
    template: "%s | RM Payments Consulting",
  },
  description:
    "Enterprise payments consulting focused on core infrastructure, optimization, and agentic commerce.",
  openGraph: {
    title: "RM Payments Consulting",
    description:
      "Enterprise payments consulting focused on core infrastructure, optimization, and agentic commerce.",
    url: siteUrl,
    siteName: "RM Payments Consulting",
    type: "website",
    images: [
      {
        url: "https://example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RM Payments Consulting social preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RM Payments Consulting",
    description:
      "Enterprise payments consulting focused on core infrastructure, optimization, and agentic commerce.",
    images: ["https://example.com/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
