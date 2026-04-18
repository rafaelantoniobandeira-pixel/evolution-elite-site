import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silveira",
    role: "CEO na TechNova",
    text: "A mentoria mudou completamente minha forma de liderar. Passei de uma gestora ansiosa para uma líder estratégica com clareza total.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ricardo Mendes",
    role: "Diretor Comercial",
    text: "Minha performance dobrou em apenas 3 meses. O método é direto ao ponto e focado em resultados reais que você vê no dia a dia.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Juliana Castro",
    role: "Empreendedora",
    text: "Encontrei o equilíbrio que faltava entre minha empresa e minha família. Hoje sou mais produtiva e muito mais presente.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

const stats = [
  { label: "Mentorados", value: "+500" },
  { label: "Anos de Experiência", value: "+10" },
  { label: "Satisfação", value: "98%" },
  { label: "Projetos Realizados", value: "+1.2k" },
];

export default function Testimonials() {
  return (
    <section id="resultados" className="py-24 bg-premium-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
          <div className="lg:col-span-1">
            <span className="text-accent-gold font-bold text-xs tracking-[4px] uppercase mb-4 block">Prova Social</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-serif">
              A Prova da <span className="italic text-accent-gold underline decoration-white/20 underline-offset-8">Transformação.</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed font-light">
              Não são apenas palavras, são trajetórias reais de pessoas que decidiram não aceitar nada menos que a excelência.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=100&auto=format&fit=crop"
                ].map((url, i) => (
                  <img key={i} src={url} className="w-12 h-12 rounded-full border border-white/10 object-cover grayscale" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-accent-gold gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-bold text-white text-[11px] uppercase tracking-widest mt-1">4.9/5 Avaliação média</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {testimonials.slice(0, 2).map((test, index) => (
                <TestimonialCard key={index} {...test} />
              ))}
            </div>
            <div className="space-y-6 pt-12">
              {testimonials.slice(2).map((test, index) => (
                <TestimonialCard key={index} {...test} />
              ))}
              <div className="glass-card p-10 rounded-xl shadow-xl border-accent-border/30">
                <p className="text-accent-gold font-bold mb-2 text-xs uppercase tracking-widest">Próxima Parada:</p>
                <h4 className="text-xl font-bold mb-4 font-serif text-white">Sua história de sucesso começa aqui.</h4>
                <a href="#contato" className="text-[11px] uppercase tracking-widest font-bold underline underline-offset-8 text-white hover:text-accent-gold transition-colors">Agendar minha sessão</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white/5 rounded-lg border-l-2 border-accent-gold">
              <div className="text-4xl lg:text-5xl font-bold font-serif text-accent-gold mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[2px] font-bold text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, img }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 rounded-xl shadow-sm hover:border-accent-gold/40 transition-all flex flex-col gap-6"
    >
      <Quote className="text-accent-gold opacity-30" size={32} />
      <p className="text-text-secondary leading-relaxed italic font-light text-sm">"{text}"</p>
      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover grayscale" />
        <div>
          <h5 className="font-bold text-white text-xs uppercase tracking-widest">{name}</h5>
          <p className="text-[10px] text-accent-gold italic tracking-tighter uppercase mt-0.5">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
