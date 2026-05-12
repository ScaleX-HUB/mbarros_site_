import { Factory, Package, Building2, CalendarDays } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { BrazilMap } from "@/components/ui/brazil-map";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AuthoritySection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Factory,
      value: 10000,
      suffix: "m²",
      label: t("authority.statParque"),
    },
    {
      icon: Package,
      value: 55000,
      suffix: "+",
      label: t("authority.statPecas"),
    },
    {
      icon: Building2,
      value: 22,
      suffix: "",
      label: t("authority.statCidades"),
    },
    {
      icon: CalendarDays,
      value: 35,
      suffix: "",
      label: t("authority.statAnos"),
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Main card — content only */}
          <div className="overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.13)] border border-border/40">

            {/* Content row */}
            <motion.div
              className="grid md:grid-cols-[44%_56%] bg-card"
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Left: map — same background, softer separator */}
              <div className="flex items-center justify-center border-r border-border/30 px-6 pt-0 pb-8 md:px-10 md:pb-10">
                <BrazilMap />
              </div>

              {/* Right: text */}
              <div className="flex flex-col justify-center gap-5 px-8 py-10 md:px-12 md:py-14 lg:px-16">
                <h2
                  className="font-display font-bold uppercase tracking-wider text-foreground leading-tight"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}
                >
                  {t("authority.badge")}
                </h2>

                <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                  <p>{t("authority.previewText1")}</p>
                  <p>{t("authority.previewText2")}</p>
                </div>

                <div className="pt-1">
                  <Button
                    variant="default"
                    size="lg"
                    className="rounded-none font-bold tracking-widest uppercase"
                    asChild
                  >
                    <Link to="/sobre">
                      {t("authority.previewCta")}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-10 bg-border overflow-hidden border border-border/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card text-center py-8 px-4 group hover:bg-muted/40 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="stat-number text-2xl md:text-3xl lg:text-4xl">
                  <CountUp to={stat.value} />
                  <span className="text-xl md:text-2xl">{stat.suffix}</span>
                </div>
                <div className="stat-label text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;

