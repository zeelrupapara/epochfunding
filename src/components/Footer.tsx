const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Structure", href: "#structure" },
  { label: "Process", href: "#process" },
  { label: "Track Record", href: "#track-record" },
  { label: "Apply", href: "#apply" },
];

const Footer = () => (
  <footer className="bg-epoch-dark border-t border-primary-foreground/[0.06]">
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <img src="/logo-full.png" alt="EPOCH Funding" className="h-7 w-auto mb-3" />
          <p className="text-xs text-primary-foreground/30 max-w-xs leading-relaxed">
            Structured revenue-based capital for businesses seeking fast, non-dilutive liquidity solutions.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-primary-foreground/20">© 2026 EPOCH Funding. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="text-[11px] text-primary-foreground/30 hover:text-primary-foreground transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" className="text-[11px] text-primary-foreground/30 hover:text-primary-foreground transition-colors duration-200">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
