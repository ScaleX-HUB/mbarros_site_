const fs = require('fs');
let text = fs.readFileSync('src/locales/pt.ts', 'utf8');

text = text.replace(/contato: \{(?:.|\n)*?\},/, \contato: {
    badge: "CONTATO",
    title: "Fale com a",
    title2: "MBarros",
    desc: "Estamos prontos para atender você e sua empresa.",
    info: {
      title1: "Informações de",
      title2: "Contato",
      phone: "Telefone",
      email: "Email",
      address: "Endereço",
      hours: "Horário de Atendimento",
      hours_desc: "Segunda a Sexta: 07:00 às 17:00hrs"
    },
    form: {
      title1: "Envie uma",
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

fs.writeFileSync('src/locales/pt.ts', text, 'utf8');
