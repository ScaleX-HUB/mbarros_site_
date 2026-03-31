const fs = require("fs");

let diffFile = "src/components/home/DifferentialsSection.tsx";
let d = fs.readFileSync(diffFile, "utf8");
d = d.replace("import { motion } from \"framer-motion\";", "import { motion } from \"framer-motion\";\nimport { useTranslation } from \"react-i18next\";");
d = d.replace("const DifferentialsSection = () => {", "const DifferentialsSection = () => {\n  const { t } = useTranslation();");
d = d.replace(/const differentials = \[\s+([\s\S]*?)\] as const.+;/g, "");
d = d.replace("const DifferentialsSection = () => {\n  const { t } = useTranslation();",
`const DifferentialsSection = () => {\n  const { t } = useTranslation();

  const differentials = [
    {
      icon: Clock3,
      title: t("differentials.item1.title"),
      description: t("differentials.item1.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("differentials.item2.title"),
      description: t("differentials.item2.desc"),
    },
    {
      icon: Landmark,
      title: t("differentials.item3.title"),
      description: t("differentials.item3.desc"),
    },
    {
      icon: BadgeMinus,
      title: t("differentials.item4.title"),
      description: t("differentials.item4.desc"),
    },
    {
      icon: Wrench,
      title: t("differentials.item5.title"),
      description: t("differentials.item5.desc"),
    },
    {
      icon: TrendingUp,
      title: t("differentials.item6.title"),
      description: t("differentials.item6.desc"),
    },
  ] as const satisfies ReadonlyArray<{ icon: LucideIcon; title: string; description: string }>;`
);

d = d.replace("VANTAGENS COMPETITIVAS", "{t(\"differentials.badge\")}");
d = d.replace("Por que migrar de marcenaria para<br className=\"hidden md:inline\" />", "{t(\"differentials.title1\")}<br className=\"hidden md:inline\" />");
d = d.replace("> Indústria?<", ">{t(\"differentials.title2\")}<");
d = d.replace(">Mais controle de prazo, qualidade consistente e operação pronta para crescer com segurança.<", ">{t(\"differentials.desc\")}<");
fs.writeFileSync(diffFile, d, "utf8");

let ctaFile = "src/components/home/CTASection.tsx";
let c = fs.readFileSync(ctaFile, "utf8");
c = c.replace("import { ArrowRight } from \"lucide-react\";", "import { ArrowRight } from \"lucide-react\";\nimport { useTranslation } from \"react-i18next\";");
c = c.replace("const CTASection = () => {", "const CTASection = () => {\n  const { t } = useTranslation();");
c = c.replace("Sua loja está pronta para", "{t(\"cta.title1\")}");
c = c.replace(">crescer com estrutura industrial?<", ">{t(\"cta.title2\")}<");
c = c.replace(/Descubra como a parceria White Label pode transformar\s+sua operação e impulsionar seus resultados\./g, "{t(\"cta.desc\")}");
c = c.replace("Quero ser parceiro", "{t(\"cta.btnPartner\")}");
c = c.replace("Fale com nosso time", "{t(\"cta.btnContact\")}");
fs.writeFileSync(ctaFile, c, "utf8");

let projFile = "src/components/home/ProjectsSection.tsx";
let p = fs.readFileSync(projFile, "utf8");
p = p.replace("import { PROJECT_CATEGORY_IMAGES, type ProjectCategory } from \"@/lib/project-images\";", "import { PROJECT_CATEGORY_IMAGES, type ProjectCategory } from \"@/lib/project-images\";\nimport { useTranslation } from \"react-i18next\";");
p = p.replace("const ProjectsSection = () => {", "const ProjectsSection = () => {\n  const { t } = useTranslation();");
p = p.replace(/const categories = \[\s+([\s\S]*?)\];/g, "");
p = p.replace("const ProjectsSection = () => {\n  const { t } = useTranslation();",
`const ProjectsSection = () => {\n  const { t } = useTranslation();

  const categories = [
    {
      id: "residenciais",
      title: t("projects.cat1.title"),
      description: t("projects.cat1.desc"),
    },
    {
      id: "corporativos",
      title: t("projects.cat2.title"),
      description: t("projects.cat2.desc"),
    },
    {
      id: "especiais",
      title: t("projects.cat3.title"),
      description: t("projects.cat3.desc"),
    },
  ];`
);
p = p.replace("PORTFÓLIO", "{t(\"projects.badge\")}");
p = p.replace("Móveis planejados para", "{t(\"projects.title\")}");
p = p.replace(">todos os ambientes<", ">{t(\"projects.title2\")}<");
p = p.replace(">Projetamos e fabricamos soluções completas para projetos residenciais, corporativos e comerciais, com o padrão de qualidade da indústria MBarros.<", ">{t(\"projects.desc\")}<");
p = p.replace("Ver todos os projetos", "{t(\"projects.btn\")}");
fs.writeFileSync(projFile, p, "utf8");
console.log("Home complete");

