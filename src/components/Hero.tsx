import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const words = ["CHEGA", "DE COMEÇAR", "E DESISTIR."];

  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center relative z-10">
        <div className="relative">
          <div className="space-y-2 lg:space-y-4 mb-8">
            {words.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ translateY: "100%" }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.77, 0, 0.175, 1] }}
                  className="text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] font-display text-heavy-black"
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-heavy-black mb-10 max-w-xl font-sans"
          >
            Treino personalizado para quem quer resultado real — sem enrolação, sem desculpa.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-4 px-10 py-6 bg-lime-electric text-heavy-black font-display text-2xl tracking-widest border-2 border-heavy-black shadow-[8px_8px_0px_0px_#0A0A0A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
            >
              QUERO COMEÇAR AGORA <ArrowRight size={28} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block h-full"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[600px] bg-heavy-black flex items-center justify-center -rotate-3 overflow-hidden border-4 border-lime-electric">
            <span className="font-display text-[25rem] text-lime-electric opacity-10 absolute -right-20">
              01
            </span>
            <div className="relative z-10 p-12 text-center">
              <div className="border-4 border-lime-electric p-4 inline-block mb-4">
                <span className="text-lime-electric font-display text-4xl">RAFAEL COSTA</span>
              </div>
              <p className="text-white font-display text-2xl tracking-widest">ESTRATÉGIA & FORÇA</p>
            </div>
            <img 
              src="/ato-aikins-tBVzBwKpROI-unsplash.jpg" 
              alt="Rafael Costa Training"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-20 -left-20 font-display text-[30rem] text-heavy-black opacity-[0.03] select-none pointer-events-none">
        GO
      </div>
    </section>
  );
}
