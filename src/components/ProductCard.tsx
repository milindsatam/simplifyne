import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card block aspect-[3/4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-dark"
    >
      <Image
        src={product.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 84vw"
        className="product-card-image object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[image:var(--gradient-product-scrim)]"
      />

      <p className="absolute inset-x-0 top-0 p-4 text-label font-semibold text-white/80 uppercase [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
        {product.category}
      </p>

      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-bento-heading-lg font-semibold text-on-dark">
          {product.name}
        </h3>

        <p className="mt-2 max-w-product-copy text-card-body text-product-copy">
          {product.description}
        </p>
      </div>
    </a>
  );
}
