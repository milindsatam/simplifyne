import type { Metadata } from "next";
import { AiAutomationHero } from "@/components/AiAutomationHero";
import { AiAutomationHowWeWork } from "@/components/AiAutomationHowWeWork";
import { AiAutomationTools } from "@/components/AiAutomationTools";
import { AiAutomationWhatWeBuild } from "@/components/AiAutomationWhatWeBuild";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "AI & Automation | Simplifyne",
  description:
    "We design AI and automation around how your business already runs, so your team spends less time on repetitive work and more on what matters.",
};

export default function AiAutomationPage() {
  return (
    <>
      {/* The root layout's <body> is hardcoded to the brand blue, since the
          homepage's transparent header relies on that colour showing
          through (see layout.tsx). This page's header is transparent too
          (same "brand" variant, for its white logo/light nav), but sits
          over black, not blue, so this wrapper paints the hero's own dark
          gradient behind it instead of leaving the header showing
          brand-blue from the body beneath. Carrying the gradient here,
          across header and hero together, rather than starting it lower
          on the hero section alone, is what keeps the header from reading
          as a separate flat-black strip sitting on top of the gradient.
          The white sections below live in <main> instead: keeping this
          gradient scoped to just header+hero is what lets it fade to
          near-black by the hero's own bottom edge rather than being
          stretched thin across the whole page's height. */}
      <div className="bg-ink bg-[image:var(--gradient-ai)]">
        <SiteHeader variant="brand" />
        <AiAutomationHero />
      </div>
      <main>
        <AiAutomationWhatWeBuild />
        <AiAutomationTools />
        <AiAutomationHowWeWork />
      </main>
      <Footer />
    </>
  );
}
