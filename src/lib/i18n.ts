import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// TODO: Para estruturar completamente o site, os demais textos podem ser 
// transferidos aos poucos para estes dicionários.
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
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
