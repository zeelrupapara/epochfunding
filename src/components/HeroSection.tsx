import heroImg from "@/assets/hero-skyline.jpg";

const HeroSection = () => (
  <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="City skyline at sunset"
      className="absolute inset-0 w-full h-full object-cover scale-105"
      width={1920}
      height={1080}
    />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 container text-center px-4 animate-fade-up">
      <p className="section-label mb-6 text-[11px] md:text-xs">Revenue-Based Bridge Capital</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-primary-foreground leading-[1.08] tracking-[-0.03em] mb-6">
        Executed with Speed.
        <br />
        <span className="bg-gradient-to-r from-epoch-gold to-epoch-gold-light bg-clip-text text-transparent">
          Structured with Discipline.
        </span>
      </h1>
      <p className="text-primary-foreground/55 max-w-md mx-auto text-sm sm:text-base md:text-lg font-light mb-10 leading-relaxed">
        Structured around your revenue. Delivered with certainty.
      </p>
      <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
        <a
          href="#apply"
          className="px-8 py-3.5 bg-epoch-gold text-accent-foreground font-semibold rounded-full hover:brightness-110 transition-all duration-200 text-sm tracking-wide shadow-lg shadow-epoch-gold/25"
        >
          Submit Application
        </a>
        <a
          href="#overview"
          className="px-8 py-3.5 border border-primary-foreground/15 text-primary-foreground rounded-full hover:bg-primary-foreground/5 hover:border-primary-foreground/25 transition-all duration-200 text-sm backdrop-blur-sm"
        >
          Learn More
        </a>
      </div>
    </div>
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-epoch-dark to-transparent" />
  </section>
);

export default HeroSection;
