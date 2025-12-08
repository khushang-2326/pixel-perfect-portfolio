import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Portrait", "Architecture", "Wedding", "Nature", "Street"];

  const portfolioItems = [
    { id: 1, image: portfolio1, category: "Portrait", title: "Studio Portrait" },
    { id: 2, image: portfolio2, category: "Architecture", title: "Modern Design" },
    { id: 3, image: portfolio3, category: "Wedding", title: "Golden Hour Love" },
    { id: 4, image: portfolio4, category: "Nature", title: "Cascading Falls" },
    { id: 5, image: portfolio5, category: "Street", title: "Urban Nights" },
    { id: 6, image: portfolio6, category: "Commercial", title: "Culinary Art" },
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl text-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
