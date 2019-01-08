DROP DATABASE IF EXISTS library_db;

CREATE DATABASE library_db;

USE library_db;


CREATE TABLE books(
    id INTEGER(30) AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    primary key(id)
);

INSERT INTO books (title)
VALUES ("Great Gastby");


INSERT INTO books (title)
VALUES ("The Odessey");


INSERT INTO books (title)
VALUES ("1984");


-- Updates the row where the column name is peter --
UPDATE books
SET title = "Jane Eyre"
WHERE id = 2;



