import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contato" className="py-24 bg-lime-electric overflow-hidden relative">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[20vw] text-heavy-black/5 whitespace-nowrap select-none pointer-events-none">
        TRANSFORMAÇÃO AGORA TRANSFORMAÇÃO AGORA
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-[10rem] lg:text-[13rem] leading-[0.8] mb-12 text-heavy-black">
            SUA TRANSFORMAÇÃO <br /> COMEÇA AGORA.
          </h2>
          
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-6 px-12 py-8 bg-heavy-black text-white font-display text-3xl tracking-[0.2em] border-4 border-heavy-black hover:bg-white hover:text-heavy-black transition-all duration-300 shadow-[20px_20px_0px_0px_rgba(10,10,10,0.1)]"
          >
            FALAR COM RAFAEL <Send size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
