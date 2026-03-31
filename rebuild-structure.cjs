const fs = require("fs");

let content = `import { useCallback, useEffect, useRef, useState } from "react";
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
  Link2,
  PaintBucket,
  Scissors,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import productionPanelInspectionWide from "@/assets/production-panel-inspection-wide.png";
import sprayPaintBooth from "@/assets/process-spray-paint-booth.png";
import panelPositioning from "@/assets/production-panel-positioning.png";

const galleryPhotos = [
  { src: productionPanelInspectionWide, alt: "Trabalhador posicionando painel MDF em máquina CNC", caption: "Linha de Produção" },
  { src: sprayPaintBooth, alt: "Cabine de pintura industrial", caption: "Cabine de Pintura" },
  { src: panelPositioning, alt: "Posicionamento de painel MDF na máquina", caption: "Posicionamento de Painéis" },
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
      name: t("structure.item3.name"),
      description: t("structure.item3.desc"),
      icon: PaintBucket,
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
    {
      name: t("structure.item6.name"),
      description: t("structure.item6.desc"),
      icon: Link2,
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
      {/* Header textual */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
              ESTRUTURA FABRIL
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
          Tecnologia Europeia e Chinesa —{" "}
          <span className="text-primary">qualidade padronizada.</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Nossa fábrica em Pernambuco possui 10.000 m² equipados com maquinário de última geração. Isso garante agilidade, repetibilidade e um acabamento que posiciona sua marca no segmento premium.
        </p>
      </div>

      {/* Full Background Video Section with Cards */}
      <div className="relative w-full min-h-[70vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/t4DJTVCMAEg?autoplay=1&mute=1&loop=1&playlist=t4DJTVCMAEg&rel=0&modestbranding=1&controls=0&playsinline=1"
            title="Processo Produtivo MBarros"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
            style={{ pointerEvents: "none" }}
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>

        {/* Content over video */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="text-center mb-10">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-white/50 mb-2">Processo Produtivo MBarros</h3>
            <h4 className="text-xl md:text-2xl font-display font-medium text-white max-w-2xl mx-auto">
              Precisão, Matérias-Primas e Fornecedores Homologados
            </h4>
          </div>

          <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full h-full">
            <CarouselContent className="-ml-4 h-full py-4">
              {materials.map((m, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                      <m.icon className="w-8 h-8" />
                    </div>
                    <h5 className="text-white font-display font-semibold text-xl mb-3">{m.name}</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{m.description} </p>
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
                className={\`h-1.5 rounded-full transition-all duration-300 \${current === i ? "w-8 bg-primary" : "w-2 bg-white/30"}\`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Photo Carousel Area */}
      <div className="max-w-6xl mx-auto px-4 py-16 w-full" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <Carousel setApi={setGalApi} opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="-ml-0">
            {galleryPhotos.map((photo, i) => (
              <CarouselItem key={i} className="pl-0 md:basis-1/2">
                <div className="relative overflow-hidden rounded-sm h-72 md:h-80 mx-1.5 group">
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-white text-lg font-medium tracking-wide">
                    {photo.caption}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-3 mt-6">
            <button onClick={() => galApi?.scrollPrev()} className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => galApi?.scrollNext()} className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </Carousel>
      </div>

      {/* CTA */}
      <div className="text-center pb-20">
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

export default StructureSection;`;
fs.writeFileSync("src/components/home/StructureSection.tsx", content, "utf8");

