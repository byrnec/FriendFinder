# "FizzBuzz"

## File

* *None*

## Instructions

* Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.


//create a for loop for 1-100
for (var i=0; i<100; i++) {

// if multiple of 3 and 5 print buzz...put this first bc its the most specific and will be checked the first!
if (i/5 === 0 & i/3 === 0) {
print ("FizzBuzz");
}

// multiple of 3 print fizz
else if (i/3 === 0) {
print("fizz");
}

// multiple of 5 print buzz
else if (i/5 === 0) {
print("buzz");
}


// if none of the above are true do else
else {
    console.log(i)
}