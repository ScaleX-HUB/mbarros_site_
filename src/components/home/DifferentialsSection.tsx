import {
  BadgeMinus,
  Clock3,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const differentials = [
  {
    icon: Clock3,
    title: "Agilidade e Previsibilidade",
    description: "Reduza seu tempo de entrega com nossa padronização industrial e logística otimizada.",
  },
  {
    icon: ShieldCheck,
    title: "Padronização Completa",
    description: "Assegure que cada projeto saia com o mesmo nível altíssimo de qualidade, sempre.",
  },
  {
    icon: Landmark,
    title: "Redução Tributária",
    description: "Aproveite os benefícios fiscais de atuar em parceria com uma operação industrial estruturada.",
  },
  {
    icon: BadgeMinus,
    title: "Sem Taxa de Franquia",
    description: "Você é dono da sua marca. Não cobramos royalties ou taxas sobre seu faturamento.",
  },
  {
    icon: Wrench,
    title: "Suporte Master",
    description: "Nossa equipe de engenharia e suporte garante atendimento técnico e revisão para seus projetos no Promob.",
  },
  {
    icon: TrendingUp,
    title: "Possibilidade de Escala",
    description: "Venda mais sem precisar investir centenas de milhares em expansão de marcenaria e equipes base.",
  },
] as const satisfies ReadonlyArray<{ icon: LucideIcon; title: string; description: string }>;

const DifferentialsSection = () => {
  return (
    <section className="relative section-container bg-card py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[540px] h-[540px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                VANTAGENS COMPETITIVAS
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Por que migrar de marcenaria para<br className="hidden md:inline" />
            <span className="text-gradient"> Indústria?</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-3xl mx-auto">
            Mais controle de prazo, qualidade consistente e operação pronta para crescer com segurança.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="group card-industrial relative overflow-hidden border-border/70 hover:border-primary/45"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/55 to-primary/0" />

                <div className="mb-6 flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-sm border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                  </div>
                  <span className="text-primary/70 text-xs font-bold tracking-[0.18em]">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-lg font-display font-semibold text-foreground mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
