import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Method from "./components/Method";
import Testimonials from "./components/Testimonials";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent-gold selection:text-premium-black">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gold z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Subtle transition divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-premium-black/5 to-transparent" />
        
        <About />
        <PainPoints />
        <Services />
        <Method />
        <Testimonials />
        <LeadForm />
        <FAQ />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
