import type { Metadata } from "next";
import { DevelopmentCta } from "@/components/DevelopmentCta";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { DevelopmentSelectedWork } from "@/components/DevelopmentSelectedWork";
import { DevelopmentTech } from "@/components/DevelopmentTech";
import { DevelopmentWhatWeBuild } from "@/components/DevelopmentWhatWeBuild";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Development | Simplifyne",
  description:
    "We build websites, apps, and the systems behind them around how your business actually works, so the tech pulls its weight instead of getting in the way.",
};

export default function DevelopmentPage() {
  return (
    <>
      {/* No dark hero on this page, so the header needs its light look from
          the first frame (see Header.tsx's `variant` prop), same as
          About/Contact. */}
      <SiteHeader variant="light" />
      <main>
        <DevelopmentHero />
        <DevelopmentWhatWeBuild />
        <DevelopmentTech />
        <DevelopmentSelectedWork />
        <DevelopmentCta />
      </main>
      <Footer />
    </>
  );
}
