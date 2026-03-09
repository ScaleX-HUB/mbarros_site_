import Layout from "@/components/layout/Layout";
import { Cog, Scissors, Settings, Package, Truck, Shield } from "lucide-react";

const equipment = [
  {
    icon: Scissors,
    title: "Máquinas de Corte",
    description: "Equipamentos de precisão para corte de painéis com mínimo desperdício e máxima qualidade.",
  },
  {
    icon: Settings,
    title: "Fita de Borda",
    description: "Máquinas automáticas para aplicação de fita de borda com acabamento impecável.",
  },
  {
    icon: Cog,
    title: "Usinagem e Furação",
    description: "Centro de usinagem CNC para furação precisa e encaixes perfeitos.",
  },
  {
    icon: Package,
    title: "Móveis Curvos",
    description: "Estrutura especializada para produção de peças curvas e designs diferenciados.",
  },
];

const process = [
  {
    step: "01",
    title: "Recebimento do Projeto",
    description: "Análise técnica do projeto enviado pelo lojista parceiro.",
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Otimização de cortes e definição do processo produtivo.",
  },
  {
    step: "03",
    title: "Produção",
    description: "Execução com maquinário moderno e controle de qualidade.",
  },
  {
    step: "04",
    title: "Acabamento",
    description: "Inspeção final e preparação para expedição.",
  },
  {
    step: "05",
    title: "Logística",
    description: "Embalagem e entrega em todo o Brasil.",
  },
];

const Estrutura = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-container bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Estrutura Fabril
          </span>
          <h1 className="section-title mt-4">
            Parque fabril <span className="text-gradient">moderno e eficiente</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Mais de 10.000m² equipados com tecnologia europeia para 
            produzir mais de 55.000 peças por mês.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-industrial text-center">
              <div className="stat-number">10.000</div>
              <div className="stat-label">m² de área</div>
            </div>
            <div className="card-industrial text-center">
              <div className="stat-number">55.000+</div>
              <div className="stat-label">Peças/mês</div>
            </div>
            <div className="card-industrial text-center">
              <div className="stat-number">100+</div>
              <div className="stat-label">Colaboradores</div>
            </div>
            <div className="card-industrial text-center">
              <div className="stat-number">20</div>
              <div className="stat-label">Dias úteis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Maquinário <span className="text-gradient">de ponta</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Equipamentos importados da Alemanha para garantir precisão e qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {equipment.map((item) => (
              <div key={item.title} className="card-industrial flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                  <item.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Processo <span className="text-gradient">produtivo</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Fluxo otimizado para garantir qualidade e prazos.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <div key={item.step} className="card-industrial text-center relative">
                <span className="stat-number text-2xl opacity-50">{item.step}</span>
                <h3 className="text-sm font-display font-semibold text-foreground mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Logistics */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-industrial">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Controle de Qualidade
                </h3>
              </div>
              <p className="text-muted-foreground">
                Cada peça passa por inspeção rigorosa antes da expedição. 
                Processos padronizados e equipe própria garantem consistência em toda produção.
              </p>
            </div>

            <div className="card-industrial">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Truck size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Logística Nacional
                </h3>
              </div>
              <p className="text-muted-foreground">
                Entrega em todos os 27 estados brasileiros. Embalagem adequada 
                e rastreamento para garantir que seu pedido chegue em perfeitas condições.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Estrutura;
