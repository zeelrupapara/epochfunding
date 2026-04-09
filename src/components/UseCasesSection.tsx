const cases = [
  { title: "Working Capital", desc: "Bridge short-term operational cash flow gaps without disrupting growth." },
  { title: "Growth Initiatives", desc: "Fund expansion, new hires, or market entry with speed and certainty." },
  { title: "Liquidity Bridge", desc: "Access capital while awaiting receivables, contracts, or other funding rounds." },
  { title: "Seasonal Cash Flow", desc: "Smooth revenue fluctuations during peak or off-peak cycles." },
];

const UseCasesSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <p className="section-label text-center mb-4">Applications</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
        Common Use Cases
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {cases.map((c) => (
          <div key={c.title} className="bg-background rounded-xl p-6 md:p-7 border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground mb-1.5">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
