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
    <section className="relative overflow-hidden py-20 md:py-28 bg-white text-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,hsl(28_80%_41%/0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(28_80%_41%)]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[hsl(28_80%_41%)]" />
              <span className="bg-[hsl(28_80%_41%)] text-white text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                Contato
              </span>
              <span className="h-px w-8 bg-[hsl(28_80%_41%)]" />
            </div>
          </div>
          <h2 className="font-display font-bold text-black" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Entre em contato
          </h2>
          <p className="mt-3 text-sm text-black/60">
            Lojista, construtora ou arquiteto? Fale com nosso time comercial.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form card */}
          <div className="relative rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(28_80%_41%)]/60 to-transparent rounded-t-2xl" />

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 min-h-[340px] text-center">
                <div className="w-14 h-14 rounded-full bg-[hsl(28_80%_41%)]/15 flex items-center justify-center">
                  <ArrowRight size={28} className="text-[hsl(28_80%_41%)]" />
                </div>
                <h3 className="text-xl font-display font-semibold text-black">Mensagem recebida!</h3>
                <p className="text-black/60 text-sm max-w-xs">
                  Nossa equipe comercial entrará em contato em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-display font-semibold text-black mb-5 tracking-wide uppercase">
                  Dados para contato
                </h3>

                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-black/60 font-medium">Nome *</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full bg-white border border-black/15 rounded-lg pl-9 pr-4 py-2.5 text-sm text-black placeholder:text-black/30
                                   focus:outline-none focus:border-[hsl(28_80%_41%)]/70 focus:ring-1 focus:ring-[hsl(28_80%_41%)]/30 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-black/60 font-medium">Empresa *</label>
                    <div className="relative">
                      <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                      <input
                        name="company" required value={form.company} onChange={handleChange}
                        placeholder="Nome da loja / empresa"
                        className="w-full bg-white border border-black/15 rounded-lg pl-9 pr-4 py-2.5 text-sm text-black placeholder:text-black/30
                                   focus:outline-none focus:border-[hsl(28_80%_41%)]/70 focus:ring-1 focus:ring-[hsl(28_80%_41%)]/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-black/60 font-medium">E-mail *</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="seu@email.com.br"
                        className="w-full bg-white border border-black/15 rounded-lg pl-9 pr-4 py-2.5 text-sm text-black placeholder:text-black/30
                                   focus:outline-none focus:border-[hsl(28_80%_41%)]/70 focus:ring-1 focus:ring-[hsl(28_80%_41%)]/30 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.14em] text-black/60 font-medium">WhatsApp *</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white border border-black/15 rounded-lg pl-9 pr-4 py-2.5 text-sm text-black placeholder:text-black/30
                                   focus:outline-none focus:border-[hsl(28_80%_41%)]/70 focus:ring-1 focus:ring-[hsl(28_80%_41%)]/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Segment */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.14em] text-black/60 font-medium">Perfil do negócio *</label>
                  <select
                    name="segment" required value={form.segment} onChange={handleChange}
                    className="w-full bg-white border border-black/15 rounded-lg px-4 py-2.5 text-sm text-black
                               focus:outline-none focus:border-[hsl(28_80%_41%)]/70 focus:ring-1 focus:ring-[hsl(28_80%_41%)]/30 transition-all appearance-none"
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
                  <label className="text-xs uppercase tracking-[0.14em] text-black/60 font-medium">Mensagem <span className="normal-case text-black/40">(opcional)</span></label>
                  <textarea
                    name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="Conte um pouco sobre o seu negócio ou dúvida..."
                    className="w-full bg-white border border-black/15 rounded-lg px-4 py-2.5 text-sm text-black placeholder:text-black/30 resize-none
                               focus:outline-none focus:border-[hsl(28_80%_41%)]/70 focus:ring-1 focus:ring-[hsl(28_80%_41%)]/30 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[hsl(28_80%_41%)] hover:bg-[hsl(28_80%_36%)] disabled:opacity-60
                             text-white font-semibold text-sm uppercase tracking-[0.14em] rounded-lg py-3 transition-all duration-200"
                >
                  {status === "sending" ? (
                    <span className="animate-pulse">Enviando…</span>
                  ) : (
                    <>Quero ser parceiro <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-center text-[11px] text-black/40 leading-relaxed">
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
