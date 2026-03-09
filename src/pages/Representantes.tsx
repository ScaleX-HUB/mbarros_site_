import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Briefcase, Users } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  {
    icon: MapPin,
    title: "Ampla Cobertura",
    description: "Atendemos todos os estados brasileiros com estrutura logística eficiente.",
  },
  {
    icon: Briefcase,
    title: "Suporte Comercial",
    description: "Materiais de apoio, treinamentos e suporte para prospecção de clientes.",
  },
  {
    icon: Users,
    title: "Parceria Sólida",
    description: "Relacionamento de longo prazo com comissões competitivas.",
  },
];

const Representantes = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    experiencia: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Cadastro enviado! Nossa equipe comercial entrará em contato.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cidade: "",
      estado: "",
      experiencia: "",
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
            Representantes
          </span>
          <h1 className="section-title mt-4">
            Seja um <span className="text-gradient">representante</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Expanda seus negócios representando uma indústria sólida. 
            Cadastre-se e conheça nosso modelo comercial.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-industrial text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-sm mb-4">
                  <benefit.icon size={28} className="text-primary" />
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
              Formulário de Cadastro
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
                    Telefone / WhatsApp *
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
                    Cidade *
                  </label>
                  <Input
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estado *
                  </label>
                  <Input
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    required
                    className="bg-background"
                    placeholder="Ex: PE"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Experiência no Segmento
                  </label>
                  <Input
                    value={formData.experiencia}
                    onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                    className="bg-background"
                    placeholder="Ex: 5 anos em móveis"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Sobre você
                </label>
                <Textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                  className="bg-background"
                  placeholder="Conte sobre sua experiência e por que deseja representar a MBarros..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar cadastro"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Representantes;
