"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "24-48h", label: "Decision" },
  { value: "$1MM+", label: "Facility" },
  { value: "1-3 Days", label: "Funding" },
];

const StatsBar = () => {
  const ref = useScrollReveal(0.3);

  return (
    <section className="bg-epoch-dark relative">
      <div ref={ref} className="container grid grid-cols-3 divide-x divide-primary-foreground/[0.08]">
        {stats.map((s) => (
          <div key={s.label} className="py-8 md:py-12 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">{s.value}</p>
            <p className="text-[10px] sm:text-[11px] text-primary-foreground/35 uppercase tracking-[0.2em] mt-2 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
