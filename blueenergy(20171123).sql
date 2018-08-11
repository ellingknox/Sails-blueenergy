/*
SQLyog Ultimate v11.3 (64 bit)
MySQL - 10.1.21-MariaDB : Database - blueenergy
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`blueenergy` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `blueenergy`;

/*Table structure for table `personalinfor` */

DROP TABLE IF EXISTS `personalinfor`;

CREATE TABLE `personalinfor` (
  `userid` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phonenum` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `personalinfor` */

insert  into `personalinfor`(`userid`,`firstname`,`lastname`,`email`,`phonenum`,`state`,`country`,`id`,`createdAt`,`updatedAt`) values ('1','david','poren','david@sendspace.com','+48 223 221 3335','New York','Armenia',1,'2017-11-23 17:17:10','2017-11-23 22:52:20');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `verifycode` varchar(255) DEFAULT NULL,
  `walletaddress` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user`(`username`,`email`,`password`,`address`,`token`,`verifycode`,`walletaddress`,`state`,`id`,`createdAt`,`updatedAt`) values ('user1','user1@test.com','DnE89YbWwz08xkxy9xaFURrCbATp774fVqW51qVhtC4=','address','ZWLhd8iHAjsIBnmP','829255','0xcf6a58f2cc645b93395d13d22f573b9107dd799','1',1,'2017-11-16 00:47:42','2017-11-16 00:47:42'),('user2','user2@test.com','DnE89YbWwz08xkxy9xaFURrCbATp774fVqW51qVhtC4=','address','ZlfbmlDgyqToSHFv','537841','0xcf6a58w1dd543234sasd99fcsalsdd661frwg357','1',2,'2017-11-16 01:00:28','2017-11-16 01:00:28');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
