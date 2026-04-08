const stats = [
  { value: "24-48h", label: "Decision" },
  { value: "$1MM+", label: "Facility" },
  { value: "1-3 Days", label: "Funding" },
];

const StatsBar = () => (
  <section className="bg-epoch-dark">
    <div className="container grid grid-cols-3 divide-x divide-primary-foreground/10">
      {stats.map((s) => (
        <div key={s.label} className="py-6 md:py-8 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary-foreground">{s.value}</p>
          <p className="text-xs sm:text-sm text-primary-foreground/50 uppercase tracking-wider mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
