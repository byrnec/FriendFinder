-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wish_saver_db;
USE wish_saver_db;

-- Create the table christmas_wish.
CREATE TABLE christmas_wish
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO christmas_wish (wish) VALUES ('an apple watch 4');
INSERT INTO christmas_wish (wish) VALUES ('a golden doodle');
INSERT INTO christmas_wish (wish) VALUES ('endless supply of almond milk lattes');
