import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import React, { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    objetivo: "",
    desafio: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    alert("Obrigado pela confiança! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-24 bg-premium-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent-gold font-bold text-xs tracking-[4px] uppercase mb-4 block">Aplique Agora</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-serif">
              Seu próximo nível <span className="italic text-accent-gold underline decoration-white/20 underline-offset-8">começa agora.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed font-light">
              Estou pronto para ouvir sua história e desenhar sua rota de sucesso. Preencha os detalhes e minha equipe entrará em contato para uma sessão diagnóstica.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-gold border border-white/10">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-widest">WhatsApp direto</h4>
                  <p className="text-sm text-text-secondary font-light">+55 (00) 00000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-gold border border-white/10">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-widest">E-mail corporativo</h4>
                  <p className="text-sm text-text-secondary font-light">contato@elitecoach.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-gold border border-white/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-widest">Atendimento online</h4>
                  <p className="text-sm text-text-secondary font-light">Alcance global, onde você estiver.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 rounded-xl bg-premium-gray text-white shadow-2xl relative border border-accent-border"
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1">Nome completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Nome Completo"
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-[4px] px-6 py-4 focus:outline-none focus:border-accent-gold transition-all text-sm placeholder:text-white/20"
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1">E-mail</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Seu melhor E-mail"
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-[4px] px-6 py-4 focus:outline-none focus:border-accent-gold transition-all text-sm placeholder:text-white/20"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1">Qual seu principal objetivo?</label>
                <select 
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-[4px] px-6 py-4 focus:outline-none focus:border-accent-gold transition-all text-sm text-white/60 appearance-none"
                  onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="liderança">Liderança de impacto</option>
                  <option value="performance">Alta Performance</option>
                  <option value="carreira">Transição de Carreira</option>
                  <option value="equilíbrio">Equilíbrio Vida/Trabalho</option>
                </select>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                type="submit"
                className="w-full py-5 bg-accent-gold text-black rounded-[4px] font-bold text-xs uppercase tracking-[2px] flex items-center justify-center gap-3 transition-all"
              >
                Quero Evoluir Agora
              </motion.button>
              
              <p className="text-[9px] text-center text-text-secondary uppercase tracking-widest opacity-50">
                Seus dados estão protegidos por nossa política de privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
