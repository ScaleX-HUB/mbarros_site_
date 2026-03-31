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
  Link2,
  PaintBucket,
  type LucideIcon,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useReducedMotion } from "framer-motion";
import productionPanelInspectionWide from "@/assets/production-panel-inspection-wide.png";
import sprayPaintBooth from "@/assets/process-spray-paint-booth.png";
import panelPositioning from "@/assets/production-panel-positioning.png";

const materials = [
  {
    name: "MDF",
    description: "Painel de alta densidade para peças estruturais e de acabamento fino",
    icon: Layers,
  },
  {
    name: "MDP",
    description: "Resistência e versatilidade para painéis de larga escala",
    icon: Grid3x3,
  },
  {
    name: "Laca",
    description: "Acabamento premium com alto brilho e durabilidade",
    icon: PaintBucket,
  },
  {
    name: "Vidro",
    description: "Elegância e sofisticação para portas e detalhes especiais",
    icon: Diamond,
  },
  {
    name: "Alumínio",
    description: "Perfis estruturais leves e resistentes à corrosão",
    icon: Cog,
  },
  {
    name: "Fita de Borda PUR",
    description: "Colagem invisível com alta aderência e durabilidade",
    icon: Link2,
  },
] as const satisfies ReadonlyArray<{ name: string; description: string; icon: LucideIcon }>;

const galleryPhotos = [
  { src: productionPanelInspectionWide, alt: "Trabalhador posicionando painel MDF em máquina CNC", caption: "Linha de Produção" },
  { src: sprayPaintBooth, alt: "Cabine de pintura industrial", caption: "Cabine de Pintura" },
  { src: panelPositioning, alt: "Posicionamento de painel MDF na máquina", caption: "Posicionamento de Painéis" },
];

const AUTOPLAY_DELAY = 4500;

const StructureSection = () => {
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
    timerRef.current = setInterval(() => api.scrollNext(), AUTOPLAY_DELAY);
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

  return (
    <section className="section-container bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
            Nossa fábrica em Pernambuco possui 10.000 m² equipados com maquinário de última geração — Tecnologia Europeia e Chinesa. Isso garante agilidade, repetibilidade e um acabamento que posiciona sua marca no segmento premium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12 text-center md:text-left">
            <div className="bg-background/50 p-6 rounded-sm border border-border">
              <h4 className="text-foreground font-semibold font-display text-lg mb-2">Corte e Usinagem</h4>
              <p className="text-muted-foreground text-sm">Precisão milimétrica e encaixes perfeitos.</p>
            </div>
            <div className="bg-background/50 p-6 rounded-sm border border-border">
              <h4 className="text-foreground font-semibold font-display text-lg mb-2">Fita de Borda</h4>
              <p className="text-muted-foreground text-sm">Colagem PUR com acabamento invisível e durabilidade.</p>
            </div>
          </div>
        </div>

        {/* Materials + Video */}
        <div className="card-industrial">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Matérias-Primas de Qualidade
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl mx-auto">
              Trabalhamos apenas com fornecedores homologados e materiais certificados, garantindo durabilidade e acabamento premium em cada peça produzida.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* YouTube Video */}
            <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl ring-1 ring-border">
              <iframe
                src="https://www.youtube.com/embed/t4DJTVCMAEg?autoplay=1&mute=1&loop=1&playlist=t4DJTVCMAEg&rel=0&modestbranding=1&controls=0&playsinline=1"
                title="Matérias-Primas de Qualidade – MBarros Indústria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
              {/* Subtle label overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                <p className="text-white text-xs font-medium tracking-wide">Processo produtivo MBarros</p>
              </div>
            </div>

            {/* Materials list */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {materials.map((material) => (
                  <div
                    key={material.name}
                    className="flex items-start gap-3 p-4 bg-background rounded-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-primary/30 bg-primary/10 text-primary">
                      <material.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm font-display font-semibold text-foreground">
                        {material.name}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {material.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground border-t border-border pt-4">
                <span className="font-semibold text-foreground">Fornecedores homologados:</span>{" "}
                Duratex e Placas do Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Photo Carousel */}
        <div
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
            aria-label="Galeria da estrutura fabril MBarros"
          >
            <CarouselContent className="-ml-0">
              {galleryPhotos.map((photo) => (
                <CarouselItem key={photo.caption} className="pl-0 md:basis-1/2">
                  <div className="relative overflow-hidden rounded-sm h-72 md:h-80 mx-1.5">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"

                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-wide">
                      {photo.caption}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Prev / Next buttons */}
            <button
              onClick={() => api?.scrollPrev()}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight size={22} />
            </button>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Selecionar slide">
            {galleryPhotos.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={current === i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  current === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="heroBorder" size="lg" asChild>
            <Link to="/estrutura">
              Conheça nossa estrutura
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
