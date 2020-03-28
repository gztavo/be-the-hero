const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors()); // Configuração do error

module.exports = app;


// npm install jest - Teste
// comando: npx jest --init y - node - N - Y