# 💈 Backend - Sistema de Gestão para Barbearia

Este projeto é responsável por fornecer uma API RESTful para gerenciar os dados de uma barbearia, incluindo clientes, cortes, agendamentos e transações financeiras.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução do backend.
- **Express** – Framework minimalista para APIs HTTP.
- **MongoDB** – Banco de dados NoSQL.
- **Mongoose** – ORM para MongoDB.
- **dotenv** – Gerenciamento de variáveis de ambiente.
- **cors** – Habilita requisições de outros domínios.
- **jsonwebtoken** – Autenticação com JWT.
- **bcryptjs** – Criptografia de senhas.
- **morgan** – Log de requisições HTTP.
- **express-validator** – Validação de dados.

---

## 📚 Funcionalidades Implementadas

- [x] CRUD de Clientes
- [ ] CRUD de Cortes
- [ ] CRUD de Agendamentos
- [ ] CRUD de Transações Financeiras
- [ ] Registro de entradas e saídas financeiras
- [ ] Histórico de atendimentos
- [ ] Geração de relatórios e previsões financeiras
- [ ] Integração com WhatsApp
- [ ] Sugestão de cortes com visão computacional

---

## 🧠 Tecnologias Recomendadas para Funcionalidades Futuras

| Funcionalidade                          | Tecnologia/Abordagem                                                        |
|----------------------------------------|-----------------------------------------------------------------------------|
| Integração com WhatsApp                | [Twilio API](https://www.twilio.com/whatsapp), [Venom-Bot](https://github.com/orkestral/venom), [Baileys](https://github.com/WhiskeySockets/Baileys) |
| Relatórios e previsões financeiras     | Node.js + Chart.js (frontend) + [pdfkit](https://pdfkit.org/) ou [puppeteer](https://pptr.dev/) |
| Histórico de atendimentos              | MongoDB (documentos com timestamps)                                         |
| Visão Computacional - Sugestão de cortes | Python (Flask ou FastAPI) + OpenCV                                          |
| Autenticação e Controle de Acesso      | JWT (`jsonwebtoken`), bcryptjs, middleware                                  |

---

## 🛠️ Como Rodar o Projeto Localmente

### Pré-requisitos:
- Node.js v18+
- MongoDB (local ou Atlas)
- Git

### Passo a passo:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/barbearia-backend.git

# 2. Acesse a pasta
cd barbearia-backend

# 3. Instale as dependências
npm install

# 4. Crie um arquivo .env
touch .env
```

Exemplo de .env:
```
MONGO_URI=mongodb://localhost:27017/barbearia
PORT=5000
JWT_SECRET=suasecretkey
```

```bash
# 5. Inicie o servidor com nodemon
npx nodemon src/index.js
```

## 🤝 Como Contribuir

### Criando uma branch:
```bash
# Formato sugerido: tipo/nome-breve-da-feature
git checkout -b feature/criar-endpoint-cortes
```

### Tipos recomendados:
- `feature/` – nova funcionalidade
- `bugfix/` – correção de erro
- `refactor/` – refatoração de código
- `docs/` – alteração de documentação
- `test/` – testes