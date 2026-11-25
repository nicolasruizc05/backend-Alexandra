create database acceso charset utf8mb4;
use acceso;
create table usuarios (
id_usuario int auto_increment not null primary key,
usuNombre varchar(200) not null,
usuApellido varchar(200) not null,
usuDireccion varchar (200) not null,
usuTelefono varchar(50) not null,
usuCorreo varchar(100) not null,
usuPassword varchar (150) not null
);

create table roles (
id_rol int auto_increment primary key,
rolNombre varchar (200) not null,
rolDescripcion text not null,
id_usuario int not null,
foreign key (id_usuario) references usuarios(id_usuario)
);