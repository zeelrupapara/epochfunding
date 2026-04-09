const philosophy = [
  "Focus on revenue durability",
  "Structured capital alignment",
  "Disciplined underwriting",
  "Reliable execution",
];

const notFit = [
  "Pre-revenue business",
  "Inconsistent deposits",
  "Seeking long-term or lowest-cost capital",
];

const ApproachSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-3xl">
      <p className="section-label text-center mb-4">Our Philosophy</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
        How We Approach Capital
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {philosophy.map((p) => (
          <div key={p} className="flex items-center gap-3 bg-secondary rounded-xl px-5 py-4">
            <div className="w-1.5 h-1.5 rounded-full bg-epoch-gold shrink-0" />
            <span className="text-sm font-medium text-foreground">{p}</span>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-foreground text-center mb-6">
        We May Not Be the Right Fit If
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {notFit.map((n) => (
          <span key={n} className="text-xs bg-secondary text-muted-foreground rounded-full px-5 py-2.5 font-medium">
            {n}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
