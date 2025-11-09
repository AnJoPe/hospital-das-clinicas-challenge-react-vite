# Hospital das Clínicas

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Feito-brightgreen?style=for-the-badge)
![Responsivo](https://img.shields.io/badge/Responsivo-Sim-brightgreen?style=for-the-badge)

---

## ❓ Objetivo do Projeto

Criar uma plataforma web informativa e interativa para o **Hospital das Clínicas**, com o intuito de facilitar o acesso dos pacientes a informações como agendamentos, exames, prescrições, registro, contato e apresentação institucional. O projeto busca oferecer uma experiência visual agradável, organizada e responsiva.

---

## 🚀 Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/AnJoPe/hospital-das-clinicas-challenge-react-vite.git
   cd hospital-das-clinicas-challenge-react-vite
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador o endereço indicado pelo Vite (geralmente http://localhost:5173).

---

## 📁 Estrutura de Pastas e Arquivos

Hospital_das_Clinicas

```
|-- public
|   |-- Guias
|   |   |-- Agendamentos
|   |   |   |-- Telefone
|   |   |   |   `-- etapa_1.png
|   |   |   |-- adendo_1.png
|   |   |   |-- adendo_2.png
|   |   |   |-- etapa_1.png
|   |   |   `-- etapa_2.png
|   |   |-- Exames
|   |   |   |-- Telefone
|   |   |   |   `-- etapa_1.png
|   |   |   |-- adendo_1.png
|   |   |   |-- etapa_1.png
|   |   |   `-- etapa_2.png
|   |   |-- Prescricoes
|   |   |   |-- Telefone
|   |   |   |   `-- etapa_1.png
|   |   |   |-- etapa_1.png
|   |   |   `-- etapa_2.png
|   |   `-- Registro
|   |       |-- Telefone
|   |       |   |-- etapa_1.png
|   |       |   |-- etapa_2.png
|   |       |   |-- etapa_3.png
|   |       |   |-- etapa_4.png
|   |       |   `-- etapa_5.png
|   |       |-- etapa_1.png
|   |       |-- etapa_2.png
|   |       |-- etapa_3.png
|   |       |-- etapa_4.png
|   |       `-- etapa_5.png
|   |-- Icons
|   |   |-- abrir_aba.svg
|   |   |-- agendamentos_icon.svg
|   |   |-- agendamentos_icon_azul.svg
|   |   |-- arrow_back_icon.svg
|   |   |-- cadastro_icon.svg
|   |   |-- contato.svg
|   |   |-- email_branco_icon.svg
|   |   |-- email.svg
|   |   |-- exames_azul_icon.svg
|   |   |-- exames_icon.svg
|   |   |-- faq_icon.svg
|   |   |-- fechar_aba.svg
|   |   |-- github_icon.png
|   |   |-- home_icon.svg
|   |   |-- linkedin_icon.png
|   |   |-- login_icon.svg
|   |   |-- menu_hamburguer_icon.svg
|   |   |-- perfil_icon.svg
|   |   |-- portal_paciente_azul_icon.svg
|   |   |-- portal_paciente_icon.svg
|   |   |-- prescricoes_azul_icon.svg
|   |   |-- prescricoes_icon.svg
|   |   |-- quem_somos_icon.svg
|   |   `-- seta_direita_icon.svg
|   |-- Integrantes
|   |   |-- andre_rosa.png
|   |   |-- jose_diogo.png
|   |   `-- pedro_miranda.png
|   |-- icon.ico
|   `-- logo_hc.png
|-- src
|   |-- components
|   |   |-- BotaoEtapa
|   |   |   `-- BotaoEtapa.tsx
|   |   |-- Guia
|   |   |   `-- Guia.tsx
|   |   |-- Header
|   |   |   `-- Header.tsx
|   |   |-- ImagemEtapa
|   |   |   `-- ImagemEtapa.tsx
|   |   |-- Integrante
|   |   |   `-- Integrante.tsx
|   |   |-- Navbar
|   |   |   `-- Navbar.tsx
|   |   |-- Pergunta
|   |   |   `-- Pergunta.tsx
|   |   `-- Sidebar
|   |       `-- Sidebar.tsx
|   |-- context
|   |   `-- SidebarContext.tsx
|   |-- fonts
|   |   |-- Inter-VariableFont_opszwght.ttf
|   |   |-- Inter_28pt-BoldItalic.ttf
|   |   |-- Inter_28pt-Italic.ttf
|   |   `-- Inter_28pt-MediumItalic.ttf
|   |-- pages
|   |   |-- Agendamentos
|   |   |   `-- Agendamentos.tsx
|   |   |-- Cadastro
|   |   |   `-- Cadastro.tsx
|   |   |-- Contato
|   |   |   `-- Contato.tsx
|   |   |-- Exames
|   |   |   `-- Exames.tsx
|   |   |-- FAQ
|   |   |   `-- FAQ.tsx
|   |   |-- Home
|   |   |   `-- Home.tsx
|   |   |-- Login
|   |   |   `-- Login.tsx
|   |   |-- Perfil
|   |   |   `-- Perfil.tsx
|   |   |-- Prescricoes
|   |   |   `-- Prescricoes.tsx
|   |   |-- QuemSomos
|   |   |   `-- QuemSomos.tsx
|   |   `-- RegistroPaciente
|   |       `-- RegistroPaciente.tsx
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.cjs
|-- README.MD
|-- tailwind.config.cjs
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
`-- vite.config.ts
```

---

## 🛠️ Tecnologias Utilizadas

- **Vite** – Configuração inicial e execução do projeto
- **React** – Criação dos componentes da interface
- **TypeScript** – Tipagem e organização do código
- **Tailwind CSS** – Estilização responsiva com classes utilitárias
- **API Java** – Conexão do Front-end com o Back-end

---

## 👥 Integrantes

- **André Rosa** – Sala: 1TDSA | RM: 563112
- **José Diogo** – Sala: 1TDSA | RM: 562341
- **Pedro Miranda** – Sala: 1TDSA | RM: 562682

---

## 🔗 Repositório no GitHub

📁 Acesse o repositório completo do projeto:  
[https://github.com/AnJoPe/hospital-das-clinicas-challenge-react-vite](https://github.com/AnJoPe/hospital-das-clinicas-challenge-react-vite)

---

---

## 🔗 Projeto na Vercel

📁 Acesse o projeto pela Vercel:  
[https://hospital-das-clinicas-challenge-rea.vercel.app/](https://hospital-das-clinicas-challenge-rea.vercel.app/)

---

## 🔗 Apresentação no YouTube

📽️ Acesse a apresentação do projeto:  
[]()

---
