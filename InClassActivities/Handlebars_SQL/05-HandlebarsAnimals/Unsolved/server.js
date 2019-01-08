var express = require("express");
var app = express();
var exphbs = require("express-handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

// DOG TEMPlATE
app.get("/dog", function (req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  res.render("dog", animals[0]);
  // 1. Send the dog object from the animals array to the dog.handlebars file.

});

// ALL PETS TEMPlATE
app.get("/all-pets", function (req, res) {

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  var data =
  {
    animals: []
  };

  for (var i = 0; i < animals.length; i++) {
    var currentAnimal = animals[i];

    if (currentAnimal.pet = true);
    data.animals.push(currentAnimal[i]);

  }
  // Handlebars requires an object to be sent to the index.handlebars file.
  res.render("index", data);

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
});


// app.get("/all-non-pets", function (req, res) {

//   var data =
//   {
//     animals: []
//   };

//   for (var i = 0; i < animals.length; i++) {
//     if (animals[i].pet = false);
//     data.push(animals[i]);
//   }

//   for (var i = 0; i < animals.length; i++) {
//     var currentAnimal = animals[i];

//     if (currentAnimal.pet = false);
//     data.animals.push(currentAnimal);
//   }
// }
  //   // Handlebars requires an object to be sent to the index.handlebars file.
  //   res.render("index", data);

  // });

// 3. Send all the animals that are not pets to the index.handlebars file.


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
