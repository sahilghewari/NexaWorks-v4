import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import MarketingChrome from "@/components/layout/MarketingChrome";
import "./globals.css";
import "./muster-brand.css";
import "./marketing-system.css";

const displayFont = localFont({
  src: [
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
    {
      path: "./fonts/instrument-serif-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
  display: "swap",
  fallback: ["Georgia"],
});
const sansFont = localFont({
  src: "./fonts/inter.woff2",
  weight: "400 600",
  variable: "--font-interface",
  display: "swap",
  fallback: ["Arial"],
});
const monoFont = localFont({
  src: "./fonts/plex-mono.woff2",
  weight: "400",
  variable: "--font-technical",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F8FF",
};

export const metadata: Metadata = {
  title: {
    default: "Muster AI · The AI customer success manager",
    template: "%s | Muster AI",
  },
  description:
    "Muster AI by NexaWorks is an AI customer success manager for B2B SaaS: it watches every account, shows the reason behind every health score, and drafts the follow-ups, renewals and QBRs. Your team approves. Free 2-month pilot, no implementation fee.",
  keywords: [
    "AI customer success manager",
    "Muster AI",
    "AI CSM",
    "churn early warning",
    "customer success signals",
    "renewal risk alerts",
    "daily risk brief for CSMs",
    "Signal Seat",
    "B2B SaaS customer success",
  ],
  metadataBase: new URL("https://nexaworks.tech"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Muster AI · The AI customer success manager",
    description:
      "Muster AI is the CSM, not CSM software: it watches every account, explains every score and drafts the work. Free 2-month pilot.",
    siteName: "NexaWorks",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.webp",
        width: 1024,
        height: 1024,
        alt: "Muster AI · The AI customer success manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muster AI · The AI customer success manager",
    description: "Muster AI: an AI customer success manager that drafts the work. Your team approves it.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nexaworks.tech/#organization",
        name: "NexaWorks",
        url: "https://nexaworks.tech",
        logo: "https://nexaworks.tech/logo.png",
        description: "Customer Intelligence for B2B SaaS",
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@nexaworks.tech",
          contactType: "customer support",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://nexaworks.tech/#muster",
        name: "Muster AI",
        applicationCategory: "BusinessApplication",
        url: "https://nexaworks.tech/muster",
        publisher: {
          "@id": "https://nexaworks.tech/#organization",
        },
        description:
          "An AI customer success manager for B2B SaaS. It watches every account across CRM, billing, support and product data, shows the reason behind every health score, and drafts outreach, save plays, renewal plans and QBR prep for human approval.",
      },
      {
        "@type": "Service",
        "@id": "https://nexaworks.tech/#service",
        name: "NexaWorks Signal Seat",
        provider: {
          "@id": "https://nexaworks.tech/#organization",
        },
        description:
          "A daily churn early-warning service for B2B SaaS CS teams: an 8am Risk Brief in Slack or email with each CSM's top 5 at-risk accounts, the signals behind each one, a weekly Renewal Radar, expansion signals and ready-to-approve drafts. $50 per CSM per month.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ESGQWS77L4"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESGQWS77L4', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <MarketingChrome>{children}</MarketingChrome>
      </body>
    </html>
  );
}
