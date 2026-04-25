import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-heavy-black">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <span className="font-display text-2xl lg:text-3xl tracking-tighter hover:text-lime-electric transition-colors cursor-pointer">
            RAFAEL COSTA
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Problema", "Metodologia", "Resultados", "Sobre"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-display text-sm tracking-widest text-heavy-black hover:text-lime-electric transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-lime-electric text-heavy-black px-6 py-2 font-display text-sm tracking-widest border-2 border-heavy-black hover:bg-heavy-black hover:text-lime-electric transition-all duration-300"
          >
            CONTATO
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-heavy-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b-2 border-heavy-black"
        >
          <div className="px-6 py-10 flex flex-col gap-6">
            {["Problema", "Metodologia", "Resultados", "Sobre"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl tracking-widest text-heavy-black"
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-lime-electric text-heavy-black px-6 py-4 text-center font-display text-xl tracking-widest border-2 border-heavy-black"
            >
              CONTATO
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
