import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const benefits = [
  "Sua marca, nossa estrutura industrial",
  "Sem taxa de franquia ou royalties",
  "Entrega média em até 20 dias úteis",
  "Mais de 40 opções de cores e texturas",
  "Suporte técnico especializado",
  "Treinamento no software Promob",
  "Atendimento direto com a indústria",
  "Tecnologia europeia de produção",
];

const forWho = [
  "Lojas de móveis planejados que querem escalar",
  "Marcas que buscam fornecedor industrial confiável",
  "Lojas que querem migrar de marcenaria para indústria",
  "Empreendedores que querem iniciar no segmento",
];

const notForWho = [
  "Clientes finais (atendemos apenas lojistas)",
  "Projetos pontuais ou avulsos",
  "Quem busca o preço mais baixo do mercado",
];

const steps = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Avaliamos o perfil da sua loja, região de atuação e volume estimado. Apresentamos nosso modelo de parceria e tiramos todas as dúvidas.",
  },
  {
    number: "02",
    title: "Análise e Aprovação",
    description: "Analisamos as condições comerciais e alinhamos expectativas. Definimos os termos da parceria de forma transparente.",
  },
  {
    number: "03",
    title: "Capacitação Técnica",
    description: "Treinamento completo no software Promob e alinhamento de processos técnicos para garantir projetos otimizados.",
  },
  {
    number: "04",
    title: "Operação Ativa",
    description: "Você projeta e vende com sua marca. Nós produzimos e entregamos com qualidade e pontualidade.",
  },
];

const WhiteLabel = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-container bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Modelo White Label
          </span>
          <h1 className="section-title mt-4">
            Sua marca, nossa <span className="text-gradient">estrutura industrial</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Você projeta na sua loja com sua marca. 
            Nós tornamos realidade para seu cliente.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/seja-parceiro">
                Quero ser parceiro
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                Benefícios da <span className="text-gradient">parceria</span>
              </h2>
              <p className="section-subtitle mt-4">
                Opere com a força de uma indústria sem investir em estrutura fixa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-sm flex items-center justify-center">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Para quem é <span className="text-gradient">essa parceria?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-industrial">
              <h3 className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                <Check size={20} className="text-primary" />
                Ideal para:
              </h3>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-industrial">
              <h3 className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                <X size={20} className="text-destructive" />
                Não é para:
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={16} className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Como funciona a <span className="text-gradient">parceria</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="card-industrial flex gap-6 items-start">
                <span className="stat-number text-3xl flex-shrink-0 opacity-50">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            Pronto para <span className="text-gradient">começar?</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Entre em contato e descubra como a MBarros pode impulsionar o crescimento da sua loja.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/seja-parceiro">
                Quero ser parceiro
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroBorder" size="lg" asChild>
              <Link to="/contato">
                Fale conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhiteLabel;
