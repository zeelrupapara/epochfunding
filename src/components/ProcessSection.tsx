const steps = [
  { num: "01", title: "Submit Information", desc: "Complete a brief application with your business details and funding requirements." },
  { num: "02", title: "Credit Review", desc: "Our team evaluates your revenue profile and delivers a decision within 24–48 hours." },
  { num: "03", title: "Funding", desc: "Capital is deployed to your account within 1–2 business days of approval." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-background">
    <div className="container">
      <p className="section-label text-center mb-4">Timeline</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-14 tracking-tight">
        From Application to Funding
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-epoch-navy flex items-center justify-center mx-auto mb-5">
              <span className="text-sm font-bold text-primary-foreground">{s.num}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
