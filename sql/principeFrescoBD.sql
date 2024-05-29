create DATABASE principeFresco

use principeFresco

-- Crear tabla Colección
CREATE TABLE Coleccion (
  idcoleccion INT IDENTITY(1,1) PRIMARY KEY,
  nombre NVARCHAR(50) NOT NULL,
  descipcion NVARCHAR(255) NOT NULL
);

-- Crear tabla Rol
CREATE TABLE Rol (
  idRol INT IDENTITY(1,1) PRIMARY KEY,
  nombre NVARCHAR(50) NOT NULL,
  beneficios NVARCHAR(255) NOT NULL
);

-- Crear tabla Evento
CREATE TABLE Evento (
  idEvento INT IDENTITY(1,1) PRIMARY KEY,
  nombre NVARCHAR(50) NOT NULL,
  fecha DATE NOT NULL,
  tipo NVARCHAR(50) NOT NULL
);

-- Crear tabla Moneda
CREATE TABLE Moneda (
  idMoneda INT IDENTITY(1,1) PRIMARY KEY,
  Nombre NVARCHAR(50) NOT NULL,
  cantidad INT NULL
);

-- Crear tabla Tienda
CREATE TABLE Tienda (
  idTienda INT IDENTITY(1,1) PRIMARY KEY,
  idevento INT NOT NULL,
  Nombre NVARCHAR(50) NOT NULL,
  Direccion NVARCHAR(255) NOT NULL,
  contacto NVARCHAR(255) NOT NULL,
  FOREIGN KEY (idevento) REFERENCES evento(idevento)
);

-- Crear tabla Cliente
CREATE TABLE Cliente (
  idCliente INT IDENTITY(1,1) PRIMARY KEY,
  Nombre NVARCHAR(50) NOT NULL,
  Contrasena VARCHAR(50) NOT NULL,
  Email NVARCHAR(100) NOT NULL,
  Direccion NVARCHAR(255) NOT NULL,
  idRol INT NOT NULL,
  idMoneda int null,
  FOREIGN KEY (idRol) REFERENCES Rol(idRol),
  FOREIGN KEY (idMoneda) REFERENCES Moneda(idMoneda)
);

-- Crear tabla Producto
CREATE TABLE Producto (
  idProducto INT IDENTITY(1,1) PRIMARY KEY,
  Nombre NVARCHAR(50) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  coleccion INT NOT NULL,
  stock INT NOT NULL,
  idTienda INT NOT NULL,
  imagen1 NVARCHAR(255),
  imagen2 NVARCHAR(255),
  imagen3 NVARCHAR(255),
  FOREIGN KEY (coleccion) REFERENCES Coleccion(idcoleccion),
  FOREIGN KEY (idTienda) REFERENCES Tienda(idTienda)
);


-- Crear tabla Transacción
CREATE TABLE Transaccion (
  idTransaccion INT IDENTITY(1,1) PRIMARY KEY,
  idCliente INT NOT NULL,
  idProducto INT NOT NULL,
  cantidad INT NOT NULL,
  fecha DATE NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
  FOREIGN KEY (idProducto) REFERENCES Producto(idProducto)
);

create table Estado (
    idEstado INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(50) NOT NULL
)

CREATE TABLE PrendaUSada (
  idPrenda INT IDENTITY(1,1) PRIMARY KEY,
  idCliente INT NOT NULL,
  cantidad INT NOT NULL,
  idEstado int NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
  FOREIGN KEY (idEstado) REFERENCES Estado(idEstado)
);


-- Insertar datos en la tabla Colección
INSERT INTO Coleccion (nombre, descipcion) VALUES
('Verano 2024', 'Colección de verano con colores brillantes y tejidos ligeros'),
('Invierno 2024', 'Colección de invierno con abrigos y accesorios cálidos'),
('Primavera 2024', 'Colección de primavera con tonos pastel y flores'),
('Otoño 2024', 'Colección de otoño con colores terrosos y ropa cómoda'),
('Edición Limitada', 'Colección especial de edición limitada');

-- Insertar datos en la tabla Rol
INSERT INTO Rol (nombre, beneficios) VALUES
('Administrador', 'Acceso total al sistema, gestión de usuarios y productos'),
('Cliente', 'Acceso a compras, historial de transacciones y perfil'),
('Vendedor', 'Gestión de ventas y productos en la tienda'),
('Invitado', 'Acceso limitado para navegar productos'),
('Suscriptor', 'Acceso a ofertas especiales y descuentos');

-- Insertar datos en la tabla Evento
INSERT INTO Evento (nombre, fecha, tipo) VALUES
('Lanzamiento Verano 2024', '2024-06-01', 'Lanzamiento'),
('Black Friday', '2024-11-29', 'Descuento'),
('Navidad 2024', '2024-12-25', 'Festivo'),
('Día del Cliente', '2024-08-15', 'Promoción'),
('Cyber Monday', '2024-12-02', 'Descuento');

-- Insertar datos en la tabla Moneda
INSERT INTO Moneda (Nombre, cantidad) VALUES
('Puntos de Recompensa', 1000),
('Créditos Tienda', 500),
('Bonos Descuento', 200),
('Gift Cards', 5),
('Cupones Promocionales', 10);

-- Insertar datos en la tabla Tienda
INSERT INTO Tienda (Nombre,idevento, Direccion, contacto) VALUES
('Tienda Central',1, 'Calle Principal 123, Ciudad', 'contacto@tiendacentral.com'),
('Tienda Norte',2, 'Avenida Norte 456, Ciudad', 'contacto@tiendanorte.com'),
('Tienda Sur',4, 'Calle Sur 789, Ciudad', 'contacto@tiendasur.com'),
('Tienda Este',1, 'Avenida Este 101, Ciudad', 'contacto@tiendaeste.com'),
('Tienda Oeste',3, 'Calle Oeste 202, Ciudad', 'contacto@tiendaoeste.com');

-- Insertar datos en la tabla Cliente
INSERT INTO Cliente (Nombre, Contrasena, Email, Direccion, idRol, idMoneda) VALUES
('Juan Pérez', 'password123', 'juan.perez@example.com', 'Calle Falsa 123', 2, 1),
('María García', 'mypassword', 'maria.garcia@example.com', 'Avenida Siempre Viva 456', 2, 2),
('Carlos Sánchez', 'securepass', 'carlos.sanchez@example.com', 'Calle Luna 789', 3, 3),
('Ana López', 'password456', 'ana.lopez@example.com', 'Avenida Sol 101', 2, 4),
('Pedro Gómez', 'password789', 'pedro.gomez@example.com', 'Calle Estrella 202', 4, NULL);

-- Insertar datos en la tabla Producto
INSERT INTO Producto (Nombre, precio, coleccion, stock, idTienda, imagen1, imagen2, imagen3) VALUES
('Fresh Stripe Sweater', 19.99, 1, 50, 1, 'https://i.ibb.co/g6X1nX5/Frame-14.png', 'https://i.ibb.co/QMgYzMD/Frame-16-1.png', 'https://i.ibb.co/JzQsYbC/Frame-15.png'),
('Fresh Black Tie-Dye Hoodie', 79.99, 2, 20, 2, 'https://i.ibb.co/cCpYMc5/Rectangle-4.png', 'https://i.ibb.co/3h68GtQ/Frame-18.png', 'https://i.ibb.co/mDpkdW8/Frame-19.png'),
('Vestido Primavera', 49.99, 3, 30, 3, 'https://i.ibb.co/Y2sNJTv/Frame-20-1.png', 'https://i.ibb.co/c1LrVbB/Frame-22.png', 'https://i.ibb.co/RzWZv6q/Frame-21.png');


-- Insertar datos en la tabla Transacción
INSERT INTO Transaccion (idCliente, idProducto, cantidad, fecha) VALUES
(1, 1, 2, '2024-01-15'),
(2, 2, 1, '2024-02-20'),
(3, 3, 3, '2024-03-25'),
(4, 4, 1, '2024-04-30'),
(5, 5, 2, '2024-05-05');

-- Insertar datos en la tabla Estado
INSERT INTO Estado (nombre) VALUES
('Nuevo'),
('Usado'),
('Defectuoso'),
('Reacondicionado'),
('Descatalogado');

-- Insertar datos en la tabla PrendaUsada
INSERT INTO PrendaUsada (idCliente,cantidad, idEstado) VALUES
(1,1, 2),
(2,2, 3),
(3, 1, 4),
(4, 3, 1),
(5, 2, 5);
