# Teste Front-End — Econverse

Implementação da página de vitrine de produtos da **Econverse** desenvolvida como parte do processo seletivo para a vaga de Desenvolvedor Front-End.

## Tecnologias utilizadas

- **React 19** + **TypeScript**
- **Sass (SCSS)** para estilização modular (sem bibliotecas de UI como Bootstrap ou Tailwind)
- **Vite** para ambiente de desenvolvimento e build de produção

## Funcionalidades e especificações atendidas

- **Layout fiel ao Figma:** cores, tipografia (`Poppins`), dimensões e espaçamentos reproduzidos conforme o protótipo (`1440px` desktop e adaptações responsivas para tablet e mobile).
- **Consumo da vitrine em JSON:** busca assíncrona dos produtos a partir do endpoint oficial da Econverse (`useProducts`), com tratamento de carregamento, erro e formatação de moeda em Real (`Intl.NumberFormat('pt-BR')`).
- **Modal de detalhes do produto:** ao clicar em qualquer card de produto ou no botão **Comprar**, abre um modal (`<dialog>` nativo) com foto, título, preço formatado, descrição curta e seletor de quantidade (`01` a `99`), fechando pelo botão `✕`, tecla `ESC` ou clique fora da caixa.
- **Carrossel de produtos:** navegação horizontal suave com `scroll-snap` e setas laterais.
- **HTML semântico, acessibilidade e SEO:** uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`, atributos `aria-*`, foco visível por teclado e meta tags de descrição e Open Graph.

## Pré-requisitos

- **Node.js** `>= 20`
- **npm** `>= 10`

## Como instalar e rodar o projeto

1. Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/GabrielF1100/teste-front-end.git
cd teste-front-end
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite com HMR |
| `npm run build` | Compila TypeScript (`tsc -b`) e gera o bundle de produção em `dist/` |
| `npm run preview` | Serve a versão compilada localmente (`http://localhost:4173`) |
| `npm run lint` | Executa a verificação estática de código com `oxlint` |

## Estrutura de pastas

```text
src/
├── assets/               # Logotipos exportados do Figma
├── components/
│   ├── BrandList/        # Seção "Navegue por marcas"
│   ├── Carousel/         # Carrossel horizontal reutilizável
│   ├── CategoryList/     # Faixa de categorias com ícones
│   ├── Footer/           # Rodapé institucional
│   ├── Header/           # Barra de benefícios, busca, ações e menu
│   ├── Hero/             # Banner principal Black Friday
│   ├── Icons/            # Ícones SVG inline
│   ├── Newsletter/       # Formulário de captura de newsletter
│   ├── ProductCard/      # Card individual de produto
│   ├── ProductModal/     # Modal de detalhes e compra do produto
│   ├── ProductSection/   # Seção de vitrine com abas e carrossel
│   └── PromoBanners/     # Banners duplos de parceiros
├── hooks/
│   └── useProducts.ts    # Hook de busca dos produtos em JSON
├── styles/
│   ├── _variables.scss   # Paleta de cores, fontes e breakpoints
│   ├── _reset.scss       # Reset CSS
│   ├── _base.scss        # Estilos globais e utilitários (.container, .sr-only)
│   └── main.scss         # Ponto de entrada Sass
├── types/
│   └── product.ts        # Tipagens TypeScript da API e dos produtos
├── utils/
│   └── format.ts         # Formatação de valores em BRL (R$)
├── App.tsx               # Composição da página principal
└── main.tsx              # Inicialização da aplicação React
```

## Observação sobre CORS da API de produtos

O endpoint público `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json` não envia o cabeçalho `Access-Control-Allow-Origin`, o que faz navegadores bloquearem requisições `fetch` diretas vindas de outra origem. Para contornar isso de forma limpa sem alterar os dados da API, o [`vite.config.ts`](./vite.config.ts) configura um proxy em `/api/produtos` (tanto no `npm run dev` quanto no `npm run preview`) que redireciona a chamada diretamente ao servidor da Econverse.
