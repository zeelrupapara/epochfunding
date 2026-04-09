"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const examples = [
  { amount: "$350K", type: "Logistics Company", note: "Funded in 48 hours" },
  { amount: "$750K", type: "eCommerce Company", note: "Inventory expansion" },
  { amount: "$1.2MM", type: "Healthcare Services", note: "Bridge capital" },
];

const TrackRecordSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="track-record" className="py-24 md:py-32 bg-epoch-dark">
      <div ref={ref} className="container">
        <p className="section-label text-center mb-4">Track Record</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14 tracking-[-0.02em]">
          Recent Funding Examples
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {examples.map((e) => (
            <div key={e.amount} className="group text-center rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] p-8 md:p-10 hover:border-epoch-gold/25 hover:bg-primary-foreground/[0.06] transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-epoch-gold to-epoch-gold-light bg-clip-text text-transparent tracking-tight mb-2">{e.amount}</p>
              <p className="font-medium text-primary-foreground/90 text-sm">{e.type}</p>
              <p className="text-xs text-primary-foreground/45 mt-1.5">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
