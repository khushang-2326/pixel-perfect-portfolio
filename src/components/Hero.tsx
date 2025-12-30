import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import heroBg from "@/assets/camera-bg.jpg";
import natureBg from "@/assets/nature-bg.png";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasZoomed, setHasZoomed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Latch the animation state
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Latch when zoom phase is complete
    if (latest > 0.4 && !hasZoomed) {
      setHasZoomed(true);
    }
  });

  // Animation Maps
  // Spread animations over the shorter scroll distance for smoothness
  const rawScale = useTransform(scrollYProgress, [0, 0.4], [1, 30]);
  const rawOpacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);

  // If zoomed, lock these values to their 'final' state
  const scale = hasZoomed ? 30 : rawScale;
  const opacity = hasZoomed ? 0 : rawOpacity;

  // Content Animations - adjusted for 220vh height
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.45, 0.6], [50, 0]);

  // Staggered Text Animations
  const titleOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.5, 0.7], [30, 0]);

  const descOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.7, 0.9], [30, 0]);

  // Conditional style to ensure visibility after latching
  // We allow the content animations to play naturally based on scroll when scrolling down.
  // But if latched (hasZoomed), we ensure opacity is 1 so it doesn't disappear if they scroll up slightly,
  // However, forcing it to 1 might be jarring if they haven't scrolled far enough for the specific element.
  // Better approach: Let scroll drive opacity, but if hasZoomed is TRUE, maintain AT LEAST the completed zoom state.
  // For text, we'll stick to scroll-driven for entrance, but maybe keep them visible if latched? 
  // Let's just trust the scroll progress for text, but prevent un-zooming.

  const finalLayerOpacity = hasZoomed ? 1 : contentOpacity;
  const finalLayerPointerEvents = hasZoomed ? "auto" : "none";

  return (
    <section ref={containerRef} className="relative h-[220vh] bg-black">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Background Layer (Animation Start - Nature) */}
        <motion.div
          animate={{ opacity: hasZoomed ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={natureBg}
            className="w-full h-full object-cover opacity-80"
            alt="Nature Background"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Final Hero Background Layer */}
        <motion.div
          style={{ opacity: hasZoomed ? 1 : contentOpacity }}
          className="absolute inset-0 z-10 bg-black"
        >
          <img
            src={heroBg}
            className="w-full h-full object-cover opacity-60"
            alt="Camera Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        </motion.div>


        {/* Camera Device Wrapper */}
        <motion.div
          style={{ scale: scale as any, opacity: opacity as any }}
          className="relative z-20 w-[85%] md:w-[800px] aspect-[3/2] bg-neutral-900 rounded-[2rem] p-4 flex gap-4 md:gap-8 shadow-2xl border border-neutral-800"
        >
          {/* Viewfinder / Screen */}
          <div className="relative flex-1 bg-black rounded-xl overflow-hidden border border-neutral-800">
            <img
              src={heroBg}
              className="w-full h-full object-cover"
              alt="Viewfinder"
            />

            {/* Camera UI Overlay */}
            <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between z-20">
              <div className="flex justify-between items-start text-white/80 text-[8px] md:text-[10px] font-mono tracking-widest">
                <span className="bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">RAW</span>
                <span className="text-red-500 animate-pulse font-bold">● REC</span>
              </div>

              {/* Focus Brackets */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-16 border border-white/40 rounded-sm">
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 mx-auto"></div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/60"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/60"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60"></div>
              </div>

              <div className="flex justify-between items-end text-white/80 text-[8px] md:text-[10px] font-mono">
                <div className="flex gap-3 md:gap-4 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                  <span>ISO 800</span>
                  <span>f/2.8</span>
                  <span>1/250</span>
                </div>
                <span className="bg-black/40 px-2 py-1 rounded backdrop-blur-sm">[ 999+ ]</span>
              </div>
            </div>

            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
              <div className="border-r border-white/50 h-full"></div>
              <div className="border-r border-white/50 h-full"></div>
              <div className="col-span-3 border-b border-white/50 w-full absolute top-1/3"></div>
              <div className="col-span-3 border-b border-white/50 w-full absolute top-2/3"></div>
            </div>
          </div>

          {/* Right Side Controls (Only on MD+) */}
          <div className="hidden md:flex flex-col gap-3 py-4 items-center justify-start w-12">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border-[1px] border-neutral-700 shadow-inner group cursor-pointer hover:border-red-500/50 transition-colors">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-neutral-800 border-[1px] border-neutral-700 shadow-inner" />
            <div className="w-10 h-10 rounded-full bg-neutral-800 border-[1px] border-neutral-700 mt-auto shadow-lg bg-gradient-to-br from-neutral-800 to-black hover:from-neutral-700 transition-all cursor-pointer flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-red-900/50"></div>
            </div>
          </div>
        </motion.div>

        {/* Content Overlay */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-${finalLayerPointerEvents}`}>

          <div className="text-center px-6 max-w-4xl mx-auto w-full">
            {/* Logo & Spinner */}
            <motion.div
              style={{ opacity: hasZoomed ? 1 : contentOpacity, y: hasZoomed ? 0 : contentY }}
              className="relative w-28 h-28 mx-auto mb-8 pointer-events-auto"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-primary/20 to-primary animate-spin-slow blur-[2px]" />
              <img
                src={logo}
                alt="PixelPhoto Graphy"
                className="relative w-full h-full rounded-full object-cover border-2 border-black"
              />
            </motion.div>

            <motion.h1 style={{ opacity: hasZoomed ? 1 : titleOpacity, y: hasZoomed ? 0 : titleY }} className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Pixel</span> PhotoGraphy
            </motion.h1>

            <motion.p style={{ opacity: hasZoomed ? 1 : descOpacity, y: hasZoomed ? 0 : descY }} className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg">
              Capturing life's precious moments through the lens. Professional photography
              that tells your unique story with artistry and emotion.
            </motion.p>

            <motion.div style={{ opacity: hasZoomed ? 1 : buttonOpacity, y: hasZoomed ? 0 : buttonY }} className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
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

        {/* Scroll Indicator - Fades out as we scroll */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs md:text-sm font-mono flex flex-col items-center gap-2"
        >
          <span className="animate-pulse">SCROLL TO ZOOM</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
