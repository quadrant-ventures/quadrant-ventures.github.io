const AboutSection = () => {
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
