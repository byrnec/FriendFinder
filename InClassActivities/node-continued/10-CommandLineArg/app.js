
// var inputString = process.argv[2]
// its a way to grab user input--very primitive way

// The parseFloat() function parses an argument and returns a floating point number.

num1 = process.argv[2];
num2 = process.argv[3];

if (parseFloat(num1) === parseFloat(num2)) {

    console.log(true)

} else {
   console.log(false)
}

if ((num1 % 7) === 0 & (num2 % 7) === 0) {
    console.log(true)
}
else{
    console.log(false)
}
