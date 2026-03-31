import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardCheck,
  Cog,
  DraftingCompass,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PartnershipSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "1",
      title: t("partnership.step1Title"),
      description: t("partnership.step1Desc"),
      icon: DraftingCompass,
    },
    {
      number: "2",
      title: t("partnership.step2Title"),
      description: t("partnership.step2Desc"),
      icon: ClipboardCheck,
    },
    {
      number: "3",
      title: t("partnership.step3Title"),
      description: t("partnership.step3Desc"),
      icon: Cog,
    },
    {
      number: "4",
      title: t("partnership.step4Title"),
      description: t("partnership.step4Desc"),
      icon: PackageCheck,
    },
  ] as const satisfies ReadonlyArray<{
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;

  return (
    <section className="section-container bg-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Tag */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
              {t("partnership.badge")}
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
          <span className="text-foreground">{t("partnership.title1")}</span>{" "}
          <span className="text-primary">{t("partnership.title2")}</span>
        </h2>

        <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-20">
          {t("partnership.desc")}
        </p>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[3.1rem] hidden h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  className="group relative card-industrial text-left overflow-hidden border-border/80 hover:border-primary/45"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />

                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center justify-center w-11 h-11 rounded-sm bg-primary/10 text-primary border border-primary/30">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <span className="text-3xl font-display font-semibold text-primary/80 leading-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;

