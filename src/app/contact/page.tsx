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
      <SiteHeader />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
