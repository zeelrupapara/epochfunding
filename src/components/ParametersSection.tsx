import { useScrollReveal } from "@/hooks/useScrollReveal";

const params = [
  { label: "Facility", value: "$100K–$1MM+" },
  { label: "Repayment", value: "1.2x–1.5x" },
  { label: "Term", value: "Up to 12 mo" },
  { label: "Decision", value: "24–48 hrs" },
  { label: "Funding", value: "1–3 days" },
];

const ParametersSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-epoch-dark">
      <div ref={ref} className="container">
        <p className="section-label text-center mb-4">Terms</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14 tracking-[-0.02em]">
          Typical Parameters
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {params.map((p) => (
            <div key={p.label} className="group text-center bg-primary-foreground/[0.03] rounded-2xl p-6 md:p-8 border border-primary-foreground/[0.06] hover:border-epoch-gold/20 hover:bg-primary-foreground/[0.06] transition-all duration-300">
              <p className="text-lg md:text-xl font-bold text-epoch-gold tracking-tight">{p.value}</p>
              <p className="text-[10px] text-primary-foreground/35 uppercase tracking-[0.2em] mt-2.5 font-medium">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParametersSection;
