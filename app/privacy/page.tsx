import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | EPOCH Funding",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-3xl py-24 md:py-32">
        <p className="section-label mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-[-0.02em]">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-[15px] text-foreground/70 leading-relaxed">
          <p>
            EPOCH Funding (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us through this website.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>
            When you submit an application, we collect business and contact information you provide, including business name, contact name, email, phone, revenue range, time in business, and funding request amount.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">How We Use Information</h2>
          <p>
            We use submitted information solely to evaluate funding applications, communicate with applicants, and provide our financing services. We do not sell personal information to third parties.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Data Security</h2>
          <p>
            We implement reasonable administrative and technical safeguards designed to protect information submitted through our site. No method of transmission over the internet is 100% secure.
          </p>
          <h2 className="text-xl font-semibold text-foreground pt-4">Contact</h2>
          <p>
            For questions about this policy, please reach out through the application form or contact information provided on this website.
          </p>
          <p className="text-sm text-foreground/50 pt-6">Last updated: April 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
