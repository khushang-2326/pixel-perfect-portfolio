import { motion } from "framer-motion";
import heroBg from "@/assets/camera-bg.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-10 bg-black">
        <motion.img
          src={heroBg}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full object-cover opacity-60"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-auto">
        <div className="text-center px-6 max-w-4xl mx-auto w-full">
          {/* Logo & Spinner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-28 h-28 mx-auto mb-8"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-primary/20 to-primary animate-spin-slow blur-[2px]" />
            <img
              src={logo}
              alt="PixelPhoto Graphy"
              className="relative w-full h-full rounded-full object-cover border-2 border-black"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Pixel</span> PhotoGraphy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg"
          >
            Capturing life's precious moments through the lens. Professional photography
            that tells your unique story with artistry and emotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
