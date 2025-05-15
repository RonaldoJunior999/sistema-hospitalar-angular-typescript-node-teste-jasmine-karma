# 🏥 Sistema Hospitalar - Angular + Node.js + REST API

Este projeto é um sistema hospitalar completo desenvolvido com **Angular (frontend)**, **Node.js (backend com JSON Server simulado)** e **TypeScript**. Ele permite o cadastro e login de médicos e pacientes, agendamento de consultas, visualização de horários disponíveis, pagamentos via Pix e gerenciamento de atendimentos.

---

## 📦 Funcionalidades

### 👨‍⚕️ Médico
- Cadastro com: nome, telefone, CRM, CNPJ, graduação, dias/horários disponíveis
- Login por CRM + senha
- Validação de CNPJ, e-mail e CRM únicos
- Visualiza suas consultas: agendadas, realizadas e pagas
- Recebe por Pix (chave = CNPJ)

### 👤 Paciente
- Cadastro com: nome, CPF, cartão SUS, endereço, telefone, nascimento
- Login por CPF + senha
- Lista médicos disponíveis
- Agenda consultas em horários livres
- Envia comprovante de pagamento
- Visualiza histórico de agendamentos

---

## 🚀 Tecnologias utilizadas

- Angular 14+
- TypeScript
- HTML + CSS
- Jasmine + Karma (testes)
- JSON Server (backend simulado)
- Postman ou Insomnia para testes REST

---

## 🛠️ Como executar o projeto localmente

### 📁 1. Clone o repositório

```bash
git clone https://github.com/RonaldoJunior999/sistema-hospitalar-angular-typescript-node-teste-jasmine-karma.git
cd sistema-hospitalar-angular

2. Instalar as dependências
```bash
npm install
3. Rodar o servidor de API (JSON Server simulado)
```bash
npm run api
4. Rodar a aplicação Angular
```bash
ng serve
🔬 Testes
```bash
ng test

📲 Testando no Postman ou Insomnia
Você pode testar os endpoints da API via:

POST /login/medico

POST /login/paciente

GET /medicos

POST /agendamentos

PATCH /pagamento

Inclua o token JWT no cabeçalho:

```makefile
Authorization: Bearer <seu-token>