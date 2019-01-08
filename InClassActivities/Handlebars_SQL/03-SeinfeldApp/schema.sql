-- Created the DB "seinfeld_db" (only works on local connections)
DROP DATABASE IF EXISTS seinfeld_db;

CREATE DATABASE seinfeld_db;
USE seinfeld_db;



-- Created the table "seinfeld" 
CREATE TABLE characters
(
  id int AUTO_INCREMENT,
  name varchar (30) NOT NULL,
  coolness INT,
  attitude varchar(30),
  PRIMARY KEY (id)
);

  -- Inserted a set of records into the table
  INSERT INTO characters (name, coolness, attitude)
  VALUES ("Jerry", 40, "crazy"),
   ("Elaine", 20, "chill"),
    ("Kramer", 40, "funny"),
    ("George", 30, "confused");
