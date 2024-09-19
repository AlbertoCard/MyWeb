CREATE DATABASE mis_contactos;

USE mis_contactos;

CREATE TABLE contactos(
	email VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    sexo CHAR(1),
    nacimiento DATE,
    telefono VARCHAR(13),
    pais VARCHAR(50) NOT NULL,
    imagen VARCHAR(50),
    PRIMARY KEY(email),
    FULLTEXT KEY buscador(email, nombre, sexo, telefono,pais)
)ENGINE=MyISAM DEFAULT CHARSET=latin1;




CREATE TABLE pais(
	id_pais INT NOT NULL,
    pais VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_pais)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO pais (id_pais, pais) VALUES 
	(1, "Mexico"),
    (2,"Colombia"),
    (3, "Argentina");


