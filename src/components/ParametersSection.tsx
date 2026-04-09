const params = [
  { label: "Facility", value: "$100K–$1MM+" },
  { label: "Repayment", value: "1.2x–1.5x" },
  { label: "Term", value: "Up to 12 mo" },
  { label: "Decision", value: "24–48 hrs" },
  { label: "Funding", value: "1–3 days" },
];

const ParametersSection = () => (
  <section className="py-20 md:py-28 bg-epoch-dark">
    <div className="container">
      <p className="section-label text-center mb-4">Terms</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12 tracking-tight">
        Typical Parameters
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
        {params.map((p) => (
          <div key={p.label} className="text-center bg-primary-foreground/[0.04] rounded-xl p-5 md:p-7 border border-primary-foreground/[0.06]">
            <p className="text-lg md:text-xl font-bold text-epoch-gold tracking-tight">{p.value}</p>
            <p className="text-[11px] text-primary-foreground/40 uppercase tracking-widest mt-2">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ParametersSection;
