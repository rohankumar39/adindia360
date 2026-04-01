import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Restaurant", "School", "Travel", "Retail", "Startup"];

const projects = [
  {
    title: "Spice Garden Restaurant",
    category: "Restaurant",
    tags: ["Menu", "Booking", "Gallery"],
    color: "from-orange-400 to-red-500",
    emoji: "🍽️",
    desc: "Full restaurant website with digital menu, reservation system, and food gallery.",
  },
  {
    title: "Sunrise Academy",
    category: "School",
    tags: ["Admissions", "Events", "Faculty"],
    color: "from-blue-400 to-brand-600",
    emoji: "🏫",
    desc: "School website with admission form, event calendar, and faculty directory.",
  },
  {
    title: "HimalayaQuest Tours",
    category: "Travel",
    tags: ["Packages", "Booking", "Gallery"],
    color: "from-emerald-400 to-teal-600",
    emoji: "✈️",
    desc: "Travel agency site with tour packages, itineraries, and WhatsApp booking.",
  },
  {
    title: "StyleHub Clothing",
    category: "Retail",
    tags: ["Catalog", "Store", "Payments"],
    color: "from-pink-400 to-rose-600",
    emoji: "🛍️",
    desc: "E-commerce clothing store with categories, cart, and UPI/card payments.",
  },
  {
    title: "TechLaunch Startup",
    category: "Startup",
    tags: ["Landing", "SaaS", "Waitlist"],
    color: "from-violet-400 to-purple-600",
    emoji: "🚀",
    desc: "SaaS startup landing page with feature highlights, pricing, and waitlist.",
  },
  {
    title: "QuickFix Services",
    category: "Retail",
    tags: ["Services", "Booking", "Reviews"],
    color: "from-cyan-400 to-brand-500",
    emoji: "🔧",
    desc: "Home services website with service listing, booking form, and Google reviews.",
  },
  {
    title: "GreenLeaf Café",
    category: "Restaurant",
    tags: ["Menu", "Loyalty", "Online Order"],
    color: "from-lime-400 to-green-600",
    emoji: "☕",
    desc: "Café website with seasonal menu, loyalty program info, and Swiggy integration.",
  },
  {
    title: "RoyalStay Hotels",
    category: "Travel",
    tags: ["Rooms", "Booking", "Offers"],
    color: "from-amber-400 to-orange-600",
    emoji: "🏨",
    desc: "Hotel website with room listings, availability checker, and seasonal offers.",
  },
  {
    title: "MindBridge Coaching",
    category: "School",
    tags: ["Courses", "Results", "Enquiry"],
    color: "from-indigo-400 to-blue-600",
    emoji: "📚",
    desc: "Coaching institute site with course batches, toppers list, and online enquiry.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
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
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">Portfolio</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
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
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                active === c
                  ? "bg-brand-600 text-white border-brand-600 shadow-glow"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}>
                <span className="text-7xl opacity-90 group-hover:scale-110 transition-transform duration-500">{p.emoji}</span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 text-base mb-1.5 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">{t}</span>
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
          className="text-center mt-10"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
            Want something similar? Let's talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
