import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Avaliação completa do seu corpo e rotina",
    desc: "Não fazemos nada no escuro. Analisamos seu percentual de gordura, força e rotina diária para criar a estratégia perfeita."
  },
  {
    num: "02",
    title: "Treino 100% personalizado pra você",
    desc: "Cada exercício tem um porquê. Construímos o seu cronograma focado no seu objetivo: seja emagrecer ou ganhar massa."
  },
  {
    num: "03",
    title: "Acompanhamento semanal até o resultado",
    desc: "O plano é vivo. Ajustamos sua dieta e seu treino toda semana para garantir que você nunca chegue num platô."
  }
];

export default function Method() {
  return (
    <section id="metodologia" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl tracking-tighter">COMO FUNCIONA.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 relative">
          {/* Vertical Line for asymmetry */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-heavy-black/5" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pt-12 group"
            >
              <div className="absolute top-0 left-0 font-display text-[10rem] leading-none text-heavy-black/5 group-hover:text-lime-electric/20 transition-all duration-500">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl mb-6 font-display group-hover:translate-x-2 transition-transform duration-300">
                   {step.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
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
