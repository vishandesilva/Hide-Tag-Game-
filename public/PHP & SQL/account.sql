CREATE DATABASE IF NOT EXISTS `login`;
USE `login`;

CREATE TABLE IF NOT EXISTS `account` (
  `id` int(11) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2;

INSERT INTO `account` (`id`, `username`, `password`, `email`) VALUES (1, 'adams', 'webPro', 'web@pro.com');

ALTER TABLE `account` ADD PRIMARY KEY (`id`);
ALTER TABLE `account` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
