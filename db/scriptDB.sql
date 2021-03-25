CREATE DATABASE "Vehiculos"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE public.carros
(
    id_carro serial NOT NULL,
    marca_carro character varying(25) NOT NULL,
    modelo_carro character varying(25) NOT NULL,
    color_carro character varying(25) NOT NULL,
    puertas_carro integer NOT NULL,
    motor_carro character varying(25) NOT NULL,
    PRIMARY KEY (id_carro)
);