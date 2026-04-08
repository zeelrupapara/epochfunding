import { CircleDot } from "lucide-react";

const philosophy = [
  "Focus on revenue durability",
  "Structured capital alignment",
  "Disciplined underwriting",
  "Reliable execution",
];

const notFit = [
  "Pre-revenue business",
  "Inconsistent deposits",
  "Seeking long-term or lowest-cost capital",
];

const ApproachSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl">
      <p className="section-label text-center mb-3">Our Philosophy</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-10">
        How We Approach Capital
      </h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {philosophy.map((p) => (
          <div key={p} className="flex items-center gap-3">
            <CircleDot className="text-epoch-gold shrink-0" size={14} />
            <span className="text-sm text-foreground">{p}</span>
          </div>
        ))}
      </div>

      <h3 className="font-serif text-xl font-bold text-foreground text-center mb-6">
        We May Not Be the Right Fit If
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {notFit.map((n) => (
          <span key={n} className="text-xs bg-secondary text-muted-foreground rounded-full px-4 py-2">
            {n}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
