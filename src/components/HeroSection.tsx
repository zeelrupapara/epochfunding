import heroImg from "@/assets/hero-skyline.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center">
    <img src={heroImg} alt="City skyline at sunset" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 container text-center px-4">
      <p className="section-label mb-4">Revenue-Based Bridge Capital</p>
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-4">
        Executed with Speed.
        <br />
        <span className="text-epoch-gold">Structured with Discipline.</span>
      </h1>
      <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm sm:text-base md:text-lg mb-8">
        Structured around your revenue. Delivered with certainty.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="#apply" className="px-8 py-3 bg-epoch-gold text-accent-foreground font-semibold rounded hover:brightness-110 transition text-sm">
          Submit Application
        </a>
        <a href="#overview" className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded hover:bg-primary-foreground/10 transition text-sm">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
