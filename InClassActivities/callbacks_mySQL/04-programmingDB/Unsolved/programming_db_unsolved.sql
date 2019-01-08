-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "language" --
language VARCHAR(100),
  -- Create an integer column called "rating" --
rating INTEGER(10),
  -- Create a boolean column called "mastered" which will automatically fill --
 mastered BOOLEAN DEFAULT TRUE,
  -- with true when a new row is made and the value isn't otherwise defined. --
DEFAULT true,
  -- Set the id as this table's primary key
  primary key(ID)
);

-- Create new example rows
INSERT INTO programming_languages(language, rating)
VALUES ("JS", 10);

INSERT INTO programming_languages(language, rating)
VALUES ("JQuery", 70);

INSERT INTO programming_languages(language, rating)
VALUES ("HTML", 60);
