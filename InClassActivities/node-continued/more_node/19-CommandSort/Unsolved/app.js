// use Stack Overflow or Google to find the code for sorting integers numerically.

// create a variable that takes in all of the process argvs
var numbersArray = process.argv;

// create an empty variable holds the new sorted array
var sortedArray = [];

// for loop to cycle through 
for (var i=2; i < numbersArray.length; i ++){
    sortedArray.push(parseFloat(numbersArray[i]));

return sortedArray[i];
}
// use the sort function 
console.log(numbersArray.sort(sortNums));


sortNums(a, b) {
    return (a-b);
};
