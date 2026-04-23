import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cog,
  Diamond,
  Grid3x3,
  Layers,
  Scissors,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const galleryPhotos = [
  { src: "/imagens_mbarros/pessoa_operando_maquina_fabrica_nova.png", alt: "Operador de máquina na fábrica MBarros", caption: "Operação Industrial" },
  { src: "/imagens_mbarros/pessoas_trabalhando_fabrica_nova_mbarros.png", alt: "Equipe trabalhando na nova fábrica MBarros", caption: "Equipe em Ação" },
  { src: "/imagens_mbarros/maquina_industria.webp", alt: "Maquinário industrial MBarros", caption: "Maquinário de Ponta" },
];

const StructureSection = () => {
  const { t } = useTranslation();

  const materials = [
    {
      name: "Corte e Usinagem",
      description: "Precisão milimétrica e encaixes perfeitos garantidos por maquinário de ponta.",
      icon: Scissors,
    },
    {
      name: "Fita de Borda",
      description: "Colagem PUR com acabamento invisível e durabilidade extrema.",
      icon: Ruler,
    },
    {
      name: t("structure.item1.name"),
      description: t("structure.item1.desc"),
      icon: Layers,
    },
    {
      name: t("structure.item2.name"),
      description: t("structure.item2.desc"),
      icon: Grid3x3,
    },
    {
      name: t("structure.item4.name"),
      description: t("structure.item4.desc"),
      icon: Diamond,
    },
    {
      name: t("structure.item5.name"),
      description: t("structure.item5.desc"),
      icon: Cog,
    },
  ] as const satisfies ReadonlyArray<{ name: string; description: string; icon: LucideIcon }>;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startTimer = useCallback(() => {
    if (prefersReducedMotion || !api) return;
    stopTimer();
    timerRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);
  }, [api, prefersReducedMotion, stopTimer]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  useEffect(() => {
    if (!isPaused) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isPaused, startTimer, stopTimer]);


  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } }),
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Video — full section background */}
      <div className="absolute inset-0">
        <video
          src="/videos/IMG_8483.mp4"
          autoPlay muted loop playsInline aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Uniform darkening — no transparent center */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Top fade — blends from previous section in light mode */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom fade — blends into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Top accent line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-28 md:pt-28 md:pb-36 flex flex-col gap-14 md:gap-18">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={0}
        >
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                Estrutura Fabril
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white drop-shadow-lg">
            Tecnologia Europeia e Chinesa —{" "}
            <span className="text-primary">qualidade padronizada.</span>
          </h2>
        </motion.div>

        {/* Materials carousel */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.1}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel setApi={setApi} opts={{ loop: true, align: "center", dragFree: true }} className="w-full">
            <CarouselContent className="-ml-4 py-2">
              {materials.map((m, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/6 backdrop-blur-lg border border-white/10 p-5 rounded-xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                    <div className="w-9 h-9 rounded-full bg-primary/25 flex items-center justify-center mb-3 text-primary">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <h5 className="text-white font-display font-semibold text-sm mb-1">{m.name}</h5>
                    <p className="text-white/50 text-xs leading-relaxed">{m.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-5">
            {materials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Photo strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="relative overflow-hidden rounded-xl group ring-1 ring-white/8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              custom={index * 0.12}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-52 md:h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                0{index + 1}
              </span>
              <span className="absolute bottom-3 left-4 text-white text-sm font-semibold tracking-wide">
                {photo.caption}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={0.15}
        >
          <Button variant="heroBorder" size="lg" className="text-white border-white/80 hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
            <Link to="/estrutura">
              Conheça nossa estrutura
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default StructureSection;