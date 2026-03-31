const fs = require("fs");

let sobreFile = "src/pages/Sobre.tsx";
let s = fs.readFileSync(sobreFile, "utf8");
s = s.replace("import Layout from \"../components/layout/Layout\";", "import Layout from \"../components/layout/Layout\";\nimport { useTranslation } from \"react-i18next\";");

s = s.replace(/const Sobre = \(\) => {\n  const observer =/g, "const Sobre = () => {\n  const { t } = useTranslation();\n  const observer =");

s = s.replace("SOBRE NÓS", "{t(\"sobre.badge\")}");
s = s.replace("Nossa história de", "{t(\"sobre.title1\")}");
s = s.replace(">tradição e inovação<", ">{t(\"sobre.title2\")}<");
s = s.replace("Desde 1999, transformamos a forma como móveis planejados são produzidos, combinando tecnologia industrial com excelência artesanal.", "{t(\"sobre.desc\")}");
s = s.replace("Nossa Missão", "{t(\"sobre.mission.title\")}");
s = s.replace("Oferecer soluções inovadoras em móveis sob medida, com alto padrão de qualidade, tecnologia avançada e compromisso com o sucesso dos nossos parceiros.", "{t(\"sobre.mission.desc\")}");

s = s.replace("Nossa Visão", "{t(\"sobre.vision.title\")}");
s = s.replace("Ser reconhecida como a principal indústria de móveis sob medida do Brasil, referência em inovação, sustentabilidade e excelência em serviços.", "{t(\"sobre.vision.desc\")}");
s = s.replace("Nossos Valores", "{t(\"sobre.values.title\")}");

s = s.replace(/const values = \[\n\s+{\n\s+title: "Qualidade",\n\s+description: "Compromisso inegociável com os mais altos padrões.",\n\s+},\n\s+{\n\s+title: "Inovação",\n\s+description: "Busca constante por novas tecnologias e processos.",\n\s+},\n\s+{\n\s+title: "Parceria",\n\s+description: "Construção de relações sólidas e duradouras.",\n\s+},\n\s+{\n\s+title: "Sustentabilidade",\n\s+description: "Responsabilidade com o meio ambiente e a sociedade.",\n\s+},\n\s+\];/g, 
`const values = [
    {
      title: t("sobre.values.q_title"),
      description: t("sobre.values.q_desc"),
    },
    {
      title: t("sobre.values.i_title"),
      description: t("sobre.values.i_desc"),
    },
    {
      title: t("sobre.values.p_title"),
      description: t("sobre.values.p_desc"),
    },
    {
      title: t("sobre.values.s_title"),
      description: t("sobre.values.s_desc"),
    },
  ];`);

fs.writeFileSync(sobreFile, s, "utf8");

let contFile = "src/pages/Contato.tsx";
let c = fs.readFileSync(contFile, "utf8");
c = c.replace("import Layout from \"../components/layout/Layout\";", "import Layout from \"../components/layout/Layout\";\nimport { useTranslation } from \"react-i18next\";");

c = c.replace(/const Contato = \(\) => {\n  const observer =/g, "const Contato = () => {\n  const { t } = useTranslation();\n  const observer =");

c = c.replace("CONTATO", "{t(\"contato.badge\")}");
c = c.replace("Fale com a", "{t(\"contato.title\")}");
c = c.replace(">MBarros<", ">{t(\"contato.title2\")}<");
c = c.replace(/Estamos prontos para atender você e sua empresa[\s\S]*?nossos portfólios são fechados\./g, "{t(\"contato.desc\")}");

c = c.replace("Informações de", "{t(\"contato.info.title1\")}");
c = c.replace(">Contato<", ">{t(\"contato.info.title2\")}<");
c = c.replace(">Telefone<", ">{t(\"contato.info.phone\")}<");
c = c.replace(">Email<", ">{t(\"contato.info.email\")}<");
c = c.replace(">Endereço<", ">{t(\"contato.info.address\")}<");
c = c.replace(">Horário de Atendimento<", ">{t(\"contato.info.hours\")}<");
c = c.replace(">Segunda a Sexta: 07:00 às 17:00hrs<", ">{t(\"contato.info.hours_desc\")}<");

c = c.replace("Envie uma", "{t(\"contato.form.title1\")}");
c = c.replace(">Mensagem<", ">{t(\"contato.form.title2\")}<");

c = c.replace("Nome Completo", "{t(\"contato.form.name\")}");
c = c.replace("Email Profissional", "{t(\"contato.form.email\")}");
c = c.replace("Telefone / WhatsApp", "{t(\"contato.form.phone\")}");
c = c.replace("Assunto", "{t(\"contato.form.subject\")}");
c = c.replace("Mensagem", "{t(\"contato.form.message\")}");

c = c.replace(/placeholder="Seu nome completo"/g, "placeholder={t(\"contato.form.name_ph\")}");
c = c.replace(/placeholder="seu@email.com"/g, "placeholder={t(\"contato.form.email_ph\")}");
c = c.replace(/placeholder="\\(00\\) 00000-0000"/g, "placeholder={t(\"contato.form.phone_ph\")}");
c = c.replace(/placeholder="Escolha um assunto..."/g, "placeholder={t(\"contato.form.subject_ph\")}");
c = c.replace("<SelectItem value=\"duvida\">Dúvida</SelectItem>", "<SelectItem value=\"duvida\">{t(\"contato.form.subj_q\")}</SelectItem>");
c = c.replace("<SelectItem value=\"orcamento\">Orçamento</SelectItem>", "<SelectItem value=\"orcamento\">{t(\"contato.form.subj_quote\")}</SelectItem>");
c = c.replace("<SelectItem value=\"parceria\">Parceria</SelectItem>", "<SelectItem value=\"parceria\">{t(\"contato.form.subj_partner\")}</SelectItem>");
c = c.replace("<SelectItem value=\"outro\">Outro</SelectItem>", "<SelectItem value=\"outro\">{t(\"contato.form.subj_other\")}</SelectItem>");

c = c.replace(/placeholder="Como podemos ajudar\?"/g, "placeholder={t(\"contato.form.message_ph\")}");
c = c.replace(">Enviar Mensagem<", ">{t(\"contato.form.send\")}<");


fs.writeFileSync(contFile, c, "utf8");


