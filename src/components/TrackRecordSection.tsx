const examples = [
  { amount: "$350K", type: "Logistics Company", note: "Funded in 48 hours" },
  { amount: "$750K", type: "eCommerce Company", note: "Inventory expansion" },
  { amount: "$1.2MM", type: "Healthcare Services", note: "Bridge capital" },
];

const TrackRecordSection = () => (
  <section id="track-record" className="py-20 md:py-28 bg-epoch-dark">
    <div className="container">
      <p className="section-label text-center mb-4">Track Record</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12 tracking-tight">
        Recent Funding Examples
      </h2>
      <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
        {examples.map((e) => (
          <div key={e.amount} className="text-center rounded-xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] p-7 md:p-9 hover:border-epoch-gold/20 transition-colors">
            <p className="text-3xl md:text-4xl font-bold text-epoch-gold tracking-tight mb-2">{e.amount}</p>
            <p className="font-medium text-primary-foreground text-sm">{e.type}</p>
            <p className="text-xs text-primary-foreground/40 mt-1">{e.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrackRecordSection;
