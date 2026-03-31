import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PROJECT_CATEGORY_IMAGES, type ProjectCategory } from "@/lib/project-images";
import { useTranslation } from "react-i18next";



const ProjectsSection = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: "residenciais",
      title: t("projects.cat1.title"),
      description: t("projects.cat1.desc"),
    },
    {
      id: "corporativos",
      title: t("projects.cat2.title"),
      description: t("projects.cat2.desc"),
    },
    {
      id: "especiais",
      title: t("projects.cat3.title"),
      description: t("projects.cat3.desc"),
    },
  ];
  const prefersReducedMotion = useReducedMotion();
  const categoryIds = useMemo(
    () => categories.map((c) => c.id as ProjectCategory),
    []
  );

  const [activeImageIndexByCategory, setActiveImageIndexByCategory] = useState(() => {
    const initial: Record<ProjectCategory, number> = {
      residenciais: 0,
      corporativos: 0,
      especiais: 0,
    };
    return initial;
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveImageIndexByCategory((prev) => {
        const next = { ...prev };
        for (const categoryId of categoryIds) {
          const total = PROJECT_CATEGORY_IMAGES[categoryId].length;
          next[categoryId] = total <= 1 ? 0 : (prev[categoryId] + 1) % total;
        }
        return next;
      });
    }, 5500);

    return () => window.clearInterval(id);
  }, [categoryIds, prefersReducedMotion]);

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                {t("projects.badge")}
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Projetos que{" "}
            <span className="text-primary">transformam espaços</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            Ambientes planejados com design, funcionalidade e acabamento de alto padrão.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/projetos?categoria=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              {/* Image */}
              <div className="absolute inset-0 bg-secondary">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${category.id}-${activeImageIndexByCategory[category.id as ProjectCategory]}`}
                    src={
                      PROJECT_CATEGORY_IMAGES[category.id as ProjectCategory][
                        activeImageIndexByCategory[category.id as ProjectCategory]
                      ]?.src
                    }
                    alt={category.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
                  Ver projetos
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/projetos">
              {t("projects.btn")}
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
