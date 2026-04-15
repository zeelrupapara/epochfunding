import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use | EPOCH Funding",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-3xl py-24 md:py-32">
        <p className="section-label mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-[-0.02em]">
          Terms of Use
        </h1>
        <div className="space-y-6 text-[15px] text-foreground/70 leading-relaxed">
          <p>
            By accessing or using the EPOCH Funding website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">No Offer of Financing</h2>
          <p>
            Information on this website is provided for general informational purposes only and does not constitute an offer, solicitation, or commitment to provide financing. All funding decisions are subject to underwriting, documentation, and approval.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Eligibility</h2>
          <p>
            Our financing products are intended for US-based operating businesses. Submitting an application does not guarantee approval or funding.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Accuracy of Information</h2>
          <p>
            Applicants agree to provide accurate and complete information. EPOCH Funding reserves the right to decline applications containing inaccurate or incomplete information.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Limitation of Liability</h2>
          <p>
            This site is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, EPOCH Funding disclaims all warranties and is not liable for any damages arising from use of this website.
          </p>
          <p className="text-sm text-foreground/50 pt-6">Last updated: April 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
