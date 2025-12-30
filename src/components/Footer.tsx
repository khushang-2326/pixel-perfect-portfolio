import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="PixelPhoto Graphy"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30"
            />
            <span className="font-display text-lg text-foreground">
              <span className="text-primary">Pixel</span> PhotoGraphy
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Pixel PhotoGraphy. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
