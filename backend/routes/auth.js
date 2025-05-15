const express = require('express');
const router = express.Router();

const usuarios = [
  { email: 'teste@medico.com', senha: '123456', tipo: 'medico' },
  { email: 'teste@paciente.com', senha: '123456', tipo: 'paciente' }
];

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = usuarios.find(u => u.email === email && u.senha === senha);
  if (user) {
    res.json({ token: 'fake-jwt-token', tipo: user.tipo });
  } else {
    res.status(401).json({ erro: 'Credenciais inválidas' });
  }
});

router.post('/register', (req, res) => {
  const { email, senha, tipo } = req.body;
  usuarios.push({ email, senha, tipo });
  res.status(201).json({ mensagem: 'Registrado com sucesso!' });
});

module.exports = router;
