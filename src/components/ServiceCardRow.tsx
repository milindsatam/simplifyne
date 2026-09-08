import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceCardRow({ className }: { className?: string }) {
  return (
    <ul className={`service-row ${className ?? ""}`}>
      {services.map((service) => (
        <li key={service.id} className="service-item">
          <ServiceCard service={service} />
        </li>
      ))}
    </ul>
  );
}
