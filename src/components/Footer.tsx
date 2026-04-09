const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Structure", href: "#structure" },
  { label: "Process", href: "#process" },
  { label: "Track Record", href: "#track-record" },
  { label: "Apply", href: "#apply" },
];

const Footer = () => (
  <footer className="bg-epoch-dark border-t border-primary-foreground/[0.06] py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-primary-foreground text-sm font-bold tracking-tight">
        EPOCH<span className="font-light ml-1 opacity-70">Funding</span>
      </p>
      <div className="flex flex-wrap justify-center gap-5 md:gap-6">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <p className="text-xs text-primary-foreground/25">© 2026 EPOCH Funding. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
