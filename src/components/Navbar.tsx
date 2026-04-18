import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-premium-black/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="text-accent-gold font-serif text-xl font-bold tracking-[0.2em] uppercase">
            Ricardo Augustus
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Metodologia", "Planos", "Resultados", "Sobre"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-[2px] font-bold text-text-secondary hover:text-accent-gold transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-accent-gold text-black px-6 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300"
          >
            Agendar Sessão
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-premium-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-premium-light border-b border-premium-black/5"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {["Sobre", "Serviços", "Método", "Depoimentos", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-premium-black"
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-premium-black text-white px-6 py-4 rounded-xl text-center font-medium"
            >
              Agendar Sessão
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
