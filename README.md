# NLW Agents - Server

Backend do projeto **NLW Agents** desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Fastify** - Framework web rápido
- **Drizzle ORM** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados (com pgvector)
- **Zod** - Validação de schemas
- **Docker** - Containerização

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- Yarn ou npm

## ⚙️ Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd server
```

### 2. Instale as dependências
```bash
yarn install
# ou
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:123456@localhost:5432/agents
```

### 4. Inicie o banco de dados
```bash
docker-compose up -d
```

### 5. Execute as migrações
```bash
yarn drizzle-kit push
# ou
npx drizzle-kit push
```

### 6. Popule o banco (opcional)
```bash
yarn db:seed
# ou
npm run db:seed
```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento
```bash
yarn dev
# ou
npm run dev
```

### Produção
```bash
yarn start
# ou
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts    # Conexão com banco
│   ├── migrations/      # Migrações do Drizzle
│   ├── schema/          # Schemas do banco
│   └── seed.ts          # Dados iniciais
├── http/
│   └── routes/          # Rotas da API
├── env.ts              # Configuração de variáveis
└── server.ts           # Servidor Fastify
```

## 🛠️ Scripts Disponíveis

- `yarn dev` - Executa em modo desenvolvimento com hot reload
- `yarn start` - Executa em modo produção
- `yarn db:seed` - Popula o banco com dados iniciais

## 🔧 Padrões Utilizados

- **TypeScript** para tipagem estática
- **Zod** para validação de schemas e variáveis de ambiente
- **Drizzle ORM** para queries type-safe
- **Fastify** com Type Provider para APIs tipadas
- **Docker** para ambiente de desenvolvimento consistente
- **Biome** para formatação e linting de código

## 📝 Endpoints

- `GET /health-check` - Verificação de saúde da API
- `GET /rooms` - Lista de salas disponíveis

## 📄 Licença

MIT 