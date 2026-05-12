import {
  Cog,
  Droplets,
  Layers,
  Leaf,
  Lightbulb,
  Maximize,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const differentials: ReadonlyArray<{ icon: LucideIcon; title: string }> = [
  { icon: Wrench, title: "Metalurgia" },
  { icon: Layers, title: "Estofado" },
  { icon: Maximize, title: "Portas de Vidro" },
  { icon: Lightbulb, title: "Iluminação LED" },
  { icon: Leaf, title: "Formas Orgânicas" },
  { icon: Cog, title: "Usinagens Especiais" },
  { icon: Zap, title: "Pintura Eletrostática" },
  { icon: Droplets, title: "Pintura Líquida" },
];

const DifferentialsSection = () => {
  return (
    <section className="relative bg-background py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className="text-center font-display font-bold text-foreground uppercase tracking-[0.18em] mb-10 md:mb-12"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
        >
          Diferenciais dos nossos produtos
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {differentials.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group flex flex-col items-center justify-center text-center bg-primary hover:bg-primary/85 transition-colors duration-200 px-4 py-8 md:py-10 cursor-default gap-3"
            >
              <Icon
                size={22}
                strokeWidth={1.8}
                className="text-primary-foreground/80 transition-colors group-hover:text-primary-foreground"
                aria-hidden="true"
              />
              <span
                className="font-display font-bold uppercase tracking-[0.12em] text-primary-foreground leading-snug"
                style={{ fontSize: "clamp(0.7rem, 1.4vw, 0.85rem)" }}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
