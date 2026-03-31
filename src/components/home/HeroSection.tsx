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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mr-auto space-y-6 text-left relative"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Subtle glow highlight behind text */}
          <div className="absolute -inset-10 bg-white/40 dark:bg-black/20 blur-3xl -z-10 rounded-full transition-colors duration-700" />

          {/* Badge */}
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 backdrop-blur-sm border border-primary/30 dark:border-primary/40 px-4 py-2 rounded-full mb-2 shadow-[0_0_24px_rgba(255,189,74,0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />      
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground dark:text-white transition-colors duration-700">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUpItem} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold leading-tight text-foreground dark:text-white drop-shadow-[0_4px_32px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] transition-colors duration-700">
            {t("hero.title1")}{" "}
            <span className="text-gradient drop-shadow-[0_4px_32px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">{t("hero.title2")}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUpItem} className="text-base md:text-lg text-foreground/90 dark:text-white/95 max-w-2xl drop-shadow-[0_4px_24px_rgba(255,255,255,1)] dark:drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] transition-colors duration-700">
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 pt-2">
            <Button variant="hero" size="lg" asChild>
              <Link to="/seja-parceiro">
                {t("hero.ctaParceiro")}
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroBorder" size="lg" asChild>
              <Link to="/contato">
                {t("hero.ctaContato")}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default HeroSection;
