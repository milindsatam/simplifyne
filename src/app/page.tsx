import { CaseStudies } from "@/components/CaseStudies";
import { ClientLogos } from "@/components/ClientLogos";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <CaseStudies />
        <Products />
      </main>
    </>
  );
}
