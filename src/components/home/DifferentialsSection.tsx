import { DollarSign, ShieldCheck, PieChart, BadgeMinus, Lightbulb, TrendingUp } from "lucide-react";

const differentials = [
  {
    icon: DollarSign,
    title: "Agilidade e Previsibilidade",
    description: "Reduza seu tempo de entrega com nossa padronização industrial e logística otimizada.",
  },
  {
    icon: ShieldCheck,
    title: "Padronização Completa",
    description: "Assegure que cada projeto saia com o mesmo nível altíssimo de qualidade, sempre.",
  },
  {
    icon: PieChart,
    title: "Redução Tributária",
    description: "Aproveite os benefícios fiscais de atuar em parceria com uma operação industrial estruturada.",
  },
  {
    icon: BadgeMinus,
    title: "Sem Taxa de Franquia",
    description: "Você é dono da sua marca. Não cobramos royalties, taxas ou royalties sobre seu faturamento.",
  },
  {
    icon: Lightbulb,
    title: "Suporte Master",
    description: "Nossa equipe de engenharia e suporte garante atendimento técnico e revisão para seus projetos no Promob.",
  },
  {
    icon: TrendingUp,
    title: "Possibilidade de Escala",
    description: "Venda mais sem precisar investir centenas de milhares em expansão de marcenaria e equipes base.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-container bg-card py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium px-3">
                VANTAGENS COMPETITIVAS
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Por que migrar de marcenaria para<br className="hidden md:inline" />
            <span className="text-primary"> Indústria?</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => (
            <div key={item.title} className="bg-background/40 border border-border border-opacity-50 p-8 rounded-sm hover:border-primary/50 transition-colors">
              <div className="flex flex-col space-y-6">
                {/* Brown rounded icon box with orange core */}
                <div className="w-14 h-14 bg-[#3a2618] rounded-md flex items-center justify-center -ml-1">
                  <item.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[90%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
