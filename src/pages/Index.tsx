import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VenturesSection from "@/components/home/VenturesSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Quadrant Ventures | Four Minds. Infinite Ventures.</title>
        <meta
          name="description"
          content="Quadrant Ventures is a collective of four friends building businesses that bring people together. Explore our ventures including Pikler Pickleball Courts."
        />
        <meta name="keywords" content="Quadrant Ventures, startup, ventures, pickleball, Pikler, business, sports" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <VenturesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
