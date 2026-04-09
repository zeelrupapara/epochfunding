"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  { title: "Working Capital", desc: "Bridge short-term operational cash flow gaps without disrupting growth." },
  { title: "Growth Initiatives", desc: "Fund expansion, new hires, or market entry with speed and certainty." },
  { title: "Liquidity Bridge", desc: "Access capital while awaiting receivables, contracts, or other funding rounds." },
  { title: "Seasonal Cash Flow", desc: "Smooth revenue fluctuations during peak or off-peak cycles." },
];

const UseCasesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div ref={ref} className="container">
        <p className="section-label text-center mb-4">Applications</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-14 tracking-[-0.02em]">
          Common Use Cases
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {cases.map((c) => (
            <div key={c.title} className="group bg-background rounded-2xl p-7 md:p-8 border border-border hover:border-epoch-gold/25 hover:shadow-lg hover:shadow-epoch-gold/5 transition-all duration-300">
              <h3 className="font-semibold text-foreground mb-2 text-[15px]">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
