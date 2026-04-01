import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹7,999",
    usd: "~$95",
    desc: "Perfect for small shops, freelancers & services getting online for the first time.",
    features: [
      "3-page website (Home, About, Contact)",
      "Mobile-responsive design",
      "Contact form & WhatsApp button",
      "Basic SEO setup",
      "Google Maps integration",
      "1-month support",
    ],
    cta: "Get Started",
    highlight: false,
    badge: null,
  },
  {
    name: "Professional",
    price: "₹14,999",
    usd: "~$179",
    desc: "Ideal for restaurants, schools, travel agencies, and growing local businesses.",
    features: [
      "Up to 7 pages",
      "Premium custom design",
      "Gallery & portfolio section",
      "Enquiry / booking form",
      "On-page SEO + sitemap",
      "Google Analytics setup",
      "Social media integration",
      "3-month support",
    ],
    cta: "Most Popular",
    highlight: true,
    badge: "🔥 Most Popular",
  },
  {
    name: "E-Commerce",
    price: "₹29,999",
    usd: "~$360",
    desc: "Full online store for retail shops, fashion brands, or product-based businesses.",
    features: [
      "Everything in Professional",
      "Product catalog (50 items)",
      "Shopping cart & checkout",
      "UPI / Card / COD payments",
      "Admin panel for orders",
      "Inventory management",
      "6-month priority support",
    ],
    cta: "Start Your Store",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden" id="pricing">
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">Pricing</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just honest pricing that fits every budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-brand-600 to-brand-800 border-brand-600 text-white shadow-[0_20px_60px_rgba(14,165,233,0.3)] md:scale-105"
                  : "bg-white border-slate-200 shadow-card hover:shadow-hover"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-semibold text-lg mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-brand-200" : "text-slate-500"}`}>{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className={`font-display text-4xl font-800 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                  <span className={`text-sm mb-1.5 ${plan.highlight ? "text-brand-200" : "text-slate-400"}`}>{plan.usd}</span>
                </div>
                <p className={`text-xs mt-1 ${plan.highlight ? "text-brand-200" : "text-slate-400"}`}>One-time payment</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-brand-200" : "text-emerald-500"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-brand-100" : "text-slate-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-brand-700 hover:bg-brand-50"
                    : "bg-gradient-to-r from-brand-500 to-brand-700 text-white hover:shadow-glow hover:scale-105"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          💡 Need something custom? <a href="#contact" className="text-brand-600 font-semibold hover:underline">Get a personalised quote →</a>
        </motion.p>
      </div>
    </section>
  );
}
