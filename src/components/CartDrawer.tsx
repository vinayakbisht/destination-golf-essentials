import { useEffect, useState } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/products";
import { toast } from "sonner";

type Mode = "cart" | "checkout";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, setQty, remove, total, clear } = useCart();
  const [mode, setMode] = useState<Mode>("cart");
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  useEffect(() => {
    if (!open) setMode("cart");
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("🎉 Order placed successfully! Your items will be delivered soon.");
    clear();
    setForm({ name: "", address: "", phone: "" });
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-luxe transition-transform duration-400 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-2xl">{mode === "cart" ? "Your Cart" : "Checkout"}</h2>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full hover:bg-accent flex items-center justify-center transition-smooth"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {mode === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground py-20">Your cart is empty.</p>
              ) : (
                items.map(({ product, qty }) => (
                  <div key={product.id} className="flex gap-4 pb-4 border-b border-border/60">
                    <img src={product.image} alt={product.name} width={80} height={80} className="h-20 w-20 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{formatINR(product.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => setQty(product.id, qty - 1)} className="h-7 w-7 rounded-full border border-border hover:bg-accent flex items-center justify-center" aria-label="Decrease">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{qty}</span>
                        <button onClick={() => setQty(product.id, qty + 1)} className="h-7 w-7 rounded-full border border-border hover:bg-accent flex items-center justify-center" aria-label="Increase">
                          <Plus className="h-3 w-3" />
                        </button>
                        <button onClick={() => remove(product.id)} className="ml-auto text-muted-foreground hover:text-destructive transition-smooth" aria-label="Remove">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-semibold whitespace-nowrap">{formatINR(product.price * qty)}</div>
                  </div>
                ))
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-display font-semibold">{formatINR(total)}</span>
                </div>
                <button
                  onClick={() => setMode("checkout")}
                  className="w-full bg-primary text-primary-foreground rounded-full py-3.5 font-semibold tracking-wide hover:bg-primary/90 transition-smooth"
                >
                  Checkout
                </button>
              </div>
            )}
          </>
        ) : (
          <form onSubmit={placeOrder} className="flex-1 flex flex-col overflow-y-auto">
            <div className="flex-1 p-6 space-y-5">
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-card border border-border rounded-lg px-4 py-3 outline-none focus:border-gold transition-smooth"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Address</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={3}
                  className="mt-2 w-full bg-card border border-border rounded-lg px-4 py-3 outline-none focus:border-gold transition-smooth resize-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full bg-card border border-border rounded-lg px-4 py-3 outline-none focus:border-gold transition-smooth"
                  required
                />
              </div>
              <div className="bg-accent/60 border border-border rounded-lg p-4">
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Payment</p>
                <p className="mt-1 font-medium">Cash on Delivery</p>
              </div>
            </div>
            <div className="border-t border-border p-6 space-y-3">
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Total</span>
                <span className="font-display font-semibold">{formatINR(total)}</span>
              </div>
              <button type="submit" className="w-full bg-gradient-gold text-gold-foreground rounded-full py-3.5 font-semibold tracking-wide hover:scale-[1.01] transition-smooth shadow-luxe">
                Place Order
              </button>
              <button type="button" onClick={() => setMode("cart")} className="w-full text-sm text-muted-foreground hover:text-foreground transition-smooth">
                ← Back to cart
              </button>
            </div>
          </form>
        )}
      </aside>
    </>
  );
}
