import { useEffect, useState } from "react";
import { X, Check, Minus, Plus } from "lucide-react";
import { type Product, formatINR } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
    if (product) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-luxe animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-accent transition-smooth"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-secondary aspect-square">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col">
            <h2 className="font-display text-3xl leading-tight">{product.name}</h2>
            <p className="text-2xl text-gold font-semibold mt-3">{formatINR(product.price)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>
            <ul className="mt-6 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-gold" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 flex items-center gap-4">
              <div className="flex items-center border border-border rounded-full">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-10 w-10 flex items-center justify-center hover:bg-accent rounded-l-full"
                  aria-label="Decrease"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-10 text-center font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="h-10 w-10 flex items-center justify-center hover:bg-accent rounded-r-full"
                  aria-label="Increase"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <button
                onClick={() => {
                  add(product, qty);
                  toast.success(`Added ${qty} × ${product.name}`);
                  onClose();
                }}
                className="flex-1 bg-primary text-primary-foreground rounded-full py-3 font-semibold tracking-wide hover:bg-primary/90 transition-smooth"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
