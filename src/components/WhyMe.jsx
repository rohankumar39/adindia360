import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, HeartHandshake, TrendingUp, ShieldCheck, Clock, PhoneCall } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50",
    title: "Lightning Fast Delivery",
    desc: "Most projects are delivered in 7–14 days. No long waits, no delays. I respect your time.",
  },
  {
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Built to Convert",
    desc: "Every page is designed with clear calls-to-action to turn visitors into paying customers.",
  },
  {
    icon: ShieldCheck,
    color: "text-brand-600",
    bg: "bg-brand-50",
    title: "Transparent Pricing",
    desc: "No hidden charges. You get a clear quote before work begins — what I quote is what you pay.",
  },
  {
    icon: HeartHandshake,
    color: "text-pink-500",
    bg: "bg-pink-50",
    title: "Post-Launch Support",
    desc: "I don't disappear after delivery. 30 days of free support included with every project.",
  },
  {
    icon: Clock,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Unlimited Revisions*",
    desc: "Not happy with something? I'll revise until you love it. Your satisfaction is my priority.",
  },
  {
    icon: PhoneCall,
    color: "text-orange-500",
    bg: "bg-orange-50",
    title: "Direct Communication",
    desc: "You talk directly to me — the developer. No middlemen, no agencies, no confusion.",
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-slate-50/60" id="why-me">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">Why Choose Me</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Why 120+ Businesses <span className="text-gradient">Trust AdIndia360</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Working with me isn't just getting a website — it's getting a growth partner for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card transition-all duration-300 flex gap-5"
            >
              <div className={`w-12 h-12 ${r.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                <r.icon className={`w-6 h-6 ${r.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-1.5">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
