const fs = require("fs");
let f = fs.readFileSync("src/components/home/StructureSection.tsx", "utf8");

f = f.replace(/const materials = \[\s+([\s\S]*?)\] as const.+;/g, "");
f = f.replace(/const StructureSection = \(\) => \{\n  const \{ t \} = useTranslation\(\);/,
`const StructureSection = () => {
  const { t } = useTranslation();

  const materials = [
    {
      name: t("structure.item1.name"),
      description: t("structure.item1.desc"),
      icon: Layers,
    },
    {
      name: t("structure.item2.name"),
      description: t("structure.item2.desc"),
      icon: Grid3x3,
    },
    {
      name: t("structure.item3.name"),
      description: t("structure.item3.desc"),
      icon: PaintBucket,
    },
    {
      name: t("structure.item4.name"),
      description: t("structure.item4.desc"),
      icon: Diamond,
    },
    {
      name: t("structure.item5.name"),
      description: t("structure.item5.desc"),
      icon: Cog,
    },
    {
      name: t("structure.item6.name"),
      description: t("structure.item6.desc"),
      icon: Link2,
    },
  ] as const satisfies ReadonlyArray<{ name: string; description: string; icon: LucideIcon }>;`
);

fs.writeFileSync("src/components/home/StructureSection.tsx", f, "utf8");

