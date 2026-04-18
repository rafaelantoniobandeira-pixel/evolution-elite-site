import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Como funciona o processo de coaching?",
    a: "O coaching é um processo estruturado de sessões onde trabalhamos clareza, objetivos e estratégias para transpor bloqueios específicos através de perguntas poderosas e ferramentas validadas."
  },
  {
    q: "Para quem é indicado a mentoria?",
    a: "É indicado para profissionais em transição, líderes em busca de performance, empreendedores que sentem estagnação e qualquer pessoa comprometida com um próximo nível de autodomínio."
  },
  {
    q: "As sessões são presenciais ou online?",
    a: "Realizamos sessões 100% online através de plataformas de videoconferência de alta qualidade, permitindo flexibilidade total para mentorados ao redor do mundo."
  },
  {
    q: "Qual a duração média de uma mentoria?",
    a: "Nossos programas padrão duram entre 3 a 6 meses, com encontros quinzenais, dependendo da complexidade do objetivo traçado no diagnóstico inicial."
  },
  {
    q: "O que ganho na sessão diagnóstica?",
    a: "Na sessão inicial, você receberá um mapeamento dos seus principais desafios e uma rota estratégica preliminar para solucionar seus bloqueios imediatos."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-premium-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold text-xs tracking-[4px] uppercase mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif underline decoration-accent-gold/20 underline-offset-8">Perguntas <span className="italic text-accent-gold">Estratégicas.</span></h2>
          <p className="text-text-secondary font-light">Tudo o que você precisa saber antes de iniciarmos sua jornada.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-premium-gray rounded-xl border border-white/5 overflow-hidden group">
              <button 
                onClick={() => setActive(active === index ? null : index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group transition-all"
              >
                <span className={`font-bold text-sm tracking-wide uppercase transition-colors ${active === index ? "text-accent-gold" : "text-white/80 group-hover:text-gold"}`}>
                  {faq.q}
                </span>
                <div className={`transition-transform duration-300 ${active === index ? "rotate-90 text-accent-gold" : "text-white/20"}`}>
                   <Plus size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-10 pb-10 text-xs text-text-secondary leading-relaxed border-t border-white/5 pt-6 font-light">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
