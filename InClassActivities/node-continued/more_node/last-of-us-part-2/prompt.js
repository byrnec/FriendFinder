// set user and zombie health
var user = {
    health: 100,
};

var weapons = {
    bareHands: {
        name: "Bare Hands",
        reach: 1,
        attack: [5, 5],
        accuracy: 90,
        uses: 1000000000000000
    },

    machete: {
        name: "Machete",
        reach: 1,
        attack: [40, 60],
        accuracy: 90,
        uses: 5
    },

    shotgun: {
        name: "Shotgun",
        reach: 2,
        attack: [30, 50],
        accuracy: 80,
        uses: 5
    },

    pistol: {
        name: "Pistol",
        reach: 2,
        attack: [25, 40],
        accuracy: 75,
        uses: 5;
    },

    machineGun: {
        name: "Machine Gun",
        reach: 3,
        attack: [15, 30],
        accuracy: 65,
        uses: 5
    },

    sniper: {
        name: "Sniper",
        reach: 1,
        attack: [40, 60],
        accuracy: 20,
        uses: 5
    },

    rpg: {
        name: "RPG",
        reach: 4,
        attack: [20, 35],
        accuracy: 40,
        uses: 5
    }
};


var zombies = {

    zombie1: {
        health: 100,
        attack: [0, 5],
        accuracy: 15
    },

    zombie2: {
        health: 90,
        attack: [1, 6],
        accuracy: 18
    },

    zombie3: {
        health: 85,
        attack: [2, 4],
        accuracy: 20
    },

    zombie4: {
        health: 80,
        attack: [2, 5],
        accuracy: 22
    },

    zombie5: {
        health: 60,
        attack: [7, 10],
        accuracy: 10
    },
}


// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Instantiate user and zombie initial health values
var zombieHealth = 15;

// Define and immediately invoke the function
(function runPrompt() {

    console.log("This game is played out in rounds. Each round the hero will pick a method of attack. Each choice yields different chances of dealing damage.")

    // Create a "Prompt" for user to input number between 1-5
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please choose a type of gun.",
                choices: ["bareHands", "machete", "shotgun", "pistol", "machineGun", "sniper", "rpg"],
                name: "gunChoice"
            }
        ])
        .then(function (inquirerResponseObj) {
            // Assign a variable to hold the zombies roll of a number between 1-5
            var gunUses = Math.floor((Math.random() * 5) + 1);
            // Assign a varaible to hold the random damage dealt by user or zombie
  
            var gunDmg = weapons[Math.floor(Math.random() * weapons[inquirerResponseOb].attack.length)];
            
            // A gun's uses should decrement by one after a round if it is the gun
            // the hero chose in that same round. 
            // decrement uses 

            

           var weapon = weapons[inquirerResponseObj.userWeapon];
           // When the gun is out of uses, it should no longer be a choice.
            
                // The gun's damage should be calculated once a user chooses a gun. It should be a random number between the two values in the gun's `attack` array

                // Output results-The zombies' health and hero's health should be updated and displayed every round. 
                console.log("The hero's health is" + response.hero.health);
                console.log("The zombie's health is" + response.zombie.health)
            }
            else {
//  Prompt the user to select a zombie to attack. If the reach is larger than 1, 
// the game should determine the other zombies that are affected. 
                prompt([
                    {
                        type: "list",
                        message: "Which zombie would you like to attack?",
                        choices: ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"],
                        name: "zombieChoice"
                    }]

                    .then() 
                        if (response.zombies[i].reach >= 1) 
                    }

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
