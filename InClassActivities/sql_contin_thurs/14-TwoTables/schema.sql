DROP DATABASE IF EXISTS top_albumsDB;

CREATE DATABASE top_albumsDB;

USE top_albumsDB;

CREATE TABLE TopAlbum (
  position INT NOT NULL,
  artistname VARCHAR(45) NULL,
  albumname VARCHAR(45) NULL,
  year INT NOT NULL,
  raw_pop_world DECIMAL (10,4) NULL,
  raw_pop_USA DECIMAL (10,4) NULL,
  raw_pop_UK DECIMAL (10,4) NULL,
  raw_pop_EUROPE DECIMAL (10,4) NULL,
  raw_pop_restOfWorld DECIMAL (10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT *
FROM top5000
INNER JOIN topalbum ON top5000.artist = topalbum.artistname AND top5000.year = topalbum.year

select * from customers where customer_id in (select distinct(artist) from artistname);