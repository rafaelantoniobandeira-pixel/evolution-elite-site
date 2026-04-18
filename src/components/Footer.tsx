import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-accent-gold font-serif text-xl font-bold tracking-[0.2em] uppercase">
                Ricardo Augustus
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-8 font-light italic">
              Especialista em destravar resultados através de mentoria estratégica e alta performance humana.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-black transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[3px] text-accent-gold">Navegação</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-text-secondary">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[3px] text-accent-gold">Recursos</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[3px] text-accent-gold">Newsletter</h4>
            <p className="text-[10px] text-text-secondary mb-6 italic">Insights semanais de alta performance.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-mail"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-xs focus:outline-none focus:border-accent-gold w-full transition-all"
              />
              <button className="bg-accent-gold text-black px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest">OK</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">
            © 2024 RICARDO AUGUSTUS. TODOS OS DIREITOS RESERVADOS.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-accent-gold hover:text-white transition-colors"
          >
            Voltar ao topo <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
