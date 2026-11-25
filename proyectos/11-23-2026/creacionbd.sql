create database orm charset utf8mb4;
use orm;

create table juegos(
id int auto_increment primary key not null,
nombre varchar(100) not null,
precio int not null
);

create table personajes(
id int auto_increment primary key not null,
nombrePersonaje varchar(100) not null,
juego_id int not null,
foreign key (juego_id) references juegos(id)
);
