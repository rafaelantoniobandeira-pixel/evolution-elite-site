import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Diagnóstico de Fluxo",
    desc: "Mapeamos seus padrões de comportamento e identificamos os gargalos de performance."
  },
  {
    num: "02",
    title: "Reprogramação Mental",
    desc: "Substituímos crenças limitantes por modelos de pensamento de alta eficiência."
  },
  {
    num: "03",
    title: "Design de Estratégia",
    desc: "Criamos o plano tático personalizado para atingir seus grandes objetivos."
  },
  {
    num: "04",
    title: "Execução Blindada",
    desc: "Acompanhamento intensivo para garantir que a estratégia seja aplicada no dia a dia."
  },
  {
    num: "05",
    title: "Otimização Contínua",
    desc: "Ajustes finos para manter resultados constantes e sustentáveis a longo prazo."
  }
];

export default function Method() {
  return (
    <section id="metodologia" className="py-24 bg-premium-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent-gold font-bold text-xs tracking-[4px] uppercase mb-4 block">Processo Validado</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
            O Método <span className="italic text-accent-gold underline decoration-white/20 underline-offset-8">Evolução Estratégica™</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg font-light">
            Uma abordagem sistêmica que une neurociência, gestão estratégica e desenvolvimento humano.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-8 p-8 rounded-xl glass-card group hover:border-accent-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full border border-accent-border flex items-center justify-center text-2xl font-serif font-bold text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all shrink-0">
                {step.num}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-serif underline decoration-accent-gold/20 underline-offset-4">{step.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
