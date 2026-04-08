import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenGallery }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);
    
    // Update hash in URL
    window.history.pushState(null, null, id);

    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        const offset = 75; // Slightly more than navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150); // Small delay to allow menu animation to start
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img src={logo} alt="AdIndia360" className="h-9 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            if (l.label === "Portfolio") {
              return (
                <button
                  key={l.label}
                  onClick={onOpenGallery}
                  className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-200"
          >
            Get Free Quote
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors relative z-[60]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white overflow-hidden border-t border-slate-100"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {links.map((l) => {
                if (l.label === "Portfolio") {
                  return (
                    <button
                      key={l.label}
                      onClick={() => {
                        setOpen(false);
                        onOpenGallery();
                      }}
                      className="w-full py-4 px-4 text-left text-slate-700 font-semibold hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
                    >
                      {l.label}
                    </button>
                  );
                }
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={(e) => scrollToSection(e, l.href)}
                    className="w-full py-4 px-4 text-slate-700 font-semibold hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mt-4 py-4 text-center bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-200 active:scale-95 transition-transform"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
