import { MapPin, Phone } from "lucide-react";

export function About() {
  return (
    <>
      <section id="about" className="bg-primary text-primary-foreground py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-6">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
            Crafted for those who play <span className="italic text-gold">beyond boundaries</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Destination Fareways LLC is dedicated to providing premium travel essentials for golfers who explore the
            world through the game. From Scotland's storied links to the sun-drenched fairways of the Pacific — we
            equip the modern golfer with gear worthy of the journey.
          </p>
        </div>
      </section>
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
              <MapPin className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-display text-xl mb-2">Visit Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              C13 Ogal Bhatta, Turner Road,<br />Dehradun
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-display text-xl mb-2">Call Us</h3>
            <a href="tel:+919760876702" className="text-muted-foreground hover:text-foreground transition-smooth">
              +91 9760876702
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Destination Fareways LLC. All rights reserved.
      </footer>
    </>
  );
}
