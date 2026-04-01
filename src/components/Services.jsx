import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Search, ShoppingCart, PenTool, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    color: "from-brand-500 to-brand-700",
    bg: "bg-brand-50",
    title: "Business Website",
    desc: "Clean, professional multi-page websites for your business — with contact forms, about, services, and gallery pages.",
    tags: ["5–7 pages", "Contact Form", "Google Maps"],
  },
  {
    icon: Smartphone,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    title: "Mobile-First Design",
    desc: "Every website I build works flawlessly on mobile phones — because 80% of your customers will visit from their phone.",
    tags: ["Responsive", "Fast Loading", "Touch-Friendly"],
  },
  {
    icon: Search,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    title: "SEO Optimization",
    desc: "Get found on Google with proper on-page SEO — meta tags, structured content, sitemap, and local SEO setup.",
    tags: ["On-page SEO", "Local SEO", "Google Search Console"],
  },
  {
    icon: ShoppingCart,
    color: "from-accent-400 to-accent-600",
    bg: "bg-orange-50",
    title: "E-Commerce Store",
    desc: "Full online stores with product listings, cart, payments & order management — powered by WooCommerce or custom builds.",
    tags: ["Product Catalog", "Online Payment", "Admin Panel"],
  },
  {
    icon: PenTool,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    title: "Landing Pages",
    desc: "High-converting single-page websites for offers, launches, or lead generation campaigns with clear CTAs.",
    tags: ["Lead Gen", "A/B Ready", "Fast Delivery"],
  },
  {
    icon: RefreshCw,
    color: "from-cyan-500 to-brand-500",
    bg: "bg-cyan-50",
    title: "Website Redesign",
    desc: "Breathe new life into an outdated website. I modernize design, improve speed, and boost conversions.",
    tags: ["Modern Design", "Performance Boost", "Migration"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50/60 overflow-hidden" id="services">
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">What I Offer</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            End-to-end web solutions designed to help local businesses attract customers and grow revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-5`}>
                <div className={`w-6 h-6 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center`}>
                  <s.icon className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-brand-600 transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
