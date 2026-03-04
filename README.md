# Novu — Landing Page

Landing page institucional do **Novu**, um sistema de agendamento online para profissionais de beleza do Brasil. Desenvolvido com React + TypeScript + Vite.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Design System](#design-system)
- [Seções da Página](#seções-da-página)
- [Hooks Customizados](#hooks-customizados)
- [Scripts Disponíveis](#scripts-disponíveis)

---

## Visão Geral

O Novu permite que profissionais de beleza (cabeleireiros, esteticistas, manicures etc.) ofereçam agendamento online 24h por link, com envio automático de lembretes via WhatsApp/SMS, histórico de clientes e painel do gestor para equipes.

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite (plugin React SWC) |
| Estilização | Tailwind CSS 3 |
| Componentes UI | shadcn/ui (Radix UI primitives) |
| Roteamento | React Router DOM v6 |
| Formulários | React Hook Form + Zod resolvers |
| Data fetching | TanStack React Query |
| Ícones | Lucide React |
| Gráficos | Recharts |
| Testes | Vitest |
| Animações | tailwindcss-animate |

---

## Estrutura do Projeto

```
src/
├── components/          # Seções da landing page + UI primitives
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── ForWho.tsx
│   ├── Objection.tsx
│   ├── Pricing.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── NovuLogo.tsx
│   └── ui/              # Componentes shadcn/ui
├── hooks/
│   ├── useScrollReveal.ts   # Animação de entrada ao scroll
│   ├── usePageTitle.ts
│   └── use-mobile.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── lib/
│   └── utils.ts
├── index.css            # Tokens CSS + estilos globais
└── main.tsx
```

---

## Design System

### Paleta de Cores

| Token | Variável CSS | Hex | Uso |
|---|---|---|---|
| Primary | `--color-primary` | `#05487F` | Azul principal, botões, links ativos |
| Accent | `--color-accent` | `#00DEDE` | Teal/ciano, destaques e gradientes |
| CTA | `--color-cta` | `#54E61F` | Verde lime, chamadas de ação |
| Text | `--color-text` | `#384145` | Corpo de texto padrão |
| Neutral 800 | `--color-neutral800` | `#262626` | Títulos e texto de alto contraste |
| Background | `--color-bg` | `#FFFFFF` | Fundo base branco |
| Muted text | — | `#6B6B6B` | Textos secundários e subtítulos |
| Border light | — | `#E8E8E8` | Linhas divisórias e bordas suaves |

Cores Tailwind customizadas disponíveis via `novu.*`:

```js
// tailwind.config.ts
novu: {
  primary:    "#05487F",
  accent:     "#00DEDE",
  cta:        "#54E61F",
  bg:         "#F7F7F7",
  "bg-warm":  "#F3EFE7",
  text:       "#384145",
  neutral800: "#262626",
}
```

### Tipografia

| Papel | Família | Tipo | Uso |
|---|---|---|---|
| Display (`--font-display`) | **CooperBT** (Medium Italic) | Custom font (`/cooper-bt-medium-italic.otf`) | `h1`, `h2`, `h3`, títulos de seção |
| Script (`--font-script`) | **Italiana** | Google Fonts (serif) | Palavras de destaque em itálico nos títulos |
| UI (`--font-ui`) | **Inter** | Google Fonts (sans-serif) | Corpo, labels, botões, navegação |

Regra geral de headings:

```css
h1, h2, h3 {
  font-family: var(--font-display); /* CooperBT */
  font-weight: 500;
  font-style: italic;
}
```

Palavras de acento em títulos usam `Italiana` com `font-weight: 700` e cor `#00DEDE`.

### Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius` / `rounded-lg` | `20px` | Cards e containers |
| `--radius-btn` | `100px` | Botões (pill shape) |
| `rounded-md` | `18px` | Variante média |
| `rounded-sm` | `16px` | Variante pequena |

### Sombras

| Token CSS | Valor | Uso |
|---|---|---|
| `--shadow-card` | `0 2px 16px rgba(0,0,0,0.06)` | Cards padrão |
| `--shadow-elevated` | `0 8px 32px rgba(0,0,0,0.10)` | Elementos elevados |

### Animações

**Scroll Reveal** — elementos com classe `.scroll-reveal` entram com fade + `translateY(28px)` ao ficarem visíveis:

```css
.scroll-reveal          { opacity: 0; transform: translateY(28px); transition: 0.65s; }
.scroll-reveal.revealed { opacity: 1; transform: translateY(0); }
```

Ativado via hook `useScrollReveal()` com stagger de `0.12s` por elemento.

**Hero Entry** — animações em cascata na seção hero com classes `.hero-delay-1` a `.hero-delay-6` (delays de 0.1s a 0.8s).

**Ring Pulse** — anel teal pulsante na ilustração do hero (`ring-pulse`, 2.4s, infinite).

### Componentes de Botão

- **Primário (filled):** `background: #05487F`, `color: #fff`, `border-radius: 100px`, `padding: 16px 40px`
- **Outline:** `border: 2px solid #05487F`, `color: #05487F`, hover preenche com azul
- **CTA verde:** `background: #54E61F`, `color: #262626` (usado em plano destaque)

---

## Seções da Página

| Ordem | Componente | Anchor | Descrição |
|---|---|---|---|
| 1 | `Navbar` | — | Barra fixa com scroll-aware blur + active section tracking |
| 2 | `Hero` | — | Título principal, subheadline, CTA e ilustração SVG animada |
| 3 | `ProblemSection` | — | Dores do público-alvo |
| 4 | `HowItWorks` | `#como-funciona` | Passo a passo do produto |
| 5 | `Features` | `#funcionalidades` | Funcionalidades detalhadas |
| 6 | `ForWho` | — | Perfis de público (cabeleireiros, esteticistas etc.) |
| 7 | `Objection` | — | Quebra de objeções / perguntas frequentes |
| 8 | `Pricing` | `#precos` | Planos Solo (R$ 49/mês) e Salão |
| 9 | `FinalCTA` | — | Chamada final para conversão |
| 10 | `Footer` | — | Links de produto, suporte e legal |

### Planos de Preço

**Solo — R$ 49/mês**
- 1 profissional
- Agenda online 24h
- Lembretes WhatsApp/SMS
- Histórico de clientes
- Link público personalizado

**Salão** (plano destaque — fundo `#05487F`)
- Até 5 profissionais
- Agenda por profissional
- Painel do gestor
- Relatório de agendamentos
- Tudo do plano Solo

> Ambos os planos incluem 14 dias grátis sem necessidade de cartão de crédito.

---

## Hooks Customizados

### `useScrollReveal(staggerDelay?)`

Observa elementos `.scroll-reveal` dentro de um container e adiciona a classe `.revealed` com stagger ao entrarem no viewport (threshold 15%).

```tsx
const ref = useScrollReveal(); // staggerDelay padrão: 0.12s
return <section ref={ref}>...</section>;
```

### `usePageTitle(title)`

Atualiza o `document.title` dinamicamente por página.

### `use-mobile`

Detecta viewport mobile via `matchMedia`.

---

## Scripts Disponíveis

```bash
# Desenvolvimento (porta 8080)
npm run dev

# Build de produção
npm run build

# Build modo desenvolvimento
npm run build:dev

# Preview do build
npm run preview

# Lint
npm run lint

# Testes (Vitest)
npm run test

# Testes em watch mode
npm run test:watch
```

---

## Assets Públicos

| Arquivo | Uso |
|---|---|
| `/logo.png` | Logo Novu (Navbar + Footer) |
| `/completo.png` | Imagem de fundo da seção Hero |
| `/cooper-bt-medium-italic.otf` | Fonte display customizada CooperBT |
