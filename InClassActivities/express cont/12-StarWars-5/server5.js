// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or shows "No character found"
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.send("No character found");

});

// post request

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  var newcharacter = req.body;
  // grab ahold of what 

 // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 // A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
