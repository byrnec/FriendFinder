// INSTRUCTIONS: Build a command-line based zombie fighting game. 

// Major Warning: inquirer's prompt function is "asynchronous", which means
// that the majority of your game logic will need to be inside the .then() function for your prompt. 

// In this game, you and a zombie will each be given a certain amount of health
// For each round, you will be asked to guess a random number between 1 and 5.

// ===========================================================================================================

// require inquirer
'use strict';
var inquirer = require('inquirer');

// create variables to store your guess and zombie guess
var ZombieGuess = "";

// Counter for amount of health. (Perhaps: You 70, Zombie 15).
personalCounter = 70;
zombieCounter = 15;

// create function to show prompt if the condition is not met
function showPromptAgain() {
}

// create a prompt asking you for your guess
inquirer
    .prompt(
        [
            {
                type: 'input',
                name: 'userRoll',
                message: "Please guess a random number between 1 and 5",
                choices: ['1', '2', '3', '4', '5'],
            }
        ])

    // promise function
    .then(function (response) {

        ZombieGuess = Math.floor((Math.random() * 5) + 1);
        randomDamage = Math.floor((Math.random() * 5) + 1);

        // If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
        if (response.userRoll === ZombieGuess) {
            zombieCounter = zombieCounter - Math.floor((Math.random() * 5) + 1);
            // output results
            console.log('Command-line input received:');
            console.log('  User Guess: ' + response.name);
            console.log('  Zombie Guess: ' + response.ZombieGuess);
            
            // if the guesses do not match, the Zombie inflicts a random amount of damage to you between 1 and 5.
        } else {
            personalCounter = personalCounter - Math.floor((Math.random() * 5) + 1);
            ZombieGuess = Math.floor((Math.random() * 5) + 1);
            console.log('  User Guess: ' + result.name);
            console.log('  Zombie Guess: ' + result.ZombieGuess);
        }


        // The game ends when you or the zombie gets to 0 health. 
        if (zombieCounter <= 0 ) {
            console.log ("Game over, Zombie Wins!")
        } else if (personalCounter <= 0) {
            console.log ("Game over, Zombie Wins!")
        } else {
            logic();
        }
    });
