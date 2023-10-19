const { Router } = require('express');

const {  getJogos, addJogo, updateJogo, deleteJogo, getJogoPorCodigo } = require('../controllers/jogoController');
const rotasJogos = new Router();

rotasJogos.route('/jogo')
   .get(getJogos)
   .post(addJogo)
   .put(updateJogo)

rotasJogos.route('/jogo/:codigo')
   .get(getJogoPorCodigo)
   .delete(deleteJogo)

module.exports = { rotasJogos };