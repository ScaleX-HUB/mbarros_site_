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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pb-48 lg:pb-32">
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
            A melhor indústria de móveis planejados <span className="text-gradient drop-shadow-[0_4px_32px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">do NORDESTE</span>
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
      <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 w-full z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={1} className="bg-[#4a2b16]/40 dark:bg-[#4a2b16]/50 backdrop-blur-md border-white/10 p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-foreground dark:text-white font-bold tracking-wide uppercase mb-3 text-lg">Quem Somos</h3>
              <p className="text-foreground/90 dark:text-white/90 text-sm leading-relaxed">
                A trajetória de inovação e excelência que nos consolidou como a principal indústria do Nordeste.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={2} className="bg-[#4a2b16]/40 dark:bg-[#4a2b16]/50 backdrop-blur-md border-white/10 p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-foreground dark:text-white font-bold tracking-wide uppercase mb-3 text-lg">Estrutura Fabril</h3>
              <p className="text-foreground/90 dark:text-white/90 text-sm leading-relaxed">
                Conheça a infraestrutura de ponta que viabiliza nossa produção em larga escala com precisão.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={3} className="bg-[#4a2b16]/40 dark:bg-[#4a2b16]/50 backdrop-blur-md border-white/10 p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-foreground dark:text-white font-bold tracking-wide uppercase mb-3 text-lg">Quem Atendemos</h3>
              <p className="text-foreground/90 dark:text-white/90 text-sm leading-relaxed">
                Lojistas, construtoras e arquitetos que confiam no nosso padrão corporativo e residencial.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
