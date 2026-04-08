import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowLeft, Grid, Filter } from "lucide-react";

// Image imports - we'll assume these were successfully copied to assets/portfolio
import restaurantImg from "../assets/portfolio/restaurant.png";
import schoolImg from "../assets/portfolio/school.png";
import vendorImg from "../assets/portfolio/vendor.png";
import techImg from "../assets/portfolio/tech.png";

const categories = ["All", "School", "Restaurant", "Vendor", "Tech"];

const screenshots = [
  {
    id: 1,
    title: "Sunrise Academy",
    category: "School",
    image: schoolImg,
    description: "Modern educational platform for student management and admission.",
  },
  {
    id: 2,
    title: "Le Bistro",
    category: "Restaurant",
    image: restaurantImg,
    description: "Artisanal restaurant showcase with digital booking.",
  },
  {
    id: 3,
    title: "Sweet Delights",
    category: "Vendor",
    image: vendorImg,
    description: "Boutique bakery with local delivery integration.",
  },
  {
    id: 4,
    title: "Pro-Cloud SaaS",
    category: "Tech",
    image: techImg,
    description: "Advanced productivity suite for high-tech businesses.",
  },
];

export default function PortfolioGallery({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? screenshots 
    : screenshots.filter(s => s.category === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-[1000] bg-white overflow-y-auto"
        >
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-all font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <h2 className="font-display text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              Work Showcase
            </h2>
            <button 
              onClick={onClose}
              className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </header>

          <main className="min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <span className="text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-4 py-1.5 rounded-full mb-6 inline-block border border-brand-100">
                  Project Gallery
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-800 text-slate-900 mb-6 leading-tight">
                  Design that <span className="text-gradient">Drives Results</span>
                </h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto">
                  A comprehensive look at our design systems and custom solutions built for businesses across diverse sectors.
                </p>
              </motion.div>

              {/* Categories */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                      activeCategory === cat
                        ? "bg-brand-600 text-white border-brand-600 shadow-glow scale-105"
                        : "bg-white text-slate-600 border-slate-200 hover:border-brand-400 hover:text-brand-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-10 lg:gap-14 text-left">
                <AnimatePresence mode="popLayout">
                  {filtered.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-2xl border border-slate-100 aspect-[16/10] md:aspect-[4/3] group-hover:shadow-brand-100 transition-all duration-500">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay with details */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                          <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                             <span className="text-brand-400 text-xs font-black uppercase tracking-[0.2em] mb-3 block">{item.category}</span>
                             <h3 className="text-white text-3xl md:text-4xl font-bold font-display mb-4 leading-tight">{item.title}</h3>
                             <p className="text-slate-300 text-base md:text-lg mb-8 max-w-md leading-relaxed">{item.description}</p>
                             <div className="flex gap-4">
                               <button className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-500 hover:text-white transition-all transform active:scale-95 shadow-lg">
                                 Full Preview <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                               </button>
                             </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Empty State */}
              {filtered.length === 0 && (
                <div className="text-center py-32 bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-200">
                  <Grid className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                  <p className="text-slate-500 text-xl font-semibold">No screenshots added here yet.</p>
                  <p className="text-slate-400 mt-2">Check back soon for more updates!</p>
                </div>
              )}
            </div>

            {/* Footer Section */}
            <section className="bg-slate-950 text-white rounded-t-[5rem] px-8 py-24 mt-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 blur-[100px] rounded-full -ml-32 -mb-32" />
               
               <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">Your Business Deserves an <span className="text-gradient">Elite Design</span></h2>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">Join the ranks of successful entrepreneurs who trust us with their digital vision. Limited slots available for this month.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={onClose}
                    className="bg-brand-500 hover:bg-brand-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-glow hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    Start Your Project
                  </button>
                  <button 
                    onClick={onClose}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl transition-all w-full sm:w-auto"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
