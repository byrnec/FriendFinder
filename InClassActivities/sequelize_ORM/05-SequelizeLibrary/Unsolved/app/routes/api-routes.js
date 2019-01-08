// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function (req, res) {
    Books.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);

    });

    // Add sequelize code to get a specific book and return it as JSON
    app.get("/api/:book", function (req, res) {
      Books.findAll({
        where: {
          title: req.params.book
        }
      }).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
    });
  });
    // Add sequelize code to get all books of a specific genre and return them as JSON
    app.get("/api/genre/:genre", function (req, res) {
      Books.findAll({
        where: {
          author: req.params.author
        }
      }).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
    });
  });
    
    // Add sequelize code to get all books from a specific author and return them as JSON
    app.get("/api/author/:author", function (req, res) {
      Books.findAll({
        where: {
          author: req.params.author
        }
      }).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
    });
    });

    // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
    app.get("/api/books/long", function (req, res) {
      Books.findAll({
        where: {
          pageNumber:
          {$gte: 150
          }
        },

        order: [["pageNumber", "ASC"]]
      }).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
    });
    });

    // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
    app.get("/api/books/short", function (req, res) {
      Books.findAll({
        where: {
          pageNumber:
          {$lte: 150
          }
        },
        order: [["pageNumber", "ASC"]]
      }).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
    });
      });

    // Add sequelize code to create a book
    app.post("/api/new", function (req, res) {

      console.log("Book Data:");
      console.log(req.body);

      Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pageNumber: req.body.pageNumber,

      }).then(function (results) {
        // `results` here would be the newly created chirp
        res.end();
      });
    });

    // Add sequelize code to delete a book
    app.delete("/api/book/:id", function (req, res) {
      Books.destroy({
        where: {
          id:
          {$lte: 150
          }
        },
      }).then(function (results) {
          // `results` here would be the newly created chirp
          res.end();
        });
      });


  // var orm = require("../config/orm.js");
  var Character = require("../models/books.js");
