import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Proprietário de Loja — PE",
    text: "Desde que começamos a operar com a MBarros, nossa capacidade de entrega dobrou. A precisão do maquinário deles nos dá a segurança que precisávamos para focar na venda.",
  },
  {
    name: "Mariana Silva",
    role: "Arquiteta — PB",
    text: "O acabamento e os encaixes das peças são simplesmente impecáveis. A tecnologia europeia aplicada na marcenaria faz toda diferença no resultado final do projeto.",
  },
  {
    name: "Ricardo Mendonça",
    role: "Construtora Horizonte — RN",
    text: "Trabalhar em parceria com a MBarros no modelo White Label escalou nossos negócios. Entregamos móveis de alto padrão nas nossas obras em tempo recorde.",
  },
];

const DURATION = 5500;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setCurrent((p) => (p + 1) % testimonials.length), DURATION);
    return () => clearTimeout(id);
  }, [current, paused]);

  const t = testimonials[current];

  return (
    <section className="bg-background py-24 w-full">
      <div className="max-w-3xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
              Depoimentos
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
        </div>

        {/* Card — animated swap */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <Quote className="absolute top-7 right-7 w-9 h-9 text-primary/15" strokeWidth={1.5} />
                <p className="text-foreground text-lg md:text-xl lg:text-2xl font-display font-medium leading-snug mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              aria-label={`Depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
