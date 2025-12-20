const AboutSection = () => {
  const founders = [
    { name: "Founder One", role: "Visionary", color: "from-primary to-green-400" },
    { name: "Founder Two", role: "Strategist", color: "from-primary to-emerald-400" },
    { name: "Founder Three", role: "Builder", color: "from-primary to-lime-400" },
    { name: "Founder Four", role: "Connector", color: "from-primary to-teal-400" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built by <span className="text-primary">Four Friends</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Quadrant Ventures was born from a simple idea: what if we combined
            our unique strengths to build something meaningful? We're not just
            business partners – we're lifelong friends with a shared vision of
            creating experiences that matter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-gradient-card rounded-2xl border border-border overflow-hidden hover-lift">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Quadrant symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-muted-foreground/20 rotate-45 group-hover:border-primary group-hover:rotate-[225deg] transition-all duration-700" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-display font-bold text-lg">{founder.name}</h3>
                  <p className="text-primary text-sm font-medium">{founder.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              number: "4",
              label: "Founders",
              desc: "Different perspectives, unified vision",
            },
            {
              number: "1",
              label: "Mission",
              desc: "Creating spaces that bring people together",
            },
            {
              number: "∞",
              label: "Possibilities",
              desc: "Every venture opens new doors",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="text-5xl md:text-6xl font-display font-extrabold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
