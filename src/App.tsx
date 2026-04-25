import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Numbers from "./components/Numbers";
import Method from "./components/Method";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-lime-electric selection:text-heavy-black">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-lime-electric z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Numbers />
        <Method />
        <Results />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
