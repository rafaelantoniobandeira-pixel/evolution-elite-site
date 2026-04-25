import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 300, suffix: "+", label: "alunos transformados" },
  { value: 4, suffix: "", label: "anos de experiência" },
  { value: 87, suffix: "%", label: "atingem a meta em 90 dias" },
  { value: 4.8, suffix: "★", label: "de avaliação" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-display text-lime-electric">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function Numbers() {
  return (
    <section className="py-24 bg-light-gray overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 font-display text-xl md:text-2xl text-heavy-black uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
