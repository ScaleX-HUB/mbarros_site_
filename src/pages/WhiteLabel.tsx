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
      {/* Hero — imagem de fundo integrada com overlay */}
      <section className="relative overflow-hidden border-b border-border/60 min-h-[420px] md:min-h-[500px] flex items-center">
        {/* Imagem de fundo full-bleed */}
        <div className="absolute inset-0">
          <img
            src="/imagens_mbarros/FOTO%20DA%20INDUSTRIA%20-%20ATUALIZADA%20(1).png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[50%_75%]"
            fetchPriority="high"
          />
          {/* Overlay escuro base para legibilidade */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Gradiente lateral: reforça o lado do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Conteúdo */}
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Modelo Parceiro</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold leading-tight text-white">
              Para marcas que querem{" "}
              <span className="text-primary">crescer.</span>
            </h1>

            <p className="text-white/75 text-base mt-4 leading-relaxed">
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
        </div>
      </section>

      {/* Faixa de fatos */}
      <section className="border-b border-border/50 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3.5">
            {facts.map((fact) => (
              <div key={fact} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passos + CTA integrado */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
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
              <span className="text-primary">começar a parceria</span>
            </h2>
          </div>

          {/* Grid de passos */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="rounded-sm border border-border bg-card/80 p-5 md:p-6 flex gap-4 md:gap-5 items-start group transition-all duration-300 hover:border-primary/40 hover:bg-card"
              >
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <span className="text-primary font-display font-bold text-sm leading-none">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-3 bg-border hidden md:block" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-display font-semibold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA inline — integrado ao final da seção */}
          <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-foreground font-semibold text-base font-display">
                Pronto para crescer com estrutura?
              </p>
              <p className="text-muted-foreground text-sm mt-0.5">
                Entre em contato e descubra como a MBarros pode impulsionar sua loja.
              </p>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <Button variant="hero" size="sm" asChild>
                <Link to="/seja-parceiro">
                  Quero ser parceiro
                  <ArrowRight size={14} />
                </Link>
              </Button>
              <Button variant="heroBorder" size="sm" asChild>
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

