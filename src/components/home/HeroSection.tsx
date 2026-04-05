import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, Variants } from "framer-motion";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";
import { useTranslation } from "react-i18next";

const DEFAULT_HERO_DURATION_MS = 6500;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } },
};

const heroCards = [
  {
    title: "Quem Somos",
    description: "A trajetória de inovação e excelência que nos consolidou como a principal indústria do Nordeste.",
    href: "/sobre",
    cta: "Conhecer a história",
  },
  {
    title: "Estrutura Fabril",
    description: "Conheça a infraestrutura de ponta que viabiliza nossa produção em larga escala com precisão.",
    href: "/estrutura",
    cta: "Ver a estrutura",
  },
  {
    title: "Quem Atendemos",
    description: "Lojistas, construtoras e arquitetos que confiam no nosso padrão corporativo e residencial.",
    href: "/white-label",
    cta: "Entender o modelo",
  },
] as const;

const HeroSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const images = useMemo(() => MBARROS_IMAGES, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  useEffect(() => {
    // Warm the browser cache so slide transitions do not flash to black.
    images.forEach((image) => {
      const preloadedImage = new Image();
      preloadedImage.src = image.src;
    });
  }, [images]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (images.length <= 1) return;

    const duration = images[activeIndex]?.heroDurationMs ?? DEFAULT_HERO_DURATION_MS;
    const id = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, duration);

    return () => window.clearTimeout(id);
  }, [activeIndex, images, prefersReducedMotion]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pb-44 sm:pb-48 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeImage.src}
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('${activeImage.src}')`,
              backgroundPosition: activeImage.heroFocusPosition ?? "center",
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 1,
              scale: 1.15,
            }}
            exit={{ opacity: 0, scale: 1.25 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 15, ease: "linear" },
            }}
            aria-hidden="true"
          />
        </AnimatePresence>
        {/* Camadas para destacar o texto de acordo com o tema */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/5 transition-colors duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent dark:from-black/70 dark:via-black/40 dark:to-transparent transition-colors duration-700" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent dark:from-black/50 dark:via-transparent dark:to-transparent transition-colors duration-700" />
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-32">
        <motion.div
          className="max-w-3xl mr-auto space-y-6 text-left relative"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Subtle glow highlight behind text */}
          <div className="absolute -inset-10 bg-white/40 dark:bg-black/20 blur-3xl -z-10 rounded-full transition-colors duration-700" />

          {/* Headline */}
          <motion.h1 variants={fadeUpItem} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold leading-tight text-foreground dark:text-white drop-shadow-[0_4px_32px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] transition-colors duration-700">
            A maior indústria de móveis planejados <span className="text-gradient drop-shadow-[0_4px_32px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">do NORDESTE</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUpItem} className="text-base md:text-lg text-foreground/90 dark:text-white/95 max-w-2xl drop-shadow-[0_4px_24px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] transition-colors duration-700">       
            Para marcas que querem crescer. Focamos na produção efetiva para que você foque nas vendas.
          </motion.p>

          
        </motion.div>
      </div>

      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />

      {/* Bottom Info Cards */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-0 right-0 w-full z-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile: horizontal scroll strip */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {heroCards.map((card, index) => {
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUpItem}
                  initial="hidden"
                  animate="show"
                  custom={index + 1}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="flex-shrink-0 snap-start w-[78vw] md:w-auto"
                >
                  <Link
                    to={card.href}
                    className="group relative flex h-full min-h-[168px] flex-col overflow-hidden rounded-2xl border border-primary/20 bg-[linear-gradient(180deg,rgba(255,249,242,0.82),rgba(184,136,95,0.34))] p-4 md:p-5 lg:p-6 shadow-[0_10px_40px_-10px_rgba(124,74,44,0.18)] backdrop-blur-md transition-all duration-300 hover:border-primary/45 hover:shadow-[0_18px_60px_-18px_rgba(124,74,44,0.26)] dark:bg-[linear-gradient(180deg,rgba(106,62,34,0.54),rgba(74,43,22,0.76))] dark:shadow-[0_10px_40px_-10px_rgba(65,36,18,0.38)] dark:hover:shadow-[0_18px_60px_-18px_rgba(65,36,18,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,140,74,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(146,90,50,0.08))] opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(212,140,74,0.22),transparent_38%),linear-gradient(180deg,rgba(146,90,50,0.06),rgba(74,43,22,0.14))]" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/8 blur-2xl transition-transform duration-500 group-hover:scale-125 dark:bg-primary/10" />

                    <div className="relative z-10 flex h-full flex-col">
                      <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-foreground dark:text-white md:text-[15px]">
                        {card.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-foreground/90 dark:text-white/90 md:text-[13px]">
                        {card.description}
                      </p>

                      <div className="mt-auto pt-5">
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary transition-transform duration-300 group-hover:translate-x-1 md:text-xs">
                          {card.cta}
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          {/* Mobile scroll hint dots */}
          <div className="flex md:hidden justify-center gap-2 mt-3">
            <span className="w-6 h-1 rounded-full bg-white/70" />
            <span className="w-2 h-1 rounded-full bg-white/30" />
            <span className="w-2 h-1 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
