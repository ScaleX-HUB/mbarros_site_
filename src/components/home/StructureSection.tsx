import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cog,
  Diamond,
  Grid3x3,
  Layers,
  Scissors,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const galleryPhotos = [
  { src: "/imagens_mbarros/pessoa_operando_maquina_fabrica_nova.png", alt: "Operador de máquina na fábrica MBarros", caption: "Operação Industrial" },
  { src: "/imagens_mbarros/pessoas_trabalhando_fabrica_nova_mbarros.png", alt: "Equipe trabalhando na nova fábrica MBarros", caption: "Equipe em Ação" },
  { src: "/imagens_mbarros/maquina_industria.webp", alt: "Maquinário industrial MBarros", caption: "Maquinário de Ponta" },
];

const AUTOPLAY_DELAY = 4500;

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

  const [galApi, setGalApi] = useState<CarouselApi>();
  const [galCurrent, setGalCurrent] = useState(0);
  const galTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopGalTimer = useCallback(() => {
    if (galTimerRef.current) clearInterval(galTimerRef.current);
  }, []);

  const startGalTimer = useCallback(() => {
    if (prefersReducedMotion || !galApi) return;
    stopGalTimer();
    galTimerRef.current = setInterval(() => galApi.scrollNext(), AUTOPLAY_DELAY);
  }, [galApi, prefersReducedMotion, stopGalTimer]);

  useEffect(() => {
    if (!galApi) return;
    const onSelectGal = () => setGalCurrent(galApi.selectedScrollSnap());
    galApi.on("select", onSelectGal);
    return () => { galApi.off("select", onSelectGal); };
  }, [galApi]);

  useEffect(() => {
    if (!isPaused) startGalTimer();
    else stopGalTimer();
    return stopGalTimer;
  }, [isPaused, startGalTimer, stopGalTimer]);


  return (
    <section className="bg-card w-full flex flex-col">
      {/* Full Background Video Section with Cards */}
      <div className="relative w-full min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            src="/videos/IMG_8483.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
        </div>

        {/* Content over video */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 text-foreground max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                  ESTRUTURA FABRIL
                </span>
                <span className="h-px w-8 bg-primary"></span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mt-4 drop-shadow-md">
              Tecnologia Europeia e Chinesa —{" "}
              <span className="text-primary">qualidade padronizada.</span>
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              Nossa fábrica em Pernambuco possui 10.000 m² equipados com maquinário de última geração. Isso garante agilidade, repetibilidade e um acabamento premium.
            </p>
          </div>

          <div className="text-center mb-10 mt-10">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/70 mb-2">Processo Produtivo MBarros</h3>
            <h4 className="text-xl md:text-2xl font-display font-medium text-foreground max-w-2xl mx-auto">
              Precisão, Matérias-Primas e Fornecedores Homologados
            </h4>
          </div>

          <div className="w-full h-full" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <Carousel setApi={setApi} opts={{ loop: true, align: "center", dragFree: true }} className="w-full h-full">
              <CarouselContent className="-ml-4 h-full py-4">
              {materials.map((m, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-card/30 backdrop-blur-md border border-border/30 p-5 rounded-xl text-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                      <m.icon className="w-6 h-6" />
                    </div>
                    <h5 className="text-foreground font-display font-semibold text-base mb-1">{m.name}</h5>
                    <p className="text-muted-foreground text-xs leading-relaxed">{m.description} </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Prev / Next buttons over video */}
            <button onClick={() => api?.scrollPrev()} className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => api?.scrollNext()} className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors">
              <ChevronRight size={24} />
            </button>
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-8">
            {materials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="relative overflow-hidden rounded-lg col-span-2 md:col-span-1 row-span-2 h-64 md:h-full group">
            <img src={galleryPhotos[0].src} alt={galleryPhotos[0].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-wide">{galleryPhotos[0].caption}</span>
          </div>
          <div className="relative overflow-hidden rounded-lg h-44 md:h-auto group">
            <img src={galleryPhotos[1].src} alt={galleryPhotos[1].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-wide">{galleryPhotos[1].caption}</span>
          </div>
          <div className="relative overflow-hidden rounded-lg h-44 md:h-auto group">
            <img src={galleryPhotos[2].src} alt={galleryPhotos[2].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-wide">{galleryPhotos[2].caption}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-16">
        <Button variant="heroBorder" size="lg" asChild>
          <Link to="/estrutura">
            Conheça nossa estrutura
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default StructureSection;