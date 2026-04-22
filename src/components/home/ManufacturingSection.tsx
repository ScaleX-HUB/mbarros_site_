import {
  Hammer,
  Layers,
  GlassWater,
  Lightbulb,
  Leaf,
  Settings2,
  Zap,
  Paintbrush,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities: ReadonlyArray<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Hammer,
    title: "Metalurgia",
    description: "Estruturas metálicas de alta precisão fabricadas no próprio parque industrial.",
  },
  {
    icon: Layers,
    title: "Estofado",
    description: "Revestimentos e acabamentos estofados produzidos com materiais de qualidade industrial.",
  },
  {
    icon: GlassWater,
    title: "Portas de Vidro",
    description: "Painéis e portas em vidro temperado com perfis sob medida.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação LED",
    description: "Iluminação integrada com tecnologia LED eficiente para valorizar ambientes.",
  },
  {
    icon: Leaf,
    title: "Orgânicos",
    description: "Formas orgânicas e curvas produzidas com maquinário CNC de última geração.",
  },
  {
    icon: Settings2,
    title: "Usinagens Especiais",
    description: "Peças de alta complexidade usinadas com precisão milimétrica.",
  },
  {
    icon: Zap,
    title: "Pintura Eletrostática",
    description: "Acabamento metálico durável com pintura eletrostática a pó.",
  },
  {
    icon: Paintbrush,
    title: "Pintura Líquida",
    description: "Acabamentos em pintura líquida com ampla paleta de cores e texturas.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const ManufacturingSection = () => {
  return (
    <section className="section-container bg-background py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                Capacidade Industrial
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </div>
          <h2
            className="font-display font-bold text-foreground leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Tudo o que sua loja precisa,{" "}
            <span className="text-gradient">produzido por nós</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Linha completa de produção sob o mesmo teto — do metal ao estofado, do vidro à tinta.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {capabilities.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative flex flex-col items-start gap-3 rounded-none border border-border/60 bg-card p-5 overflow-hidden
                         hover:border-primary/50 hover:shadow-[0_4px_24px_hsl(var(--primary)/0.12)] transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0
                              translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary border border-primary/20
                              group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <h3 className="text-sm font-display font-bold uppercase tracking-wide text-foreground leading-tight">
                {title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
