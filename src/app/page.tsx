import { CaseStudies } from "@/components/CaseStudies";
import { ClientLogos } from "@/components/ClientLogos";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { FEATURES } from "@/config/features";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ClientLogos />
        <CaseStudies />
        <Testimonials />
        {FEATURES.showProductsSection && <Products />}
        <ClosingStatement />
      </main>
      <Footer />
    </>
  );
}
