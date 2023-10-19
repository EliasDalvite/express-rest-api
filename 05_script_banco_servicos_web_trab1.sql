-- criando tabelas

-- jogos
create table jogos (
	codigo serial not null primary key, 
	nome varchar (40) not null,
	horas_jogadas integer,
	genero integer not null, 
   foreign key (genero) references generos (codigo)
)

-- generos
create table generos (
   codigo serial not null primary key, 
   nome varchar (40) not null
);

-- inserindo registros

-- generos 
insert into generos (nome) values ('FPS') , ('MOBA') , ('Idle') , ('Multiplayer') , ('Coop'); 

-- jogos
insert into jogos (nome, horas_jogadas, genero)
values ('Dota 2', 44, 2), 
('CS:GO 2', 650, 1), 
('Portal 2', 20, 5), 
('Barony', 8, 4), 
('Cookie Clicker', 200, 3);

-- criação da tabela usuários
create table usuarios (
	email varchar(50) not null primary key, 
	senha varchar(20) not null, 
	tipo char(1)  not null, 
	check (tipo = 'T' or tipo = 'A' or tipo = 'U'),
	telefone varchar(14)  not null, 
	nome varchar(50) not null
);

-- inserindo alguns registros na tabela usuários
insert into usuarios (email, senha, tipo, telefone, nome) 
values ('elias.dalvite@yahoo.com', '123456', 'A','(54)99984-4348','Elias Dalvite'), 
('teste@teste.com', '123456', 'U','(54)44484-4348','Teste Teste');