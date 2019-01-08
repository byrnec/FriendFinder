// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// require inquirer
'use strict';
var inquirer = require('inquirer');


const requireLetterAndNumber = value => {
    if (/\w/.test(value) && /\d/.test(value)) {
        return true;
    }
    return 'Password need to have at least a letter and a number';
};

inquirer
    .prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: "What is your name?"
            },
            {
                type: 'confirm',
                name: 'askNameAgain',
                message: 'Are you sure (just hit enter for YES)?',
                default: true
            },

            {
                type: 'password',
                message: 'Enter a password',
                name: 'password1',
                validate: requireLetterAndNumber
            },
            {
                type: 'password',
                message: 'Enter a masked password',
                name: 'password2',
                mask: '*',
                validate: requireLetterAndNumber
            },
            {
                type: 'rawlist',
                name: 'theme',
                message: 'What do you want to do?',
                choices: [
                    'Skydive',
                    'Run with the bulls',
                    new inquirer.Separator(),
                    'Drive on the Autobahn',
                    'None, Im scared',
                ]
            },
            {
                type: 'rawlist',
                name: 'dogs',
                message: 'What is the cutest type of dog',
                choices: ['Golden Doodle obviously', 'German Shepard', 'Chihuahua', 'Miniature poodle']
            },
            {
                type: 'checkbox',
                message: 'What is your favorite beverage',
                name: 'beverage',
                choices: [
                    {
                        name: 'Wine'
                    },
                    {
                        name: 'Sparkling Water'
                    },
                    {
                        name: 'I only drink beer, all day, everyday'
                    },
                    {
                        name: 'Coffee is my life'
                    }
                ]
            }

        ])
    .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
    });