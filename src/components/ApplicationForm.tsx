import { useState } from "react";

const revenueOptions = ["Under $500K", "$500K–$1MM", "$1MM–$3MM", "$3MM–$5MM", "$5MM+"];
const timeOptions = ["Less than 1 year", "1–2 years", "3–5 years", "5+ years"];
const fundingOptions = ["$100K–$250K", "$250K–$500K", "$500K–$750K", "$750K–$1MM+"];

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-16 md:py-24 bg-epoch-dark">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">Thank You</h2>
          <p className="text-primary-foreground/70">We've received your application and will respond within 24–48 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 md:py-24 bg-epoch-dark">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="section-label mb-3">Get Started</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4 leading-tight">
              Submit Your Application
            </h2>
            <p className="text-primary-foreground/60 text-sm md:text-base mb-6">
              Complete the form and our team will review your information. Expect a response within 24–48 hours.
            </p>
            <ul className="space-y-2">
              {["No obligation to proceed", "Confidential review process", "Decision within 24–48 hours"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-epoch-gold inline-block" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required name="business" placeholder="Business Name" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold" />
              <input required name="contact" placeholder="Contact Name" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold" />
              <input required name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold" />
              <input required name="phone" type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold" />
            </div>
            <select required name="revenue" defaultValue="" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold">
              <option value="" disabled className="text-foreground">Monthly Revenue</option>
              {revenueOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <select required name="time" defaultValue="" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold">
              <option value="" disabled className="text-foreground">Time in Business</option>
              {timeOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <select required name="funding" defaultValue="" className="w-full px-4 py-3 rounded bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-1 focus:ring-epoch-gold">
              <option value="" disabled className="text-foreground">Funding Request</option>
              {fundingOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <button type="submit" className="w-full py-3.5 bg-epoch-gold text-accent-foreground font-semibold rounded hover:brightness-110 transition text-sm uppercase tracking-wider">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
