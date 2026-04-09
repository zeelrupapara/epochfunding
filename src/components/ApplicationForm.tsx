import { useState } from "react";

const revenueOptions = ["Under $500K", "$500K–$1MM", "$1MM–$3MM", "$3MM–$5MM", "$5MM+"];
const timeOptions = ["Less than 1 year", "1–2 years", "3–5 years", "5+ years"];
const fundingOptions = ["$100K–$250K", "$250K–$500K", "$500K–$750K", "$750K–$1MM+"];

const inputClasses = "w-full px-4 py-3 rounded-lg bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:ring-2 focus:ring-epoch-gold/40 focus:border-epoch-gold/40 transition";

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-20 md:py-28 bg-epoch-dark">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 tracking-tight">Thank You</h2>
          <p className="text-primary-foreground/60">We've received your application and will respond within 24–48 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 md:py-28 bg-epoch-dark">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-5 leading-tight tracking-tight">
              Submit Your Application
            </h2>
            <p className="text-primary-foreground/50 text-sm md:text-base mb-8 leading-relaxed">
              Complete the form and our team will review your information. Expect a response within 24–48 hours.
            </p>
            <ul className="space-y-3">
              {["No obligation to proceed", "Confidential review process", "Decision within 24–48 hours"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-primary-foreground/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-epoch-gold inline-block" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input required name="business" placeholder="Business Name" className={inputClasses} />
              <input required name="contact" placeholder="Contact Name" className={inputClasses} />
              <input required name="email" type="email" placeholder="Email" className={inputClasses} />
              <input required name="phone" type="tel" placeholder="Phone" className={inputClasses} />
            </div>
            <select required name="revenue" defaultValue="" className={inputClasses}>
              <option value="" disabled className="text-foreground">Monthly Revenue</option>
              {revenueOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <select required name="time" defaultValue="" className={inputClasses}>
              <option value="" disabled className="text-foreground">Time in Business</option>
              {timeOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <select required name="funding" defaultValue="" className={inputClasses}>
              <option value="" disabled className="text-foreground">Funding Request</option>
              {fundingOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <button type="submit" className="w-full py-3.5 bg-epoch-gold text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition text-sm tracking-wide mt-2">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
