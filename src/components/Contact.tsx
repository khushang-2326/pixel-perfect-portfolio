import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@pixelphotography.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "New York, NY" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-foreground">
              Let's Create <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Ready to capture your special moments? Whether it's a wedding, portrait 
              session, or commercial project, I'd love to hear about your vision.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient p-8 md:p-10 rounded-3xl border border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Coverage</option>
                  <option value="commercial">Commercial Project</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
