# AGENTS.md

## Objetivo do projeto

Site institucional da MBarros, feito em React, Vite e TypeScript, com foco em indústria de móveis planejados, portfólio de projetos e captação de lojistas.

## Regras de trabalho neste repositório

- Planeje antes de tarefas não triviais e aguarde confirmação do usuário antes de editar.
- Faça diffs pequenos e revisáveis.
- Não execute ações que afetem remoto git, como pull, push ou criação de PR, sem pedido explícito.
- Não use comandos destrutivos.
- Ao alterar comportamento, escreva ou atualize testes com Vitest.
- Ao alterar código, atualize `ARCHITECTURE.md`, este arquivo ou uma documentação específica da feature.
- Preserve mudanças não relacionadas já existentes no workspace.

## Stack e comandos

- App: React 18, Vite, TypeScript.
- Rotas: `react-router-dom`.
- UI: Tailwind, componentes locais em `src/components/ui`, lucide-react, framer-motion, embla-carousel-react.
- Testes: Vitest com Testing Library e jsdom.

Comandos principais:

```sh
npm test
npm run lint
npm run build
npm run dev
```

## Convenções do app

- Páginas ficam em `src/pages`.
- Layout global fica em `src/components/layout`.
- Componentes reutilizáveis ficam em `src/components/ui`.
- Dados de galeria ficam em `src/lib/project-gallery.ts`; o arquivo `src/lib/project-gallery.generated.ts` é gerado e não deve ser editado manualmente.
- Imagens públicas ficam em `public`.
- Textos de navegação traduzidos ficam em `src/locales`.

## Notas da página de lojistas

- A rota comercial principal é `/seja-parceiro`, apresentada ao usuário como "Seja um Lojista".
- As rotas antigas `/parceiro` e `/white-label` redirecionam para `/seja-parceiro`.
- A página de lojistas inclui carrossel de projetos, vantagens, mapa, contato e formulário no mesmo fluxo.
- O carrossel da página usa imagens convertidas para JPG em `public/imagens_mbarros/lojistas/carrossel`.

## Notas da galeria

- O modal de galeria usa `CardStack3D` com `object-contain` para preservar a proporção das fotos.
- O crop deve ficar restrito aos cards de thumbnail da grade, não às imagens em destaque no modal.
- Projetos corporativos são segmentados manualmente em:
  - Corporativo - Sala de Reunião
  - Corporativo - Auditório
  - Corporativo - Recepção
  - Corporativo - Escritório
  - Corporativo - Buril Tavares
- Não reedite `project-gallery.generated.ts`; aplique overrides em `project-gallery.ts`.
