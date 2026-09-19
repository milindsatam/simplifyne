import type { Metadata } from "next";
import { AiAutomationHero } from "@/components/AiAutomationHero";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "AI & Automation | Simplifyne",
  description:
    "We design AI and automation around how your business already runs, so your team spends less time on repetitive work and more on what matters.",
};

export default function AiAutomationPage() {
  return (
    // The root layout's <body> is hardcoded to the brand blue, since the
    // homepage's transparent header relies on that colour showing through
    // (see layout.tsx). This page's header is transparent too (same
    // "brand" variant, for its white logo/light nav), but sits over black,
    // not blue, so this wrapper paints an opaque ink background behind it
    // before the header's own transparency is resolved, rather than
    // leaving the header's strip showing brand-blue from the body beneath.
    <div className="bg-ink">
      <SiteHeader variant="brand" />
      <main>
        <AiAutomationHero />
      </main>
      <Footer />
    </div>
  );
}
