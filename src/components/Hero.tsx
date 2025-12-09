import { useEffect, useRef } from "react";
import heroBg from "@/assets/camera-bg.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrolled = window.scrollY;
      imgRef.current.style.transform = `scale(${1 + scrolled * 0.0005})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-image-reveal">
          <img
            ref={imgRef}
            src={heroBg}
            alt="Professional Camera Lens"
            className="w-full h-full object-cover transition-transform duration-75 will-change-transform"
          />
        </div>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-primary/20 to-primary animate-spin-slow blur-[2px]" />
            <img
              src={logo}
              alt="PixelPhoto Graphy"
              className="relative w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="opacity-0 animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6">
          <span className="text-gradient"> Pixel</span> PhotoGraphy
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
