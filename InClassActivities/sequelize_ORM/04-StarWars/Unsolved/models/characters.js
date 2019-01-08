// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Characters" model that matches up with DB
var Characters = sequelize.define("character", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER
});

// Syncs with DB
Characters.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Characters;
