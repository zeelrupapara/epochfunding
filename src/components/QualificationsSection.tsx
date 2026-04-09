const items = [
  { num: "01", text: "$1MM+ annual revenue" },
  { num: "02", text: "Consistent monthly deposits" },
  { num: "03", text: "Operating business" },
  { num: "04", text: "U.S.-based preferred" },
];

const QualificationsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <p className="section-label text-center mb-4">Qualification</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
        What We Look For
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.num} className="bg-background rounded-xl p-6 md:p-7 border border-border hover:shadow-md transition-shadow">
            <span className="text-3xl font-bold text-epoch-gold/20 tracking-tight">{it.num}</span>
            <p className="mt-3 text-sm md:text-base font-medium text-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualificationsSection;
