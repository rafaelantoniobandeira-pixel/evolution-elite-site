import { motion } from "motion/react";

const results = [
  {
    name: "Carlos Eduardo",
    result: "−12kg em 3 meses",
    img: "/artam-hoomat-wMcDTlmiim0-unsplash.jpg"
  },
  {
    name: "Mariana Silva",
    result: "Ganhou 4kg de massa",
    img: "/julia-rekamie-Z72YujnOrlY-unsplash.jpg"
  },
  {
    name: "Felipe Mendes",
    result: "Definição Abdominal",
    img: "/samuel-girven-Ppua0I4VjqE-unsplash.jpg"
  },
  {
    name: "Leticia Rocha",
    result: "Recuperação de Postura",
    img: "/ato-aikins-tBVzBwKpROI-unsplash.jpg"
  }
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl tracking-tight leading-none">RESULTADOS QUE <br /> <span className="text-stroke text-heavy-black">FALAM POR SI.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden bg-heavy-black group cursor-crosshair border-2 border-transparent hover:border-lime-electric transition-colors duration-300"
            >
              <img 
                src={res.img} 
                alt={res.name}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-display font-bold text-lg text-lime-electric block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  SUCESSO
                </span>
                <h4 className="text-white text-3xl font-display mb-1">{res.name}</h4>
                <p className="text-lime-electric font-display text-2xl tracking-widest">{res.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
