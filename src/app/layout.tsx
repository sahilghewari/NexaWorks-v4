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
    default: "NexaWorks — Context Reconstruction Platform",
    template: "%s | NexaWorks",
  },
  description:
    "NexaWorks is an enterprise Context Reconstruction platform that uses deterministic retrieval, MCP, and agentic orchestration to deliver workflow-ready context briefs.",
  keywords: [
    "Context Reconstruction",
    "Agentic Orchestration",
    "Deterministic Retrieval",
    "Model Context Protocol",
    "Enterprise AI",
  ],
  alternates: {
    canonical: "https://nexaworks.tech",
  },
  openGraph: {
    title: "NexaWorks",
    description:
      "Enterprise Context Reconstruction platform delivering workflow-ready context briefs.",
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
