import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dramatic landscape photography"
          className="w-full h-full object-cover animate-image-reveal"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <img
            src={logo}
            alt="PixelPhoto Graphy"
            className="w-28 h-28 mx-auto rounded-full object-cover ring-4 ring-primary/50 mb-8 glow"
          />
        </div>
        
        <h1 className="opacity-0 animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6">
          Pixel<span className="text-gradient">Photo</span> Graphy
        </h1>
        
        <p className="opacity-0 animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Capturing life's precious moments through the lens. Professional photography 
          that tells your unique story with artistry and emotion.
        </p>
        
        <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
