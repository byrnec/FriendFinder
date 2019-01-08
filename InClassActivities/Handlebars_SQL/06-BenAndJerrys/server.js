var express = require("express");
var app = express();

var exphbs = require("express-handlebars");
var PORT = 3000;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var icecreams = [
  { name: 'vanilla', price: 10, awesomeness: 3 },
  { name: 'chocolate', price: 4, awesomeness: 8 },
  { name: 'banana', price: 1, awesomeness: 1 },
  { name: 'greentea', price: 5, awesomeness: 7 },
  { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

//routes
app.get("/icecreams", function (req, res) {
  // Handlebars requires an object to be sent to the dog handlebars file.

  for (var i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === req.params.name) {
      return res.render("name", icecreams[i]);
    }
  }
});


//routes
app.get("/icecream/:name", function (req, res) {
  // Handlebars requires an object to be sent to the dog handlebars file.

  for (var i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === req.params.name) {
      return res.render("ics", {"ics": icecreams[i]} );
    }
  }
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
