---
name: RheinfallCamping
description: Autocaravanas usadas na Covilhã — negócio familiar, direto e sem pressão
colors:
  ink: "#000000"
  ink-photo: "#1c1c1c"
  ink-muted: "#2a2a2a"
  paper: "#ffffff"
  paper-warm: "#f4f4f2"
  gallery-void: "#e6e6e3"
  dourado-poeirento: "#C2A07A"
  verde-floresta: "#2f7d4f"
  vermelho-ferrugem: "#b02020"
  whatsapp-verde: "#25D366"
  whatsapp-verde-hover: "#20bd5a"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "rgba(0,0,0,0.85)"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-verde}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-verde-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  card-vehicle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
  badge-status:
    rounded: "{rounded.full}"
    padding: "6px 12px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: RheinfallCamping

## Overview

**Creative North Star: "O Quintal da Família"**

Este não é um showroom — é o quintal de uma família que há mais de 10 anos compra, prepara e vende autocaravanas na Covilhã. O sistema visual evita qualquer brilho de stand grande ou linguagem de vendas agressiva: sem gradientes brilhantes, sem selos de "oferta imperdível", sem urgência artificial. A confiança vem de blocos de cor sólida (preto, branco, dourado) e texto direto, não de polimento corporativo.

O sistema é predominantemente plano hoje — só duas sombras existem em todo o código (o menu móvel e o cartão "Tem interesse?"). A profundidade visual vem de contraste de cor, não de elevação. Confirmado com o utilizador: a direção para trabalho futuro é introduzir mais profundidade tátil (sombras suaves, cantos generosos) para que botões e cartões pareçam **suaves e convidativos**, não apenas sólidos.

Um único acento serif (Playfair Display) marca o título principal de cada página pública — o hero da home e o título da lista de stock. Tudo o resto usa Inter.

**Key Characteristics:**
- Blocos de cor sólida (preto/branco/dourado) em vez de gradientes ou sombras pesadas
- Cantos generosamente arredondados em toda a interface — nunca cantos vivos
- Um acento serif reservado, não um sistema tipográfico duplo espalhado por tudo
- Cores de estado do stock (dourado/verde/vermelho) fazem trabalho semântico, não decorativo
- Direção confirmada para o futuro: mais profundidade tátil (sombras suaves), mantendo a paleta

## Colors

Paleta quente e contida — a cor é usada para significar estado (disponibilidade do stock), não para decorar.

### Primary
- **Tinta** (`#000000`, `ink`): a cor de ação da interface — botões primários, texto de navegação ativo, véu sobre as fotos grandes da home. Usada também com opacidade decrescente (`/60` a `/80`) como hierarquia de texto secundário sobre fundos claros — nunca mais clara que `/60` em texto que precise de ser lido (ver a Regra do Piso de Contraste, abaixo).

### Secondary
- **Dourado Poeirento** (`#C2A07A`, `dourado-poeirento`): o acento de marca. Usado com moderação: na etiqueta "Brevemente", no cartão de contacto "Tem interesse?" de cada autocaravana disponível, e como tinta suave (`/30`) nos círculos dos ícones dos selos da home. Não é usado como fundo de secção: a faixa dourada lisa da home foi retirada (lia-se a laranja e a vazio). Porque o dourado é claro, todo o texto sobre ele é escuro (`text-black/80` ou `text-black/70`), nunca branco.

### Tertiary
- **Verde Floresta** (`#2f7d4f`, `verde-floresta`): estado "para venda"/"disponível" — etiquetas de stock, ícones de confirmação, destaques de sucesso.
- **Vermelho Ferrugem** (`#b02020`, `vermelho-ferrugem`): estado "vendida" — etiquetas de stock, o cartão de contacto quando a autocaravana já foi vendida.
- **Verde WhatsApp** (`#25D366` em repouso, `#20bd5a` no hover): reservado exclusivamente aos botões que abrem o WhatsApp. É a cor da própria marca WhatsApp, não do site — nunca se mistura com o dourado/verde/vermelho do stock, precisamente para continuar a ler-se como "isto abre o WhatsApp".

### Neutral
- **Papel** (`#ffffff`, `paper`): fundo de cartões, cabeçalho, formulários.
- **Papel Quente** (`#f4f4f2`, `paper-warm`): fundo de secção — a "tela" por detrás dos cartões brancos/pretos em quase todas as páginas.
- **Vazio de Galeria** (`#e6e6e3`, `gallery-void`): fundo do estado vazio da galeria de fotos (autocaravana sem fotos ainda).
- **Tinta de Foto** (`#1c1c1c`, `ink-photo`): fundo por detrás de fotos de autocaravanas (hero e cartões da home, lista de stock, galeria), visível enquanto a foto carrega.
- **Tinta Baixa** (`#2a2a2a`, `ink-muted`): fundo do cartão de contacto quando o veículo já foi vendido.

### Named Rules
**A Regra do Piso de Contraste.** Nenhum texto legível desce abaixo de `black/60` ou `white/60` de opacidade sobre o respetivo fundo — foi medido e corrigido uma vez (várias etiquetas e textos secundários chegavam a `black/40`, 2.85:1, muito abaixo do mínimo de 4.5:1). Novo texto secundário usa `/60`, `/70` ou `/80` — nunca mais claro.

**A Regra do Verde Emprestado.** O verde do WhatsApp (`#25D366`) nunca é reutilizado como cor de acento geral do site — é sempre e só o botão que abre o WhatsApp.

## Typography

**Display Font:** Playfair Display (com Georgia, serif como reserva)
**Body Font:** Inter (com ui-sans-serif, system-ui como reserva)

**Character:** Um acento editorial raro sobre uma base de trabalho neutra — Playfair Display assina um título por página, no máximo; Inter faz o resto do trabalho sem chamar atenção a si próprio.

### Hierarchy
- **Display** (500, Playfair Display): um título por página. Na home é "Autocaravanas usadas na Covilhã", a `2.6rem` no telemóvel, `text-6xl` em tablet e `5.25rem` em ecrã largo, leading 1.02, tracking -0.02em. No stock é "Autocaravanas usadas". Os outros cabeçalhos usam Inter medium.
- **Statement** (500, Inter, `2.5rem` → `text-5xl` → `3.75rem`, leading 1.04, tracking -0.03em): só a frase "Venha ver com calma. Decida sem pressa." da home, em duas tintas: a primeira frase a `ink`, a segunda a `black/60`, cada uma na sua linha. Não é serif, para não roubar o acento único ao hero.
- **Section** (500, Inter, `text-3xl` → `2.75rem`, tracking -0.02em): o cabeçalho "Não somos um stand grande" da home.
- **Headline** (500, `text-3xl md:text-4xl`, Inter): título de página quando não leva o acento serif (ex: detalhe do veículo, contactos, vender).
- **Title** (500, `text-xl`/`text-2xl`, Inter): cabeçalhos de secção e cartão ("Descrição", "Tem interesse?").
- **Body** (400, `0.9375rem` (15px), leading relaxed, Inter): texto corrido de parágrafo. Máximo confortável ~65ch, mas os contentores já limitam isso (`max-w-lg`/`max-w-2xl`).
- **Label** (500, `0.6875rem`/`0.75rem`, tracking 0.05em, maiúsculas, Inter): etiquetas de estado do stock, cabeçalhos de campo em maiúsculas ("TELEFONE", "ONDE ESTAMOS").

### Named Rules
**A Regra do Acento Único.** Playfair Display marca no máximo um momento por página — o título principal ou o nome do produto, nunca os dois, e nunca um cabeçalho de secção. Se um título já é grande e em Inter medium, não precisa também de serif.

## Layout

Contentores centrados com larguras máximas por tipo de página: `max-w-2xl` para páginas legais (Privacidade, Termos), `max-w-5xl` para formulários (Contactos, Vender), `max-w-7xl` para o stock e a home. Gutter horizontal consistente `px-6 lg:px-10`. Ritmo vertical de secção `py-16 md:py-24`.

A home segue esta ordem, cada bloco com o seu fundo: foto grande com o título (escura), bloco de boas-vindas (papel), secção da frase "Venha ver com calma. Decida sem pressa." com foto (papel quente), três cartões Stock, Vender e Contactos (papel) e quatro selos com factos do produto (papel quente, ícones Lucide num círculo dourado a 30%). Secções da home com `py-20 md:py-28`.

- **Hero:** vídeo de drone da Serra da Estrela ao amanhecer (Afonso Oliveira, Pexels, licença livre, crédito no rodapé), a toda a largura, `h-[min(calc(100svh-4rem),860px)]` com mínimo de 560px. Mostra a região, não uma autocaravana, por isso não se faz passar pelo stock. A imagem fixa do vídeo (`serra-estrela-amanhecer.webp`, com versão de 800px) é o primeiro ecrã e o preload do `index.html`; o vídeo (540p no telemóvel, 720p no resto) entra por cima com um fade, só sem movimento reduzido e sem poupança de dados. Botão redondo de pausa no canto superior direito (WCAG 2.2.2). Véu em gradiente só na base; o título e os dois botões em baixo à esquerda, por cima do vídeo. Sem fotos de pessoas.
- **Boas-vindas:** foto real à esquerda (7 de 12 colunas, `aspect-[4/3]`, sombra suave), texto à direita, com o primeiro parágrafo maior (`text-lg`) como entrada.
- **Frase com foto:** espelho das boas-vindas, para as duas secções seguidas não repetirem a composição. A frase em Statement à esquerda (5 de 12 colunas), com o botão preto "Marcar visita" (para /contactos) logo por baixo; à direita uma foto real grande (7 colunas, `aspect-[4/3]`, sombra Convite). No telemóvel: frase, botão, foto. A foto é o único momento da home (taste-skill `picture-develops`, look `film`): ao entrar no ecrã revela-se uma vez, de uma cópia pálida a cinzento até à cor, em cerca de 1,6 s. Com movimento reduzido, sem script ou se o loader falhar, a foto aparece logo. O loader e o momento estão copiados do kit em `public/assets/moments/` e são montados pela própria `HomePage` (não pelo `index.html`).
- **Cartões:** a foto preenche o cartão inteiro (`aspect-[4/5]` em ecrã largo, mínimo 300px no telemóvel), com o texto branco por cima de um véu em gradiente na base. Stock e Contactos mostram autocaravanas reais da família. Vender mostra uma autocaravana genérica ao pôr do sol (Simeon Stoilov, Pexels, crédito no rodapé): é a do visitante que se vende, por isso não se faz passar pelo stock. Imagens de banco só onde não mostram o stock nem pessoas, e nunca geradas por IA. O stock é uma lista: foto, marca, nome, ano, quilómetros, preço e "Ver detalhes". Uma autocaravana vendida fica na lista com o selo "Vendida" e sem preço. Os filtros continuam ao lado, em ecrã largo, e por cima, no telemóvel.

## Elevation & Depth

O sistema continua sobretudo plano: a profundidade vem de blocos de cor sólida, não de sombra. As sombras que existem: `shadow-lg` no menu móvel do cabeçalho e no cartão de contacto "Tem interesse?"; `shadow-sm` pontual (painel de filtros, botão de upload de fotos); e, na home, a sombra Convite (abaixo) na foto de boas-vindas e nos três cartões.

**Direção confirmada para trabalho futuro:** o utilizador quer mais profundidade tátil — cartões e botões devem começar a ganhar sombras suaves e sentir-se mais "convidativos", não só sólidos. A home é o primeiro sítio onde isto está construído (sombra Convite). O resto do site ainda não a usa.

### Shadow Vocabulary (observado hoje)
- **Flutuante** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` — Tailwind `shadow-lg`): menu móvel aberto, cartão de contacto principal. Uso estrutural (indica "isto flutua sobre o conteúdo"), não ambiente.
- **Convite** (`0 2px 4px rgba(0,0,0,0.05), 0 18px 36px -18px rgba(0,0,0,0.4)`; no hover `0 24px 44px -18px rgba(0,0,0,0.45)` e o cartão sobe 2px): cartões da home. A foto de boas-vindas usa a mesma família, mais longa (`0 24px 48px -24px rgba(0,0,0,0.35)`). Sombra com deslocamento vertical e desfoque largo, nunca um halo sem deslocamento.

### Named Rules
**A Regra do Convite Suave.** Novos componentes interativos (cartões, CTAs primários) usam a sombra Convite em repouso e sobem 2px no hover, em vez de ficarem perfeitamente planos. Construída na home; a aplicar ao resto quando cada página for trabalhada.

## Shapes

Cantos generosamente arredondados em toda a parte — nada no site usa cantos vivos num elemento interativo. `rounded-full` para pílulas e emblemas de estado; `rounded-3xl` (24px) reservado ao único cartão mais importante da página de detalhe ("Tem interesse?"); `rounded-2xl` (16px) para cartões e blocos de conteúdo em geral; `rounded-xl` (12px) para botões e campos de formulário; `rounded-lg` (8px) para elementos pequenos (selects de filtro, botões de imagem).

### Named Rules
**A Regra dos Cantos Generosos.** Nenhum elemento interativo usa menos que `rounded-lg` (8px). Quanto mais importante o elemento (o cartão de contacto principal vs. um botão comum), maior o raio.

## Components

### Buttons
- **Shape:** `rounded-xl` (12px) na maioria; `rounded-full` em todos os botões da home (hero e frase com foto).
- **Primary:** fundo `ink` (#000000), texto `paper`, `font-medium`, padding `py-3.5` (14px vertical). Hover: `bg-black/85`.
- **WhatsApp:** fundo `#25D366`, **texto preto** (o branco sobre este verde não passa o contraste), ícone `MessageCircle` inline. Hover: `#20bd5a`. Nunca usa outra cor — ver a Regra do Verde Emprestado.
- **Ghost/Secondary:** fundo transparente, borda `border-black/15` (ou `border-white/30` sobre fundo escuro), texto `ink`/`paper` consoante o fundo. Usado para ações secundárias ("Cancelar", "Fazer Proposta").
- **Hover/Focus:** transição de cor no hover; na home os botões afundam para `scale-[0.98]` ao carregar (nada com movimento reduzido). Foco visível: contorno de 2px com 4px de afastamento, branco sobre fotos, preto sobre fundos claros e dourado.
- **Entrada:** o bloco de texto do hero sobe 12px uma vez ao abrir a página (sem começar invisível, nada com movimento reduzido). É o único movimento automático da home além do momento da foto da frase.

### Badges (estado do stock)
- **Style:** `rounded-full`, texto maiúsculas `text-[0.6875rem]` com `tracking-wider`, padding `px-3 py-1.5`.
- **Para venda:** fundo Verde Floresta, texto branco.
- **Brevemente:** fundo Dourado Poeirento, **texto escuro** (`text-black/80`) — o dourado é claro demais para texto branco.
- **Vendida:** fundo Vermelho Ferrugem, texto branco.

### Cards / Containers
- **Cartão de veículo:** fundo `ink` (preto), `rounded-2xl`, `overflow-hidden`. A foto ganha `scale-[1.04]` no hover.
- **Cartão de secção da home** (Stock, Vender, Contactos): a foto preenche o cartão, `rounded-2xl`, sombra Convite. No hover o cartão sobe 2px, a foto aproxima `scale-[1.03]` dentro da moldura e a seta avança 4px. Estado vendido aplica `grayscale` + `opacity-70` à foto.
- **Cartão de conteúdo (formulários, painéis):** fundo `paper`, `rounded-2xl`, `border border-black/5`, sem sombra.
- **Cartão de destaque "Tem interesse?":** o único `rounded-3xl` do sistema e uma das duas sombras (`shadow-lg`) — reservado ao momento de conversão mais importante de cada página de veículo. Fundo dourado quando a autocaravana está disponível/brevemente; fundo `ink-muted` (#2a2a2a) com texto branco quando já foi vendida.

### Inputs / Fields
- **Style:** fundo `paper` (ou `black/5` sobre o cartão dourado), borda `border-black/15`, `rounded-xl`, padding `px-4 py-3`.
- **Focus:** `focus:border-black/40` + `ring-1 ring-black/20`. Consistente em todos os formulários (Contactos, Vender, Admin, contacto do veículo).
- **Erro:** texto `text-red-700`, sem alterar a borda do campo.

### Navigation
- **Header:** fixo no topo (`sticky`), fundo branco, `border-b border-black/8`. Link ativo: `text-black font-medium`. Inativo: `text-black/60`. Menu móvel: dropdown branco com `shadow-lg`.
- **Footer:** fundo `ink` (preto), texto `white/60` para links, `white/60` para cabeçalhos de coluna (ambos ao mesmo nível — ver Regra do Piso de Contraste).

## Do's and Don'ts

### Do:
- **Do** manter texto secundário em `black/60` ou mais escuro sobre fundo claro (ou `white/60`+ sobre fundo escuro) — nunca mais claro.
- **Do** reservar Playfair Display a um único momento de destaque por página.
- **Do** manter o verde do WhatsApp exclusivo aos botões que abrem o WhatsApp.
- **Do** usar texto escuro sobre o dourado de marca (nunca branco — falha de contraste).
- **Do** experimentar sombras suaves em cartões/CTAs novos, seguindo a direção confirmada de "mais profundidade tátil".
- **Do** manter cantos generosos (`rounded-lg` no mínimo) em qualquer elemento interativo novo.

### Don't:
- **Don't** introduzir gradientes brilhantes, selos de "oferta", contagens decrescentes ou linguagem de urgência — isso é exatamente o "stand grande e corporativo" que o sistema evita por decisão confirmada.
- **Don't** misturar o verde do WhatsApp com o dourado/verde/vermelho do stock.
- **Don't** usar texto branco sobre o dourado de marca.
- **Don't** descer abaixo de `rounded-lg` (8px) num elemento interativo.
- **Don't** adicionar um segundo momento serif à mesma página.
