# API-de-Gestao-de-Eventos
API de Eventos

Uma API de gerenciamento de eventos construída em Node.js/TypeScript (ou AdonisJS), organizada seguindo uma arquitetura em camadas (Controller → Service → Repository). Este projeto permite gerenciar eventos e usuários, com autenticação, validação de dados e tratamento de erros centralizado.

🏗 Estrutura do Projeto
app/
 ├── Controllers/Http       # Recebe requisições HTTP e chama Services
 ├── Services               # Lógica de negócio da aplicação
 ├── Repositories           # Persistência de dados
 ├── Models                 # Modelos de entidades (Event, User, etc)
 ├── Validators             # Validação de entrada (Zod ou Adonis Validator)
 ├── Middleware             # Middlewares (ex: autenticação)
 └── Exceptions             # Tratamento padronizado de erros

⚙️ Funcionalidades

CRUD completo de eventos: create, read, update e delete.

Gestão de usuários e autenticação via JWT.

Validação de entrada de dados para garantir consistência.

Estrutura modular que facilita manutenção e expansão.

🛠 Tecnologias

Node.js / TypeScript

Express ou AdonisJS

Banco de dados: MySQL / PostgreSQL / MongoDB

Validação: Zod ou Validator do AdonisJS

Autenticação: JWT

🚀 Instalação
# Clone o repositório
git clone https://github.com/SEU_USUARIO/nome-do-projeto.git
cd nome-do-projeto

# Instale dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite .env com as informações do seu banco de dados e JWT

# Rode a aplicação
npm run dev

📌 Endpoints Principais
Eventos
Método	Endpoint	Descrição
POST	/events	Criar um novo evento
GET	/events	Listar todos os eventos
GET	/events/:id	Obter detalhes de um evento
PUT	/events/:id	Atualizar um evento
DELETE	/events/:id	Excluir um evento
Usuários
Método	Endpoint	Descrição
POST	/users	Criar um novo usuário
POST	/auth/login	Login de usuário (JWT)
GET	/users/:id	Obter detalhes do usuário
🔒 Autenticação

JWT (JSON Web Token) para proteger rotas privadas.

Middlewares aplicados nos endpoints que requerem autenticação.

💡 Observações

Seguindo a arquitetura Controller → Service → Repository, a lógica de negócio nunca fica no controller.

Validações são centralizadas nos Validators.

Tratamento de erros centralizado em Exceptions/AppError.ts.