# Teste Front-End - Econverse

Projeto desenvolvido para o teste técnico de Front-End da Econverse. A página reproduz o layout do Figma usando React, TypeScript e Sass, consumindo a lista de produtos em JSON e abrindo o modal de detalhes ao clicar em qualquer item da vitrine.

## Tecnologias

- React
- TypeScript
- Sass (SCSS)
- Vite

## Pré-requisitos

Antes de começar, é necessário ter o **Node.js** (versão 18 ou superior) instalado na máquina.

## 1. Instalação

Abra o terminal, clone o repositório, entre na pasta do projeto e instale as dependências:

```bash
git clone https://github.com/GabrielF1100/teste-front-end.git
cd teste-front-end
npm install
```

## 2. Como rodar o projeto (Modo de Desenvolvimento)

Esse modo sobe o servidor local de desenvolvimento com atualização automática sempre que algum arquivo é salvo:

```bash
npm run dev
```

Depois de rodar o comando, o terminal vai exibir o endereço local. Copie o link abaixo e abra no seu navegador (de preferência no **Google Chrome**):

```text
http://localhost:5173
```

Para encerrar o servidor no terminal, basta pressionar `Ctrl + C`.

## 3. Como compilar o projeto (Build de Produção)

O comando de build compila o TypeScript e o Sass e gera a versão final otimizada (HTML, CSS e JS compactados) dentro da pasta `dist/`, pronta para ir ao ar:

```bash
npm run build
```

Se quiser testar essa versão compilada localmente após rodar o build, execute:

```bash
npm run preview
```

Em seguida, abra o endereço abaixo no **Google Chrome** para visualizar a versão de produção:

```text
http://localhost:4173
```

## 4. Como testar o projeto

Esse comando roda no próprio terminal (sem precisar abrir o navegador) e faz a verificação estática do código com o linter (`oxlint`) e a checagem de tipos do TypeScript (`tsc`), garantindo que não existem erros de sintaxe, variáveis soltas ou problemas de tipagem:

```bash
npm test
```
