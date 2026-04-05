import { Factory, Package, Building2, CalendarDays, ArrowRight } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { BrazilMap } from "@/components/ui/brazil-map";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
    <section className="section-container bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                {t("authority.badge")}
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            {t("authority.title1")} <span className="text-primary">{t("authority.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            {t("authority.desc1")} <span className="text-foreground font-semibold">{t("authority.highlight")}</span>
            {t("authority.desc2")}
          </p>
        </div>

        <div className="mb-10 rounded-sm border border-primary/20 bg-primary/5 p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t("authority.previewBadge")}
              </p>
              <h3 className="mt-3 text-2xl font-display font-semibold text-foreground md:text-3xl max-w-2xl">
                {t("authority.previewTitle")}
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground max-w-2xl">
                <p>{t("authority.previewText1")}</p>
                <p>{t("authority.previewText2")}</p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm border border-border/70 bg-background/80 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {t("authority.presenca")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("authority.presencaDesc")}
                  </p>
                </div>
                <div className="rounded-sm border border-border/70 bg-background/80 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {t("authority.securityTitle")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("authority.securityDesc")}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <Button variant="heroBorder" size="lg" asChild>
                  <Link to="/sobre">
                    {t("authority.previewCta")}
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-sm border border-border/70 bg-background/80 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {t("authority.mapBadge")}
              </p>
              <p className="mt-2 text-xl font-display font-semibold text-foreground md:text-2xl">
                {t("authority.mapTitle")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">
                {t("authority.mapDesc")}
              </p>
              <div className="mt-6 flex items-center justify-center rounded-sm border border-border/60 bg-card/70 px-4 py-6 opacity-90">
                <BrazilMap />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card-industrial text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className="stat-number text-2xl md:text-3xl lg:text-4xl">
                <CountUp to={stat.value} />
                <span className="text-xl md:text-2xl">{stat.suffix}</span>
              </div>
              <div className="stat-label text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="divider-brand mt-16" />
      </div>
    </section>
  );
};

export default AuthoritySection;

