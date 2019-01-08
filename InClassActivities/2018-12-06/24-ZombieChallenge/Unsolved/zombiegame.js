// INSTRUCTIONS: Build a command-line based zombie fighting game. 

// Major Warning: inquirer's prompt function is "asynchronous", which means
// that the majority of your game logic will need to be inside the .then() function for your prompt. 

// In this game, you and a zombie will each be given a certain amount of health
// For each round, you will be asked to guess a random number between 1 and 5.

// ===========================================================================================================
// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

// Try to stay alive! Guess a number between 1-5
// List numbers
// display zombie roll after user chooses, then the result of the roll (who won) including the damage done by who, then the resultant healths of user and zombie

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Instantiate user and zombie initial health values
var userHealth = 70;
var zombieHealth = 15;

// Define and immediately invoke the function
(function runPrompt() {
    // Create a "Prompt" for user to input number between 1-5
    inquirer
        .prompt([
            {
                type: "list",
                message: "Try to stay alive! Guess a number between 1-5!",
                choices: ["1", "2", "3", "4", "5"],
                name: "userRoll"
            }
        ])
        .then(function (inquirerResponseObj) {
            // Assign a variable to hold the zombies roll of a number between 1-5
            var zombieRoll = Math.floor((Math.random() * 5) + 1);
            // Assign a varaible to hold the random damage dealt by user or zombie
            var randomDmg = Math.floor((Math.random() * 5) + 1);
            // parseFloat the user's choice to compare
            var userRoll = parseInt(inquirerResponseObj.userRoll);
            // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
            if (userRoll === zombieRoll) {
                // Reassign zombieHealth to its value minus a random number between 1 - 5
                zombieHealth = zombieHealth - randomDmg;
                // Output results
                console.log("\nThe Zombie chose " + zombieRoll);
                console.log("You win this round! You deal " + randomDmg + " points of damage to the zombie!");
                console.log("You have " + userHealth + " points of HP and the zombie has " + zombieHealth + " points of HP.");
            }
            else {
                // Reassign userHealth to its value minus a random number between 1 - 5
                userHealth = userHealth - randomDmg;
                // Output results
                console.log("\nThe Zombie chose " + zombieRoll);
                console.log("You lose this round! You receive " + randomDmg + " points of damage from the zombie!");
                console.log("You have " + userHealth + " points of HP and the zombie has " + zombieHealth + " points of HP.");
            }

            // Keep running the function so long as user and zombie have health greater than 0
            if ((userHealth > 0) && (zombieHealth > 0)) {
                runPrompt();
            }
            else if (userHealth <= 0) {
                // User loses
                console.log("You lost!");
            }
            else if (zombieHealth <= 0) {
                // Zombie loses, user wins
                console.log("You won!");
            }
        });
})()
