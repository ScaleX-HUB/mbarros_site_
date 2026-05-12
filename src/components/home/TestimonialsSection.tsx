import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Play, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Rebeka Zambom",
    role: "Designer de interiores",
    handle: "@rebekazambom",
    text: "Para mim, o mais importante foi conhecer de perto a organização e a tecnologia de vocês e ter a certeza de que Pernambuco também consegue fornecer e entregar esse mesmo padrão de qualidade.",
    href: "https://www.instagram.com/reel/DWZdngVj5e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/imagens_mbarros/depoimentos/casa-design.jpg",
  },
  {
    name: "Jaime Portugal",
    role: "Arquiteto",
    handle: "@jaimeportugal",
    text: "Ver de perto uma linha de produção organizada, moderna e altamente tecnológica com showroom próprio reforça a sensação de estar em uma indústria que mais parece uma loja, de tão bem estruturada.",
    href: "https://www.instagram.com/reel/DN6gZ7LARsZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/imagens_mbarros/depoimentos/jaime-portugal.jpg",
  },
  {
    name: "Célia Beatriz",
    role: "Arquiteta",
    handle: "@celiabeatriz",
    text: "Tivemos essa grande parceria para que todo o projeto saísse perfeito, e tínhamos a certeza de que seria entregue conforme o esperado.",
    href: "https://www.instagram.com/reel/DJZTruhOA1q/?igsh=MWRjMWpxYmVlZTdvMA==",
    image: "/imagens_mbarros/depoimentos/celia-beatriz.jpg",
  },
];

const DURATION = 6500;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setCurrent((p) => (p + 1) % testimonials.length), DURATION);
    return () => clearTimeout(id);
  }, [current, paused]);

  const t = testimonials[current];

  const goNext = () => setCurrent((p) => (p + 1) % testimonials.length);
  const goPrev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-background py-20 md:py-28 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(var(--primary)/0.08),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
              Depoimentos
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
        </div>

        <div
          className="relative"
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
              className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-stretch"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <Quote className="absolute -top-2 -left-2 w-28 h-28 text-primary/[0.07] rotate-180" strokeWidth={1} />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary mb-6">
                    <Quote size={18} strokeWidth={2} />
                  </div>

                  <p className="text-foreground text-lg md:text-xl lg:text-[1.35rem] font-display font-medium leading-relaxed mb-8">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] blur-[2px] opacity-70" />
                      <div className="relative w-12 h-12 rounded-full bg-card flex items-center justify-center text-primary font-display font-bold text-lg ring-2 ring-card">
                        {t.name[0]}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-foreground leading-tight">{t.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{t.role}</p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 ml-auto">
                      <button
                        onClick={goPrev}
                        aria-label="Depoimento anterior"
                        className="w-9 h-9 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={goNext}
                        aria-label="Próximo depoimento"
                        className="w-9 h-9 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                aria-label={`Assistir depoimento de ${t.name} no Instagram`}
              >
                <div className="relative rounded-[1.6rem] p-[2px] bg-[conic-gradient(from_220deg_at_50%_50%,#feda75_0deg,#fa7e1e_60deg,#d62976_120deg,#962fbf_180deg,#4f5bd5_240deg,#feda75_360deg)] shadow-[0_24px_70px_-25px_rgba(214,41,118,0.55)] transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="relative rounded-[1.45rem] bg-[#0f0f0f] overflow-hidden aspect-[9/16] lg:aspect-auto lg:h-full lg:min-h-[460px]">
                    <div className="absolute inset-0 flex items-center justify-center select-none">
                      <span className="font-display font-black text-white/[0.06] leading-none" style={{ fontSize: "clamp(14rem, 32vw, 22rem)" }}>
                        {t.name[0]}
                      </span>
                    </div>

                    <img
                      src={t.image}
                      alt={`Depoimento de ${t.name}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,189,74,0.18),transparent_55%)] mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                      <Play size={10} fill="currentColor" strokeWidth={0} />
                      Reel
                    </div>

                    <div className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                      <Instagram size={16} />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl scale-150 group-hover:scale-[1.8] transition-transform duration-500" />
                        <div className="relative w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110">
                          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl">
                            <Play size={22} className="text-black ml-1" fill="currentColor" strokeWidth={0} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm leading-tight truncate">{t.name}</p>
                          <p className="text-white/70 text-xs mt-0.5 truncate">{t.handle}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-white bg-gradient-to-r from-[#fa7e1e] via-[#d62976] to-[#962fbf] px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                          Ver no Instagram
                        </span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)]" />
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="flex md:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={goPrev}
              aria-label="Depoimento anterior"
              className="w-10 h-10 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              aria-label="Próximo depoimento"
              className="w-10 h-10 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setPaused(true);
              }}
              aria-label={`Depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
