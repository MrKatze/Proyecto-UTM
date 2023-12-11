-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-12-2023 a las 02:25:55
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id21653196_reservaciones_hotel`
--
CREATE DATABASE IF NOT EXISTS `id21653196_reservaciones_hotel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `id21653196_reservaciones_hotel`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

DROP TABLE IF EXISTS `cuenta`;
CREATE TABLE IF NOT EXISTS `cuenta` (
  `IDCuenta` int NOT NULL AUTO_INCREMENT,
  `CorreoElectronico` varchar(50) NOT NULL,
  `Contrasena` varchar(50) NOT NULL,
  `NombreCompleto` varchar(50) NOT NULL,
  `NumeroTelefono` varchar(15) NOT NULL,
  `Rol` int NOT NULL,
  PRIMARY KEY (`IDCuenta`),
  UNIQUE KEY `CorreoElectronico` (`CorreoElectronico`),
  KEY `Rol` (`Rol`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`IDCuenta`, `CorreoElectronico`, `Contrasena`, `NombreCompleto`, `NumeroTelefono`, `Rol`) VALUES
(1, 'raul@gmail.com', 'test123', 'Raul Sanchez Peña', '9531231212', 1),
(2, 'usuario2@example.com', 'contrasena2', 'Usuario Dos', '9876543210', 2),
(3, 'usuario3@example.com', 'contrasena3', 'Usuario Tres', '5555555555', 3),
(6, 'yahelcasarin@gmail.com', '1333270', 'Carlos Rodriguez', '7411134172', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallesreservacion`
--

DROP TABLE IF EXISTS `detallesreservacion`;
CREATE TABLE IF NOT EXISTS `detallesreservacion` (
  `IDReservacion` int NOT NULL,
  `IDHabitacion` int NOT NULL,
  `CantidadHabitaciones` int DEFAULT NULL,
  PRIMARY KEY (`IDReservacion`,`IDHabitacion`),
  KEY `IDHabitacion` (`IDHabitacion`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `detallesreservacion`
--

INSERT INTO `detallesreservacion` (`IDReservacion`, `IDHabitacion`, `CantidadHabitaciones`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `disponibilidadporfecha`
--

DROP TABLE IF EXISTS `disponibilidadporfecha`;
CREATE TABLE IF NOT EXISTS `disponibilidadporfecha` (
  `IDDisponibilidad` int NOT NULL AUTO_INCREMENT,
  `IDTipoHabitacion` int DEFAULT NULL,
  `Fecha` date NOT NULL,
  `TotalHabitacionesDisponibles` int NOT NULL,
  PRIMARY KEY (`IDDisponibilidad`),
  KEY `IDTipoHabitacion` (`IDTipoHabitacion`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `disponibilidadporfecha`
--

INSERT INTO `disponibilidadporfecha` (`IDDisponibilidad`, `IDTipoHabitacion`, `Fecha`, `TotalHabitacionesDisponibles`) VALUES
(1, 1, '2023-12-01', 0),
(2, 2, '2023-12-01', 1),
(3, 3, '2023-12-01', 2),
(4, 4, '2023-12-01', 3),
(5, 5, '2023-12-01', 4),
(6, 6, '2023-12-01', 2),
(7, 7, '2023-12-01', 4),
(8, 8, '2023-12-01', 2),
(9, 1, '2023-12-02', 2),
(10, 2, '2023-12-02', 1),
(11, 3, '2023-12-02', 2),
(12, 4, '2023-12-02', 3),
(13, 5, '2023-12-02', 4),
(14, 6, '2023-12-02', 2),
(15, 7, '2023-12-02', 4),
(16, 8, '2023-12-02', 2),
(17, 1, '2023-12-03', 2),
(18, 2, '2023-12-03', 1),
(19, 3, '2023-12-03', 2),
(20, 4, '2023-12-03', 3),
(21, 5, '2023-12-03', 4),
(22, 6, '2023-12-03', 2),
(23, 7, '2023-12-03', 4),
(24, 8, '2023-12-03', 2),
(25, 1, '2023-12-04', 2),
(26, 2, '2023-12-04', 1),
(27, 3, '2023-12-04', 2),
(28, 4, '2023-12-04', 3),
(29, 5, '2023-12-04', 4),
(30, 6, '2023-12-04', 2),
(31, 7, '2023-12-04', 4),
(32, 8, '2023-12-04', 2),
(33, 1, '2023-12-05', 2),
(34, 2, '2023-12-05', 1),
(35, 3, '2023-12-05', 2),
(36, 4, '2023-12-05', 3),
(37, 5, '2023-12-05', 4),
(38, 6, '2023-12-05', 2),
(39, 7, '2023-12-05', 4),
(40, 8, '2023-12-05', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

DROP TABLE IF EXISTS `habitaciones`;
CREATE TABLE IF NOT EXISTS `habitaciones` (
  `IDHabitacion` int NOT NULL AUTO_INCREMENT,
  `TipoHabitacion` varchar(50) NOT NULL,
  `MaxHuespedes` int NOT NULL,
  `TotalTipoHabitacion` int NOT NULL,
  `Costo` int NOT NULL,
  PRIMARY KEY (`IDHabitacion`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`IDHabitacion`, `TipoHabitacion`, `MaxHuespedes`, `TotalTipoHabitacion`, `Costo`) VALUES
(1, 'Cabaña con cama Matrimonial', 2, 2, 520),
(2, 'Cabaña con cama Kingsize', 2, 1, 600),
(3, 'Cabaña Doble', 4, 2, 685),
(4, 'Cabaña Triple', 5, 3, 810),
(5, 'Master con cama Kingsize', 2, 4, 680),
(6, 'Master con cama Kingsize sin clima', 2, 2, 580),
(7, 'Master Doble', 4, 4, 815),
(8, 'Suite', 2, 2, 930);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservaciones`
--

DROP TABLE IF EXISTS `reservaciones`;
CREATE TABLE IF NOT EXISTS `reservaciones` (
  `IDReserva` int NOT NULL AUTO_INCREMENT,
  `IDCuenta` int DEFAULT NULL,
  `FechaEntrada` date NOT NULL,
  `FechaSalida` date NOT NULL,
  `HoraLlegada` time NOT NULL,
  `EstadoReserva` varchar(20) DEFAULT 'Pendiente',
  PRIMARY KEY (`IDReserva`),
  UNIQUE KEY `IDCuenta` (`IDCuenta`,`FechaEntrada`,`FechaSalida`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `reservaciones`
--

INSERT INTO `reservaciones` (`IDReserva`, `IDCuenta`, `FechaEntrada`, `FechaSalida`, `HoraLlegada`, `EstadoReserva`) VALUES
(1, 1, '2023-12-01', '2023-12-02', '12:00:00', 'Pendiente'),
(2, 2, '2023-12-02', '2023-12-03', '14:00:00', 'Pendiente'),
(3, 3, '2023-12-03', '2023-12-04', '15:30:00', 'Pendiente'),
(4, 4, '2023-12-04', '2023-12-05', '18:00:00', 'Cancelada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `IDRol` int NOT NULL AUTO_INCREMENT,
  `NombreRol` varchar(20) NOT NULL,
  PRIMARY KEY (`IDRol`),
  UNIQUE KEY `NombreRol` (`NombreRol`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`IDRol`, `NombreRol`) VALUES
(1, 'Administrador'),
(2, 'Recepcionista'),
(3, 'Cliente'),
(5, 'Esto es una prueba');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
