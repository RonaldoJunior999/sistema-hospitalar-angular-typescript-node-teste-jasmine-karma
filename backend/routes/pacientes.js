const express = require('express');
const router = express.Router();

let pacientes = [
  { id: 1, nome: 'Carlos Silva', idade: 30 },
  { id: 2, nome: 'Ana Paula', idade: 45 }
];

router.get('/', (req, res) => {
  res.json(pacientes);
});

router.get('/:id', (req, res) => {
  const paciente = pacientes.find(p => p.id == req.params.id);
  paciente ? res.json(paciente) : res.status(404).send('Não encontrado');
});

router.post('/', (req, res) => {
  const novo = { id: Date.now(), ...req.body };
  pacientes.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const index = pacientes.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    pacientes[index] = { ...pacientes[index], ...req.body };
    res.json(pacientes[index]);
  } else {
    res.status(404).send('Não encontrado');
  }
});

router.delete('/:id', (req, res) => {
  pacientes = pacientes.filter(p => p.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
