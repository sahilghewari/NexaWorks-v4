"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

// The ad landing page supplies its own focused navigation and footer.
export default function MarketingChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === "/ai") return <>{children}</>;
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white px-4 py-3">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
