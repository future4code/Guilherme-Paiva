### Exercício 1
a) Chave estrangeira é uma forma de relacionar diferentes tabelas no MySQL. Ao definir uma chave estrangeira e a chave primária de outra tabela, é possível utilizar dados de ambas tabelas ao mesmo tempo.

b) A query é:
```
INSERT INTO Rating VALUES
('001', 'Ótima ideia, filme mais ou menos', 7, '001'),
('002', 'Nunca vi', 10, '002'),
('003', 'Clássico brasileiro', 8, '003'),
('004', 'Matheus Nachtersahigflkmsd', 9, '004');
```

c) A query é:
```
INSERT INTO Rating VALUES
('099', 'O melhor filme de todos os tempos', 11, '099');
```

O código de erro é:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-guilherme-paiva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não é possível adicionar ou atualizar uma linha: limitação da chave estrangeira falhou
```
A chave estrangeira não conseguiu identificar o id '099' na tabela de referência, portanto não consegue executar a ação.

d) A query é:
```
ALTER TABLE Movie DROP COLUMN rating;
```

e) A query é:
```
DELETE from Movie where id = '001';
```
A mensagem de erro é:
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-guilherme-paiva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não é possível deletar ou atualizar uma linha: limitação da chave estrangeira falhou

```
Como esse filme está relacionado a outra tabela através da chave estrangeira, não é possível deletá-lo diretamente assim.

### Exercício 2
a) A tabela tem apenas duas colunas: movie_id e actor_id, cada uma relacionando a tabela de filmes e atores, respectivamente, usando foreign keys.

b) A query é:
```
INSERT INTO MovieCast VALUES
('001', '003'),
('002', '004'),
('003', '005'),
('004', '001'),
('001', '002'),
('003', '006');
```

c) A query é:
```
insert into MovieCast values
('099', '002');
```
A mensagem de erro é:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-guilherme-paiva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não é possível adicionar ou atualizar uma linha: limitação da chave estrangeira falhou
```
Como o id '099' não está na tabela de filmes, não é possível criar esse filme.

d) A query é:
```
delete from Actor where id = '001';
```
A mensagem de erro é:
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-guilherme-paiva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não é possível deletar ou atualizar uma linha: limitação da chave estrangeira falhou
```
Como o ator com id '001' está relacionado aos filmes de id '003' e '002' através da tabela de MovieCast, não é possível deletá-lo dessa forma.

### Exercício 3
a) A query retorna todos os dados da tabela Movie e faz a junção com a tabela Rating, relacionando a coluna id da primeira com a coluna movie_id da segunda. O operador ON serve para determinar a relação entre as duas tabelas, uma sendo a primary key e a outra a foreign key.

b) A query é:
```
SELECT name, Movie.id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 4
a) A query é:
```
SELECT name, Movie.id, rate, comment FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b) A query é: 
```
SELECT name, Movie.id, MovieCast.actor_id FROM Movie 
LEFT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

c) A query é:
```
SELECT AVG(Rating.rate), Movie.id, Movie.name FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id)
```