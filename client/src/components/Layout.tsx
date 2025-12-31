import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Facebook, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [imagesOpen, setImagesOpen] = useState(false);
  const [planetaryOpen, setPlanetaryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Ad Astra" },
    // Images is handled separately due to dropdown
    { href: "/videos", label: "Videos" },
    { href: "/equipment", label: "Equipment" },
    { href: "/workshops", label: "Workshops" },
  ];

  const imageLinks = [
    { label: "Planetary", isHeader: true, hasSubmenu: true },
    { href: "/gallery/planetary/mercury", label: "Mercury", indent: true, isSubmenu: true, disabled: true },
    { href: "/gallery/planetary/venus", label: "Venus", indent: true, isSubmenu: true },
    { href: "/gallery/planetary/mars", label: "Mars", indent: true, isSubmenu: true },
    { href: "/gallery/planetary/jupiter", label: "Jupiter", indent: true, isSubmenu: true },
    { href: "/gallery/planetary/saturn", label: "Saturn", indent: true, isSubmenu: true },
    { href: "/gallery/planetary/uranus", label: "Uranus", indent: true, isSubmenu: true },
    { href: "/gallery/planetary/neptune", label: "Neptune", indent: true, isSubmenu: true },
    { href: "/gallery/planetary-archive", label: "Full Archive", indent: true, isSubmenu: true },
    { href: "/gallery/lunar", label: "Lunar" },
    { href: "/gallery/solar", label: "Solar" },
    { href: "/gallery/deep-sky", label: "Deep Sky" },
    { href: "/gallery", label: "Favourites" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-serif tracking-widest text-foreground hover:opacity-80 transition-opacity uppercase">
            Agapios Elia
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-xs uppercase tracking-widest transition-colors hover:text-primary",
                location === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            <Link
              href="/blog"
              className={cn(
                "text-xs uppercase tracking-widest transition-colors hover:text-primary",
                location === "/blog" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Ad Astra
            </Link>

            {/* Images Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setImagesOpen(true)}
              onMouseLeave={() => {
                setImagesOpen(false);
                setPlanetaryOpen(false);
              }}
            >
              <button
                className={cn(
                  "text-xs uppercase tracking-widest transition-colors hover:text-primary flex items-center gap-1",
                  location.startsWith("/gallery") ? "text-primary" : "text-muted-foreground"
                )}
              >
                Images <ChevronDown size={12} />
              </button>
              
              <AnimatePresence>
                {imagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-black/90 border border-white/10 backdrop-blur-md p-4 min-w-[200px] flex flex-col gap-2"
                  >
                    {imageLinks.map((link, i) => {
                      if (link.isSubmenu && !planetaryOpen) return null;
                      
                      if (link.isHeader) {
                        if (link.hasSubmenu) {
                          return (
                            <button
                              key={i}
                              onClick={() => setPlanetaryOpen(!planetaryOpen)}
                              className="text-[10px] uppercase text-muted-foreground/50 tracking-widest mt-2 px-2 flex items-center justify-between w-full text-left hover:text-primary transition-colors"
                            >
                              {link.label}
                              <ChevronDown size={10} className={cn("transition-transform", planetaryOpen && "rotate-180")} />
                            </button>
                          );
                        }
                        return (
                          <span key={i} className="text-[10px] uppercase text-muted-foreground/50 tracking-widest mt-2 px-2">{link.label}</span>
                        );
                      }

                      if (link.disabled) {
                        return (
                          <span
                            key={link.href}
                            className={cn(
                              "text-xs uppercase tracking-widest px-2 py-1 block text-muted-foreground/30 cursor-not-allowed",
                              link.indent && "pl-4 text-[10px]"
                            )}
                          >
                            {link.label}
                          </span>
                        );
                      }

                      return (
                        <Link
                          key={link.href}
                          href={link.href!}
                          className={cn(
                            "text-xs uppercase tracking-widest transition-colors hover:text-primary px-2 py-1 block",
                            location === link.href ? "text-primary" : "text-muted-foreground",
                            link.indent && "pl-4 text-[10px]"
                          )}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.filter(l => l.href !== "/" && l.href !== "/blog").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs uppercase tracking-widest transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-4 w-px bg-border mx-2" />
            <div className="flex gap-4">
              <a href="https://www.instagram.com/agapioselia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/agapios.elia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-center">
              <Link
                href="/"
                className={cn(
                  "text-2xl font-serif hover:text-primary transition-colors uppercase tracking-widest",
                  location === "/" ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Images Section */}
              <div className="flex flex-col items-center gap-4 w-full border-y border-white/5 py-6">
                <span className="text-xl font-serif text-foreground uppercase tracking-widest">Images</span>
                {imageLinks.map((link, i) => {
                  if (link.isSubmenu && !planetaryOpen) return null;
                  
                  if (link.isHeader) {
                    if (link.hasSubmenu) {
                      return (
                        <button
                          key={i}
                          onClick={() => setPlanetaryOpen(!planetaryOpen)}
                          className="text-xs uppercase tracking-widest mt-2 flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground"
                        >
                          {link.label}
                          <ChevronDown size={12} className={cn("transition-transform", planetaryOpen && "rotate-180")} />
                        </button>
                      );
                    }
                    return (
                      <span key={i} className="text-xs text-muted-foreground/50 uppercase tracking-widest mt-2">{link.label}</span>
                    );
                  }
                  
                  if (link.disabled) {
                    return (
                      <span
                        key={link.href}
                        className={cn(
                          "text-lg font-serif uppercase tracking-widest text-muted-foreground/30 cursor-not-allowed",
                          link.indent && "text-base pl-4"
                        )}
                      >
                        {link.label}
                      </span>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href!}
                      className={cn(
                        "text-lg font-serif hover:text-primary transition-colors uppercase tracking-widest",
                        location === link.href ? "text-primary" : "text-muted-foreground",
                        link.indent && "text-base pl-4"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {links.filter(l => l.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-serif hover:text-primary transition-colors uppercase tracking-widest",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-6 mt-8 mb-12">
                <a href="https://www.instagram.com/agapioselia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/agapios.elia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="mailto:agapios@agapioselia.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-serif tracking-widest uppercase">Agapios Elia</span>
          <span className="text-xs text-muted-foreground tracking-wider">Images from the Universe</span>
        </div>
        
        <div className="flex gap-6">
          <a href="https://www.instagram.com/agapioselia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/agapios.elia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="mailto:agapios@agapioselia.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-xs text-muted-foreground/50 font-mono">
          © {new Date().getFullYear()} Agapios Elia
        </div>
      </div>
    </footer>
  );
}
