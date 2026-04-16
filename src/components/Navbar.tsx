import { ShoppingBag, Flag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar({ onCartClick }: { onCartClick: () => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <Flag className="h-4 w-4 text-gold" />
          </span>
          <span className="font-display text-lg tracking-tight">
            Destination <span className="text-gold">Fareways</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#shop" className="hover:text-foreground transition-smooth">Shop</a>
          <a href="#about" className="hover:text-foreground transition-smooth">About</a>
          <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
        </div>
        <CartButton onClick={onCartClick} />
      </nav>
    </header>
  );
}

function CartButton({ onClick }: { onClick: () => void }) {
  const { count } = useCart();
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:border-gold hover:bg-accent transition-smooth"
      aria-label="Open cart"
    >
      <ShoppingBag className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-gold text-gold-foreground text-[10px] font-bold flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
