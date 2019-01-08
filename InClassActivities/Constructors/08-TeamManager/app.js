
// * Over the course of this assignment you are going to put together a function which uses
// constructors and user input to create and manage a team of players.

// dependency for inquirer npm package
var inquirer = require("inquirer");

// * Start out by creating a constructor function called "Player" with the following properties and methods...

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
};

//   * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.

this.goodGame = function () {
    if (Math.floor(Math.random() * 2) === 0){
        this.offense++;
        console.log(this.name + " 's offense has gone up!\n")
    } else {
        this.defense --;
        console.log(this.name + "'s defense has gone down\n")
    }
}
//   * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.


// creates the printStats method and applies it to all programmer objects
Player.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " +
        this.offense + "\nDefense: " + this.defense);
};



var playerArray = [];
 var count =0;
var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 6) {
      console.log(hello)
  }

inquirer.prompt([
    {
        name: 'name',
        message: "What is the player's name?",
    }, {
        type: 'list',
        name: "position",
        message: "What is the player's current position?",
        choices: ["Offense", "Defense"]
    }, {
        type: 'list',
        name: "ofensive",
        message: "What is the player's offensive ability?",
        choices: ['1', '2', '3', '4', '5'],
    }, {
        type: 'list',
        name: "defensive",
        message: "What is the player's defensive ability?",
        choices: ['1', '2', '3', '4', '5'],
    }
]).then(function (answers) {
    // initializes the variable newPlayer to be a programmer object which will take
    // in all of the user's answers to the questions above
    var newPlayers = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);

// pushes newProgrammer object into our array
playersArray.push(newPlayer);
// add one to count to increment our recursive loop by one
count++;
// run the askquestion function again so as to either end the loop or ask the questions again
askQuestion();
});

    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
} else {
        for (var x = 0; x < playersArray.length; x++) {
          playersArray[x].printStats();
        }
    }
  };
    // // * Once your code is functioning properly, move on to create a function called "playGame"
    // // which will be run after all of the players have been created and will do the following:

    // Player.playGame = function () {

    // }

//   * Run 5 times. Each time the function runs:
//     * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
//       * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
//       * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
//     * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
//   * After the game has finished (been run 5 times):
//     * If the score is positive, run `goodGame` for all of the players currently within the starters array.
//     * If the score is negative, run `badGame` for all of the players currently within the starters array.
//     * If the score is equal to zero, do nothing with the starters.
//     * Give the user a message about if they won, and the status of their starters.
//     * After printing the results, ask the user if they would like to play again.
//       * Run `playGame` from the start once more if they do.
//       * End the program if they don't.

// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
