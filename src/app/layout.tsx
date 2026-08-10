import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#533afd',
};

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
    "Agentic RAG",
    "LLM Integration",
    "Enterprise Knowledge Management",
  ],
  alternates: {
    canonical: "https://nexaworks.tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "NexaWorks — Context Reconstruction Platform",
    description:
      "Enterprise Context Reconstruction platform delivering workflow-ready context briefs using deterministic retrieval, MCP, and agentic orchestration.",
    url: "https://nexaworks.tech",
    siteName: "NexaWorks",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://nexaworks.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexaWorks — Enterprise Context Reconstruction Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NexaWorksAI",
    creator: "@NexaWorksAI",
    title: "NexaWorks — Context Reconstruction Platform",
    description:
      "Enterprise Context Reconstruction platform delivering workflow-ready context briefs.",
    images: ["https://nexaworks.tech/og-image.jpg"],
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ESGQWS77L4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESGQWS77L4');
          `}
        </Script>
      </body>
    </html>
  );
}
