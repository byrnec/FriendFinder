// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var chirps = [];
// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps

app.get('/api/all', function(req, res){

var dbQuery = "SELECT * FROM chirps";


  res.json(chirps);
  //loop through all of the stored chirps
for (var i=0; i<(chirps.length-1); i++){

  //loop through all of question values and sum total their subtracted absolute values
  for (var j=0; j<10; j++){

  // each total difference, for each potential friend, is pushed into the allDifferences array 
  chirps.push(req.body);
  }

  res.send(chirp);
  console.log(chirp);
  };
});
