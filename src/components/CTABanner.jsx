import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-white text-sm font-semibold">🚀 Limited Slots Available This Month</span>
            </motion.div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-white mb-5 leading-tight">
              Ready to Grow Your<br />Business Online?
            </h2>
            <p className="text-brand-200 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 120+ local businesses who chose AdIndia360 for their online presence. Get a free consultation today — no obligations, just clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl hover:bg-brand-50 hover:scale-105 transition-all duration-200 text-base shadow-xl"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/918004084005?text=Hi! I'm interested in getting a website for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-200 text-base shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-brand-300 text-sm mt-8">
              ✅ Free consultation &nbsp;·&nbsp; ✅ No pressure &nbsp;·&nbsp; ✅ Reply within 2 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
