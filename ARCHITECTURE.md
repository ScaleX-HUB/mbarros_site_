# Arquitetura do Site MBarros

## Visão geral

Este repositório contém um site React + Vite + TypeScript para a MBarros. O app é uma SPA com rotas institucionais, portfólio de projetos, busca interna, páginas de contato e fluxo comercial para lojistas.

## Estrutura principal

```text
src/
  App.tsx                  Rotas principais e wrappers globais
  main.tsx                 Bootstrap do React, i18n e CSS global
  pages/                   Páginas de rota
  components/layout/       Header, Footer, botões globais e consentimento
  components/home/         Seções da home
  components/ui/           Componentes reutilizáveis de interface
  lib/                     Dados, busca, i18n e catálogo de projetos
  locales/                 Traduções pt, en e es
  test/                    Setup global de testes
public/
  projetos/                Imagens estruturadas por categoria de projeto
  imagens_mbarros/         Assets institucionais e imagens de apoio
```

## Roteamento

As rotas são definidas em `src/App.tsx` com `react-router-dom`.

Rotas comerciais relevantes:

- `/seja-parceiro`: página principal "Seja um Lojista".
- `/parceiro`: redirect legado para `/seja-parceiro`.
- `/white-label`: redirect legado para `/seja-parceiro`.
- `/contato`: página geral de contato.

## Página Seja um Lojista

`src/pages/SejaParceiro.tsx` concentra a captação de lojistas em uma única página. Ela inclui:

- Hero com chamada "Seja um Lojista".
- Carrossel com imagens de projetos hospitalares, residenciais e hotelaria.
- Grade de vantagens comerciais para o lojista.
- Seção de matriz em Pernambuco com mapa regional e iframe de localização.
- Bloco de contato com WhatsApp, telefone, e-mail, endereço e link do Google Maps.
- Formulário de interesse.

As imagens do carrossel ficam em:

```text
public/imagens_mbarros/lojistas/carrossel/
```

Os arquivos vieram de um zip de feedback e foram convertidos de PNG para JPG para reduzir peso em produção.

## Galeria de projetos

A galeria principal é `src/pages/ProjetosGaleria.tsx`. Ela usa dados de `src/lib/project-gallery.ts`.

`src/lib/project-gallery.generated.ts` é uma base gerada automaticamente a partir dos assets em `public/projetos`. Esse arquivo não deve ser editado manualmente.

`src/lib/project-gallery.ts` combina:

- Dados gerados.
- Overrides de títulos.
- Projetos legados aceitos.
- Segmentação manual de corporativos.

### Segmentação corporativa

Os projetos corporativos publicados são agrupados em entradas editoriais:

- `Corporativo - Sala de Reunião`
- `Corporativo - Auditório`
- `Corporativo - Recepção`
- `Corporativo - Escritório`
- `Corporativo - Buril Tavares`

Imagens corporativas antigas marcadas para retirada no feedback não são publicadas por `PROJECT_GALLERY_ITEMS`.

O projeto `Corporativo - Buril Tavares` usa imagens publicadas em `public/projetos/corporativos/buril-tavares`. Os PNGs e o HEIC enviados no feedback foram convertidos para JPEG para navegação web e carregam como um card próprio, sem duplicar no agrupamento genérico de escritórios.

### Proporção das imagens

`src/components/ui/3d-flip-card.tsx` usa `object-contain` no modal para mostrar a imagem inteira. Isso evita cortes em fotos verticais, especialmente banheiros e decorados.

Os cards da grade continuam usando thumbnails com `object-cover` porque ali o crop funciona como composição visual de capa.

## Busca

`src/lib/search.ts` indexa páginas estáticas, categorias, projetos e posts. A entrada comercial principal é "Seja um Lojista", apontando para `/seja-parceiro`.

## Testes

Os testes usam Vitest e Testing Library. O setup global em `src/test/setup.ts` inclui mocks de APIs ausentes no jsdom:

- `matchMedia`
- `IntersectionObserver`
- `ResizeObserver`
- `fetch` para `brazil-states.geojson`

Testes adicionados para este fluxo cobrem:

- Conteúdo essencial da página de lojistas.
- Navegação para "Seja um Lojista".
- Busca apontando para `/seja-parceiro`.
- Segmentação corporativa e retirada de imagens antigas.
- Preservação de proporção no `CardStack3D`.
