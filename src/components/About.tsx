import { Camera, Award, Heart, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Camera, value: "500+", label: "Photo Sessions" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Heart, value: "100%", label: "Client Satisfaction" },
    { icon: Users, value: "350+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-foreground">
              Crafting Visual <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over a decade of experience behind the lens, I specialize in capturing 
              the raw emotions and authentic moments that make each story unique. From 
              intimate portraits to grand celebrations, every photograph is a piece of art.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My approach combines technical precision with creative vision, ensuring 
              that every image not only looks stunning but also evokes the feelings 
              and memories of that special moment.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Portraits", "Weddings", "Events", "Landscapes", "Commercial"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-gradient p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 group hover:glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-display text-4xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
