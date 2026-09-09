import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Simplifyne",
  description:
    "Get in touch with Simplifyne. Tell us what you're looking for and a real person will get back to you shortly.",
};

export default function ContactPage() {
  return (
    <>
      {/* No blue hero on this page, so the header needs its light look from
          the first frame rather than the homepage's transparent-over-blue
          start, but the same scroll-away/scroll-up-glassy behaviour still
          applies (see SiteHeader.tsx and Header.tsx's `variant` prop). */}
      <SiteHeader variant="light" />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
