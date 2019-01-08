
// gets the myBands object from the bands file
var bandList = require("./bands.js");

// grabs the genre information
for (var key in bandList) {

// if the genre matches the key then print that band name
    if (key === genre || genre === undefined){
        console.log("A" + key + " band is" + bandList[key])
    }
}
var bandType = bands[3];
var bandName = band[4];
