import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowLeft, ChevronRight, ChevronLeft, Layout, Sparkles } from "lucide-react";

// Image imports
import restaurantImg from "../assets/portfolio/restaurant.png";
import restaurant2Img from "../assets/portfolio/restaurant2.png";
import schoolImg from "../assets/portfolio/school.png";
import school2Img from "../assets/portfolio/school2.png";
import school3Img from "../assets/portfolio/school3.png";
import school4Img from "../assets/portfolio/school4.png";
import vendorImg from "../assets/portfolio/vendor.png";
import techImg from "../assets/portfolio/tech.png";
import tech2Img from "../assets/portfolio/tech2.png";

// Logo imports
import lebistro from "../assets/clients/lebistro.png";
import sunrise from "../assets/clients/sunrise.png";
import techlaunch from "../assets/clients/techlaunch.png";
import sweetdelights from "../assets/clients/sweetdelights.png";
import procloud from "../assets/clients/procloud.png";
import urbandecor from "../assets/clients/urbandecor.png";

const categories = [
  {
    name: "Restaurant",
    desc: "Menus, reservation systems, and mouth-watering galleries.",
    items: [
      { id: 21, title: "Le Bistro", image: restaurantImg, tag: "Fine Dining", url: "https://restaurant-demo-peach.vercel.app/" },
      { id: 22, title: "Spice Route", image: restaurant2Img, tag: "Express", url: "https://restaurant-demo-peach.vercel.app/" },
      { id: 23, title: "The Italian Job", image: restaurantImg, tag: "Pizzeria", url: "https://restaurant-demo-peach.vercel.app/" },
      { id: 24, title: "Green Bowl", image: restaurant2Img, tag: "Healthy", url: "https://college-website-demo-ten.vercel.app/" },
    ]
  },
  {
    name: "School & Education",
    desc: "Portals for students, admin dashboards, and enrollment pages.",
    items: [
      { id: 11, title: "Sunrise Academy", image: schoolImg, tag: "K-12", url: "https://college-website-demo-ten.vercel.app/" },
      { id: 12, title: "Global Tech Institute", image: school2Img, tag: "University", url: "https://college-website-demo-ten.vercel.app/" },
      { id: 13, title: "KinderCare", image: school3Img, tag: "Preschool", url: "https://college-website-demo-ten.vercel.app/" },
      { id: 14, title: "SkillShare Pro", image: school4Img, tag: "E-Learning", url: "https://library-management-pi-ivory.vercel.app/" },
    ]
  },
  {
    name: "Logo Design For Brands",
    desc: "Custom logos and brand systems designed to leave a lasting impression.",
    items: [
      { id: 51, title: "Le Bistro Logo", image: lebistro, tag: "Modern Minimal", url: "#" },
      { id: 52, title: "Sunrise Academy Logo", image: sunrise, tag: "Academic", url: "#" },
      { id: 53, title: "TechLaunch Logo", image: techlaunch, tag: "Tech/Future", url: "#" },
      { id: 54, title: "Sweet Delights Logo", image: sweetdelights, tag: "Playful", url: "#" },
      { id: 55, title: "ProCloud Logo", image: procloud, tag: "Corporate", url: "#" },
      { id: 56, title: "Urban Decor Logo", image: urbandecor, tag: "Lifestyle", url: "#" },
    ]
  },
  {
    name: "Tech & SaaS",
    desc: "Landing pages, data visualization and SaaS product showcases.",
    items: [
      { id: 41, title: "Pro-Cloud SaaS", image: techImg, tag: "Cloud", url: "https://www.edgeailocal.com/" },
      { id: 42, title: "NextGen AI", image: tech2Img, tag: "Artificial Intelligence", url: "https://www.edgeailocal.com/" },
      { id: 43, title: "DataFlow", image: techImg, tag: "Analytics", url: "https://www.edgeailocal.com/" },
      { id: 44, title: "CyberGuard", image: tech2Img, tag: "Security", url: "https://www.edgeailocal.com/" },
    ]
  },
  // {
  //   name: "Local Vendors",
  //   desc: "E-commerce stores and booking systems for local specialists.",
  //   items: [
  //     { id: 31, title: "Sweet Delights", image: vendorImg, tag: "Bakery", url: "https://travel-agency-demo-lyart.vercel.app/" },
  //     { id: 32, title: "Urban Decor", image: vendorImg, tag: "Furniture", url: "https://travel-agency-demo-lyart.vercel.app/" },
  //     { id: 33, title: "ProPlumb", image: vendorImg, tag: "Service", url: "https://travel-agency-demo-lyart.vercel.app/" },
  //   ]
  // }
];

export default function PortfolioGallery({ isOpen, onClose }) {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const scrollContainers = useRef({});

  const scroll = (name, direction) => {
    const container = scrollContainers.current[name];
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-slate-50 overflow-y-auto overscroll-none"
          >
            {/* Top Bar */}
            <header className="sticky top-0 z-[1001] bg-white/80 backdrop-blur-xl border-b border-slate-200 px-5 md:px-10 h-20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="group flex items-center gap-2 text-slate-500 hover:text-brand-600 font-bold transition-all px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-brand-50"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">Back to Home</span>
                </button>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-600 leading-none mb-1">Portfolio</span>
                <h2 className="font-display text-xl font-bold text-slate-900">Visual Showcase</h2>
              </div>

              <button
                onClick={onClose}
                className="p-3 bg-slate-900 text-white hover:bg-brand-600 rounded-2xl transition-all shadow-lg active:scale-90"
              >
                <X className="w-6 h-6" />
              </button>
            </header>

            <main className="pb-32">
              {/* Hero Section */}
              <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 px-4 py-2 rounded-full mb-8"
                >
                  <Sparkles className="w-4 h-4 text-brand-500" />
                  <span className="text-sm font-bold text-brand-700 tracking-wide uppercase">Multi-Industry Design Experience</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-900 text-slate-900 mb-8 tracking-tight">
                  Crafting <span className="text-gradient">Digital Excellence</span>
                </h1>
                <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Explore our curated collection of successful projects across various industries.
                  Each website is a blend of <span className="text-slate-900 font-bold">Premium UI</span> and <span className="text-slate-900 font-bold">Performance</span>.
                </p>
              </div>

              {/* Category Sliders */}
              <div className="space-y-24 mt-12">
                {categories.map((cat, idx) => (
                  <motion.section
                    key={cat.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-1 gap-1" />
                          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{cat.name}</h2>
                        </div>
                        <p className="text-slate-500 text-lg">{cat.desc}</p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => scroll(cat.name, 'left')}
                          className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-brand-50 hover:border-brand-200 text-slate-600 hover:text-brand-600 transition-all shadow-sm"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => scroll(cat.name, 'right')}
                          className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-brand-50 hover:border-brand-200 text-slate-600 hover:text-brand-600 transition-all shadow-sm"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    {/* Horizontal Scroll Area */}
                    <div
                      ref={el => scrollContainers.current[cat.name] = el}
                      className="flex gap-6 overflow-x-auto px-[5%] pb-8 scrollbar-hide snap-x snap-mandatory no-scrollbar"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {cat.items.map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ y: -10 }}
                          className="flex-none w-[80vw] md:w-[600px] snap-center cursor-pointer"
                          onClick={() => item.url === "#" && setSelectedLogo(item)}
                        >
                          <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute top-6 left-6">
                                <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-brand-600 shadow-sm border border-white/20">
                                  {item.tag}
                                </span>
                              </div>

                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                {item.url !== "#" ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-brand-600 hover:text-white transition-all"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    View Full Project <ExternalLink className="w-5 h-5" />
                                  </a>
                                ) : (
                                  <div className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    View Full Logo <Sparkles className="w-5 h-5 text-brand-500" />
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Info */}
                            <div className="p-8 pb-10">
                              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                              <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-200" />
                                  ))}
                                </div>
                                <span className="text-slate-400 text-sm font-medium">
                                  {item.url === "#" ? "Brand Essence" : "Design System 2.0"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      {/* View All Card */}
                      <div className="flex-none w-[300px] flex items-center justify-center snap-center">
                        <button className="flex flex-col items-center gap-4 text-slate-400 hover:text-brand-600 transition-all group">
                          <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center group-hover:border-brand-300 group-hover:bg-brand-50 transition-all">
                            <ChevronRight className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                          <span className="font-bold text-lg">View All {cat.name}s</span>
                        </button>
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="max-w-7xl mx-auto px-6 mt-32">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-600/10 to-transparent pointer-events-none" />
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                    Ready to be our next <br />
                    <span className="text-gradient">Success Story?</span>
                  </h2>
                  <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                    Don't settle for a template. Your brand deserves a custom-built digital experience that converts visitors into customers.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={onClose} className="px-12 py-5 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-black text-xl rounded-2xl shadow-glow hover:scale-105 transition-all">
                      Get Free Quote Now
                    </button>
                    <button onClick={onClose} className="px-12 py-5 bg-white/10 text-white border border-white/20 font-black text-xl rounded-2xl backdrop-blur-md hover:bg-white/20 transition-all">
                      Talk on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Preview Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLogo(null)}
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-slate-900 text-white rounded-full hover:bg-brand-600 transition-all shadow-lg hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-2/3 bg-slate-50 flex items-center justify-center p-12">
                <img
                  src={selectedLogo.image}
                  alt={selectedLogo.title}
                  className="max-w-full max-h-[60vh] object-contain drop-shadow-2xl"
                />
              </div>

              <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-brand-50 text-brand-600 text-xs font-black rounded-full border border-brand-100 uppercase tracking-[0.2em]">
                    {selectedLogo.tag}
                  </span>
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">{selectedLogo.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Custom branding project designed to capture the unique essence of the business.
                  Focused on <span className="text-slate-900 font-bold">simplicity</span> and <span className="text-slate-900 font-bold">scalability</span>.
                </p>

                <div className="space-y-4 mb-10">
                  {["Vector Optimized", "Multiple Colorways", "Brand Guidelines", "Social Media Kit"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-brand-400" />
                      <span className="font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedLogo(null)}
                  className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-brand-600 transition-all shadow-xl active:scale-95"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
