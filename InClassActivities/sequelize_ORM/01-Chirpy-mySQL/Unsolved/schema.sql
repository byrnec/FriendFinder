CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
id INTEGER(11) auto_increment NOT NULL,
author VARCHAR(30),
chirp VARCHAR(400),
created_at timestamp,
PRIMARY KEY (ID)
);


INSERT INTO chirps (author, chirp, created_at) VALUES ("JK Rowling","I love Harry Potter", 5:555 on 2018),("John Steinbeck", ""),("Michelle Obama", "Find my new book Becoming at Costco",  ), ;

