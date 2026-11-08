create database taller_api charset utf8mb4;
use taller_api;
create table usuarios(
id int auto_increment primary key,
nombre varchar(100) not null,
apellido varchar(100) not null,
direccion varchar(200),
telefono varchar(20)
);
create table productos(
id int auto_increment primary key,
proNombre varchar(100) not null,
proDescripcion text,
proPrecio decimal(10,2) not null,
proStock int not null
);