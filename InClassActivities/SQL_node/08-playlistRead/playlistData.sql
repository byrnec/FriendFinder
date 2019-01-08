DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(45) NOT NULL,
  genre VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Hollaback Girl", "Gwen Stefani", "Pop"),
 ("White Flag", "Dido", "Emo"),
("Candy Shop", "Lil Wayne", "Rap");


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

SELECT * from songs