create database Biblioteca charset utf8mb4;
use Biblioteca;
create table usuarios(
idUsuario int auto_increment primary key not null,
nombreUsuario varchar(100) not null,
correoUsuario varchar(100) unique not null,
telefonoUusario varchar(20),
estadoUsuario varchar(20)
);

create table autores(
idAutor int auto_increment primary key not null,
nombreAutor varchar(100) not null,
nacionalidadAutor varchar(80),
fecha_nacimientoAutor date
);

create table categorias(
idCategoria int auto_increment primary key not null,
nombreCategoria varchar(80) unique not null,
descripcionCategoria varchar(200)
);

create table libros(
idLibro int auto_increment primary key not null, 
tituloLibro varchar(150) not null,
isbnLibro varchar(30) unique not null,
anio_publicacionLibro int not null,
cantidadLibro int not null,
autor_id int not null, 
categoria_id int not null,
foreign key (autor_id) references autores(idAutor),
foreign key (categoria_id) references categorias(idCategoria)
);

create table prestamos(
idPrestamo int auto_increment primary key not null,
usuario_id int not null,
libro_id int not null,
fechaPrestamo date not null,
fechaDevolucion date not null,
estado varchar(20),
foreign key (usuario_id) references usuarios(idUsuario),
foreign key (libro_id) references libros(idLibro)
);