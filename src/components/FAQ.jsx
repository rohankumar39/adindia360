import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most projects are completed within 7–14 business days, depending on the plan and complexity. I'll give you an exact timeline when we discuss your project.",
  },
  {
    q: "Do I need to provide content or photos?",
    a: "Ideally yes, but I can help! I'll guide you on what's needed and can source free stock photos if you don't have images. For content, I offer a basic copywriting service as an add-on.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Absolutely. Every website I build is fully mobile-responsive and tested across iOS and Android devices. Mobile-first is my default approach.",
  },
  {
    q: "Who will own the website after it's built?",
    a: "You do. 100% ownership. I hand over all files, domain access, and hosting credentials. It's yours completely.",
  },
  {
    q: "Do you offer hosting and domain registration?",
    a: "Yes, I can handle domain registration and hosting setup for you — or work with your existing provider. Hosting costs are typically ₹2,000–₹5,000/year separately.",
  },
  {
    q: "What happens after the website goes live?",
    a: "You get 30 days of free support after launch — bug fixes, content changes, and small tweaks are all included. After that, I offer affordable maintenance plans.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes! Redesigns are one of my specialties. I'll modernize the look, improve performance, and retain all your existing content — while making it convert better.",
  },
  {
    q: "What payment methods do you accept?",
    a: "I accept UPI, bank transfer, and PayPal. Typically 50% upfront and 50% on delivery, though I'm flexible for long-term clients.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="font-semibold text-slate-900 text-sm pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-brand-500" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-slate-50/60" id="faq">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Got questions? Here are the answers business owners ask most often.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-brand-600 font-semibold hover:underline">
            Send me a message →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
