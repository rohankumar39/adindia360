import { motion } from "framer-motion";

// Brand Logos
import lebistro from "../assets/clients/lebistro.png";
import sunrise from "../assets/clients/sunrise.png";
import techlaunch from "../assets/clients/techlaunch.png";
import sweetdelights from "../assets/clients/sweetdelights.png";
import procloud from "../assets/clients/procloud.png";
import urbandecor from "../assets/clients/urbandecor.png";

const brands = [
  { name: "Le Bistro", logo: lebistro },
  { name: "Sunrise Academy", logo: sunrise },
  { name: "TechLaunch", logo: techlaunch },
  { name: "Sweet Delights", logo: sweetdelights },
  { name: "ProCloud", logo: procloud },
  { name: "Urban Decor", logo: urbandecor },
];

export default function LogoTicker() {
  // Triple the brands array to ensure continuous movement
  const tickerItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-2">Trusted By Brands Across India</p>
      </div>

      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div
          animate={{
            x: [0, -100 * brands.length], // Adjust based on item width and count
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap flex-none gap-16 md:gap-24 items-center"
        >
          {tickerItems.map((brand, idx) => (
            <div 
              key={`${brand.name}-${idx}`} 
              className="flex items-center justify-center h-12 md:h-16 w-32 md:w-48 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
