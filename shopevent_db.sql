DROP DATABASE IF EXISTS shopevent_db;
CREATE DATABASE shopevent_db;
USE shopevent_db;

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(50) NOT NULL,
  `avatar` varchar(300) NOT NULL,
  `category` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1, 'Elysha', 'Pharrow', 'epharrow0', 'epharrow0@cnn.com', 'pN1HrH7VT1I', 'https://robohash.org/asperioresametassumenda.png?size=50x50&set=set1', 'user', NULL, NULL),
(2, 'Tammie', 'Gurton', 'tgurton1', 'tgurton1@answers.com', 'WVGTypAB', 'https://robohash.org/etvoluptasnon.png?size=50x50&set=set1', 'admin', NULL, NULL),
(3, 'Lane', 'Sulter', 'lsulter2', 'lsulter2@canalblog.com', 'opIRnjmS', 'https://robohash.org/totamdoloresreprehenderit.png?size=50x50&set=set1', 'user', NULL, NULL),
(4, 'Obed', 'Tysack', 'otysack3', 'otysack3@parallels.com', 'U2A0sS2Q', 'https://robohash.org/quisaepeut.png?size=50x50&set=set1', 'admin', NULL, NULL),
(5, 'Jorie', 'Golby', 'jgolby4', 'jgolby4@ibm.com', 'kgR69jFbN7', 'https://robohash.org/ipsamtemporaveritatis.png?size=50x50&set=set1', 'user', NULL, NULL),
(6, 'Daffy', 'Poleykett', 'dpoleykett5', 'dpoleykett5@plala.or.jp', '6j23yKYT', 'https://robohash.org/distinctioquodaliquid.png?size=50x50&set=set1', 'user', NULL, NULL),
(7, 'Selig', 'Beasant', 'sbeasant6', 'sbeasant6@eepurl.com', 'BgwU97eyAhFd', 'https://robohash.org/officiapariaturrepellendus.png?size=50x50&set=set1', 'user', NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `cost` varchar(30) NOT NULL,
  `event_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `event_end_date` timestamp NULL DEFAULT NULL,
  `category` varchar(300) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `description` text NOT NULL,
  `tickets` int(11) NOT NULL,
  `ubication` varchar(300) NOT NULL,
  `banner_img` varchar(300) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1, 'Babasonicos - Bye Bye', '$7.51', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia', 46, 'nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel', 72, 'Estadio Movistar Arena', 'babasonicos.jpeg', NULL, NULL),
(2, 'Bad Bunny Worlds Hottest Tour', '$9.49', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec', 53, 'ut tellus nulla ut erat id mauris vulputate elementum nullam varius', 82, 'Estadio Velez Sarsfield', 'bad-bunny.jpeg',  NULL, NULL),
(3, 'Coldplay - World Tour', '$1.79', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor', 56, 'vulputate elementum nullam varius nulla facilisi cras non velit nec', 96, 'Estadio Velez Sarsfield', 'coldplay.jpeg', NULL, NULL),
(4, 'Diego Torres- Atlantico a Pie', '$2.20', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', 65, 'diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed', 66, 'Estadio Luna Park', 'diego-torres.jpeg',  NULL, NULL),
(5, 'Dua Lipa - Future Nostalgia', '$2.65', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'ac lobortis vel dapibus at diam nam tristique tortor eu pede', 25, 'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin', 13, 'Hipodromo de Palermo', 'dua-lipa.jpeg', NULL, NULL),
(6, 'Duki - Desde el Fin del Mundo', '$8.31', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper', 96, 'sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est', 62, 'Estadio Velez Sarsfield', 'duki.jpeg',  NULL, NULL),
(7, 'Guns and Roses', '$5.67', '2022-05-14 11:15:18', '2022-05-14 11:15:18', 'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar', 51, 'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut', 56, 'Estadio River Plate', 'guns.jpeg', NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


SELECT * FROM `events`;

