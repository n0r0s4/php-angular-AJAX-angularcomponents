-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 22, 2013 at 02:54 PM
-- Server version: 5.5.29
-- PHP Version: 5.3.10-1ubuntu3.5



--
-- Database: `videoClub`
--

CREATE DATABASE `jobs`;

USE `jobs`;

--
-- Base de datos: `jobs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apply`
--

CREATE TABLE `apply` (
  `id` int(11) NOT NULL,
  `idVacant` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `portfolio` varchar(200) DEFAULT NULL,
  `salary` double NOT NULL,
  `hobbies` varchar(200) NOT NULL,
  `relocate` tinyint(1) NOT NULL,
  `about` varchar(200) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `apply`
--

INSERT INTO `apply` (`id`, `idVacant`, `startDate`, `portfolio`, `salary`, `hobbies`, `relocate`, `about`, `idUser`) VALUES
(15, 1, '2017-04-19', 'www.pole.com', 55000, '-SQLDump-DDOSing-Hardening-', 0, 'im speciall', 3),
(16, 1, '2017-04-19', 'www.pole.com', 55000, '-SQLDump-DDOSing-Hardening-', 0, 'im speciall lol', 3),
(17, 1, '2017-04-23', 'www.pole.com', 99999, '-SQLDump-DDOSing-Hardening-', 1, 'im speciall lol relocateme pls', 3),
(18, 1, '2017-04-16', 'www.myweb.com', 150000, '-Programming-DDOSing-Defacement-', 0, 'best programmer', 2),
(19, 3, '2017-04-16', 'www.theweb.com', 65000, '-DDOSing-SQLDump-Programming-Hardening-', 1, 'hax', 2),
(20, 3, '2017-04-16', 'www.theweb.com', 67000, '-DDOSing-SQLDump-Programming-Hardening-SQLDump-DDOSing-', 1, 'hax2', 2),
(21, 1, '2017-04-16', 'www.lel.com', 25000, '-Programming-Defacement-', 1, 'werewr', 2),
(22, 1, '2017-04-30', 'www.lal.com', 150000, '-Programming-Hardening-DDOSing-SQLDump-', 1, 'werwer', 2),
(23, 1, '2017-04-24', 'www.pal.com', 299000, '-Programming-SQLDump-Defacement-DDOSing-Hardening-', 1, 'its me', 2),
(25, 3, '2017-05-05', 'www.hax.net', 66666, '-Defacement-', 0, 'hi', 2),
(26, 3, '2017-04-24', 'www.works.com', 75000, '-DDOSing-', 1, 'works', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `directors`
--

CREATE TABLE `directors` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `surname1` varchar(150) NOT NULL,
  `surname2` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `directors`
--

INSERT INTO `directors` (`id`, `name`, `surname1`, `surname2`) VALUES
(1, 'Jon', 'Favreau', ''),
(2, 'Stanley', 'Kubric', ''),
(3, 'Woody', 'Allen', ''),
(4, 'Pedro', 'Almodovar', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `idFilmType` int(11) NOT NULL,
  `idDirector` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `image` varchar(150) NOT NULL,
  `inSale` tinyint(1) NOT NULL,
  `rented` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `films`
--

INSERT INTO `films` (`id`, `idFilmType`, `idDirector`, `name`, `price`, `image`, `inSale`, `rented`) VALUES
(1, 4, 1, 'Rudy', '2.23', 'images/filmsImages/film_01429620612.jpg', 1, 0),
(2, 3, 1, 'Vince Vaughn.', '3.23', 'images/filmsImages/film_01429620614.jpg', 0, 1),
(3, 1, 3, 'Match Point', '1.23', 'images/filmsImages/film_01453304597.jpg', 0, 0),
(4, 4, 3, 'Blue Jasmine', '1.23', 'images/filmsImages/film_01453550343.jpg', 0, 0),
(5, 1, 4, 'Talk to her', '1.23', 'images/filmsImages/film_01455182619.jpg', 0, 0),
(6, 2, 4, 'All About My Mother', '1.23', 'images/filmsImages/film_01453305204.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filmtypes`
--

CREATE TABLE `filmtypes` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `filmtypes`
--

INSERT INTO `filmtypes` (`id`, `name`) VALUES
(1, 'Comedy'),
(2, 'Terror'),
(3, 'Thriller'),
(4, 'Romatic'),
(5, 'Fiction');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `dateReview` date NOT NULL,
  `rate` int(2) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `review`
--

INSERT INTO `review` (`id`, `idUser`, `dateReview`, `rate`, `description`) VALUES
(3, 1, '1999-09-09', 3, 'lel'),
(5, 1, '2017-04-06', 4, 'testing'),
(6, 3, '2017-04-24', 1, 'testing the test'),
(7, 2, '2017-04-29', 4, 'real testing pure magic'),
(8, 3, '2017-04-02', 5, 'awesome testing');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `surname1` varchar(150) NOT NULL,
  `nick` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `telephone` int(11) DEFAULT NULL,
  `mail` varchar(150) NOT NULL,
  `birthDate` varchar(150) NOT NULL,
  `entryDate` varchar(150) NOT NULL,
  `dropOutDate` varchar(150) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `image` varchar(150) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `typeUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname1`, `nick`, `password`, `address`, `telephone`, `mail`, `birthDate`, `entryDate`, `dropOutDate`, `active`, `image`, `city`, `state`, `typeUser`) VALUES
(1, 'Jhon', 'Peterson', 'user1', '123456', 'Address1', 933333333, 'r1@r.com', '1975-01-01', '2014-01-01', '0000-00-00', 1, 'images/usersImages/user1.jpeg', 'barcelona', 'spain', 0),
(2, 'Jhon1', 'Peterson1', 'user2', '123456', 'Address2', 933333333, 'r2@r.com', '1975-01-01', '2014-01-01', '0000-00-00', 1, 'images/usersImages/user2.jpeg', 'madrid', 'spain', 1),
(3, 'Jhon2', 'Peterson2', 'user3', '123456', 'Address3', 933333333, 'r3@r.com', '1975-01-01', '2014-01-01', '0000-00-00', 1, 'images/usersImages/user3.jpeg', 'paris', 'france', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacant`
--

CREATE TABLE `vacant` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vacant`
--

INSERT INTO `vacant` (`id`, `name`, `description`) VALUES
(1, 'angular fullstack programmer', 'angular backend with node and +, and frontend with angularJS, angularcli, ionic and +.'),
(2, 'java spring boot programmer', 'j2e programmer with spring tool suite, spring boot, xml and spring security'),
(3, 'metasploit developer', 'ruby in deep'),
(4, 'cibersecurity auditor', 'security and hacking tools in deep');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apply`
--
ALTER TABLE `apply`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idVacant` (`idVacant`);

--
-- Indices de la tabla `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFilmType` (`idFilmType`),
  ADD KEY `idDirector` (`idDirector`);

--
-- Indices de la tabla `filmtypes`
--
ALTER TABLE `filmtypes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFilm` (`idUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vacant`
--
ALTER TABLE `vacant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apply`
--
ALTER TABLE `apply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `filmtypes`
--
ALTER TABLE `filmtypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `vacant`
--
ALTER TABLE `vacant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `films`
--
ALTER TABLE `films`
  ADD CONSTRAINT `FK_idDirector` FOREIGN KEY (`idDirector`) REFERENCES `directors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_idFilmType` FOREIGN KEY (`idFilmType`) REFERENCES `filmtypes` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `FK_idFilm` FOREIGN KEY (`idUser`) REFERENCES `films` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
