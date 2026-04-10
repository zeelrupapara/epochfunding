"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const philosophy = [
  "Focus on revenue durability",
  "Structured capital alignment",
  "Disciplined underwriting",
  "Reliable execution",
];

const notFit = [
  "Pre-revenue business",
  "Inconsistent deposits",
];

const ApproachSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container max-w-3xl">
        <p className="section-label text-center mb-4">Our Philosophy</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-14 tracking-[-0.02em]">
          How We Approach Capital
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {philosophy.map((p) => (
            <div key={p} className="flex items-center gap-3.5 bg-secondary rounded-2xl px-5 py-4.5 border border-transparent hover:border-border transition-all duration-200">
              <div className="w-6 h-6 rounded-lg bg-epoch-gold/10 flex items-center justify-center shrink-0">
                <Check size={13} className="text-epoch-gold" />
              </div>
              <span className="text-sm font-medium text-foreground">{p}</span>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground text-center mb-7">
          We May Not Be the Right Fit If
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {notFit.map((n) => (
            <span key={n} className="inline-flex items-center gap-2 text-xs bg-secondary text-muted-foreground rounded-full px-5 py-2.5 font-medium">
              <X size={12} className="text-muted-foreground/50" />
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
