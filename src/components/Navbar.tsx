import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Structure", href: "#structure" },
  { label: "Process", href: "#process" },
  { label: "Track Record", href: "#track-record" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-epoch-dark/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-primary-foreground text-xl font-bold tracking-tight">
          <span className="font-serif">EPOCH</span>
          <span className="font-sans font-light ml-0.5">Funding</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#apply" className="text-sm font-semibold px-5 py-2 rounded bg-epoch-gold text-accent-foreground hover:brightness-110 transition">
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-epoch-dark border-t border-primary-foreground/10 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="#apply" onClick={() => setOpen(false)} className="block text-center text-sm font-semibold px-5 py-2.5 rounded bg-epoch-gold text-accent-foreground">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
