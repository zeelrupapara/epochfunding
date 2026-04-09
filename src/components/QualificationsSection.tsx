import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { num: "01", text: "$1MM+ annual revenue" },
  { num: "02", text: "Consistent monthly deposits" },
  { num: "03", text: "Operating business" },
  { num: "04", text: "U.S.-based preferred" },
];

const QualificationsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div ref={ref} className="container">
        <p className="section-label text-center mb-4">Qualification</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-14 tracking-[-0.02em]">
          What We Look For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((it) => (
            <div key={it.num} className="group bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-epoch-gold/30 hover:shadow-lg hover:shadow-epoch-gold/5 transition-all duration-300">
              <span className="text-4xl font-bold text-epoch-gold/15 tracking-tight group-hover:text-epoch-gold/30 transition-colors duration-300">{it.num}</span>
              <p className="mt-3 text-sm md:text-[15px] font-medium text-foreground leading-snug">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
