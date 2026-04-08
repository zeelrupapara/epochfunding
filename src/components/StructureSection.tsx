import { CircleDot } from "lucide-react";

const items = [
  { title: "Revenue-Based Advance", desc: "Capital structured around your monthly revenue performance." },
  { title: "Daily or Weekly Remittance", desc: "Flexible repayment cadence aligned with your cash flow." },
  { title: "Performance-Aligned Repayment", desc: "Payments adjusted with your business performance." },
  { title: "Non-Dilutive", desc: "No equity, no warrants, no ownership dilution." },
];

const StructureSection = () => (
  <section id="structure" className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl">
      <p className="section-label text-center mb-3">How It Works</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-10">
        Capital Structure
      </h2>
      <div className="space-y-6">
        {items.map((it) => (
          <div key={it.title} className="flex gap-4 items-start">
            <CircleDot className="text-epoch-gold mt-1 shrink-0" size={18} />
            <div>
              <p className="font-semibold text-foreground text-sm md:text-base">{it.title}</p>
              <p className="text-muted-foreground text-sm">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StructureSection;
