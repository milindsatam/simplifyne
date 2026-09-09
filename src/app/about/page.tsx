import type { Metadata } from "next";
import { AboutClients } from "@/components/AboutClients";
import { AboutIntro } from "@/components/AboutIntro";
import { Capabilities } from "@/components/Capabilities";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About | Simplifyne",
  description:
    "Simplifyne is a small, senior team that builds around how a business actually grows, designing, building, and marketing digital products for founders across six countries.",
};

export default function AboutPage() {
  return (
    <>
      {/* No blue hero on this page, so the header needs its light look from
          the first frame (see Header.tsx's `variant` prop). */}
      <SiteHeader variant="light" />
      <main>
        <AboutIntro />
        <Capabilities />
        <TeamSection />
        <AboutClients />
        <ClosingStatement />
      </main>
      <Footer />
    </>
  );
}
