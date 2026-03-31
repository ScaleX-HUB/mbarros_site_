const fs = require("fs");
let f = fs.readFileSync("src/components/home/StructureSection.tsx", "utf8");
f = f.replace("import { useReducedMotion } from \"framer-motion\";", "import { useReducedMotion } from \"framer-motion\";\nimport { useTranslation } from \"react-i18next\";");
f = f.replace("const StructureSection = () => {", "const StructureSection = () => {\n  const { t } = useTranslation();");
f = f.replace(/ESTRUTURA INDUSTRIAL/g, "{t(\"structure.badge\")}");
f = f.replace("Estrutura Industrial de<br className=\"hidden md:inline\" />", "{t(\"structure.title1\")}<br className=\"hidden md:inline\" />");
f = f.replace("> Ponta<", "> {t(\"structure.title2\")}<");
f = f.replace(">Equipamentos importados de última geração garantem cortes precisos, furação exata e colagem de bordas impecável em cada peça.<", ">{t(\"structure.desc\")}<");
f = f.replace(/"MDF"/g, "t(\"structure.item1.name\")");
f = f.replace(/"Painel de alta densidade para peças estruturais e de acabamento fino"/g, "t(\"structure.item1.desc\")");
f = f.replace(/"MDP"/g, "t(\"structure.item2.name\")");
f = f.replace(/"Resistência e versatilidade para painéis de larga escala"/g, "t(\"structure.item2.desc\")");
f = f.replace(/"Laca"/g, "t(\"structure.item3.name\")");
f = f.replace(/"Acabamento premium com alto brilho e durabilidade"/g, "t(\"structure.item3.desc\")");
f = f.replace(/"Vidro"/g, "t(\"structure.item4.name\")");
f = f.replace(/"Elegância e sofisticação para portas e detalhes especiais"/g, "t(\"structure.item4.desc\")");
f = f.replace(/"Alumínio"/g, "t(\"structure.item5.name\")");
f = f.replace(/"Perfis estruturais leves e resistentes à corrosão"/g, "t(\"structure.item5.desc\")");
f = f.replace(/"Fita de Borda PUR"/g, "t(\"structure.item6.name\")");
f = f.replace(/"Colagem invisível com alta aderência e durabilidade"/g, "t(\"structure.item6.desc\")");

f = f.replace("Processo Produtivo</p>", "{t(\"structure.production\")}</p>");
f = f.replace("Da chapa bruta ao móvel finalizado</h4>", "{t(\"structure.prodTitle\")}</h4>");
f = f.replace("Conheça as etapas que garantem a qualidade MBarros.</p>", "{t(\"structure.prodDesc\")}</p>");

f = f.replace("Matéria-Prima Premium</p>", "{t(\"structure.rawMaterial\")}</p>");
f = f.replace("Trabalhamos apenas com insumos de alta qualidade para garantir acabamento impecável.</p>", "{t(\"structure.rawDesc\")}</p>");

fs.writeFileSync("src/components/home/StructureSection.tsx", f, "utf8");

