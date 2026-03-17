import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import quadrantLogo from "@/assets/quadrant-logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={quadrantLogo}
              alt="Quadrant Ventures"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 link-underline ${
                isHome ? "text-primary" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/pikler"
              className={`font-medium transition-colors duration-200 link-underline ${
                location.pathname === "/pikler"
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Pikler
            </Link>
          </div>

          <Button variant="hero" size="sm" asChild>
            <Link to="https://playo.co/venues/pune/pikler-pickleball-court-forest-park-pune" target="_blank" rel="noopener noreferrer">
              Book a Court
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
