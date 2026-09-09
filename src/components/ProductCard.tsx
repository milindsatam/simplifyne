import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      className="product-card block aspect-[3/4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-dark"
    >
      {/* The tint stands in for the product's image, so it's what scales on
          hover, not the card frame itself. */}
      <div
        aria-hidden="true"
        style={{ backgroundColor: product.bg }}
        className="product-card-image flex items-center justify-center"
      >
        <span className="text-center text-card-body text-on-dark-soft">
          TODO: replace with product image
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[image:var(--gradient-product-scrim)]"
      />

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
