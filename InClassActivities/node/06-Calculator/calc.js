
// * `node calculator.js add 1 2` ... and outputs 3
// * `node calculator.js subtract 5 2` ... and outputs 3
// * `node calculator.js multiply 3 2` ... and outputs 6
// * `node calculator.js divide 8 2` ... and outputs 4
// * `node calculator.js remainder 7 2`... and outputs 1


// takes in all of the command line arguments
var inputString = process.argv[2];

var num1 = inputString[3];
var num2 = inputString[4];

var operator = process.argv[2]

if (operator === "add") {
    console.log(parseFloat(num1) + parseFloat(num2)
}

else if (operator === "subtract") {
    console.log(parseFloat(num1) - parseFloat(num2)
}

else if (operator === "multiply") {
    console.log(parseFloat(num1) / parseFloat(num2))
}

else if (operator === "divide") {
    console.log(parseFloat(num1) / parseFloat(num2)
}

else if (operator === "remainder") {
    console.log(parseFloat(num1) % parseFloat(num2)
}


