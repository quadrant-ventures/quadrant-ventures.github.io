import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import piklerLogo from "@/assets/pikler-logo.png";
import piklerHero from "@/assets/pikler-hero.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pikler = () => {
  const features = [
    {
      icon: "🏓",
      title: "Premium Courts",
      description: "Professional-grade courts and perfect lighting for optimal play.",
    },
    {
      icon: "🎯",
      title: "All Skill Levels",
      description: "Whether you're a beginner or a seasoned pro, our courts and programs cater to every level.",
    },
    {
      icon: "🏆",
      title: "Leagues & Tournaments",
      description: "Join our competitive leagues or participate in monthly tournaments with players from all around.",
    },
    {
      icon: "📚",
      title: "Expert Coaching",
      description: "Learn from certified coaches who can help you perfect your serve, dink, and everything in between.",
    },
    {
      icon: "🏓",
      title: "Equipment Included",
      description: "No gear? No problem. We provide paddles, balls, and all the equipment you need to play.",
    },
    {
      icon: "☕",
      title: "Lounge & Café",
      description: "Relax in our modern lounge area with refreshments, healthy snacks, and great company.",
    },
  ];

  // const pricingPlans = [
  //   {
  //     name: "Silver Membership",
  //     price: "₹2,800",
  //     priceType: "Regular Price",
  //     launchPrice: "₹2,200",
  //     launchPriceType: "Launch Price",
  //     features: ["8 hours of Monthly Slots", "0 Peak Slots", "Equipment rental", "24 hours booking window"],
  //     popular: false,
  //   },
  //   {
  //     name: "Gold Membership",
  //     price: "₹5,500",
  //     priceType: "Regular Price",
  //     launchPrice: "₹4,500", 
  //     launchPriceType: "Launch Price",
  //     features: ["12 hours of Monthly Slots", "4 Peak Slots", "Free equipment", "48 hours booking window"],
  //     popular: false,
  //   },
  //   {
  //     name: "Platinum Membership",
  //     price: "₹9,500",
  //     priceType: "Regular Price",
  //     launchPrice: "₹7,500",
  //     launchPriceType: "Launch Price",
  //     features: ["20 hours of Monthly Slots", "10 Peak Slots", "Free equipment", "72 hours booking window"],
  //     popular: true,
  //   },
  // ];

  const launchOffers = [{
    name: "Quarterly Membership",
    price: "₹2,100",
    priceType: "",
    features: ["Flat 50% Off on all bookings", "No rental for paddles", "First 50 members only"],
    popular: true,
  }];

  const location = useLocation();
  useEffect(() => {
    console.log("Page view:", location.pathname);

    window.gtag('config', 'G-JDYJX5CQPG', {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Pikler Pickleball Court | Premium Courts by Quadrant Ventures</title>
        <meta
          name="description"
          content="Experience pickleball at Pikler - premium courts, expert coaching, and a vibrant community. Book your court today at Quadrant Ventures' first venture."
        />
        <meta name="keywords" content="pickleball, Pikler, pickleball courts, sports, Quadrant Ventures, book court" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={piklerHero}
              alt="Pikler Pickleball Court"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 opacity-0 animate-slide-up">
                <img
                  src={piklerLogo}
                  alt="Pikler Pickleball"
                  className="h-32 md:h-40 w-auto mx-auto"
                />
              </div>

              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 opacity-0 animate-slide-up delay-100">
                <span className="text-foreground">Where Every</span>
                <br />
                <span className="text-primary">Rally Counts</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up delay-200 leading-relaxed">
                Premium pickleball courts designed for players who demand excellence.
                Join the movement that's taking the sports world by storm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up delay-300">
                <Button variant="hero" size="xl" asChild>
                  <a href="http://go.playo.app/PLAYOO/oLYGN" target="_blank" rel="noopener noreferrer">
                    Book a Court
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="tel:+919096867887"> Call Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
                Why Pikler
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                More Than Just <span className="text-primary">Courts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We've created the ultimate pickleball destination with everything you need for the perfect game.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-card border border-border hover-lift group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section id="booking" className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
                Pricing
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Pick Your <span className="text-primary">Play</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Flexible plans for every player. No hidden fees, just pure pickleball.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary/5 border-primary scale-105 shadow-xl shadow-primary/10"
                      : "bg-background border-border hover-lift"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.priceType}</span>
                  </div>
                    <div className="mb-6">
                    <span className="text-4xl font-display font-extrabold">{plan.launchPrice}</span>
                    <span className="text-muted-foreground ml-2">{plan.launchPriceType}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    <a href="tel:+919096867887"> Call Us</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Launch Offer Section */}
         <section id="launch-offer" className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
                Offer
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary">Grand</span> Launch Offer
              </h2>
              <p className="text-xl text-muted-foreground">
                Unlock consistent savings every time you play — for the entire quarter.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
              {launchOffers.map((plan) => (
                <div
                  key={plan.name}
                  style={{textAlign: 'center'}}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary/5 border-primary scale-105 shadow-xl shadow-primary/10"
                      : "bg-background border-border hover-lift"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                        Launch Offer
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.priceType}</span>
                  </div>
                  <ul className="space-y-3 mb-8" style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    <a href="tel:+919096867887"> Call Us</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
                    Find Us
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    Ready to <span className="text-primary">Play?</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Visit our state-of-the-art facility and experience the Pikler difference. Walk-ins welcome, but we recommend booking ahead during peak hours.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Location</h4>
                        <p className="text-muted-foreground">Pikler, Forest Park, Near Kharadi Bypass, Pune, Maharashtra 411014</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Hours</h4>
                        <p className="text-muted-foreground">6AM - 11PM All days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Contact</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li>
                            <a
                              href="mailto:hey.pikler@gmail.com"
                              className="hover:text-primary transition-colors duration-200"
                            >
                              hey.pikler@gmail.com
                            </a>
                          </li>

                          <li>
                            <a
                              href="tel:+919096867887"
                              className="hover:text-primary transition-colors duration-200"
                            >
                              &#x2706; +91 90968 67887
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-secondary/30 border border-border overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.137583146596!2d73.93933177608773!3d18.56783498253488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3003fbdc9f1%3A0xf77e4bc3d578ff97!2sPikler%20Pickleball%20Court!5e0!3m2!1sen!2sin!4v1773164044539!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, width: "25rem", height: "20rem" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-xl rotate-12" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 geometric-bg opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to <span className="text-primary">Dink?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join thousands of players who've made Pikler their home court.
                Your first game is on us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <Link to="http://go.playo.app/PLAYOO/oLYGN" target="_blank" rel="noopener noreferrer">
                    Book a Court
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/">Back to Quadrant</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Pikler;
