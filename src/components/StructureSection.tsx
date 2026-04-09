"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { title: "Revenue-Based Advance", desc: "Capital structured around your monthly revenue performance." },
  { title: "Daily or Weekly Remittance", desc: "Flexible repayment cadence aligned with your cash flow." },
  { title: "Performance-Aligned Repayment", desc: "Payments adjusted with your business performance." },
  { title: "Non-Dilutive", desc: "No equity, no warrants, no ownership dilution." },
];

const StructureSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="structure" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container max-w-3xl">
        <p className="section-label text-center mb-4">How It Works</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-14 tracking-[-0.02em]">
          Capital Structure
        </h2>
        <div className="space-y-4">
          {items.map((it, i) => (
            <div key={it.title} className="group flex gap-5 items-start bg-secondary rounded-2xl p-6 md:p-7 border border-transparent hover:border-border transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-epoch-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-epoch-gold/20 transition-colors duration-300">
                <span className="text-xs font-bold text-epoch-gold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-[15px]">{it.title}</p>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
