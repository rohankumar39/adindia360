import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Industries from "./components/Industries";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyMe from "./components/WhyMe";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PortfolioGallery from "./components/PortfolioGallery";

export default function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="w-full min-h-screen font-body overflow-x-hidden relative">
      <Navbar onOpenGallery={() => setIsGalleryOpen(true)} />
      <Hero />
      <StatsBar />
      <Industries />
      <Services />
      <Portfolio onOpenGallery={() => setIsGalleryOpen(true)} />
      <WhyMe />
      <Process />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
      
      {/* Portfolio Full Gallery Overlay */}
      <PortfolioGallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />
    </div>
  );
}
