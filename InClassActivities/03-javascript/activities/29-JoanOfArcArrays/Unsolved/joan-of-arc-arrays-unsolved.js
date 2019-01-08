// Joan of Arc "properties".
var joanOfArcInfoParts = ["Real Name", "Grew Up Where", "Known For", "Scars", "Symbolism"];

// Values for Joan's "properties".
var joanOfArcInfoValues = [
  "Jehanne la Pucelle.",
  "Domremy, a village in northeastern France.",
  "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
  "Stands for French unity and nationalism."
];

var input = "Real Name";

for (var p = 0; p< joanOfArcInfoParts.length; p++) {
  console.log(joanOfArcInfoParts[p])
  console.log(joanOfArcInfoValues[p]);

  ARRAYS ARE GOOD FOR STORING INFO IN ORDER--hard brackets are arrays
  OBJECTS ARE GOOD FOR STORING OTHER THINGS--curly braces are objects


// function consoleInside(arr) {

//   // We then loop through the selected array.
//   for (var i = 0; i < arr.length; i++) {

//     // Each time we print the value inside the array.
//     console.log(arr[i]);
//   }
//   console.log("---------");