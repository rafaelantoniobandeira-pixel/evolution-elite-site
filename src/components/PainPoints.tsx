import { motion } from "motion/react";
import { AlertCircle, ArrowRight } from "lucide-react";

const pains = [
  "Sente que está trabalhando duro, mas sem sair do lugar?",
  "Falta clareza sobre qual deve ser seu próximo grande passo?",
  "A procrastinação e a ansiedade drenam sua produtividade?",
  "Não consegue equilibrar a carreira com sua vida pessoal?",
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-premium-black premium-gradient text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-gold font-bold text-xs tracking-[4px] uppercase mb-4"
          >
            A Realidade Atual
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6 font-serif"
          >
            Você se sente estagnado em um <span className="text-accent-gold italic tracking-normal">looping infinito?</span>
          </motion.h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light">
            Identificar os bloqueios é o primeiro passo para a verdadeira evolução. Veja se algum destes desafios faz parte do seu dia a dia:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl bg-premium-gray border border-white/5 flex flex-col items-center text-center group transition-all hover:border-accent-border/50"
            >
              <div className="w-12 h-12 rounded-full border border-accent-border flex items-center justify-center mb-6 text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all">
                <AlertCircle size={20} />
              </div>
              <p className="text-sm font-medium text-text-secondary leading-relaxed italic group-hover:text-white transition-colors">{pain}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-12 rounded-xl bg-premium-gray border border-accent-border text-center relative overflow-hidden group"
        >
          <h3 className="text-3xl font-bold mb-6 font-serif">A estagnação é uma escolha. A evolução é estratégica.</h3>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Eu desenvolvi uma metodologia validada para quebrar esse ciclo e reconstruir sua base de performance.
          </p>
          <a 
            href="#servicos"
            className="inline-flex items-center gap-4 font-bold px-10 py-5 bg-accent-gold text-black rounded-[4px] uppercase tracking-widest text-xs hover:scale-105 transition-all"
          >
            Conheça a Solução <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
