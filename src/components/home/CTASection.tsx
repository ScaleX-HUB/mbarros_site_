import { useState } from "react";
import { ArrowRight, Building2, Mail, Phone, User } from "lucide-react";
import { useTranslation } from "react-i18next";

type FormState = "idle" | "sending" | "sent" | "error";

const CTASection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", segment: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submission — replace with real endpoint if needed
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                Contato
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </div>
          <h2 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Entre em contato
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form card */}
          <div className="relative rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-t-2xl" />

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 min-h-[340px] text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <ArrowRight size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Mensagem recebida!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Nossa equipe comercial entrará em contato em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-display font-semibold text-foreground mb-5 tracking-wide uppercase">
                  Dados para contato
                </h3>

                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium">Nome *</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40
                                   focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium">Empresa *</label>
                    <div className="relative">
                      <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                      <input
                        name="company" required value={form.company} onChange={handleChange}
                        placeholder="Nome da loja / empresa"
                        className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40
                                   focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium">E-mail *</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="seu@email.com.br"
                        className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40
                                   focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium">WhatsApp *</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40
                                   focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Segment */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium">Perfil do negócio *</label>
                  <select
                    name="segment" required value={form.segment} onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground
                               focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
                  >
                    <option value="" disabled>Selecione seu perfil</option>
                    <option value="lojista">Lojista de móveis planejados</option>
                    <option value="construtora">Construtora / Incorporadora</option>
                    <option value="arquiteto">Escritório de Arquitetura</option>
                    <option value="distribuidor">Distribuidor / Representante</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium">Mensagem <span className="normal-case text-muted-foreground/50">(opcional)</span></label>
                  <textarea
                    name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="Conte um pouco sobre o seu negócio ou dúvida..."
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 resize-none
                               focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60
                             text-primary-foreground font-semibold text-sm uppercase tracking-[0.14em] rounded-lg py-3 transition-all duration-200"
                >
                  {status === "sending" ? (
                    <span className="animate-pulse">Enviando…</span>
                  ) : (
                    <>Quero ser parceiro <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-center text-[11px] text-muted-foreground/50 leading-relaxed">
                  Seus dados são usados exclusivamente para contato comercial. Sem spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

