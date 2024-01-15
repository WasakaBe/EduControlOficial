CREATE DATABASE EDUCONTROL;
USE EDUCONTROL;

/*CREATION OF TABLES OF THE DIFERENTS ROLS USERS*/
CREATE TABLE TBL_ROLS_USER(
ID_ROLS_USER INT AUTO_INCREMENT PRIMARY KEY,
NAME_ROLS_USER  VARCHAR(255)
);
INSERT INTO TBL_ROLS_USER(ID_ROLS_USER, NAME_ROLS_USER)VALUE(1,'ADMINISTRADOR'),(2,'ALUMNO'),(3,'DOCENTE'),(4,'DOCENTE CE'),(5,'FAMILIAR');
SELECT * FROM TBL_ROLS_USER;

/*CREATION OF TABLES SEX*/
CREATE TABLE TBL_SEXS(
ID_SEXS INT AUTO_INCREMENT PRIMARY KEY,
N_SEXS VARCHAR(10)
);
INSERT INTO TBL_SEXS (ID_SEXS,N_SEXS) VALUES (1, 'MASCULINO'),(2,'FEMENINO');
SELECT * FROM TBL_SEXS;

/*CREATION OF TABLES USERS*/
CREATE TABLE TBL_USERS(
ID_USERS INT AUTO_INCREMENT PRIMARY KEY,
NAME_USER VARCHAR(255),
APP_USER VARCHAR(255),
APM_USER VARCHAR(255),
AGE_USER INT(20),
EMAIL_USER VARCHAR(255),
PWD_USER VARCHAR(255),
FOLIO_USER INT(20),
SEX_USER VARCHAR(10),
PHONE_USER INT(20),
ID_SEXS INT,
ID_ROLS_USER INT,
FOREIGN KEY (ID_ROLS_USER) REFERENCES TBL_ROLS_USER(ID_ROLS_USER),
FOREIGN KEY (ID_SEXS) REFERENCES TBL_SEXS(ID_SEXS)
);
 -- Ingresar datos en la tabla TBL_USERS
INSERT INTO TBL_USERS (NAME_USER, APP_USER, APM_USER, AGE_USER, EMAIL_USER, PWD_USER, FOLIO_USER, SEX_USER, PHONE_USER, ID_SEXS, ID_ROLS_USER)
VALUES
('Carlos', 'Gómez', 'Martínez', 28, 'carlos@email.com', 'pass123', 12345, 'MASCULINO', 987654321, 1, 1), -- Rol: ADMINISTRADOR
('Ana', 'Hernández', 'López', 22, 'ana@email.com', 'secure12', 67890, 'FEMENINO', 123456789, 2, 2), -- Rol: ALUMNO
('Laura', 'Sánchez', 'García', 35, 'laura@email.com', 'teacher1', 13579, 'FEMENINO', 456789012, 1, 3), -- Rol: DOCENTE
('Pablo', 'Ramírez', 'Fernández', 40, 'pablo@email.com', 'cepass', 24680, 'MASCULINO', 321098765, 2, 4), -- Rol: DOCENTE CE
('Elena', 'Gutiérrez', 'Pérez', 45, 'elena@email.com', 'fam123', 98765, 'FEMENINO', 789012345, 1, 5); -- Rol: FAMILIAR
-- Ingresar datos aleatorios en la tabla TBL_USERS
INSERT INTO TBL_USERS (NAME_USER, APP_USER, APM_USER, AGE_USER, EMAIL_USER, PWD_USER, FOLIO_USER, SEX_USER, PHONE_USER, ID_SEXS, ID_ROLS_USER)
VALUES
    ('María', 'Fernández', 'Gómez', 30, 'maria@email.com', 'pass789', 54321, 'FEMENINO', 876543210, 2, 1), -- Rol: ADMINISTRADOR
    ('Javier', 'Martínez', 'Sánchez', 25, 'javier@email.com', 'secure34', 98765, 'MASCULINO', 123456789, 1, 2), -- Rol: ALUMNO
    ('Sara', 'López', 'Hernández', 38, 'sara@email.com', 'teacher2', 13579, 'FEMENINO', 456789012, 2, 3), -- Rol: DOCENTE
    ('Raúl', 'Pérez', 'García', 42, 'raul@email.com', 'cepass567', 24680, 'MASCULINO', 321098765, 1, 4), -- Rol: DOCENTE CE
    ('Lucía', 'González', 'Ramírez', 48, 'lucia@email.com', 'fam678', 98765, 'FEMENINO', 789012345, 2, 5); -- Rol: FAMILIAR
SELECT * FROM TBL_USERS