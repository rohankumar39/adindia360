import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    emoji: "📞",
    title: "Discovery Call",
    desc: "We have a quick call or chat where I understand your business, goals, and what you want your website to achieve.",
  },
  {
    num: "02",
    emoji: "📋",
    title: "Proposal & Quote",
    desc: "I send you a clear project plan with timeline, features, and fixed pricing — no surprises.",
  },
  {
    num: "03",
    emoji: "🎨",
    title: "Design & Build",
    desc: "I design and develop your website with your feedback at every stage. You're always in the loop.",
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Launch & Handover",
    desc: "After your approval, we go live! I hand over full access + a 30-day support period begins.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">How It Works</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            From Idea to <span className="text-gradient">Live Website</span> in 4 Steps
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A simple, transparent process designed to keep you stress-free throughout.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="text-center"
              >
                {/* Circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-100 rounded-2xl p-8 text-center"
        >
          <p className="text-slate-700 font-medium text-lg mb-4">
            ⚡ Ready to get started? Most projects are delivered in <span className="text-brand-600 font-bold">7–14 business days.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-200"
          >
            Start Your Project Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
