import { motion } from "motion/react";
import { XCircle } from "lucide-react";

const problems = [
  {
    title: "Falta de método",
    desc: "Treinar sem um plano claro é a receita certa para a frustração. Você gasta energia e não vê a agulha se mover."
  },
  {
    title: "Treino errado pro seu corpo",
    desc: "Cada organismo responde de uma forma. Copiar o treino da internet pode estar sabotando seus resultados e sua saúde."
  },
  {
    title: "Sem acompanhamento real",
    desc: "Sem alguém para corrigir sua técnica e ajustar sua carga, você estagna rápido demais. Consistência exige supervisão."
  }
];

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-heavy-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 -ml-1">
            Por que você <span className="text-lime-electric">não consegue</span> <br /> resultado sozinho?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border-t-4 border-lime-electric relative group hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 text-lime-electric">
                <XCircle size={40} />
              </div>
              <h3 className="text-3xl mb-6 text-white">{prob.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {prob.desc}
              </p>
              
              {/* Decorative Number */}
              <span className="absolute -bottom-10 -right-5 font-display text-9xl text-white/5 select-none transition-all group-hover:text-lime-electric/10">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
