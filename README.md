# 🛍️ BrasilShop

## E-commerce moderno desenvolvido com React + TypeScript

![BrasilShop Banner](./imagem.png)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)](https://github.com/typicode/json-server)

---

## 📖 Sobre o Projeto

**BrasilShop** é um e-commerce completo desenvolvido para demonstrar habilidades em **React com TypeScript**, gerenciamento de estado, consumo de API e criação de interfaces responsivas. O projeto simula uma loja online real onde usuários podem navegar por produtos, adicionar itens ao carrinho e visualizar o valor total da compra.

✨ **Diferenciais técnicos:**
- Código 100% tipado com TypeScript
- Componentes reutilizáveis e modularizados
- Context API para gerenciamento global do carrinho
- Feedback visual com sistema de notificações
- Rotas protegidas e página 404 personalizada

---

## 🎯 Funcionalidades Implementadas

| Funcionalidade | Descrição | Status |
|---------------|-----------|--------|
| 🏠 **Home** | Listagem de produtos consumidos de uma API mock | ✅ |
| 🛒 **Carrinho** | Adicionar/remover produtos com atualização em tempo real | ✅ |
| 💰 **Total automático** | Cálculo dinâmico do valor total do carrinho | ✅ |
| 🔔 **Notificações** | Feedback visual para ações do usuário (Toast/Snackbar) | ✅ |
| 🚫 **404 personalizada** | Página amigável para rotas não encontradas | ✅ |


---

## 🛠️ Tecnologias & Ferramentas

### Front-end
- **React 18** com Functional Components e Hooks
- **TypeScript** - Tipagem estática e melhor manutenibilidade
- **React Router DOM v6** - Navegação SPA
- **Context API** - Gerenciamento de estado global do carrinho


### Desenvolvimento
- **Vite** - Build ultrarrápido e Hot Module Replacement (HMR)
- **JSON Server** - API REST mock para desenvolvimento

### Controle de Versão
- **Git** - Versionamento semântico
- **GitHub** - Repositório remoto

---

## 📦 Como Executar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/Gabriell-Santos/BrasilShop.git

# 2. Acesse a pasta
cd BrasilShop

# 3. Instale as dependências
npm install

# 4. Inicie a API mock (JSON Server)
npx json-server --watch db.json --port 3001

# 5. Em outro terminal, inicie o front-end
npm run dev
