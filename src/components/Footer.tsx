const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Structure", href: "#structure" },
  { label: "Process", href: "#process" },
  { label: "Track Record", href: "#track-record" },
  { label: "Apply", href: "#apply" },
];

const Footer = () => (
  <footer className="bg-epoch-dark border-t border-primary-foreground/10 py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-primary-foreground text-sm font-bold">
        <span className="font-serif">EPOCH</span>
        <span className="font-light ml-0.5">Funding</span>
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <p className="text-xs text-primary-foreground/30">© 2026 EPOCH Funding. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
