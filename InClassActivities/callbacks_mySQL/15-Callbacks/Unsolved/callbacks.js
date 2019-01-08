var fs = require("fs");


// Simply put: A callback is a function that is to be executed after another function
// // has finished executing — hence the name 'call back'


//   * Write a function that accepts a string and a function as arguments. 
// It should log the string, and then run the function.

// function expression
var strFunc = function(str, func){
    console.log(str);
    func();
  }
 

// * Write a function that accepts a boolean value and a function as arguments. 
// It should run the function if and only if the boolean argument is true.

// function declaration
function truthy(truthy, func){
    if (truthy) {}
    func();
  }

// * Write a function that accepts a function(F) and a value (V), and returns 
// a function that returns the result of running F on V. This sounds tricky, 
// but it's easier than it sounds—just take it step by step!

function callback (func, val) {
    return function() {
        return func(val);
    }
}

// * Finally, write a short message to a file using `fs.writeFile`. 
// Does this function use callbacks? If so, identify them.

fs.writeFile("log.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("This message was logged");
}); 