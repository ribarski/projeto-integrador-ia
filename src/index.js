require('dotenv').config(); // Carrega variáveis de ambiente do .env
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const clienteRoutes = require('./routes/cliente.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite JSON no corpo das requisições

// Conecta ao MongoDB
connectDB();

// Rotas
app.use('/api/clientes', clienteRoutes);

// Rota básica (opcional)
app.get('/', (req, res) => {
  res.send('API da Barbearia rodando 🚀');
});

// Inicia servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
