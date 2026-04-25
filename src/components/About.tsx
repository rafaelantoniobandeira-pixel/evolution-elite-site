import { motion } from "motion/react";
import { Zap, Target, ShieldCheck } from "lucide-react";
import aboutImg from "../han-wei-sheng-5Lp7PJONCFw-unsplash.jpg";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-heavy-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 border-4 border-lime-electric p-2">
              <img 
                src={aboutImg} 
                alt="Rafael Costa Personal Trainer"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-lime-electric/5 border-2 border-lime-electric/20 -z-10 animate-pulse" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-10 tracking-tighter">RAFAEL COSTA.</h2>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-sans text-gray-300 leading-relaxed uppercase font-bold tracking-tighter">
                Foco no resultado. Treino de verdade. Sem mimimi.
              </p>
              
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                Minha missão é simples: transformar seu corpo através de método validado e acompanhamento rigoroso. Com mais de 4 anos no mercado, desenvolvi uma estratégia que une força, resistência e mentalidade blindada.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-lime-electric text-heavy-black p-3 rounded-sm">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white mb-2">Energia Bruta</h4>
                    <p className="text-xs text-gray-400 font-sans tracking-widest uppercase">Intensidade máxima em cada repetição.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-lime-electric text-heavy-black p-3 rounded-sm">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white mb-2">Foco Total</h4>
                    <p className="text-xs text-gray-400 font-sans tracking-widest uppercase">Acompanhamento direto e sem desculpas.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
