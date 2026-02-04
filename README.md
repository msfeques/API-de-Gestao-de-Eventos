# API-de-Gestao-de-Eventos 🎉📅

API REST para gerenciamento de eventos e usuários, desenvolvida em **Node.js com TypeScript**, organizada seguindo uma **arquitetura em camadas (Controller → Service → Repository)**.

O projeto simula um cenário real de backend, aplicando boas práticas de organização de código, autenticação, validação de dados e tratamento centralizado de erros.

---

## 🏗 Estrutura do Projeto

```text
app/
├── Controllers/
│   └── Http/            # Recebe requisições HTTP e delega para Services
├── Services/            # Lógica de negócio da aplicação
├── Repositories/        # Persistência e acesso a dados
├── Models/              # Modelos de entidades (Event, User, etc.)
├── Validators/          # Validação de entrada de dados
├── Middleware/          # Middlewares (ex: autenticação JWT)
└── Exceptions/          # Tratamento padronizado de erros
```

A separação em camadas garante **manutenção facilitada, testabilidade e escalabilidade**.

---

## ⚙️ Funcionalidades

- CRUD completo de eventos (criar, listar, atualizar e remover)
- Gestão de usuários
- Autenticação e autorização via JWT
- Validação de dados de entrada
- Tratamento centralizado de erros
- Estrutura modular e extensível

---

## 🛠 Tecnologias Utilizadas

- Node.js  
- TypeScript  
- Express
- Banco de dados: PostgreSQL
- Autenticação: JWT (JSON Web Token)  

---

## 🚀 Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/MatheusGIThu/API-de-Gestao-de-Eventos.git
Acesse o diretório do projeto:

cd API-de-Gestao-de-Eventos
Instale as dependências:

npm install
Configure as variáveis de ambiente:

cp .env.example .env
Edite o arquivo .env com as informações do banco de dados e chave JWT.

Execute a aplicação:

npm run dev
```
### 📌 Endpoints Principais
#### 🎉 Eventos
- Método	Endpoint	Descrição
- POST	/events	Criar um novo evento
- GET	/events	Listar todos os eventos
- GET	/events/:id	Obter detalhes de um evento
- PUT	/events/:id	Atualizar um evento
- DELETE	/events/:id	Excluir um evento

---

### 👤 Usuários
#### Método	Endpoint	Descrição
- POST	/users	Criar um novo usuário
- POST	/auth/login	Autenticação de usuário (JWT)
- GET	/users/:id	Obter detalhes do usuário

---
  
## 🔒 Autenticação
- Utiliza JWT (JSON Web Token) para proteção de rotas privadas

- Middlewares aplicados para garantir acesso apenas a usuários autenticados

- Tokens devem ser enviados via header Authorization: Bearer <token>

---

## 💡 Observações Técnicas
- Controllers são responsáveis apenas por receber requisições e retornar respostas

- Toda a lógica de negócio é centralizada nos Services

- A camada Repository abstrai o acesso ao banco de dados

- Validações ficam centralizadas nos Validators

- Erros são tratados de forma padronizada em Exceptions/AppError.ts

---

## 📚 Aprendizados
- Desenvolvimento de APIs REST com Node.js e TypeScript

- Aplicação de arquitetura em camadas

- Implementação de autenticação JWT

- Boas práticas de organização e manutenção de código

- Validação de dados e tratamento de erros

---

## 🚧 Próximas Melhorias
- Testes automatizados

- Documentação com Swagger

- Paginação e filtros

- Deploy em ambiente cloud

---

## 👨‍💻 Autor
Desenvolvido por Matheus Silveira Feques
GitHub: [https://github.com/MsFeques](https://github.com/msfeques)
