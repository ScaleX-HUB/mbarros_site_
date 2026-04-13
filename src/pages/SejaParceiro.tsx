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
      <section className="bg-card/60 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
            Seja um Parceiro
          </p>
          <h1 className="text-2xl md:text-3xl font-display font-semibold mt-2 text-foreground">
            Cresça com estrutura industrial
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
            Preencha o formulário para avaliarmos o perfil da sua loja e apresentar o modelo de parceria MBARROS.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-container pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="card-industrial">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  Requisitos para parceria
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Estes critérios ajudam a garantir uma operação comercial e produtiva mais eficiente.
                </p>
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
                  Veja como funciona o modelo Parceiro antes de concluir o cadastro.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/parceiro">
                    Saiba mais
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-industrial">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  Formulário de Interesse
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Quanto mais detalhes você informar, melhor será nosso direcionamento comercial.
                </p>

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
