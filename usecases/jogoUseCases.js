const { pool } = require('../config');
const Jogo = require('../entities/jogo')

const getJogosDB = async () => {
    try {    
        const { rows } = await pool.query(`select j.codigo as codigo, j.nome as nome, j.horas_jogadas as horas_jogadas, j.genero as genero, g.nome as genero_nome
        from jogos j
        join generos g on j.genero = g.codigo
        order by j.codigo`);
        return rows.map((jogo) => new Jogo(jogo.codigo, jogo.nome, jogo.horas_jogadas, jogo.genero, jogo.genero_nome));        
    } catch (err) {
        throw "Erro : " + err;
    }
}

const addJogoDB = async (body) => {
    try {   
        const { nome, horas_jogadas, genero } = body; 
        const results = await pool.query(`INSERT INTO jogos (nome, horas_jogadas, genero) 
            VALUES ($1, $2, $3) returning codigo, nome, horas_jogadas, genero`,
        [nome, horas_jogadas, genero]);
        const jogo = results.rows[0];
        return new Jogo(jogo.codigo, jogo.nome, jogo.horas_jogadas, jogo.genero, "");
    } catch (err) {
        throw "Erro ao inserir jogo: " + err;
    }    
}

const updateJogoDB = async (body) => {
    try {   
        const { codigo, nome, horas_jogadas, genero }  = body; 
        const results = await pool.query(`UPDATE jogos set nome = $2 , horas_jogadas = $3, genero = $4 where codigo = $1 
        returning codigo, nome, horas_jogadas, genero`,
        [codigo, nome, horas_jogadas, genero]);        
        if (results.rowCount == 0){
            throw `Nenhum registro encontrado com o código ${codigo} para ser alterado`;
        }
        const jogo = results.rows[0];
        return new Jogo(jogo.codigo, jogo.nome, jogo.horas_jogadas, jogo.genero, "");
    } catch (err) {
        throw "Erro ao alterar genero: " + err;
    }      
}

const deleteJogoDB = async (codigo) => {
    try {           
        const results = await pool.query(`DELETE FROM jogos where codigo = $1`,
        [codigo]);
        if (results.rowCount == 0){
            throw `Nenhum registro encontrado com o código ${codigo} para ser removido`;
        } else {
            return "Jogo removido com sucesso";
        }       
    } catch (err) {
        throw "Erro ao remover o jogo: " + err;
    }     
}

const getJogoPorCodigoDB = async (codigo) => {
    try {           
        const results = await pool.query(`select j.codigo as codigo, j.nome as nome, j.horas_jogadas as horas_jogadas, j.genero as genero, g.nome as genero_nome
        from jogos j
        join generos g on j.genero = g.codigo where j.codigo = $1`,
        [codigo]);
        if (results.rowCount == 0){
            throw "Nenhum registro encontrado com o código: " + codigo;
        } else {
            const jogo = results.rows[0];
            return new Jogo(jogo.codigo, jogo.nome, jogo.horas_jogadas, jogo.genero, jogo.genero_nome);
        }       
    } catch (err) {
        throw "Erro ao recuperar jogo: " + err;
    }     
}

module.exports = {
    getJogosDB, addJogoDB, updateJogoDB, deleteJogoDB, getJogoPorCodigoDB
}
