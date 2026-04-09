"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Submit Information", desc: "Complete a brief application with your business details and funding requirements." },
  { num: "02", title: "Credit Review", desc: "Our team evaluates your revenue profile and delivers a decision within 24–48 hours." },
  { num: "03", title: "Funding", desc: "Capital is deployed to your account within 1–2 business days of approval." },
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container">
        <p className="section-label text-center mb-4">Timeline</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16 tracking-[-0.02em]">
          From Application to Funding
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-border" />
          {steps.map((s) => (
            <div key={s.num} className="text-center relative">
              <div className="w-14 h-14 rounded-2xl bg-epoch-navy flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-epoch-navy/30">
                <span className="text-sm font-bold text-primary-foreground">{s.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
