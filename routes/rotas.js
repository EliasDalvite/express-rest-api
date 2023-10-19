const { Router } = require('express');

const { rotasGeneros } = require('./rotasGeneros');

const { rotasJogos} = require('./rotasJogos');

const rotas = new Router();

rotas.use(rotasGeneros);
rotas.use(rotasJogos);

module.exports = rotas;