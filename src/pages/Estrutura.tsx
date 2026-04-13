import Layout from "@/components/layout/Layout";
import { Box, Cog, Layers, Package, Scissors, Settings, Shield, Truck, Workflow, Wrench } from "lucide-react";
import panelPositioning from "@/assets/production-panel-positioning.png";
import cncOperator from "@/assets/team-operator-cnc-monitor.png";

const equipment = [
  {
    icon: Cog,
    title: "CNC e centro de usinagem",
    description: "Centro de usinagem CNC com Tecnologia Europeia e Chinesa para furação precisa, cortes repetidos e encaixes perfeitos.",
  },
  {
    icon: Settings,
    title: "Coladeira de borda",
    description: "Máquinas automáticas para aplicação de fita de borda com colagem de alta aderência e acabamento impecável.",
  },
  {
    icon: Scissors,
    title: "Seccionadora",
    description: "Equipamento de corte de alta precisão para painéis MDF e MDP com mínimo desperdício de material.",
  },
  {
    icon: Workflow,
    title: "Centro de furos",
    description: "Furação automatizada em série para encaixes, dobøe ferragens, garantindo padronização em cada peça.",
  },
  {
    icon: Layers,
    title: "Estrutura metálica e vidro",
    description: "Capacidade produtiva para integrar estruturas metálicas e vidro em projetos corporativos e especiais.",
  },
  {
    icon: Wrench,
    title: "Metalurgia Própria",
    description: "Estrutura própria de metalurgia para produção de componentes metálicos com rastreabilidade e padrão industrial.",
  },
  {
    icon: Package,
    title: "Embalagem industrial e rastreabilidade",
    description: "Embalagem padronizada com identificação de cada item para garantir integridade, organização e rastreabilidade na entrega.",
  },
  {
    icon: Box,
    title: "Linha de móveis corporativos",
    description: "Linha dedicada à produção de móveis para ambientes corporativos, com alto padrão de acabamento e escala industrial.",
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
    description: "Execução com maquinário de Tecnologia Europeia e Chinesa e controle de qualidade.",
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
            Tecnologia, precisão e <span className="text-gradient">escala produtiva</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Nossa operação reúne tecnologia de ponta, processos industrializados e uma equipe especializada para garantir alto padrão em cada peça.
          </p>
          <p className="section-subtitle mx-auto mt-3">
            Da usinagem à embalagem final, tudo é pensado para assegurar rastreabilidade, precisão e consistência.
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
              Equipamentos com Tecnologia Europeia e Chinesa para garantir precisão, repetibilidade e qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div key={item.title} className="card-industrial flex gap-4 items-start">
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

      {/* Equipe em Ação */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
                  Nossa Equipe
                </span>
                <span className="h-px w-8 bg-primary" />
              </div>
            </div>
            <h2 className="section-title">
              Processo <span className="text-gradient">em ação</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Cada etapa executada por profissionais especializados com EPIs e rigor técnico.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { src: "/imagens_mbarros/pessoa_operando_maquina_fabrica_nova.png", alt: "Operador de máquina na fábrica MBarros", caption: "Operação Industrial" },
              { src: "/imagens_mbarros/pessoas_trabalhando_fabrica_nova_mbarros.png", alt: "Equipe trabalhando na nova fábrica MBarros", caption: "Equipe em Ação" },
              { src: panelPositioning, alt: "Posicionamento de painel MDF na máquina", caption: "Linha de Produção" },
              { src: cncOperator, alt: "Operador acompanhando painel CNC", caption: "Operação CNC" },
            ].map((photo) => (
              <div key={photo.caption} className="relative rounded-sm overflow-hidden group h-64 lg:h-80">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium tracking-wide">
                  {photo.caption}
                </span>
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
