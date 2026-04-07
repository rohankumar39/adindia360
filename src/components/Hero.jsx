import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const stats = [
  { value: "12+", label: "Websites Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
];

const badges = [
  "Delivered in 15-30 Days",
  "Responsive Design",
  "End to End Service",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-[70px]">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-white border border-brand-100 rounded-full px-4 py-1.5 mb-6 shadow-card">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-semibold text-slate-700">Professional Web Design for Local Businesses</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-800 text-slate-900 leading-[1.1] mb-6"
          >
            Your Business{" "}
            <span className="text-gradient">Deserves</span> a{" "}
            <span className="relative inline-block">
              Website
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-[5px] bg-gradient-to-r from-accent-400 to-accent-600 rounded-full origin-left"
              />
            </span>{" "}
            That Wins
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-8 max-w-lg">
            We build fast, beautiful, and conversion-focused websites as well as Web tools for local businesses — shops, restaurants, schools, startups & more. Get online and start growing.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-8">
            {badges.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold rounded-2xl hover:shadow-glow hover:scale-105 transition-all duration-200 text-base"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-brand-300 hover:text-brand-600 transition-all duration-200 text-base shadow-sm"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div {...fadeUp(0.65)} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["🧑‍💼", "👩‍🍳", "👨‍🏫", "🧑‍🔧"].map((e, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-base shadow-sm">
                  {e}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-500"><span className="font-semibold text-slate-800">20+ business owners</span> trust AdIndia360</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-hover p-8 border border-slate-100">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-4xl font-800 text-gradient">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-emerald-50 p-6 border border-brand-100">
                <div className="text-sm font-semibold text-brand-700 mb-3">Industries I Serve</div>
                <div className="flex flex-wrap gap-2">
                  {["🏪 Retail Shops", "🍽 Restaurants", "🏫 Schools", "✈️ Travel", "🏗 Startups", "💼 Services"].map((t) => (
                    <span key={t} className="text-xs bg-white text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-hover px-5 py-3 border border-slate-100 flex items-center gap-2"
            >
              <span className="text-2xl">🚀</span>
              <div>
                <div className="text-xs font-bold text-slate-800">Ready in</div>
                <div className="text-xs text-brand-600 font-semibold">15–30 Days</div>
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-hover px-5 py-3 border border-slate-100 flex items-center gap-2"
            >
              <span className="text-2xl">💰</span>
              <div>
                <div className="text-xs font-bold text-slate-800">Starting at</div>
                <div className="text-xs text-accent-600 font-semibold">₹15,999 only</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
