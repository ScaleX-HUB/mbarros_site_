import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Proprietário de Loja, PE",
    text: "Desde que começamos a operar com a indústria MBarros, nossa capacidade de entrega dobrou. A precisão do maquinário deles nos dá a segurança que precisávamos para focar na venda.",
  },
  {
    name: "Mariana Silva",
    role: "Arquiteta, PB",
    text: "O acabamento e os encaixes das peças são simplesmente impecáveis. A tecnologia europeia aplicada na marcenaria faz toda diferença no resultado final do projeto do cliente.",
  },
  {
    name: "Ricardo Mendonça",
    role: "Construtora Horizonte, RN",
    text: "Trabalhar em parceria com a MBarros no modelo White Label escalou nossos negócios. Entregamos móveis de alto padrão nas nossas obras em tempo recorde.",
  }
,
  {
    name: "Carlos Eduardo",
    role: "Proprietário de Loja, PE",
    text: "Desde que começamos a operar com a indústria MBarros, nossa capacidade de entrega dobrou. A precisão do maquinário deles nos dá a segurança que precisávamos para focar na venda.",
  },
  {
    name: "Mariana Silva",
    role: "Arquiteta, PB",
    text: "O acabamento e os encaixes das peças são simplesmente impecáveis. A tecnologia europeia aplicada na marcenaria faz toda diferença no resultado final do projeto do cliente.",
  },
  {
    name: "Ricardo Mendonça",
    role: "Construtora Horizonte, RN",
    text: "Trabalhar em parceria com a MBarros no modelo White Label escalou nossos negócios. Entregamos móveis de alto padrão nas nossas obras em tempo recorde.",
  }
]; // Duplicado para garantir o loop do carrossel

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  useEffect(() => {
    if (!api || isHovered) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section className="bg-background py-24 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header textual */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                DEPOIMENTOS
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            O que dizem nossos{" "}
            <span className="text-primary">parceiros</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            Lojistas e arquitetos que confiam na MBarros atestam o diferencial do nosso polo fabril e modelo de parceria.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full">
            <CarouselContent className="items-stretch">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="bg-card border border-border p-8 rounded-xl h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative">
                    <div>
                      <Quote className="text-primary/20 w-12 h-12 absolute top-6 right-6" />
                      <p className="text-muted-foreground leading-relaxed italic mb-8 relative z-10 text-sm md:text-base">
                        "{t.text}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-display font-bold">{t.name}</h4>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
