import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceCardRow({ className }: { className?: string }) {
  return (
    <ul className={`service-row ${className ?? ""}`}>
      {services.map((service, index) => (
        <li key={service.id} className="service-item">
          <ServiceCard
            service={service}
            imageExit={index % 2 === 0 ? "slide" : "shrink"}
          />
        </li>
      ))}
    </ul>
  );
}
