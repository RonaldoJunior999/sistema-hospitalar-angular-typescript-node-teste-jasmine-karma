const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importação das rotas
app.use('/auth', require('./routes/auth'));
app.use('/pacientes', require('./routes/pacientes'));
app.use('/consultas', require('./routes/consultas'));
app.use('/medicos', require('./routes/medicos'));

app.get('/', (req, res) => {
  res.send('API Hospitalar funcionando!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
