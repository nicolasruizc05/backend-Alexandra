drop database tienda;
create database tienda charset utf8mb4;
use tienda;
create table productos(
idProduvto int auto_increment primary key,
producto varchar(200) not null,
categoria varchar (100) not null,
precio int not null,
stock int not null
);

select * from productos;