-- MySQL Script generated by MySQL Workbench
-- Sat Apr 14 22:24:12 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`ToDo_List`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ToDo_List` (
  `UserID` INT NOT NULL,
  `ToDoItem` TEXT NULL,
  `Tags` VARCHAR(45) NULL,
  `MarkAsDone` TINYINT NULL,
  `ToDocol` VARCHAR(45) NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `UserID` INT NOT NULL,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(45) NULL,
  `ToDo_UserID` INT NOT NULL,
  PRIMARY KEY (`ToDo_UserID`, `UserID`),
  CONSTRAINT `fk_Users_ToDo`
    FOREIGN KEY (`UserID`)
    REFERENCES `mydb`.`ToDo_List` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
