import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Users, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  {
    icon: Briefcase,
    title: "Ambiente de Trabalho",
    description: "Fábrica moderna, organizada e com foco em segurança e bem-estar dos colaboradores.",
  },
  {
    icon: Users,
    title: "Equipe Integrada",
    description: "Cultura de colaboração e respeito. Valorizamos cada membro da equipe.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Oportunidades de desenvolvimento profissional em uma empresa em expansão.",
  },
];

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Currículo enviado! Entraremos em contato caso haja vagas compatíveis.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cargo: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card/60 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
            Carreiras
          </p>
          <h1 className="text-2xl md:text-3xl font-display font-semibold mt-2 text-foreground">
            Trabalhe conosco
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
            Faça parte da equipe MBARROS e contribua com uma operação industrial que cresce com qualidade e organização.
          </p>
        </div>
      </section>

      {/* Benefits + Form */}
      <section className="section-container pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="card-industrial">
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                Por que trabalhar na MBARROS
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Buscamos profissionais comprometidos, colaborativos e com vontade de evoluir.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3 rounded-sm border border-border bg-background/60 p-4">
                    <div className="mt-0.5 inline-flex items-center justify-center w-9 h-9 bg-primary/10 rounded-sm shrink-0">
                      <benefit.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-industrial">
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">
              Envie seu currículo
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Preencha os dados abaixo e nosso RH entra em contato quando houver vaga compatível.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Área / Cargo de Interesse
                  </label>
                  <Input
                    value={formData.cargo}
                    onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    className="bg-background"
                    placeholder="Ex: Produção, Administrativo..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Apresentação / Experiência
                </label>
                <Textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                  className="bg-background"
                  placeholder="Conte um pouco sobre você e sua experiência profissional..."
                />
              </div>

              <p className="text-xs text-muted-foreground">
                * Após o envio, nossa equipe de RH analisará seu perfil e entrará em contato caso haja vagas compatíveis.
              </p>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar currículo"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrabalheConosco;
