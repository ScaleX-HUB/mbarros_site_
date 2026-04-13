import {
  Clock3,
  Headset,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const differentials: ReadonlyArray<{ icon: LucideIcon; title: string }> = [
  { icon: Clock3,      title: "Prazo médio de até 20 dias úteis" },
  { icon: Truck,       title: "Menor custo logístico no Nordeste" },
  { icon: Landmark,    title: "Menor carga tributária regional" },
  { icon: Headset,     title: "Suporte técnico e comercial próximo" },
  { icon: ShieldCheck, title: "Padrão industrial consistente" },
  { icon: Wrench,      title: "Assistência rápida e reposição ágil" },
  { icon: TrendingUp,  title: "Produção escalável para crescimento da loja" },
];

const DifferentialsSection = () => {
  return (
    <section className="relative section-container bg-card py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                Vantagens para o lojista
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4">
            Por que lojistas escolhem{" "}
            <span className="text-gradient">a MBarros?</span>
          </h2>
        </div>

        {/* List */}
        <div className="grid sm:grid-cols-2 gap-3">
          {differentials.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/60 px-4 py-3"
            >
              <div className="shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{title}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/seja-parceiro"
            className="inline-flex items-center justify-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-8 transition-colors"
          >
            Quero ser parceiro
          </a>
          <a
            href="/contato"
            className="inline-flex items-center justify-center text-sm font-medium border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 transition-colors"
          >
            Fale com nosso time
          </a>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
