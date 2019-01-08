
// * Each character created using your constructor should have the following properties...
function Character(name, profession, age, strength, HitPoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.HitPoints = HitPoints;
    };

// print stats
this.PrintStats = function () {
    console.log(this.name);
    console.log(this.profession);
    console.log(this.age);
    console.log(this.strength);
    console.log(this.HitPoints);
};

// * Once you have created your constructor, create two new characters and print their properties to the screen
var Male = new Character("Bob", "Lawyer", 29, 10, 5);
var Female = new Character("Jane", "Engineer", 35, 8, 4);

// * PrintStats: Function which prints all of a character's properties to the screen
Male.PrintStats();
Female.PrintStats();

// // * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints 
// //and determining whether they are above or below zero.
this.IsAlive = function () {
    if (this.HitPoints > 0) {
        console.log(this.name + " is still alive" + this.HitPoints);
        return true;
    }
    else {
        console.log("This character is dead")
    }
}
// // * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
this.Attack = function (male) {
    male.HitPoints -= this.strength;
};

// // * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
this.levelUp = function () {
    this.age = +1;
    this.strength += 5;
    this.HitPoints += 25;
}


Female.Attack();
Male.Attack();

Female.levelUp();
Female.PrintStats();

Male.levelUp();
Male.PrintStats();

// if handle doesn't exist yet, you can create it only to that object. ONLY FOR THE MALE OBJECT
Male.handle = "Mr. Awesome";

// // * BONUS: After completing the previous sections and making sure they work, 
// you now have everything you need to create a very basic RPG where two characters fight one another. 
// Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well 
// on your way to mastering constructors!
