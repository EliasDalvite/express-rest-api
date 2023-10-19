class Usuario {
    constructor(email, tipo, telefone, nome, roles){
        this.email = email;
        this.nome = nome;
        this.tipo = tipo;
        this.telefone = telefone;
        this.roles = roles;
    }
}

module.exports = Usuario;