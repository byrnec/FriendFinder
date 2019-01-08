// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// restaurants (DATA)
// =============================================================


var reservations = [];


/// ADD reservations CONSTRUCTOR
var reservation = function (name, phone, email, id) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.ID = id
}

var waitList = [];
var count = 0;


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home1.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// Displays all characters
app.get("/api/waitlist", function (req, res) {
  return res.json(waitList);
});

// Displays a single character, or returns false
app.get("/api/reservation/:reservation", function (req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New reservation - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  // var newreservation = req.body;
  count++;
  var newReservation = new reservation(req.body.name, req.body.phone, req.body.email, req.body.ID);
  if ( count < 2) {
   // var newReservation = new reservation(req.body.name, req.body.phone, req.body.email, req.body.ID);
    // Using a RegEx Pattern to remove spaces from newr
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);
    console.log("reservations only");
    console.log(reservations);
  } else {
    waitList.push(newReservation);
    console.log("WaitList only");
    console.log(waitList);
  }
  res.json(newReservation);
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
