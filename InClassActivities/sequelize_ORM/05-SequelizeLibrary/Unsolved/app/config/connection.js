// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");

// Dependencies
var Sequelize = require("sequelize");

// Setting up our connection information
var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "sequelize_library"
  }
};

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_library", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
