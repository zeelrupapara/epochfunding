const stats = [
  { value: "24-48h", label: "Decision" },
  { value: "$1MM+", label: "Facility" },
  { value: "1-3 Days", label: "Funding" },
];

const StatsBar = () => (
  <section className="bg-epoch-dark">
    <div className="container grid grid-cols-3 divide-x divide-primary-foreground/10">
      {stats.map((s) => (
        <div key={s.label} className="py-7 md:py-10 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">{s.value}</p>
          <p className="text-[11px] sm:text-xs text-primary-foreground/40 uppercase tracking-widest mt-1.5">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
