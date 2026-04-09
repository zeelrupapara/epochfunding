const items = [
  { title: "Revenue-Based Advance", desc: "Capital structured around your monthly revenue performance." },
  { title: "Daily or Weekly Remittance", desc: "Flexible repayment cadence aligned with your cash flow." },
  { title: "Performance-Aligned Repayment", desc: "Payments adjusted with your business performance." },
  { title: "Non-Dilutive", desc: "No equity, no warrants, no ownership dilution." },
];

const StructureSection = () => (
  <section id="structure" className="py-20 md:py-28 bg-background">
    <div className="container max-w-3xl">
      <p className="section-label text-center mb-4">How It Works</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
        Capital Structure
      </h2>
      <div className="space-y-5">
        {items.map((it) => (
          <div key={it.title} className="flex gap-4 items-start bg-secondary rounded-xl p-5 md:p-6">
            <div className="w-2 h-2 rounded-full bg-epoch-gold mt-2 shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm md:text-base">{it.title}</p>
              <p className="text-muted-foreground text-sm mt-0.5">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StructureSection;
