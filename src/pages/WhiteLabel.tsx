import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const facts = [
  "35 anos de mercado",
  "Indústria 100% pernambucana",
  "10.000m² de parque fabril",
  "Foco B2B — apenas lojistas",
  "Padrão industrial e previsibilidade",
  "Diferencial logístico no Nordeste",
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
    description: "Você projeta e vende com sua marca. Nós produzimos. O lojista retira o material diretamente na indústria e coordena a montagem no cliente final.",
  },
];

const WhiteLabel = () => {
  return (
    <Layout>
      {/* Hero — split with full-height image */}
      <section className="relative bg-card/60 border-b border-border/60 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_440px] min-h-[420px] items-stretch">
            {/* Text */}
            <div className="flex flex-col justify-center py-12 md:py-16 lg:pr-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Modelo Parceiro</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-semibold leading-tight">
                Para marcas que querem{" "}
                <span className="text-gradient">crescer.</span>
              </h1>

              <p className="text-muted-foreground text-base mt-4 leading-relaxed max-w-md">
                Focamos na produção para que você foque nas vendas. Sua marca no mercado, nossa estrutura por trás.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="hero" size="default" asChild>
                  <Link to="/seja-parceiro">
                    Quero ser parceiro
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button variant="heroBorder" size="default" asChild>
                  <Link to="/contato">Fale conosco</Link>
                </Button>
              </div>
            </div>

            {/* Image — fills the column height */}
            <div className="hidden lg:block relative overflow-hidden rounded-none">
              <img
                src="/imagens_mbarros/pessoas_trabalhando_fabrica_nova_mbarros.png"
                alt="Equipe MBarros na fábrica"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-border/50 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
            {facts.map((fact) => (
              <div key={fact} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="flex justify-center mb-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                  Como funciona
                </span>
                <span className="h-px w-8 bg-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4">
              4 passos para{" "}
              <span className="text-gradient">começar a parceria</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="rounded-xl border border-border bg-card/80 p-5 md:p-6 flex gap-4 md:gap-5 items-start group transition-all duration-300 hover:border-primary/40 hover:shadow-[0_12px_32px_-18px_rgba(0,0,0,0.22)]">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/18 transition-colors">
                    <span className="text-primary font-display font-bold text-base leading-none">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-4 bg-border hidden md:block" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-display font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-xl border border-primary/20 bg-primary/5 px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="text-2xl md:text-3xl font-display font-semibold">
              Pronto para <span className="text-gradient">começar?</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Entre em contato e descubra como a MBarros pode impulsionar o crescimento da sua loja.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
              <Button variant="hero" size="default" asChild>
                <Link to="/seja-parceiro">
                  Quero ser parceiro
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="heroBorder" size="default" asChild>
                <Link to="/contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhiteLabel;

