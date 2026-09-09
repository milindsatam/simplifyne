import type { Client } from "@/data/clients";
import { clients } from "@/data/clients";
import { ClientGrid } from "./ClientGrid";

const DEMO_CLIENTS: readonly Client[] = [
  // DEMO client, replace
  {
    id: "northbridge",
    name: "NorthBridge",
    work: "Operations automation and internal tools",
  },
  // DEMO client, replace
  {
    id: "craftline",
    name: "Craftline",
    work: "Ecommerce website and brand",
  },
  // DEMO client, replace
  {
    id: "vellum",
    name: "Vellum",
    work: "SEO and content growth",
  },
  // DEMO client, replace
  {
    id: "kessel",
    name: "Kessel",
    work: "Product UI and UX design",
  },
  // DEMO client, replace
  {
    id: "attera",
    name: "Attera",
    work: "IoT dashboards and integration",
  },
];

const aboutClients: readonly Client[] = [...clients, ...DEMO_CLIENTS];

export function AboutClients() {
  return (
    <section className="section-padding bg-surface-muted">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="text-center">
          <h2 className="font-display text-section-title font-bold text-ink">
            Clients
          </h2>
          <p className="mx-auto mt-3 max-w-client-intro text-body-md text-ink/65">
            From founders and small teams to established businesses, across
            six countries.
          </p>
        </div>

        <ClientGrid clients={aboutClients} />
      </div>
    </section>
  );
}
