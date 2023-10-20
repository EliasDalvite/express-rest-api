# express-rest-api

Tal API foi desenvolvida de acordo com trabalho proposto pela disciplina "Serviços WEB".

O objetivo deste trabalho é propiciar a pesquisa e o desenvolvimento de APIs REST com tecnologias vigentes, abrangendo desde a criação de documentação da API, até a efetiva implementação e integração com banco de dados.

## ENDPOINTS DE GÊNERO
> GET busca todos generos
```javascript
url: (GET) http://localhost:3002/genero
//
```

> GET busca apenas por um genero
```javascript
url: (GET) http://localhost:3002/genero/$codigoDoGenero
//
```

> POST add genero
```javascript
url: (POST) http://localhost:3002/genero
{
	"nome": "exemploGenero"
}
```

> PUT alterar genero
```javascript
url: (PUT) http://localhost:3002/genero
{
	"codigo": $codigo,
	"nome": "nome alterado"
}
```

> DELETE deleta apenas um genero
```javascript
url: (DELETE) http://localhost:3002/genero/$codigoDoGenero
//
```

## ENDPOINTS DE JOGO 
> GET busca todos jogos
```javascript
url: (GET) http://localhost:3002/jogo
//
```

> GET busca apenas por um genero
```javascript
url: (GET) http://localhost:3002/jogo/$codigoDoJogo
//
```

> POST add genero
```javascript
url: (POST) http://localhost:3002/jogo
{
	"nome": "exemploJogo",
	"horas_jogadas": 1000,
	"genero": 2
}
```

> PUT alterar jogo
```javascript
url: (PUT) http://localhost:3002/jogo
{
	"codigo": $codigo,
	"nome": "nome alterado"
	"horas_jogadas": $horasEmInt,
	"genero": $codigoGenero
}
```

> DELETE deleta apenas um jogo
```javascript
url: (DELETE) http://localhost:3002/jogo/$codigoDoJogo
//
```

