

// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function (error, data) {


    if (error) {
        return console.log(error)
    }
// print the contents of the data
    console.log(data);

    
    // split on the commas to make this more readable
    var dataArr = data.split(",");

    // NOT an array!
    for (var i= 0; i < dataArr.length; i++) {
    console.log(dataArr[i])
    }
});

