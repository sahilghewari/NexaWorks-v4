import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export const metadata: Metadata = {
  title: {
    default: "NexaWorks — Customer Intelligence for B2B SaaS",
    template: "%s | NexaWorks",
  },
  description:
    "Founder-led customer intelligence services for B2B SaaS. Fixed-price pilots that unify your CRM, calls, and support data into evidence-backed risk and opportunity signals.",
  keywords: [
    "customer intelligence consulting",
    "customer success operations consulting",
    "renewal risk consulting",
    "B2B SaaS data consulting",
    "churn analysis consulting",
  ],
  metadataBase: new URL("https://nexaworks.tech"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "NexaWorks — Customer Intelligence for B2B SaaS",
    description:
      "Fixed-price intelligence pilots that surface churn risks and expansion signals weeks earlier.",
    url: "https://nexaworks.tech",
    siteName: "NexaWorks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks — Customer Intelligence for B2B SaaS",
    description:
      "Fixed-price intelligence pilots for B2B SaaS CS teams.",
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
        "name": "NexaWorks",
        "url": "https://nexaworks.tech",
        "logo": "https://nexaworks.tech/logo.png",
        "description": "Customer Intelligence for B2B SaaS",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@nexaworks.tech",
          "contactType": "customer support"
        }
      },
      {
        "@type": "Service",
        "@id": "https://nexaworks.tech/#service",
        "name": "Customer Intelligence Blueprint",
        "provider": {
          "@id": "https://nexaworks.tech/#organization"
        },
        "description": "A 10-day diagnostic engagement to map your CS workflows, assess data, and build a pilot architecture."
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
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
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESGQWS77L4', {
              page_path: window.location.pathname,
            });
          `
        }} />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
