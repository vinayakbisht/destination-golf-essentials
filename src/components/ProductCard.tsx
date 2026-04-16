import { type Product, formatINR } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export function ProductCard({ product, onView }: { product: Product; onView: (p: Product) => void }) {
  const { add } = useCart();
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxe transition-smooth border border-border/60">
      <button
        onClick={() => onView(product)}
        className="block w-full overflow-hidden bg-secondary aspect-square"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
        />
      </button>
      <div className="p-5">
        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{product.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold">{formatINR(product.price)}</span>
          <button
            onClick={() => {
              add(product);
              toast.success(`${product.name} added to cart`);
            }}
            className="text-xs font-semibold tracking-wider uppercase border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
