import aboutImg from "@/assets/about-city.jpg";

const AboutSection = () => (
  <section id="overview" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="section-label mb-3">About EPOCH</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            Capital Designed for Execution, Not Process
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            EPOCH Funding provides structured revenue-based bridge capital for operating businesses requiring expedited liquidity. Designed for speed, discipline, and certainty of execution.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            We serve middle-market companies across Georgia and the United States — businesses with proven revenue that need capital deployed with precision and reliability.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img src={aboutImg} alt="Downtown cityscape" loading="lazy" width={800} height={600} className="w-full h-64 md:h-80 object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
