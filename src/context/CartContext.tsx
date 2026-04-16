import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "df_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const value = useMemo<CartCtx>(() => {
    const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
    const count = items.reduce((s, i) => s + i.qty, 0);
    return {
      items,
      total,
      count,
      add: (p, qty = 1) =>
        setItems((cur) => {
          const ex = cur.find((c) => c.product.id === p.id);
          if (ex) return cur.map((c) => (c.product.id === p.id ? { ...c, qty: c.qty + qty } : c));
          return [...cur, { product: p, qty }];
        }),
      remove: (id) => setItems((cur) => cur.filter((c) => c.product.id !== id)),
      setQty: (id, qty) =>
        setItems((cur) =>
          qty <= 0 ? cur.filter((c) => c.product.id !== id) : cur.map((c) => (c.product.id === id ? { ...c, qty } : c))
        ),
      clear: () => setItems([]),
    };
  }, [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
};
