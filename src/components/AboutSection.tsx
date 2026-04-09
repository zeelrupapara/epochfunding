import aboutImg from "@/assets/about-city.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="overview" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="section-label mb-4">About EPOCH</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight tracking-[-0.02em]">
              Capital Designed for Execution, Not Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-[15px]">
              EPOCH Funding provides structured revenue-based bridge capital for operating businesses requiring expedited liquidity. Designed for speed, discipline, and certainty of execution.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px]">
              We serve middle-market companies across Georgia and the United States — businesses with proven revenue that need capital deployed with precision and reliability.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
            <img src={aboutImg} alt="Downtown cityscape" loading="lazy" width={800} height={600} className="w-full h-72 md:h-[360px] object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
