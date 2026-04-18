import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-premium-black premium-gradient">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-r border-white/5 pr-12 hidden lg:block h-full flex flex-col justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-border text-accent-gold text-[10px] font-bold uppercase tracking-[2px] mb-8"
          >
            ★ Mentoria de Alta Performance
          </motion.div>
          
          <h1 className="text-5xl lg:text-[54px] font-bold leading-[1.1] mb-8 text-white font-serif">
            Destrave seu potencial e <span className="text-accent-gold italic">construa a vida</span> que você realmente deseja.
          </h1>
          
          <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-xl">
            Mentoria estratégica exclusiva para líderes e empreendedores que buscam clareza mental, evolução contínua e resultados de alto impacto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02 }}
              className="px-8 py-5 bg-accent-gold text-black rounded-[4px] font-bold uppercase tracking-widest text-[13px] text-center"
            >
              Agendar Sessão Estratégica
            </motion.a>
            <motion.a
              href="#metodo"
              whileHover={{ scale: 1.02 }}
              className="px-8 py-5 border border-text-secondary text-white rounded-[4px] font-bold uppercase tracking-widest text-[13px] text-center"
            >
              Conhecer Método
            </motion.a>
          </div>
          
          <div className="opacity-50 pt-8 border-t border-white/5">
            <p className="text-[11px] uppercase tracking-[2px] font-medium">Certificado pela International Coaching Federation</p>
          </div>
        </motion.div>

        {/* Mobile version of the text above */}
        <div className="lg:hidden">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-border text-accent-gold text-[10px] font-bold uppercase tracking-[2px] mb-6"
          >
            ★ Mentoria de Alta Performance
          </motion.div>
          
          <h1 className="text-4xl font-bold leading-[1.2] mb-6 text-white font-serif">
            Destrave seu potencial e <span className="text-accent-gold italic">construa a vida</span> que você deseja.
          </h1>
          
          <p className="text-base text-text-secondary mb-8 leading-relaxed">
            Mentoria estratégica exclusiva para líderes e empreendedores que buscam clareza e evolução.
          </p>
          
          <div className="flex flex-col gap-4">
             <a href="#contato" className="px-8 py-4 bg-accent-gold text-black rounded-[4px] font-bold uppercase tracking-widest text-xs text-center">Agendar Sessão</a>
             <a href="#metodo" className="px-8 py-4 border border-text-secondary text-white rounded-[4px] font-bold uppercase tracking-widest text-xs text-center">Conhecer Método</a>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden glass-card shadow-2xl group border-accent-border">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Coach Ricardo Augustus"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent opacity-80" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <p className="text-accent-gold font-bold text-[10px] uppercase tracking-[3px] mb-2">Ricardo Augustus</p>
              <h3 className="text-3xl font-bold font-serif">Liderança de Impacto</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
