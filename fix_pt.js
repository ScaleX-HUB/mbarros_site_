const fs = require('fs');
let s = fs.readFileSync('src/locales/pt.ts', 'utf8');

const newSobre =   sobre: {
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
  },;

const newContato =   contato: {
    title: "Contato",
    badge: "CONECTE-SE",
    title1: "Fale ",
    title2: "Conosco",
    desc: "Estamos prontos para atender você e sua empresa. Nossos portfólios são fechados.",
    heroDesc: "Estamos prontos para atender sua solicitação, tirar dúvidas e construir novas parcerias de sucesso.",
    formName: "Nome Completo",
    formEmail: "E-mail",
    formPhone: "Telefone / WhatsApp",
    formSubject: "Assunto",
    formMessage: "Mensagem",
    formBtn: "Enviar Mensagem",
    infoCard: "Nossas Informações",
    infoAddr: "Endereço das Fábricas",
    infoCall: "Ligue para nós",
    info: {
       title1: "Informações de ",
       title2: "Contato",
       phone: "Telefones",
       email: "E-mail",
       address: "Endereço",
       hours: "Horário de Atendimento",
       hours_desc: "Segunda a Sexta: 07:00 às 17:00hrs",
       address_val: "Av. Benjamim, nº 205\\nFragoso – Paulista, PE\\nCEP 53402-010"
    },
    form: {
       title1: "Envie uma ",
       title2: "Mensagem",
       name: "Nome",
       email: "Email",
       phone: "Telefone",
       subject: "Assunto",
       message: "Mensagem",
       name_ph: "Seu nome",
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
  },;

s = s.replace(/sobre: \{.*?teamDesc: .*?\s*\},/s, newSobre);
s = s.replace(/contato: \{.*?infoCall: .*?\s*\},/s, newContato);

fs.writeFileSync('src/locales/pt.ts', s, 'utf8');
