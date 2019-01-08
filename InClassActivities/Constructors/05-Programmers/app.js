

// * In this activity, we are going to create a constructor function called "Programmer" 
// which can be used to create objects containing information on various programmers.


function Programmer(name, position, age, language) { //we pass these in because these values will be different everytime
    this.name = name;
    this.jobTitle = jobTitle;
    this.age = age;
    this.faveLanguage = faveLanguage;
}
// * Your "Programmer" constructor should be able to take in the following information...

Programmer.prototype.health = 75;
function coolify(){
    this.name = this.name + " The Dabbing Dino";
};

Programmer.prototype.coolMeUp= coolify;

// * Now create a method for the constructor that would print all of the information contained 
// within an object to the console.

this.printObject = function () {

    console.log("Name: " + this.name + "job:" + this.jobTitle + "age=" + this.age + "language: " + this.faveLanguage);
};


// * Finally, create a "Programmer" object and call the method to print its contents

var Bob = new Programmer("Bob", "JS developer", 24, "JS");

Bob.printObject();
