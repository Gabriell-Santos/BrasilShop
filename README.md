# 🛍️ BrasilShop

E-commerce brasileiro desenvolvido com React + TypeScript, oferecendo uma experiência completa de compras com carrinho dinâmico e cálculo automático de total.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Funcionalidades

- 🏠 **Página Home** - Catálogo completo de produtos vindos da API
- 🛒 **Carrinho de compras** - Adicione e remova produtos
- 💰 **Cálculo automático do total** - Atualiza em tempo real
- 🔔 **Sistema de notificações** - Feedback para ações do usuário
- 🚫 **Página 404** - Rota não encontrada personalizada
- ⚡ **Alta performance** - Build otimizada com Vite e Fast Refresh

## 🚀 Tecnologias Utilizadas

- **React 18** + Hooks (useState, useEffect, useContext)
- **TypeScript** - Tipagem estática e maior segurança
- **Vite** - Build rápido e desenvolvimento ágil
- **React Router DOM** - Navegação entre páginas
- **JSON Server** - API mock para produtos (db.json)


## 📦 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/Gabriell-Santos/BrasilShop.git

# Acesse a pasta do projeto
cd BrasilShop

# Instale as dependências
npm install

# Inicie o servidor da API (produtos)
npx json-server --watch db.json --port 3001

# Em outro terminal, inicie o front-end
npm run dev
