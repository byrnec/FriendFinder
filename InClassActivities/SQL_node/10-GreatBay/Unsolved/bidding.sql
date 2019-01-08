DROP DATABASE IF EXISTS auctionDB;

CREATE DATABASE auctionDB;

USE auctionDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  type VARCHAR(30) NOT NULL,
  bid INTEGER(30) NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO products (name, type, bid)
-- VALUES ("kitten", "animals", 100);

-- INSERT INTO products (name, type, bid)
-- VALUES ("ball", "play things", 200);

INSERT INTO products (name, type, bid)
VALUES ("computer", "technologies", 1000);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

SELECT * from products