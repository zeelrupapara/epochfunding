const params = [
  { label: "Facility", value: "$100K–$1MM+" },
  { label: "Repayment", value: "1.2x–1.5x" },
  { label: "Term", value: "Up to 12 months" },
  { label: "Decision", value: "24–48 hours" },
  { label: "Funding", value: "1–3 business days" },
];

const ParametersSection = () => (
  <section className="py-16 md:py-24 bg-epoch-dark">
    <div className="container">
      <p className="section-label text-center mb-3">Terms</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-foreground text-center mb-10">
        Typical Parameters
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {params.map((p) => (
          <div key={p.label} className="text-center bg-primary-foreground/5 rounded-lg p-4 md:p-6 border border-primary-foreground/10">
            <p className="text-lg md:text-xl font-bold text-epoch-gold">{p.value}</p>
            <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-2">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ParametersSection;
