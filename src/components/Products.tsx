import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

const ARROW_SIZE = 16;

export function Products() {
  return (
    <section className="bg-surface-white pt-[6.25rem] pb-15">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div>
            <h2 className="font-display text-section-title font-bold text-ink">
              Products we build and run
            </h2>

            <p className="mt-4 max-w-product-intro text-body-md text-ink-soft">
              Beyond client work, we build our own products. Tools we design,
              ship, and grow ourselves.
            </p>
          </div>

          {/* TODO: point at the products index once that route exists. */}
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-1 rounded-pill bg-ink px-3 py-[0.875rem] text-body-sm font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:mt-0"
          >
            See all products
            <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
          </a>
        </div>

        <ul className="product-grid mt-7">
          {products.map((product) => (
            <li key={product.id} className="min-w-0">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
