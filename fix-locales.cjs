const fs = require('fs');
const ptPath = 'src/locales/pt.ts';
let pt = fs.readFileSync(ptPath, 'utf8');

pt = pt.replace(/sobre: \{[\s\S]*?teamDesc: .*\n\s+\},/m, \sobre: {
    title: "Sobre a MBARROS",
    badge: "SOBRE NÓS",
    title1: "Nossa história de ",
    title2: "tradição e inovação",
    desc: "Desde 1999, transformamos a forma como móveis planejados são produzidos, combinando tecnologia industrial com excelência artesanal.",
    mission: {
      title: "Nossa Missão",
      desc: "Oferecer soluções inovadoras em móveis sob medida, com alto padrão de qualidade, tecnologia avançada e compromisso com o sucesso dos nossos parceiros."
    },
    vision: {
      title: "Nossa Visão",
      desc: "Ser reconhecida como a principal indústria de móveis sob medida do Brasil, referência em inovação, sustentabilidade e excelência em serviços."
    },
    values: {
      title: "Nossos Valores",
      q_title: "Qualidade",
      q_desc: "Compromisso inegociável com os mais altos padrões.",
      i_title: "Inovação",
      i_desc: "Busca constante por novas tecnologias e processos.",
      p_title: "Parceria",
      p_desc: "Construção de relações sólidas e duradouras.",
      s_title: "Sustentabilidade",
      s_desc: "Responsabilidade com o meio ambiente e a sociedade."
    },
    histTitle: "A história do grupo",
    cultureTitle: "Nossa Cultura",
    missao: "Missão",
    missaoText: "Oferecer soluções em móveis planejados alto padrão...",
    visao: "Visão",
    visaoText: "Ser a Indústria White Label de móveis referência no Brasil...",
    valores: "Valores",
    valoresText: "Qualidade Excepcional...",
    teamBadge: "NOSSO TIME",
    teamTitle1: "Profissionais dedicados ao seu ",
    teamTitle2: "sucesso",
    teamDesc: "Nossa equipe combina experiência industrial com atendimento focado no lojista."
  },\);

pt = pt.replace(/contato: \{[\s\S]*?infoCall: .*\n\s+\},/m, \contato: {
    badge: "CONTATO",
    title: "Fale com a ",
    title2: "MBarros",
    desc: "Estamos prontos para atender você e sua empresa. Como nosso modelo é B2B, nossos portfólios são fechados.",
    info: {
       title1: "Informações de ",
       title2: "Contato",
       phone: "Telefones",
       email: "E-mail",
       address: "Endereço",
       hours: "Horário de Atendimento",
       hours_desc: "Segunda a Sexta: 07:00 às 17:00hrs"
    },
    form: {
       title1: "Envie uma ",
       title2: "Mensagem",
       name: "Nome Completo",
       email: "Email Profissional",
       phone: "Telefone / WhatsApp",
       subject: "Assunto",
       message: "Mensagem",
       name_ph: "Seu nome completo",
       email_ph: "seu@email.com",
       phone_ph: "(00) 00000-0000",
       subject_ph: "Escolha um assunto...",
       subj_q: "Dúvida",
       subj_quote: "Orçamento",
       subj_partner: "Parceria",
       subj_other: "Outro",
       message_ph: "Como podemos ajudar?",
       send: "Enviar Mensagem",
       success: "Mensagem enviada com sucesso!"
    }
  },\);

fs.writeFileSync(ptPath, pt, 'utf8');
