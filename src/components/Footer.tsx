import { Instagram, Youtube, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-heavy-black text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-7xl mb-10 tracking-tighter hover:text-lime-electric transition-colors cursor-pointer" onClick={scrollToTop}>
               RAFAEL COSTA.
            </h2>
            <div className="flex gap-6 mb-10">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-lime-electric hover:text-heavy-black transition-all">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 font-sans tracking-widest text-xs uppercase">
              CREF 000000-G/SP – ESPECIALISTA EM RECOMPOSIÇÃO CORPORAL
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-2xl text-lime-electric mb-8">NAVEGAÇÃO</h4>
            <ul className="space-y-4 font-display text-lg tracking-widest">
              <li><a href="#problema" className="hover:text-lime-electric transition-colors">PROBLEMA</a></li>
              <li><a href="#metodologia" className="hover:text-lime-electric transition-colors">MÉTODO</a></li>
              <li><a href="#resultados" className="hover:text-lime-electric transition-colors">RESULTADOS</a></li>
              <li><a href="#sobre" className="hover:text-lime-electric transition-colors">SOBRE</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-2xl text-lime-electric mb-8">CONTATO</h4>
            <ul className="space-y-4 font-sans text-gray-400">
              <li>contato@rafaelcosta.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, SP - Atendimento Online</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-600 font-display tracking-[0.4em] uppercase">
            © 2024 RAFAEL COSTA. DESIGN POR AGÊNCIA ELITE.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 font-display text-xl tracking-widest text-white hover:text-lime-electric transition-colors"
          >
            TOPO <ArrowUp size={20} className="group-hover:-translate-y-2 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Huge Background Text */}
      <div className="absolute -bottom-20 -right-20 font-display text-[25vw] text-white/5 select-none pointer-events-none">
        RAFAEL
      </div>
    </footer>
  );
}
