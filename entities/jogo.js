class Jogo {
    constructor(codigo, nome, horas_jogadas, genero, genero_nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.horas_jogadas = horas_jogadas;
        this.genero = genero;
        this.genero_nome = genero_nome;
    }
}

module.exports = Jogo;