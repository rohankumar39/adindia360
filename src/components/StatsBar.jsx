import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "20+", label: "Websites Delivered", emoji: "🌐" },
  { value: "2", label: "Industries Served", emoji: "🏢" },
  { value: "98%", label: "Client Satisfaction", emoji: "⭐" },
  { value: "15-30", label: "Days to Launch", emoji: "🚀" },
  { value: "15", label: "Days Free Support", emoji: "🛡️" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-12 bg-gradient-to-r from-brand-600 to-brand-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="text-center"
            >
              <div className="text-3xl mb-1">{s.emoji}</div>
              <div className="font-display text-3xl lg:text-4xl font-800 text-white mb-1">{s.value}</div>
              <div className="text-brand-200 text-xs font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
