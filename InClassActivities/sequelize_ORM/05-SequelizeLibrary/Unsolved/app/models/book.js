// Dependencies
// =============================================================

// Require the sequelize library


// Dependencies
var Sequelize = require("sequelize");

// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");


// Create a "Book" model with the following configuration that matches up with DB
var Books = sequelize.define("book", {
  routeName: Sequelize.STRING,
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  pageNumber: Sequelize.INTEGER
});

// Syncs with DB
Books.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Books;

