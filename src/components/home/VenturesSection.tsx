import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import piklerLogo from "@/assets/pikler-logo.png";

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-primary/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary/5 rotate-45 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Our Ventures
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Where Ideas <span className="text-primary">Come to Play</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each venture under Quadrant is a testament to our belief that great
            things happen when passion meets purpose.
          </p>
        </div>

        {/* Featured Venture - Pikler */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group rounded-3xl overflow-hidden bg-gradient-card border border-border hover-lift">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Logo Side */}
              <div className="relative aspect-square md:aspect-auto flex items-center justify-center p-12 bg-secondary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={piklerLogo}
                  alt="Pikler Pickleball Court"
                  className="w-48 md:w-64 h-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
                  Featured Venture
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Pikler Pickleball Court
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our first venture brings the fastest-growing sport
                  to your neighborhood. State-of-the-art courts, professional
                  equipment, and a vibrant community await.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Premium courts",
                    "Professional coaching available",
                    "Equipment rental included",
                    "Community events & leagues",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/pikler">Explore Pikler</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="http://go.playo.app/PLAYOO/oLYGN" target="_blank" rel="noopener noreferrer">
                      Book a Court
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">More ventures coming soon</p>
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-xl bg-secondary/50 border border-border flex items-center justify-center"
              >
                <span className="text-muted-foreground text-2xl">?</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
