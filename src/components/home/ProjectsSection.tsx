import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HOME_PROJECT_CATEGORIES } from "@/lib/project-gallery-home";

const categories = [
  {
    id: "residenciais",
    title: "Projetos Residenciais",
    description: "Cozinhas, dormitórios, salas e espaços personalizados para residências.",
  },
  {
    id: "corporativos",
    title: "Projetos Corporativos",
    description: "Escritórios, ambientes empresariais e espaços de trabalho funcionais.",
  },
  {
    id: "especiais",
    title: "Projetos Especiais",
    description: "Soluções personalizadas para necessidades específicas e projetos únicos.",
  },
];

const ProjectsSection = () => {
  const galleryCategories = useMemo(
    () => (HOME_PROJECT_CATEGORIES.length > 0 ? HOME_PROJECT_CATEGORIES : categories),
    []
  );

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                PORTFÓLIO
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Projetos que <span className="text-primary">transformam espaços</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            Ambientes planejados com design, funcionalidade e acabamento de alto padrão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {galleryCategories.map((category, categoryIndex) => {
            const activeImage = category.covers[0];

            return (
              <Link
                key={category.id}
                to={`/projetos?categoria=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary"
              >
                {activeImage && (
                  <img
                    src={activeImage.src}
                    alt={category.title}
                    width={activeImage.width ?? 600}
                    height={activeImage.height ?? 750}
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
                    loading={categoryIndex === 0 ? "eager" : "lazy"}
                    fetchPriority={categoryIndex === 0 ? "high" : "auto"}
                    decoding="async"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 transition-colors group-hover:text-primary">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
                    Ver projetos
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/projetos">
              Ver todos os projetos
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
