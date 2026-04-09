"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const revenueOptions = ["$1MM–$3MM", "$3MM–$5MM", "$5MM–$10MM", "$10MM+"];
const timeOptions = ["Less than 1 year", "1–2 years", "3–5 years", "5+ years"];
const fundingOptions = ["$100K–$250K", "$250K–$500K", "$500K–$750K", "$750K–$1MM+"];

const inputClasses = "w-full px-4 py-3.5 rounded-xl bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:ring-2 focus:ring-epoch-gold/40 focus:border-epoch-gold/40 transition-all duration-200";

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-24 md:py-32 bg-epoch-dark">
        <div className="container max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-epoch-gold/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 tracking-tight">Thank You</h2>
          <p className="text-primary-foreground/50 text-[15px]">We've received your application and will respond within 24–48 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 md:py-32 bg-epoch-dark">
      <div ref={ref} className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight tracking-[-0.02em]">
              Submit Your Application
            </h2>
            <p className="text-primary-foreground/45 text-sm md:text-[15px] mb-8 leading-relaxed">
              Complete the form and our team will review your information. Expect a response within 24–48 hours.
            </p>
            <ul className="space-y-4">
              {["No obligation to proceed", "Confidential review process", "Decision within 24–48 hours"].map((t) => (
                <li key={t} className="flex items-center gap-3.5 text-sm text-primary-foreground/55">
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
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-epoch-gold text-accent-foreground font-semibold rounded-xl hover:brightness-110 transition-all duration-200 text-sm tracking-wide mt-2 shadow-lg shadow-epoch-gold/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
