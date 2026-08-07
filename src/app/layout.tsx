import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexaWorks — AI Automation Agency",
    template: "%s | NexaWorks",
  },
  description:
    "NexaWorks is an elite AI automation agency specializing in production-grade agentic workflows, RAG systems, and custom AI solutions for enterprises.",
  keywords: [
    "AI automation",
    "agentic workflows",
    "RAG systems",
    "LLM integration",
    "enterprise AI",
  ],
  alternates: {
    canonical: "https://nexaworks.tech",
    languages: {
      "en-US": "https://nexaworks.tech/en-us",
      "en-GB": "https://nexaworks.tech/en-gb",
      "en-CA": "https://nexaworks.tech/en-ca",
      "en-AU": "https://nexaworks.tech/en-au",
      "en-IN": "https://nexaworks.tech/en-in",
      "x-default": "https://nexaworks.tech",
    },
  },
  openGraph: {
    title: "NexaWorks",
    description:
      "Elite AI automation agency specializing in production-grade agentic workflows, RAG systems, and enterprise AI solutions.",
    url: "https://nexaworks.tech",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const speculationRules = {
    prerender: [{
      source: "document",
      where: {
        href_matches: "/*"
      },
      eagerness: "moderate"
    }],
    prefetch: [{
      source: "list",
      urls: ["/contact", "/us-architecture/async-llm-refactoring", "/in-automation/dpdp-act-pii-redaction"],
      eagerness: "conservative"
    }]
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#533afd" />
        <script 
          type="speculationrules" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }} 
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SchemaMarkup />
      </body>
    </html>
  );
}
