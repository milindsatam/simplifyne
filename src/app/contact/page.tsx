import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
          start (see Header.tsx's `variant` prop). */}
      <Header variant="light" />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
