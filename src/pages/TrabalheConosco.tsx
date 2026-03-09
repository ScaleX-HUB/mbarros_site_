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
      <section className="section-container bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Carreiras
          </span>
          <h1 className="section-title mt-4">
            Trabalhe <span className="text-gradient">conosco</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Faça parte de uma equipe que transforma projetos em realidade. 
            Estamos sempre em busca de talentos.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm mb-4">
                  <benefit.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-container bg-card">
        <div className="max-w-2xl mx-auto">
          <div className="card-industrial">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6 text-center">
              Envie seu currículo
            </h2>

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
