import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      header: {
        sobre: "Sobre",
        projetos: "Projetos",
        blog: "Blog",
        contato: "Contato",
        sejaParceiro: "Seja um Parceiro",
        faleComEquipe: "Fale com a equipe",
        trabalheConosco: "Trabalhe Conosco",
        busque: "Buscar",
        tema: "Tema",
        idioma: "Idioma"
      },
      hero: {
        badge: "Indústria 100% Nordestina · Orgulhosamente Pernambucana",
        title1: "Estrutura industrial para",
        title2: "marcas que querem crescer",
        subtitle: "Seja parceiro de uma indústria inteligente. Focamos na produção para que você foque nas vendas.",
        ctaParceiro: "Seja um Parceiro",
        ctaContato: "Fale com nosso time"
      },
      authority: {
        badge: "NOSSA HISTÓRIA",
        title1: "Escala industrial com",
        title2: "controle de qualidade",
        desc1: "Estrutura sólida para sustentar o crescimento da sua marca, com destaque para a presença comercial em",
        highlight: "22 cidades e 7 estados",
        desc2: ". Tecnologia Europeia e Chinesa, processos padronizados.",
        capilaridade: "Capilaridade Comercial",
        presenca: "Presença em 22 cidades e 7 estados",
        presencaDesc: "Operação estruturada para atender lojistas com proximidade regional e capacidade industrial consistente.",
        statParque: "Parque Fabril",
        statPecas: "Peças por Mês",
        statCidades: "Cidades com Presença",
        statEstados: "Estados Ativos"
      },
      partnership: {
        badge: "A Parceria",
        title1: "O modelo",
        title2: "White Label",
        desc: "Trabalhamos nos bastidores para que a sua marca brilhe de frente. Com o modelo de parceria industrial da MBARROS, sua loja vende projetos assinados com o seu nome, fabricados com tecnologia Europeia e Chinesa.",
        step1Title: "Você Projeta",
        step1Desc: "Sua equipe desenvolve o design e valida com o cliente usando o software Promob.",
        step2Title: "Nós Validamos",
        step2Desc: "O projeto passa por nosso time de engenharia para revisão e otimização produtiva.",
        step3Title: "Nós Produzimos",
        step3Desc: "A fábrica assume a produção utilizando maquinário de ponta e matéria-prima premium.",
        step4Title: "Seu Cliente Recebe",
        step4Desc: "Entregamos o projeto finalizado com precisão, agilidade e pronto para montagem."
      },
      footer: {
        sobre: "Sobre nós",
        sobreText: "Indústria de móveis planejados alto padrão focada no modelo White Label para lojistas.",
        links: "Links Rápidos",
        contato: "Contato",
        direitos: "Todos os direitos reservados"
      }
    }
  },
  en: {
    translation: {
      header: {
        sobre: "About",
        projetos: "Projects",
        blog: "Blog",
        contato: "Contact",
        sejaParceiro: "Become a Partner",
        faleComEquipe: "Talk to our team",
        trabalheConosco: "Work with Us",
        busque: "Search",
        tema: "Theme",
        idioma: "Language"
      },
      hero: {
        badge: "100% Northeastern Industry · Proudly from Pernambuco",
        title1: "Industrial structure for",
        title2: "brands that want to grow",
        subtitle: "Partner with a smart industry. We focus on production so you can focus on sales.",
        ctaParceiro: "Become a Partner",
        ctaContato: "Talk to our team"
      },
      authority: {
        badge: "OUR HISTORY",
        title1: "Industrial scale with",
        title2: "quality control",
        desc1: "Solid structure to support your brand's growth, highlighting our commercial presence in",
        highlight: "22 cities and 7 states",
        desc2: ". European and Chinese technology, standardized processes.",
        capilaridade: "Commercial Capillarity",
        presenca: "Presence in 22 cities and 7 states",
        presencaDesc: "Structured operation to serve retailers with regional proximity and consistent industrial capacity.",
        statParque: "Manufacturing Plant",
        statPecas: "Pieces per Month",
        statCidades: "Cities with Presence",
        statEstados: "Active States"
      },
      partnership: {
        badge: "The Partnership",
        title1: "The",
        title2: "White Label model",
        desc: "We work behind the scenes so your brand shines upfront. With MBARROS's industrial partnership model, your store sells projects signed with your name, manufactured with European and Chinese technology.",
        step1Title: "You Design",
        step1Desc: "Your team develops the design and validates it with the client using Promob software.",
        step2Title: "We Validate",
        step2Desc: "The project goes through our engineering team for review and production optimization.",
        step3Title: "We Produce",
        step3Desc: "The factory takes over production using state-of-the-art machinery and premium raw materials.",
        step4Title: "Your Client Receives",
        step4Desc: "We deliver the finished project with precision, agility, and ready for assembly."
      },
      footer: {
        sobre: "About us",
        sobreText: "High-end custom furniture industry focused on the White Label model for retailers.",
        links: "Quick Links",
        contato: "Contact",
        direitos: "All rights reserved"
      }
    }
  },
  es: {
    translation: {
      header: {
        sobre: "Nosotros",
        projetos: "Proyectos",
        blog: "Blog",
        contato: "Contacto",
        sejaParceiro: "Sea un Socio",
        faleComEquipe: "Hable con nosotros",
        trabalheConosco: "Trabaja con Nosotros",
        busque: "Buscar",
        tema: "Tema",
        idioma: "Idioma"
      },
      hero: {
        badge: "Industria 100% Nordestina · Orgullosamente de Pernambuco",
        title1: "Estructura industrial para",
        title2: "marcas que quieren crecer",
        subtitle: "Asóciese con una industria inteligente. Nos centramos en la producción para que usted se centre en las ventas.",
        ctaParceiro: "Sea un Socio",
        ctaContato: "Hable con nuestro equipo"
      },
      authority: {
        badge: "NUESTRA HISTORIA",
        title1: "Escala industrial con",
        title2: "control de calidad",
        desc1: "Estructura sólida para apoyar el crecimiento de su marca, destacando nuestra presencia comercial en",
        highlight: "22 ciudades y 7 estados",
        desc2: ". Tecnología europea y china, procesos estandarizados.",
        capilaridade: "Capilaridad Comercial",
        presenca: "Presencia en 22 ciudades y 7 estados",
        presencaDesc: "Operación estructurada para atender a minoristas con proximidad regional y capacidad industrial consistente.",
        statParque: "Planta de Fabricación",
        statPecas: "Piezas por Mes",
        statCidades: "Ciudades con Presencia",
        statEstados: "Estados Activos"
      },
      partnership: {
        badge: "La Asociación",
        title1: "El modelo",
        title2: "White Label",
        desc: "Trabajamos entre bastidores para que su marca brille. Con el modelo de asociación industrial de MBARROS, su tienda vende proyectos firmados con su nombre, fabricados con tecnología europea y china.",
        step1Title: "Usted Diseña",
        step1Desc: "Su equipo desarrolla el diseño y lo valida con el cliente usando el software Promob.",
        step2Title: "Nosotros Validamos",
        step2Desc: "El proyecto pasa por nuestro equipo de ingeniería para su revisión y optimización de producción.",
        step3Title: "Nosotros Producimos",
        step3Desc: "La fábrica asume la producción utilizando maquinaria de última generación y materias primas premium.",
        step4Title: "Su Cliente Recibe",
        step4Desc: "Entregamos el proyecto terminado con precisión, agilidad y listo para su montaje."
      },
      footer: {
        sobre: "Sobre nosotros",
        sobreText: "Industria de muebles a medida de alta gama enfocada en el modelo White Label para minoristas.",
        links: "Enlaces Rápidos",
        contato: "Contacto",
        direitos: "Todos los derechos reservados"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

