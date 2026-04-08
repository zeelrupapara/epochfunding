const steps = [
  { num: "01", title: "Submit Information", desc: "Complete a brief application with your business details and funding requirements." },
  { num: "02", title: "Credit Review", desc: "Our team evaluates your revenue profile and delivers a decision within 24–48 hours." },
  { num: "03", title: "Funding", desc: "Capital is deployed to your account within 1–2 business days of approval." },
];

const ProcessSection = () => (
  <section id="process" className="py-16 md:py-24 bg-background">
    <div className="container">
      <p className="section-label text-center mb-3">Timeline</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
        From Application to Funding
      </h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-10">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="w-12 h-12 rounded-full bg-epoch-navy flex items-center justify-center mx-auto mb-4">
              <span className="text-sm font-bold text-primary-foreground">{s.num}</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
