const cases = [
  { title: "Working Capital", desc: "Bridge short-term operational cash flow gaps without disrupting growth." },
  { title: "Growth Initiatives", desc: "Fund expansion, new hires, or market entry with speed and certainty." },
  { title: "Liquidity Bridge", desc: "Access capital while awaiting receivables, contracts, or other funding rounds." },
  { title: "Seasonal Cash Flow", desc: "Smooth revenue fluctuations during peak or off-peak cycles." },
];

const UseCasesSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <p className="section-label text-center mb-3">Applications</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-10">
        Common Use Cases
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {cases.map((c) => (
          <div key={c.title} className="bg-background rounded-lg p-5 md:p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
