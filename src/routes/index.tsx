import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { CartDrawer } from "@/components/CartDrawer";
import { About } from "@/components/About";
import { products, type Product } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Destination Fareways LLC — Premium Golf Travel Essentials" },
      {
        name: "description",
        content:
          "Premium travel essentials crafted for golfers who play beyond boundaries. Shop luxury golf bags, shoes, apparel, and accessories.",
      },
      { property: "og:title", content: "Destination Fareways LLC" },
      { property: "og:description", content: "Premium travel essentials for golfers who play beyond boundaries." },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Toaster position="top-center" richColors />
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <section id="shop" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">The Collection</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Curated Essentials for the <span className="italic">Discerning Golfer</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onView={setActive} />
              ))}
            </div>
          </div>
        </section>
        <About />
      </main>
      <ProductModal product={active} onClose={() => setActive(null)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}
