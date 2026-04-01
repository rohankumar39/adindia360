import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  { icon: "🏪", title: "Commercial Shops", desc: "Showcase products, share location & hours, build trust online." },
  { icon: "🍽️", title: "Restaurants & Cafés", desc: "Menu displays, reservations, gallery & online ordering ready." },
  { icon: "🏫", title: "Schools & Institutes", desc: "Admissions, events, faculty, and course listings — all in one place." },
  { icon: "🛒", title: "Vendor & Wholesale", desc: "Bulk pricing pages, catalog, and enquiry forms for B2B buyers." },
  { icon: "✈️", title: "Tour & Travel", desc: "Package listings, booking forms, itineraries & travel blogs." },
  { icon: "🏗️", title: "Startups", desc: "Launch-ready websites that attract investors and early customers." },
  { icon: "🔧", title: "Service Businesses", desc: "Plumbers, electricians, salons — get discovered & booked online." },
  { icon: "🏥", title: "Healthcare & Clinics", desc: "Doctor profiles, appointment booking, and patient trust building." },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden" id="industries">
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">Industries I Serve</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Built for <span className="text-gradient">Every Local Business</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Whatever your industry, I create websites tailored to your unique goals and customers.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
              className="bg-white border border-slate-100 rounded-2xl p-6 cursor-default transition-all duration-300 shadow-card group"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-slate-900 text-base mb-1.5 group-hover:text-brand-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
