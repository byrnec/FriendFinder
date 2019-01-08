DROP DATABASE IF EXISTS vacationsDB;

CREATE DATABASE vacationsDB;

USE vacationsDB;

CREATE TABLE vacation_options (
  id INT NOT NULL AUTO_INCREMENT,
  place VARCHAR(45) NOT NULL,
  activity VARCHAR(45) NOT NULL,
  degrees INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO vacation_options (place, activity, degrees)
VALUES ("Hawaii", "Surf", "90"),
 ("Big Bear", "Ski", "20"),
("San Francisco", "Bike", "60");

SELECT * from vacation_options