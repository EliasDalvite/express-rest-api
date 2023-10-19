const { getGenerosDB, addGeneroDB, 
    updateGeneroDB, deleteGeneroDB, getGeneroPorCodigoDB } 
    = require('../usecases/generoUseCases')

const getGeneros = async (request, response) => {
    await getGenerosDB()
          .then(data => response.status(200).json(data))
          .catch(err => response.status(400).json({
            status : 'error',
            message : 'Erro ao consultar generos: ' + err
          }))
}

const addGenero = async (request, response) => {
    await addGeneroDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Genero criado",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateGenero = async (request, response) => {
    await updateGeneroDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Genero alterado",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteGenero = async (request, response) => {
    await deleteGeneroDB(parseInt(request.params.codigo))
        .then(data => response.status(200).json({
            status: "success", message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));        
}

const getGeneroPorCodigo= async (request, response) => {
    await getGeneroPorCodigoDB(parseInt(request.params.codigo))
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));           
}

module.exports = {
   getGeneros, addGenero, updateGenero, deleteGenero, getGeneroPorCodigo
}