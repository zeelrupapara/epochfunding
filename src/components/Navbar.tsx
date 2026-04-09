import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Structure", href: "#structure" },
  { label: "Process", href: "#process" },
  { label: "Track Record", href: "#track-record" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-epoch-dark/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <a href="#" className="text-primary-foreground text-lg font-bold tracking-tight">
          EPOCH<span className="font-light ml-1 opacity-80">Funding</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            className="text-[13px] font-semibold px-5 py-2.5 rounded-full bg-epoch-gold text-accent-foreground hover:brightness-110 transition-all duration-200 shadow-md shadow-epoch-gold/20"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-epoch-dark/98 backdrop-blur-xl border-t border-primary-foreground/5 pb-5 animate-fade-up">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3.5 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="#apply" onClick={() => setOpen(false)} className="block text-center text-sm font-semibold px-5 py-3 rounded-full bg-epoch-gold text-accent-foreground shadow-md shadow-epoch-gold/20">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
