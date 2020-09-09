-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2020 a las 01:49:27
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `netmovilquito`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int(5) NOT NULL,
  `usuario` text NOT NULL,
  `clave` text NOT NULL,
  `nombre` text NOT NULL,
  `correo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `usuario`, `clave`, `nombre`, `correo`) VALUES
(1, 'netmovil', '094619772', 'Distribuidor Autorizado Tuenti', 'netmovilquito@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(10) NOT NULL,
  `combo` text NOT NULL,
  `nombre` text NOT NULL,
  `cedula` text NOT NULL,
  `celular` text NOT NULL,
  `domicilio` text NOT NULL,
  `nota` text NOT NULL,
  `dia_entrega` text NOT NULL,
  `hora_entrega` text NOT NULL,
  `fecha_reg` date NOT NULL,
  `hora_ref` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id`, `combo`, `nombre`, `cedula`, `celular`, `domicilio`, `nota`, `dia_entrega`, `hora_entrega`, `fecha_reg`, `hora_ref`) VALUES
(5, 'Combo #3 Chip de 15 Gigas + Parlante Mini Bluetooth', '1', '1', '1', '1', '1', 'Hoy', 'En la Mañana', '2020-09-08', '00:00:00'),
(6, 'Combo #3 Chip de 15 Gigas + Parlante Mini Bluetooth', 'Luis ', '0941921454', '0968904090', 'Arriba', 'yeah', 'Pasado de Mañana', 'En la Tarde', '2020-09-06', '00:00:00'),
(7, 'Combo #2 Chip de 7 Gigas + Auriculares', 'Jose', '0941', '06854', 'Playas', 'playas', 'Hoy', 'En la Mañana', '2020-09-07', '00:00:00'),
(8, 'Combo #2 Chip de 7 Gigas + Auriculares', 'Tio Oscar', '8888888', '9999999', 'Cotocollao', 'Arriba bien aariba', 'Hoy', 'En la Mañana', '2020-09-07', '13:02:24'),
(9, 'Combo #2 Chip de 7 Gigas + Auriculares', '9', '9', '9', '99999999 99999999  99999999  9999999999999999  9999999999999999 99999999 99999999', '9', 'Hoy', 'En la Mañana', '2020-09-07', '13:04:35'),
(10, 'Combo #3 Chip de 15 Gigas + Parlante Mini Bluetooth', '6', '6', '6', '6', '6', 'Mañana', 'En la Mañana', '2020-09-08', '22:22:28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
