// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================

  module.exports = function(app) {
    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/todos", function(req, res) {
      if (req.params.characters) {
        // Display the JSON for ONLY that character.
        // (Note how we're using the ORM here to run our searches)
        Todo.findAll({
            attributes: ['all', 'Todo']
    
        }).then(function(result) {
          return res.json(result);
        });
      } else {
        Todo.findAll().then(function(result) {
          return res.json(result);
        });
      }
    });

  // POST route for saving a new todo. We can create todo with the data in req.body
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
      // results are available to us inside the .then

  // If a user sends data to add a new todo
  app.post("/api/todos", function(req, res) {
    // Take the request...
    var todo = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = todo.name.replace(/\s+/g, "").toLowerCase();

    // Then add the todo to the database using sequelize
    Todo.create({
      task: todo.name,
      role: character.role,
    });

    res.status(204).end();
  });
};

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {

  });
};
