import { motion } from "motion/react";
import { User, Users, Zap, Check } from "lucide-react";

const programs = [
  {
    icon: User,
    title: "Mentoria Individual",
    tier: "Personalizada",
    description: "Para quem busca acompanhamento exclusivo e direto, focado 100% no seu contexto e desafios específicos.",
    benefits: ["Sessões quinzenais", "Suporte VIP via WhatsApp", "Plano de ação sob medida", "Material exclusivo"],
    cta: "Agendar Diagnóstico",
    popular: true
  },
  {
    icon: Users,
    title: "Mentoria em Grupo",
    tier: "Networking",
    description: "Evolua ao lado de outros líderes e profissionais de alto nível em uma jornada coletiva de 3 meses.",
    benefits: ["Encontros semanais", "Comunidade exclusiva", "Mastermind sessions", "Troca de experiências"],
    cta: "Ver Próxima Turma",
    popular: false
  },
  {
    icon: Zap,
    title: "Sessão Estratégica",
    tier: "Diagnóstico",
    description: "Sessão única de 90 minutos para destravar um problema específico e definir os próximos passos.",
    benefits: ["Diagnóstico rápido", "Mapeamento de bloqueios", "Plano tático imediato", "Foco em 1 objetivo"],
    cta: "Quero uma Sessão",
    popular: false
  }
];

export default function Services() {
  return (
    <section id="planos" className="py-24 bg-premium-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 text-white">
          <span className="text-accent-gold font-bold text-xs tracking-[4px] uppercase mb-4 block">Nossos Programas</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif underline underline-offset-[12px] decoration-accent-gold/30 decoration-2">Escolha o seu nível de <span className="italic text-accent-gold">Evolução.</span></h2>
          <p className="max-w-xl mx-auto text-text-secondary font-light">
            Diferentes formatos pensados para cada momento da sua carreira ou jornada pessoal.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-xl flex flex-col h-full transition-all duration-500 overflow-hidden border ${
                prog.popular ? "bg-[#161616] border-accent-gold/40 shadow-2xl scale-105 z-10" : "bg-premium-gray border-white/5 hover:border-accent-gold/30 shadow-lg"
              }`}
            >
              {prog.popular && (
                <div className="absolute top-0 right-10 bg-accent-gold text-black text-[9px] font-bold px-4 py-1.5 rounded-b-md uppercase tracking-wider">
                  Experiência Elite
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-8 border border-accent-gold/20 text-accent-gold`}>
                <prog.icon size={24} />
              </div>
              
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-accent-gold`}>
                {prog.tier}
              </span>
              <h3 className="text-2xl font-bold mb-4 font-serif text-white">{prog.title}</h3>
              <p className={`text-sm mb-8 leading-relaxed text-text-secondary font-light`}>
                {prog.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {prog.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-xs text-text-secondary">
                    <Check size={14} className="text-accent-gold flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className={`w-full py-4 rounded-[4px] font-bold transition-all text-[11px] uppercase tracking-widest ${
                  prog.popular ? "bg-accent-gold text-black shadow-[0_10px_30px_rgba(197,160,89,0.2)]" : "bg-white text-black hover:bg-accent-gold"
                }`}
              >
                {prog.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
