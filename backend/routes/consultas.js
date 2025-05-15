const express = require('express');
const router = express.Router();

let consultas = [
  { id: 1, paciente: 'Carlos Silva', medico: 'Dr. João', data: '2024-06-10' }
];

router.get('/', (req, res) => {
  res.json(consultas);
});

router.get('/:id', (req, res) => {
  const consulta = consultas.find(c => c.id == req.params.id);
  consulta ? res.json(consulta) : res.status(404).send('Não encontrado');
});

router.post('/', (req, res) => {
  const nova = { id: Date.now(), ...req.body };
  consultas.push(nova);
  res.status(201).json(nova);
});

router.put('/:id', (req, res) => {
  const index = consultas.findIndex(c => c.id == req.params.id);
  if (index !== -1) {
    consultas[index] = { ...consultas[index], ...req.body };
    res.json(consultas[index]);
  } else {
    res.status(404).send('Não encontrado');
  }
});

router.delete('/:id', (req, res) => {
  consultas = consultas.filter(c => c.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
