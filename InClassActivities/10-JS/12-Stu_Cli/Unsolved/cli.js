// Write code here to parse command line arguments and store them into variables
var TV = require("./tv");
var axios = require("axios");


// create a new TV object
var tv = newTV();
var search = process.argv[2];

// * Store the `<actor-or-show-name>` command line argument in a variable named `term`.
var term = process.argv.slice(3).join(" ");


if (!search) {
search ="show"
}

if (!term){
    term="Breaking Bad"
}

// * Then write an if/else statement to print to the console whether a show or actor is being searched for.

if (search === "actor") {
    console.log("an actor is being searched for");
    tv.findShow(term);
}
else{
    console.log("a show is being searched for")
}
// Add code to print whether the user is searching for an actor or tv show, 
// along with the name of the actor or tv show they are searching for
console.log(search);
console.log(term);