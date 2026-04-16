import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Premium golf travel essentials at sunrise"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-6 border border-gold/40 px-4 py-1.5 rounded-full">
            Golf · Travel · Lifestyle
          </span>
          <h1 className="text-5xl md:text-7xl font-display leading-[1.05] mb-6">
            Destination
            <br />
            <span className="italic text-gold">Fareways</span> LLC
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed">
            Premium travel essentials crafted for golfers who play beyond boundaries. Elevate your journey, wherever the
            fairway takes you.
          </p>
          <a
            href="#shop"
            className="inline-flex items-center gap-3 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-full font-semibold tracking-wide shadow-luxe hover:scale-[1.03] transition-smooth"
          >
            Shop Now
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
