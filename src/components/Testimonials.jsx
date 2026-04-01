import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Sharma Electronics",
    emoji: "👨‍💼",
    rating: 5,
    text: "AdIndia360 built our shop website in just 10 days. We now get calls directly from Google searches. The investment paid for itself within the first month!",
  },
  {
    name: "Priya Mehta",
    role: "Principal, Sunrise Academy",
    emoji: "👩‍🏫",
    rating: 5,
    text: "Our school needed an online presence for admissions. The website is beautiful, fast, and parents love it. Admission enquiries increased by 40% in the first term.",
  },
  {
    name: "Amit Verma",
    role: "Chef-Owner, Spice Garden",
    emoji: "👨‍🍳",
    rating: 5,
    text: "I was skeptical at first but the result exceeded my expectations. Our digital menu looks amazing and customers use it to order before arriving. Highly recommended!",
  },
  {
    name: "Sunita Gupta",
    role: "Owner, HimalayaQuest Tours",
    emoji: "🧑‍💼",
    rating: 5,
    text: "Tour bookings through WhatsApp have doubled since the website launched. The package pages are exactly what we needed. Professional, affordable, and fast.",
  },
  {
    name: "Karan Patel",
    role: "Founder, QuickFix Services",
    emoji: "👷",
    rating: 5,
    text: "As a plumbing service, I didn't think a website mattered. Now 70% of my leads come from online search. Best decision for my business.",
  },
  {
    name: "Neha Singh",
    role: "Director, StyleHub Fashion",
    emoji: "👩‍💼",
    rating: 5,
    text: "Our online store is slick and easy to manage. Orders started coming in within the first week of launch. The team is responsive and genuinely cares.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-slate-50/60" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">Testimonials</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Real Businesses, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Don't take my word for it. Here's what business owners say after working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-100" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full flex items-center justify-center text-xl">
                  {t.emoji}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
