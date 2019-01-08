// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function (dbPost) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPost);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function (req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    db.Todo.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (dbPost) {
      // We have access to the todos as an argunment inside of the callback function
      res.json(dbPost);
    });
  });


  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    db.Post.create({
      title: req.params.title,
      body: req.params.body,
      category: req.params.category
    }).then(function (dbPost) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTodo) {
      exports.json(dbTodo);
    });
  })


  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    db.Post.update({
      title: req.params.title,
      body: req.params.body,
      category: req.params.category
    }, {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });

  });
};