import { motion } from "motion/react";

const testimonials = [
  {
    name: "Bruno Oliveira",
    goal: "Emagrecimento",
    text: "Pensei que nunca ia conseguir perder a barriga que me incomodava há anos. Com o método do Rafael, perdi 10kg em 2 meses sem sofrer.",
    img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&q=80"
  },
  {
    name: "Camila Santos",
    goal: "Definição",
    text: "O acompanhamento semanal faz toda a diferença. O Rafael não te deixa desistir e os treinos são intensos e eficientes.",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80"
  },
  {
    name: "Gabriel Ramos",
    goal: "Hipertrofia",
    text: "Volume de treino e dieta ajustados perfeitamente. Ganhei 5kg de massa magra e minha força explodiu em pouco tempo.",
    img: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=400&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-light-gray relative group border-2 border-transparent hover:border-heavy-black transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute -top-10 -left-4 font-display text-[15rem] leading-none text-lime-electric opacity-40 select-none">
                “
              </div>
              <div className="relative z-10 pt-16">
                <p className="text-xl md:text-2xl text-heavy-black font-sans italic mb-8 relative leading-relaxed">
                  {test.text}
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4 border-t border-heavy-black/10 pt-6">
                <img 
                  src={test.img} 
                  alt={test.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-heavy-black grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <h4 className="text-3xl font-display text-heavy-black">{test.name}</h4>
                  <span className="text-heavy-black font-display text-lg tracking-[0.2em] opacity-40 uppercase">
                    OBJETIVO: {test.goal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
