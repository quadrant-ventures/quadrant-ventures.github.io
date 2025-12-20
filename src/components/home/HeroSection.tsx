import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quadrantLogo from "@/assets/quadrant-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geometric-bg opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />

      {/* Geometric accent lines */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-primary/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-primary/10 rotate-12 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 opacity-0 animate-slide-up">
            <img
              src={quadrantLogo}
              alt="Quadrant Ventures"
              className="h-32 md:h-40 w-auto mx-auto animate-pulse-glow rounded-2xl"
            />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 opacity-0 animate-slide-up delay-100">
            <span className="text-foreground">Four Minds.</span>
            <br />
            <span className="text-primary">Infinite Ventures.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up delay-200 leading-relaxed">
            We're a collective of four friends building businesses that bring
            people together. From sports to experiences, we turn bold ideas into
            reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/pikler">Explore Pikler Courts</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
