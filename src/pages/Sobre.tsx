import Layout from "@/components/layout/Layout";
import { Factory, Users, Target, Award } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";

const timeline = [
  {
    year: "2005",
    event: "Primeiros passos: estrutura inicial da empresa em Pernambuco",
    image: "/imagens_mbarros/historico/2005.jpeg",
  },
  {
    year: "2008",
    event: "Crescimento e consolidação no mercado nordestino",
    image: "/imagens_mbarros/historico/2008.jpeg",
  },
  {
    year: "2010",
    event: "Modernização do parque fabril e aumento da capacidade produtiva",
    image: "/imagens_mbarros/historico/2010.jpeg",
  },
  {
    year: "2012",
    event: "Ampliação da estrutura e expansão das operações",
    image: "/imagens_mbarros/historico/2012.jpeg",
  },
  {
    year: "2023",
    event: "Nova unidade fabril com 10.000m² e painéis solares — referência industrial no Nordeste",
    image: "/imagens_mbarros/historico/2023.png",
  },
];

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Transformar os sonhos dos clientes em ambientes personalizados, utilizando matérias-primas de qualidade e processos de produção que garantam o resultado esperado.",
  },
  {
    icon: Factory,
    title: "Visão",
    description: "Ser referência nacional em móveis planejados White Label, fortalecendo o mercado e oferecendo estrutura industrial para lojistas de todo o Brasil.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Qualidade, comprometimento, inovação, respeito ao cliente e valorização da equipe. Orgulhosamente nordestinos, 100% pernambucanos.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            `url('${MBARROS_IMAGES[0]?.src ?? ""}')`,
        }}
      >
        <div className="absolute inset-0 bg-center bg-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Sobre a Indústria
            </span>
            <h1 className="section-title mt-4">
              Uma indústria <span className="text-gradient">100% pernambucana</span>
            </h1>
            <p className="section-subtitle mx-auto mt-4">
              Há mais de 35 anos transformando projetos em realidade. Estrutura industrial sólida para sustentar grandes marcas.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-semibold">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A MBARROS Indústria de Móveis Planejados nasceu em Pernambuco com a missão de 
                  fortalecer o mercado de móveis planejados no Nordeste brasileiro.
                </p>
                <p>
                  Ao longo de mais de três décadas, construímos uma trajetória marcada pela 
                  qualidade, inovação e compromisso com nossos parceiros. Hoje, atendemos 
                  lojistas em todo o Brasil através do modelo White Label.
                </p>
                <p>
                  Nossa equipe é formada por profissionais especializados que acompanham 
                  as tendências do design de interiores e do mercado de móveis planejados, 
                  unindo sofisticação, qualidade e praticidade em cada projeto.
                </p>
              </div>
            </div>

            <div className="card-industrial">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Marcos
              </h2>
              <p className="text-muted-foreground text-sm">
                Uma visão rápida da nossa evolução e dos principais investimentos em estrutura e qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline (novo estilo) */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <Timeline
            title="Marcos que mostram como evoluímos em estrutura, processos e capacidade produtiva."
            data={timeline.map((t) => ({
              title: t.year,
              content: (
                <div className="card-industrial">
                  <p className="text-foreground text-sm md:text-base font-normal mb-6">
                    {t.event}
                  </p>

                  <img
                    src={t.image}
                    alt={`Estrutura ${t.year}`}
                    loading="lazy"
                    className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm mb-6">
            <Users size={32} className="text-primary" />
          </div>
          <h2 className="section-title">
            Equipe <span className="text-gradient">própria</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Toda a equipe de produção e montagem é composta por funcionários da própria empresa, 
            contribuindo para manter o padrão de qualidade e controle sobre todos os processos de fabricação.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="card-industrial text-center">
              <div className="stat-number text-3xl">100+</div>
              <div className="stat-label">Colaboradores</div>
            </div>
            <div className="card-industrial text-center">
              <div className="stat-number text-3xl">35+</div>
              <div className="stat-label">Anos</div>
            </div>
            <div className="card-industrial text-center">
              <div className="stat-number text-3xl">22</div>
              <div className="stat-label">Cidades · 7 Estados</div>
            </div>
            <div className="card-industrial text-center">
              <div className="stat-number text-3xl">100%</div>
              <div className="stat-label">Pernambucana</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
