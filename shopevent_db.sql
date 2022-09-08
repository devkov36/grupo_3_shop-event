-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2022 a las 03:03:24
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shopevent_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `cost` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `event_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `event_end_date` timestamp NULL DEFAULT NULL,
  `category` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `tickets` int(11) NOT NULL,
  `ubication` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `banner_img` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `title`, `cost`, `event_date`, `event_end_date`, `category`, `id_usuario`, `description`, `tickets`, `ubication`, `banner_img`, `created_at`, `updated_at`) VALUES
(1, 'Babasonicos - Bye Bye', '$7.51', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia', 46, 'nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel', 72, 'Estadio Movistar Arena', 'babasonicos.jpeg', NULL, NULL),
(2, 'Bad Bunny Worlds Hottest Tour', '$9.49', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec', 53, 'ut tellus nulla ut erat id mauris vulputate elementum nullam varius', 82, 'Estadio Velez Sarsfield', 'bad-bunny.jpeg', NULL, NULL),
(3, 'Coldplay - World Tour', '$1.79', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor', 56, 'vulputate elementum nullam varius nulla facilisi cras non velit nec', 96, 'Estadio Velez Sarsfield', 'coldplay.jpeg', NULL, NULL),
(4, 'Diego Torres- Atlantico a Pie', '$2.20', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', 65, 'diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed', 66, 'Estadio Luna Park', 'diego-torres.jpeg', NULL, NULL),
(5, 'Dua Lipa - Future Nostalgia', '$2.65', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'ac lobortis vel dapibus at diam nam tristique tortor eu pede', 25, 'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin', 13, 'Hipodromo de Palermo', 'dua-lipa.jpeg', NULL, NULL),
(6, 'Duki - Desde el Fin del Mundo', '$8.31', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper', 96, 'sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est', 62, 'Estadio Velez Sarsfield', 'duki.jpeg', NULL, NULL),
(7, 'Guns and Roses', '$5.67', '2022-05-14 16:15:18', '2022-05-14 16:15:18', 'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar', 51, 'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut', 56, 'Estadio River Plate', 'guns.jpeg', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order`
--

CREATE TABLE `order` (
  `id_order` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `total` float NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `subtotal` float NOT NULL,
  `discount` float NOT NULL,
  `tax` float NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `order`
--

INSERT INTO `order` (`id_order`, `id_user`, `total`, `order_date`, `subtotal`, `discount`, `tax`, `status`) VALUES
(1, 1, 111.1, '2022-09-08 01:03:00', 100, 0, 11.1, 1),
(2, 2, 480, '2022-09-08 01:03:00', 350, 20, 150, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_detail`
--

CREATE TABLE `order_detail` (
  `id_order_detail` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `seat` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `tickets` int(11) NOT NULL,
  `total_detail` float NOT NULL,
  `subtotal_detail` float NOT NULL,
  `discount_detail` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `email`, `password`, `avatar`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Elysha', 'Pharrow', 'epharrow0', 'epharrow0@cnn.com', 'pN1HrH7VT1I', 'https://robohash.org/asperioresametassumenda.png?size=50x50&set=set1', 'user', NULL, NULL),
(2, 'Tammie', 'Gurton', 'tgurton1', 'tgurton1@answers.com', 'WVGTypAB', 'https://robohash.org/etvoluptasnon.png?size=50x50&set=set1', 'admin', NULL, NULL),
(3, 'Lane', 'Sulter', 'lsulter2', 'lsulter2@canalblog.com', 'opIRnjmS', 'https://robohash.org/totamdoloresreprehenderit.png?size=50x50&set=set1', 'user', NULL, NULL),
(4, 'Obed', 'Tysack', 'otysack3', 'otysack3@parallels.com', 'U2A0sS2Q', 'https://robohash.org/quisaepeut.png?size=50x50&set=set1', 'admin', NULL, NULL),
(5, 'Jorie', 'Golby', 'jgolby4', 'jgolby4@ibm.com', 'kgR69jFbN7', 'https://robohash.org/ipsamtemporaveritatis.png?size=50x50&set=set1', 'user', NULL, NULL),
(6, 'Daffy', 'Poleykett', 'dpoleykett5', 'dpoleykett5@plala.or.jp', '6j23yKYT', 'https://robohash.org/distinctioquodaliquid.png?size=50x50&set=set1', 'user', NULL, NULL),
(7, 'Selig', 'Beasant', 'sbeasant6', 'sbeasant6@eepurl.com', 'BgwU97eyAhFd', 'https://robohash.org/officiapariaturrepellendus.png?size=50x50&set=set1', 'user', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_order`);

--
-- Indices de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id_order_detail`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT de la tabla `order`
--
ALTER TABLE `order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id_order_detail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
