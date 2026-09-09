import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Team | Simplifyne",
  description:
    "Meet the small, senior team behind Simplifyne, designing, building, and growing digital products for founders across six countries.",
};

export default function TeamPage() {
  return (
    <>
      {/* No blue hero on this page, so the header needs its light look from
          the first frame (see Header.tsx's `variant` prop). */}
      <SiteHeader variant="light" />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
