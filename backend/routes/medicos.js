const express = require('express');
const router = express.Router();

let medicos = [
  { id: 1, nome: 'Dr. João', especialidade: 'Cardiologia' },
  { id: 2, nome: 'Dra. Maria', especialidade: 'Pediatria' }
];

router.get('/', (req, res) => {
  res.json(medicos);
});

router.get('/:id', (req, res) => {
  const medico = medicos.find(m => m.id == req.params.id);
  medico ? res.json(medico) : res.status(404).send('Não encontrado');
});

router.post('/', (req, res) => {
  const novo = { id: Date.now(), ...req.body };
  medicos.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const index = medicos.findIndex(m => m.id == req.params.id);
  if (index !== -1) {
    medicos[index] = { ...medicos[index], ...req.body };
    res.json(medicos[index]);
  } else {
    res.status(404).send('Não encontrado');
  }
});

router.delete('/:id', (req, res) => {
  medicos = medicos.filter(m => m.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
