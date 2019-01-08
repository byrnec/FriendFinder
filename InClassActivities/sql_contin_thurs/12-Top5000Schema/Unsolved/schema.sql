DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000 (
  position INT NOT NULL,
  artistname VARCHAR(45) NULL,
  songname VARCHAR(45) NULL,
  year INT NOT NULL,
  raw_pop_world DECIMAL (10,4) NULL,
  raw_pop_USA DECIMAL (10,4) NULL,
  raw_pop_UK DECIMAL (10,4) NULL,
  raw_pop_EUROPE DECIMAL (10,4) NULL,
  raw_pop_restOfWorld DECIMAL (10,4) NULL,
  PRIMARY KEY (position)
);

INSERT INTO Top5000 (artistname, songname, year,raw_pop_world,raw_pop_USA, raw_pop_UK,raw_pop_EUROPE, raw_pop_restOfWorld)


SELECT * from Top5000