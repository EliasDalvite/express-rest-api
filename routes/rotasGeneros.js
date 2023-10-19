const { Router } = require('express');

const { getGeneros, addGenero, updateGenero, deleteGenero, getGeneroPorCodigo } = require('../controllers/generoController');
const rotasGeneros = new Router();

rotasGeneros.route('/genero')
   .get(getGeneros)
   .post(addGenero)
   .put(updateGenero)

rotasGeneros.route('/genero/:codigo')
   .get(getGeneroPorCodigo)
   .delete(deleteGenero)

module.exports = { rotasGeneros };