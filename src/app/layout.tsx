import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://unpkg.com/@tailwindcss/browser@4" strategy="beforeInteractive" />
        <style type="text/tailwindcss" suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `
            @theme {
              --color-canvas: #FAFAF8;
              --color-ink: #1C1917;
              --color-accent: #0E9F8A;
              --color-accent-hover: #0B6E5F;
              --color-accent-glow: #2DD4A8;
              --color-dark: #131110;
              --color-dark-mid: #1A1714;
              --color-amber: #D97706;
              --color-warm-100: #F5F5F0;
              --color-warm-200: #E8E6E1;
              --color-warm-300: #D4D0C8;
              --color-warm-400: #A8A29E;
              
              --font-display: Georgia, "Times New Roman", serif;
              --font-body: system-ui, -apple-system, sans-serif;
              --font-mono: ui-monospace, SFMono-Regular, monospace;
            }

            @layer base {
              :root {
                --nw-canvas: var(--color-canvas);
                --nw-ink: var(--color-ink);
                --nw-ink-soft: #57534E;
                --nw-accent: var(--color-accent);
                --nw-accent-hover: var(--color-accent-hover);
                --nw-accent-glow: var(--color-accent-glow);
                --nw-dark: var(--color-dark);
                --nw-dark-mid: var(--color-dark-mid);
                --nw-dark-soft: #A8A29E;
                --nw-amber: var(--color-amber);
                --nw-line-light: #E8E6E1;
                --nw-line-dark: #292524;
                --nw-warm-100: var(--color-warm-100);
                --nw-warm-200: var(--color-warm-200);
                --nw-warm-300: var(--color-warm-300);
                --nw-warm-400: var(--color-warm-400);
              }
              body {
                background-color: var(--color-canvas);
                color: var(--color-ink);
                font-family: var(--font-body);
                -webkit-font-smoothing: antialiased;
              }
              h1, h2, h3, h4, h5, h6 {
                font-family: var(--font-display);
                font-weight: 400;
                line-height: 1.1;
                letter-spacing: -0.02em;
              }
              h1 { font-size: 3.5rem; }
              @media (min-width: 768px) { h1 { font-size: 5rem; } }
              h2 { font-size: 2.5rem; }
              @media (min-width: 768px) { h2 { font-size: 3.5rem; } }
              h3 { font-size: 1.75rem; }
              @media (min-width: 768px) { h3 { font-size: 2rem; } }
            }

            @layer components {
              .container-nw {
                width: 100%;
                max-width: 80rem;
                margin-left: auto;
                margin-right: auto;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
              }
              @media (min-width: 768px) {
                .container-nw {
                  padding-left: 3rem;
                  padding-right: 3rem;
                }
              }
              .eyebrow {
                font-family: var(--font-mono);
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-weight: 500;
              }
              .section-dark {
                background-color: var(--color-dark);
                color: white;
              }
              .sp-section {
                padding-top: 6rem;
                padding-bottom: 6rem;
              }
              @media (min-width: 768px) {
                .sp-section {
                  padding-top: 8rem;
                  padding-bottom: 8rem;
                }
              }
            }
          `
        }} />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ESGQWS77L4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-ESGQWS77L4");
          `}
        </Script>

      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
