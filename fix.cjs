const fs = require('fs');
let content = fs.readFileSync('src/pages/Sobre.tsx', 'utf8');

const replacements = {
  'HistÃ³ria': 'História',
  'IndÃºstria': 'Indústria',
  'MÃ³veis': 'Móveis',
  'missÃ£o': 'missão',
  'trÃªs': 'três',
  'dÃ©cadas': 'décadas',
  'construÃmos': 'construímos',
  'trajetÃ³ria': 'trajetória',
  'inovaÃ§Ã£o': 'inovação',
  'atravÃ©s': 'através',
  'Ã©': 'é',
  'tendÃªncias': 'tendências',
  'mÃ³veis': 'móveis',
  'sofisticaÃ§Ã£o': 'sofisticação',
  'visÃ£o': 'visão',
  'propÃ³sito': 'propósito',
  'VÃdeo': 'Vídeo',
  'ConheÃ§a': 'Conheça',
  'indÃºstria': 'indústria',
  'referÃªncia': 'referência',
  'vÃdeo': 'vídeo',
  'apresentaÃ§Ã£o': 'apresentação',
  'evoluÃmos': 'evoluímos',
  'prÃ³pria': 'própria',
  'produÃ§Ã£o': 'produção',
  'funcionÃ¡rios': 'funcionários',
  'padrÃ£o': 'padrão',
  'fabricaÃ§Ã£o': 'fabricação',
  'sÃªnior': 'sênior',
  'ExperiÃªncia': 'Experiência',
  'VisÃ£o': 'Visão',
  'Tecnologia & PrecisÃ£o': 'Tecnologia & Precisão',
  'â€”': '—'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.replace(new RegExp(key, 'g'), value);
}

fs.writeFileSync('src/pages/Sobre.tsx', content);
