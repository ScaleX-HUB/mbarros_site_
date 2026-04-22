import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Cog,
  DraftingCompass,
  Headset,
  Landmark,
  PackageCheck,
  ShieldCheck,
  TrendingUp,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const differentials: ReadonlyArray<{ icon: LucideIcon; title: string }> = [
  { icon: Clock3,      title: "Prazo médio de até 20 dias úteis" },
  { icon: Truck,       title: "Menor custo logístico no Nordeste" },
  { icon: Landmark,    title: "Menor carga tributária regional" },
  { icon: Headset,     title: "Suporte técnico e comercial próximo" },
  { icon: ShieldCheck, title: "Padrão industrial consistente" },
  { icon: Wrench,      title: "Assistência rápida e reposição ágil" },
  { icon: TrendingUp,  title: "Produção escalável para crescimento da loja" },
];

const PartnershipSection = () => {
  const { t } = useTranslation();

  const steps: ReadonlyArray<{ number: string; title: string; description: string; icon: LucideIcon }> = [
    { number: "1", title: t("partnership.step1Title"), description: t("partnership.step1Desc"), icon: DraftingCompass },
    { number: "2", title: t("partnership.step2Title"), description: t("partnership.step2Desc"), icon: ClipboardCheck },
    { number: "3", title: t("partnership.step3Title"), description: t("partnership.step3Desc"), icon: Cog },
    { number: "4", title: t("partnership.step4Title"), description: t("partnership.step4Desc"), icon: PackageCheck },
  ];

  return (
    <section className="section-container bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Badge + Title */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
              {t("partnership.badge")}
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-10">
          <span className="text-foreground">{t("partnership.title1")}</span>{" "}
          <span className="text-primary">{t("partnership.title2")}</span>
        </h2>

        {/* Steps — 4 cards */}
        <div className="relative mb-14">
          <div className="pointer-events-none absolute left-0 right-0 top-[3.1rem] hidden h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <motion.div
                key={number}
                className="group relative card-industrial !p-4 md:!p-5 text-left overflow-hidden border-border/80 hover:border-primary/45"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-primary/10 text-primary border border-primary/30">
                    <Icon size={15} aria-hidden="true" />
                  </div>
                  <span className="text-2xl font-display font-semibold text-primary/80 leading-none">{number}</span>
                </div>
                <h3 className="text-sm font-display font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className="border-t border-border/40 pt-10">
          <h3 className="text-lg md:text-xl font-display font-semibold text-center mb-6">
            Por que lojistas escolhem <span className="text-gradient">a MBarros?</span>
          </h3>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {differentials.map(({ icon: Icon, title }, index) => (
              <motion.div
                key={title}
                className="flex items-center gap-3 border border-border/60 bg-card px-4 py-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary">
                  <Icon size={15} strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button size="lg" className="rounded-none font-bold tracking-widest uppercase px-10" asChild>
            <Link to="/seja-parceiro">
              Quero ser parceiro <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-none font-bold tracking-widest uppercase px-10" asChild>
            <Link to="/contato">Fale com um consultor</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnershipSection;
