const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const rota = 'http://localhost:3002'

chai.use(chaiHttp);
const expect = chai.expect;

describe('Teste rotas de get de jogo', () => {

  it('Deve retornar status 200 na rota /jogo', (done) => {
    chai.request(rota)
      .get('/jogo')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Deve retornar status 404 em uma rota inexistente de jogo', (done) => {
    chai.request(rota)
      .get('/rota_inexistente')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Deve retornar um objeto JSON na rota /jogo', (done) => {
    chai.request(rota)
      .get('/jogo')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });

  it('Deve retornar mensagem de nao encontrado /jogo/888', (done) => {
    chai.request(rota)
      .get('/jogo/888')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Erro ao recuperar jogo: Nenhum registro encontrado com o código: 888');
        done();
      });
  });

  it('Deve retornar um jogo especifico na rota /jogo/2', (done) => {
    chai.request(rota)
      .get('/jogo/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.genero).to.equal(1);
        done();
      });
  });

});

describe('Teste de rotas get de genero', () => {

  it('Deve retornar status 200 na rota /genero', (done) => {
    chai.request(rota)
      .get('/genero')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  
  it('Deve retornar status 404 em uma rota inexistente de genero', (done) => {
    chai.request(rota)
      .get('/ge')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Deve retornar um objeto JSON na rota /genero', (done) => {
    chai.request(rota)
      .get('/genero')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });

  it('Deve retornar mensagem de nao encontrado /genero/888', (done) => {
    chai.request(rota)
      .get('/genero/888')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Erro ao recuperar genero: Nenhum registro encontrado com o código: 888');
        done();
      });
  });

  it('Deve retornar um jogo especifico na rota /genero/2', (done) => {
    chai.request(rota)
      .get('/genero/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.nome).to.equal('MOBA');
        done();
      });
  });
});

// const generoTeste = "15"
// describe('Teste de rotas fluxo inteiro de genero', () => {
//   it('Deve criar um novo genero', (done) => {
//     const novoRecurso = {
//       nome: 'novoGenero',
//     };
//     chai.request(rota)
//       .post('/genero') 
//       .send(novoRecurso) 
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.an('object');
//         expect(res.body.objeto.nome).to.equal('novoGenero');
//         expect(res.body.message).to.equal('Genero criado');
//         done();
//       });
//   });

//   it('Deve alterar um genero já existente', (done) => {
//     const novoRecurso = {
//       codigo: generoTeste,
//       nome: 'novoGenero2',
//     };
//     chai.request(rota)
//       .put('/genero') 
//       .send(novoRecurso) 
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.an('object');
//         expect(res.body.objeto.nome).to.equal('novoGenero2');
//         expect(res.body.message).to.equal('Genero alterado');
//         done();
//       });
//   });

//   it('Deve excluir um genero específico', (done) => {
//     chai.request(rota)
//       .delete('/genero/' + generoTeste)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.have.property('message').to.equal('Genero removido com sucesso');
//         done();
//       });
//   });

//   it('Deve tentar excluir o que pena foi excluido e dar errado', (done) => {
//     chai.request(rota)
//       .delete('/genero/' + generoTeste)
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body).to.have.property('message').to.contains('Erro ao remover genero: Nenhum registro encontrado com o código');
//         done();
//       });
//   });
// });