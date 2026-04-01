import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 80040 84005", href: "tel:+918004084005" },
  { icon: Mail, label: "Email", value: "info.adindia360@gmail.com", href: "mailto:info.adindia360@gmail.com" },
  { icon: MapPin, label: "Location", value: "Delhi, India", href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "", business: "", phone: "", email: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-24 bg-slate-50/60" id="contact">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 border border-brand-100">Get In Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-slate-900 mb-4">
            Let's Build <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Tell me about your business and I'll get back to you within 2 hours with a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card">
              <h3 className="font-semibold text-slate-900 text-lg mb-5">Contact Details</h3>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-slate-800 font-semibold text-sm hover:text-brand-600 transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-slate-800 font-semibold text-sm">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/918004084005?text=Hi! I want to discuss a website for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me Directly
            </a>

            <div className="bg-gradient-to-br from-brand-50 to-emerald-50 border border-brand-100 rounded-2xl p-6">
              <p className="text-brand-800 font-semibold text-sm mb-1">⚡ Quick Response Guarantee</p>
              <p className="text-brand-600 text-sm">I respond to every enquiry within 2 hours during business hours (9am–8pm IST).</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-card">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-700 text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thanks {form.name.split(" ")[0]}! I'll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all placeholder-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Name *</label>
                      <input
                        type="text"
                        name="business"
                        required
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Sharma Electronics"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all placeholder-slate-300"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all placeholder-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all placeholder-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-slate-600"
                    >
                      <option value="">Select a budget range</option>
                      <option value="starter">₹9,999 – ₹14,999 (Starter)</option>
                      <option value="professional">₹14,999 – ₹29,999 (Professional)</option>
                      <option value="ecommerce">₹29,999+ (E-Commerce / Custom)</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell Me About Your Project *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="I run a restaurant in Delhi and need a website with menu, photos, and online ordering..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none placeholder-slate-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold rounded-xl hover:shadow-glow hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send My Enquiry
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    🔒 Your details are safe. I never share or spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
