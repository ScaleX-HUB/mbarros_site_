import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  ArrowRight,
  Tag,
  Clock,
  Palette,
  Headset,
  Monitor,
  Factory,
  Percent,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  { icon: Tag, label: "Sua marca, nossa estrutura industrial" },
  { icon: Percent, label: "Sem taxa de franquia ou royalties" },
  { icon: Clock, label: "Entrega média em até 20 dias úteis" },
  { icon: Palette, label: "Mais de 40 opções de cores e texturas" },
  { icon: Headset, label: "Suporte técnico especializado" },
  { icon: Monitor, label: "Treinamento no software Promob" },
  { icon: Factory, label: "Atendimento direto com a indústria" },
  { icon: ShieldCheck, label: "Tecnologia Europeia e Chinesa na produção" },
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

const heroProofs = [
  "Sem royalties ou taxa de franquia",
  "Operação com prazo médio de até 20 dias úteis",
  "Suporte técnico e comercial próximo",
];

const WhiteLabel = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-card/60 border-b border-border/60">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[110px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-accent/10 rounded-full blur-[90px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl border border-primary/15 bg-background/75 px-5 py-8 sm:px-8 md:px-10 md:py-10 shadow-[0_16px_60px_-28px_rgba(0,0,0,0.28)] backdrop-blur-sm text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-5 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Modelo White Label</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-semibold leading-[1.05]">
              Sua marca, <span className="text-gradient">nossa estrutura industrial</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-5 md:mt-6 leading-relaxed">
              Você vende com a força da sua marca. A MBarros assume produção, padronização e prazos para transformar seus projetos em entregas consistentes e escaláveis.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-8 md:mt-9">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/seja-parceiro">
                  Quero ser parceiro
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroBorder" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contato">Fale conosco</Link>
              </Button>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {heroProofs.map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-muted-foreground leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="flex justify-center mb-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                  Benefícios
                </span>
                <span className="h-px w-8 bg-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Uma operação mais leve para sua loja, com a força de uma{" "}
              <span className="text-gradient">indústria completa</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Reduza complexidade operacional, preserve sua marca na frente do cliente e ganhe estrutura para vender com mais confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {benefits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group rounded-xl border border-border bg-card/80 p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_12px_32px_-18px_rgba(0,0,0,0.22)]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="section-container bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Para quem é{" "}
              <span className="text-gradient">essa parceria?</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Um modelo pensado para lojistas que querem crescer com mais estrutura, previsibilidade e suporte técnico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Ideal for */}
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-5 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-primary text-primary-foreground">
                  <Check size={18} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Ideal para:</h3>
              </div>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-[0.4rem] shrink-0" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for */}
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-destructive/20 text-destructive">
                  <X size={18} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Não é para:</h3>
              </div>
              <ul className="space-y-4">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive/60 mt-[0.4rem] shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Um fluxo simples para ativar sua operação com segurança, clareza comercial e suporte técnico desde o início.
            </p>
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
        <div className="relative max-w-3xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 rounded-sm -z-10" />
          <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-10 sm:px-8 sm:py-12 md:py-14">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Próximo passo</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Pronto para{" "}
              <span className="text-gradient">começar?</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Entre em contato e descubra como a MBarros pode impulsionar o crescimento da sua loja.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mt-8">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/seja-parceiro">
                  Quero ser parceiro
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroBorder" size="lg" className="w-full sm:w-auto" asChild>
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

