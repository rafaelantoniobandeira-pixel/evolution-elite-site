import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

const certifications = [
  { icon: Award, label: "Coach Certificado", detail: "Professional Coaching Certification" },
  { icon: Briefcase, label: "Mentoria Executiva", detail: "Liderança de Alta Performance" },
  { icon: Users, label: "Gestão de Pessoas", detail: "Inteligência Emocional Aplicada" },
  { icon: GraduationCap, label: "MBA Estratégico", detail: "Estratégia de Negócios Elite" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-premium-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden glass-card">
              <img 
                src="https://picsum.photos/seed/luxury-suit/800/800" 
                alt="Elegância e Precisão Ricardo Augustus"
                referrerPolicy="no-referrer"
                className="w-full aspect-square object-cover grayscale"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-accent-gold text-black p-8 rounded-lg shadow-2xl z-20 hidden md:block">
               <p className="text-3xl font-serif font-bold">12+</p>
               <p className="text-[10px] uppercase tracking-widest font-bold">Anos de Experiência</p>
            </div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-accent-gold opacity-20" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-gold font-bold text-xs tracking-widest uppercase mb-4 block underline underline-offset-8">Trajetória de Impacto</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white font-serif">
              Muito mais que Coaching: Uma <span className="italic text-accent-gold">Evolução Estratégica.</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-light">
              Com mais de uma década de experiência no mercado corporativo e desenvolvimento humano, dedico minha vida a ajudar líderes a destravarem suas barreiras mentais.
            </p>
            
            <p className="text-lg text-text-secondary mb-10 leading-relaxed font-light">
              Minha missão é clara: fornecer a clareza e as ferramentas necessárias para que você assuma o controle total da sua trajetória profissional e pessoal.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
              {certifications.map((cert) => (
                <div key={cert.label} className="group">
                  <cert.icon className="text-accent-gold mb-3 transition-transform group-hover:scale-110" size={24} />
                  <h4 className="font-bold text-white text-[11px] uppercase tracking-widest mb-1">{cert.label}</h4>
                  <p className="text-[10px] text-text-secondary tracking-tight italic">{cert.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
