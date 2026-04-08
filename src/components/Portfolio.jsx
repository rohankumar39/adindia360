import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowRight, CheckCircle2 } from "lucide-react";

const categories = ["All", "Restaurant", "School", "Travel", "Retail", "Startup"];

const projects = [
  {
    title: "Spice Garden Restaurant",
    category: "Restaurant",
    tags: ["Menu", "Booking", "Gallery"],
    color: "from-orange-400 to-red-500",
    emoji: "🍽️",
    desc: "Full restaurant website with digital menu, reservation system, and food gallery.",
    url: "https://project-rk.vercel.app/",
  },
  {
    title: "Sunrise Academy",
    category: "School",
    tags: ["Admissions", "Events", "Faculty"],
    color: "from-brand-400 to-brand-600",
    emoji: "🏫",
    desc: "School website with admission form, event calendar, and faculty directory.",
    url: "https://college-website-demo-ten.vercel.app/",
  },
  {
    title: "Yatra Tours",
    category: "Travel",
    tags: ["Packages", "Booking", "Gallery"],
    color: "from-emerald-400 to-teal-600",
    emoji: "✈️",
    desc: "Travel agency site with tour packages, itineraries, and WhatsApp booking.",
    url: "https://travel-agency-demo-lyart.vercel.app/",
  },
  {
    title: "StyleHub Clothing",
    category: "Retail",
    tags: ["Catalog", "Store", "Payments"],
    color: "from-pink-400 to-rose-600",
    emoji: "🛍️",
    desc: "E-commerce clothing store with categories, cart, and UPI/card payments.",
    url: "https://project-rk.vercel.app/",
  },
  {
    title: "TechLaunch Startup",
    category: "Startup",
    tags: ["Landing", "SaaS", "Waitlist"],
    color: "from-violet-400 to-purple-600",
    emoji: "🚀",
    desc: "SaaS startup landing page with feature highlights, pricing, and waitlist.",
    url: "https://www.edgeailocal.com/",
  },
  {
    title: "QuickFix Services",
    category: "Retail",
    tags: ["Services", "Booking", "Reviews"],
    color: "from-cyan-400 to-brand-500",
    emoji: "🔧",
    desc: "Home services website with service listing, booking form, and Google reviews.",
    url: "https://project-rk.vercel.app/",
  },
  {
    title: "GreenLeaf Café",
    category: "Restaurant",
    tags: ["Menu", "Loyalty", "Online Order"],
    color: "from-lime-400 to-green-600",
    emoji: "☕",
    desc: "Café website with seasonal menu, loyalty program info, and Swiggy integration.",
    url: "https://project-rk.vercel.app/",
  },
  {
    title: "RoyalStay Hotels",
    category: "Travel",
    tags: ["Rooms", "Booking", "Offers"],
    color: "from-amber-400 to-orange-600",
    emoji: "🏨",
    desc: "Hotel website with room listings, availability checker, and seasonal offers.",
    url: "https://travel-agency-demo-lyart.vercel.app/",
  },
  {
    title: "Library Management",
    category: "School",
    tags: ["Courses", "Results", "Enquiry"],
    color: "from-brand-400 to-brand-600",
    emoji: "📚",
    desc: "Coaching institute site with course batches, toppers list, and online enquiry.",
    url: "https://library-management-pi-ivory.vercel.app/",
  },
];

export default function Portfolio({ onOpenGallery }) {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden" id="portfolio">
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100 uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4 tracking-tight">
            Projects That <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A selection of websites I've built for businesses just like yours.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                active === c
                  ? "bg-brand-600 text-white border-brand-600 shadow-glow"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600 hover:shadow-sm"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(p)}
              className="bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              <div className={`relative h-56 bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}>
                <span className="text-8xl opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out">{p.emoji}</span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-700 text-slate-900 text-xl mb-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 flex flex-col items-center gap-6"
        >
          <button 
            onClick={onOpenGallery}
            className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-glow hover:bg-brand-700 transition-all transform hover:scale-105 flex items-center gap-3"
          >
            View Screenshot Gallery
            <ExternalLink className="w-5 h-5" />
          </button>
          <a href="#contact" className="group inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-all text-lg">
            Want something similar? Let's talk 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Modern Pop-up / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-400 hover:text-slate-900 transition-colors border border-slate-100 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center relative`}>
                <span className="text-9xl mb-4">{selectedProject.emoji}</span>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              </div>

              <div className="px-8 pb-10 -mt-8 relative">
                <div className="flex items-center gap-3 mb-4">
                   <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold rounded-full border border-brand-100 uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-3xl font-700 text-slate-900 mb-4">{selectedProject.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                    Key Features Included:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        <span className="text-sm font-medium">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-600 text-white font-bold py-4 rounded-2xl text-center hover:bg-brand-700 transition-all shadow-glow hover:shadow-brand-200 flex items-center justify-center gap-2"
                  >
                    View Live Project
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 bg-slate-100 text-slate-600 font-bold py-4 rounded-2xl text-center hover:bg-slate-200 transition-all"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
