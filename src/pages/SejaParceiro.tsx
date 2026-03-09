import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const requirements = [
  "Loja física ou showroom",
  "Experiência no segmento de móveis",
  "Capacidade de investimento inicial",
  "Equipe para vendas e projetos",
];

const SejaParceiro = () => {
  const [formData, setFormData] = useState({
    nomeLoja: "",
    nomeResponsavel: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    volumeMensal: "",
    tempoMercado: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Solicitação enviada! Nossa equipe entrará em contato em até 48 horas.");
    setFormData({
      nomeLoja: "",
      nomeResponsavel: "",
      email: "",
      telefone: "",
      cidade: "",
      estado: "",
      volumeMensal: "",
      tempoMercado: "",
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
            Seja um Parceiro
          </span>
          <h1 className="section-title mt-4">
            Cresça com <span className="text-gradient">estrutura industrial</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Preencha o formulário abaixo e nossa equipe comercial 
            entrará em contato para apresentar o modelo de parceria.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Requisitos para parceria
                </h2>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-center gap-3">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-industrial">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Tem dúvidas?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Conheça mais sobre o modelo White Label antes de se cadastrar.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/white-label">
                    Saiba mais
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-industrial">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Formulário de Interesse
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome da Loja *
                      </label>
                      <Input
                        value={formData.nomeLoja}
                        onChange={(e) => setFormData({ ...formData, nomeLoja: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome do Responsável *
                      </label>
                      <Input
                        value={formData.nomeResponsavel}
                        onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Volume Médio Mensal (estimado)
                      </label>
                      <Input
                        value={formData.volumeMensal}
                        onChange={(e) => setFormData({ ...formData, volumeMensal: e.target.value })}
                        className="bg-background"
                        placeholder="Ex: 10 projetos/mês"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tempo de Mercado
                      </label>
                      <Input
                        value={formData.tempoMercado}
                        onChange={(e) => setFormData({ ...formData, tempoMercado: e.target.value })}
                        className="bg-background"
                        placeholder="Ex: 5 anos"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      rows={4}
                      className="bg-background"
                      placeholder="Conte um pouco mais sobre sua loja e seus objetivos..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitação"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você concorda em receber contato da nossa equipe comercial.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SejaParceiro;
