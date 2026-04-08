const examples = [
  { amount: "$350K", type: "Logistics Company", note: "Funded in 48 hours" },
  { amount: "$750K", type: "eCommerce Company", note: "Inventory expansion" },
  { amount: "$1.2MM", type: "Healthcare Services", note: "Bridge capital" },
];

const TrackRecordSection = () => (
  <section id="track-record" className="py-16 md:py-24 bg-epoch-dark">
    <div className="container">
      <p className="section-label text-center mb-3">Track Record</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-foreground text-center mb-10">
        Recent Funding Examples
      </h2>
      <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
        {examples.map((e) => (
          <div key={e.amount} className="text-center rounded-lg border border-primary-foreground/10 p-6 md:p-8">
            <p className="text-3xl md:text-4xl font-serif font-bold text-epoch-gold mb-2">{e.amount}</p>
            <p className="font-semibold text-primary-foreground text-sm">{e.type}</p>
            <p className="text-xs text-primary-foreground/50 mt-1">{e.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrackRecordSection;
