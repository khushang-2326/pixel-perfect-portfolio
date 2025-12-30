import { useState, useMemo, useEffect, useCallback } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";


import haldiLand1 from "@/assets/haldi-landscape-1.jpg";
import haldiLand2 from "@/assets/haldi-landscape-2.jpg";
import haldiLand3 from "@/assets/haldi-landscape-3.jpg";
import haldiLand4 from "@/assets/haldi-landscape-4.jpg";


import haldiPortrait1 from "@/assets/haldi-portrait-1.jpg";
import haldiPortrait2 from "@/assets/haldi-portrait-2.jpg";
import haldiPortrait3 from "@/assets/haldi-portrait-3.jpg";
import haldiPortrait4 from "@/assets/haldi-portrait-4.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";
import wedding8 from "@/assets/wedding-8.jpg";
import wedding9 from "@/assets/wedding-9.jpg";
import wedding10 from "@/assets/wedding-10.jpg";
import wedding11 from "@/assets/wedding-11.jpg";
import wedding12 from "@/assets/wedding-12.jpg";
import wedding13 from "@/assets/wedding-13.jpg";
import solo1 from "@/assets/solo-1.jpg";
import solo2 from "@/assets/solo-2.jpg";
import solo3 from "@/assets/solo-3.jpg";
import solo4 from "@/assets/solo-4.jpg";
import solo5 from "@/assets/solo-5.jpg";
import solo6 from "@/assets/solo-6.jpg";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Haldi", "Wedding", "Solo"];

  const portfolioItems = [


    {
      id: 7,
      image: haldiLand1,
      category: "Haldi",
      title: "Groom's Haldi",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 8,
      image: haldiLand2,
      category: "Haldi",
      title: "Haldi Ceremony",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 9,
      image: haldiLand3,
      category: "Haldi",
      title: "Radiant Bride",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 10,
      image: haldiLand4,
      category: "Haldi",
      title: "Joyful Rituals",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 11,
      image: haldiPortrait1,
      category: "Haldi",
      title: "Candid Moments",
      className: "aspect-[3/4]"
    },
    {
      id: 12,
      image: haldiPortrait2,
      category: "Haldi",
      title: "Smile",
      className: "aspect-[3/4]"
    },
    {
      id: 13,
      image: haldiPortrait3,
      category: "Haldi",
      title: "Laughter",
      className: "aspect-[3/4]"
    },
    {
      id: 14,
      image: haldiPortrait4,
      category: "Haldi",
      title: "Joy",
      className: "aspect-[3/4]"
    },
    {
      id: 15,
      image: wedding1,
      category: "Wedding",
      title: "Eternal Promise",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 16,
      image: wedding2,
      category: "Wedding",
      title: "Royal Union",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 17,
      image: wedding3,
      category: "Wedding",
      title: "Bridal Grace",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 18,
      image: wedding4,
      category: "Wedding",
      title: "Couple Goals",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 19,
      image: wedding5,
      category: "Wedding",
      title: "Festive Joy",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 20,
      image: wedding6,
      category: "Wedding",
      title: "Sacred Vows",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 21,
      image: wedding7,
      category: "Wedding",
      title: "Together Forever",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 22,
      image: wedding8,
      category: "Wedding",
      title: "Love Story",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 23,
      image: wedding9,
      category: "Wedding",
      title: "Wedding Bliss",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 24,
      image: wedding10,
      category: "Wedding",
      title: "Night Romance",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 25,
      image: wedding11,
      category: "Wedding",
      title: "Wedding Details",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 26,
      image: wedding12,
      category: "Wedding",
      title: "Bridal Beauty",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 27,
      image: wedding13,
      category: "Wedding",
      title: "Grand Finale",
      className: "md:col-span-4 aspect-[21/9]"
    },
    {
      id: 28,
      image: solo1,
      category: "Solo",
      title: "Elegant Bride",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 29,
      image: solo2,
      category: "Solo",
      title: "Groom's Style",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 30,
      image: solo3,
      category: "Solo",
      title: "Tradition",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 31,
      image: solo4,
      category: "Solo",
      title: "Modern Couple",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 32,
      image: solo5,
      category: "Solo",
      title: "Bridal Portrait",
      className: "md:col-span-2 aspect-[16/9]"
    },
    {
      id: 33,
      image: solo6,
      category: "Solo",
      title: "Radiance",
      className: "md:col-span-2 aspect-[16/9]"
    },

  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const shuffledItems = useMemo(() => {
    const array = [...portfolioItems];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  const filteredItems = activeFilter === "All"
    ? shuffledItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") setSelectedIndex(null);
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-foreground">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated collection of my finest photographs, each telling a unique story
            through light, composition, and emotion.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-4 gap-6 grid-flow-dense">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.className || "aspect-[4/5]"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Maximize Button Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  className="bg-white/90 p-3 rounded-full text-black hover:bg-white transform scale-90 group-hover:scale-100 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                  }}
                >
                  <Maximize2 size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
            >
              <X size={40} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative w-full max-w-7xl h-full max-h-[90vh] flex items-center justify-center">
              <img
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
