import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const images = useMemo(() => MBARROS_IMAGES.map((i) => i.src), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (images.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, [images.length, prefersReducedMotion]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[activeIndex]}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${images[activeIndex]}')` }}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            aria-hidden="true"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/75 to-card" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mr-auto space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full animate-fade-up delay-0 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Indústria 100% Nordestina · Orgulhosamente Pernambucana
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold leading-tight animate-fade-up delay-100">
            Estrutura industrial para{" "}
            <span className="text-gradient">marcas que querem crescer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-fade-up delay-200">
            Seja parceiro de uma indústria inteligente. Focamos na produção para que você foque nas vendas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 pt-2 animate-fade-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/seja-parceiro">
                Seja um Parceiro
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroBorder" size="lg" asChild>
              <Link to="/contato">
                Fale com nosso time
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default HeroSection;
