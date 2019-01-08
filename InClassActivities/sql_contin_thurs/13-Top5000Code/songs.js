// * With all of your data successfully imported into the database, begin working on a Node console application which will allow you to collect more specialized pieces of data. For example...

// * A query which returns all data for songs sung by a specific artist
// * A query which returns all artists who appear within the top 5000 more than once
// * A query which returns all data contained within a specific range
// * A query which searches for a specific song in the top 5000 and returns the data for it

// * HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.

var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "top_songsDB"
});

// INITIATE CONNECTION
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    makeRequest();
    console.log("hello");
    // connection.end();
});

function makeRequest() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                name: "overall_choices",
                choices: ["return all songs sung by a specific artist",
                    "return all artists who appear within the top 5000 more than once",
                    "returns all data contained within a specific range",
                    "searches for a specific song in the top 5000 and returns the data for it"]
            }            
        ]).then(function (response) {

            switch (response.overall_choices) {
                case "return all songs sung by a specific artist": returnSongbyArtist();
                break;

                case "return all artists who appear within the top 5000 more than once": returnArtistsListed2x();
                break;

                case "returns all data contained within a specific range": returnDataInRange();
                break;

                case "searches for a specific song in the top 5000 and returns the data for it": searchSpecificSong();
                break;

            }
        })
}

// console.log("Your request was searched successfully!!")
// var query = connection.query(
//     "INSERT INTO top5000 SET ?",


// function that returns all data for songs sung by a specific artist

function returnSongbyArtist() {
    inquirer.prompt([
            {
                type: 'input',
                message: 'which artist would you like to search for?',
                name: 'artist_choice'
            },
        ]).then(function (response) {
            var artistChoice = response.artist_choice;
            var query ="SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query [artistname: response.artistChoice }, function (err, res) {
                for (var i = 0; i < reponse.length; i++){
                    console.log( "Position" + res[i].position + " || SONG: " + res[i].song + ");
                }
            );
        });
};


// * A query which returns all artists who appear within the top 5000 more than once
function returnArtistsListed2x() {

var query = "SELECT artist, songname, artistname, year FROM top5000 WHERE COUNT"
connection.query(query, [answer.start, answer.end], function (err, res) {
    for (var i =0; i< res.length; i++){
        console.log(
            "Position"
        )
    }

// * A query which returns all data contained within a specific range
function returnDataInRange() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'which years would you like to search for music starting at?',
                name: 'start'
            }
            ,
            {
                type: 'input',
                message: 'which years would you like to search for music ending at?',
                name: 'end'
            }
        ])

        .then(function (answer) {
            var start = answer.start;
            var yearRange2 = answer.end;

            var query = "SELECT position, songname, artistname, year FROM top5000 WHERE year BETWEEN ? AND ?"
            connection.query(query, [answer.start, answer.end], function (err, res) {
                for (var i =0; i< res.length; i++){
                    console.log(
                        "Position:" + res[i].
                    )
                }
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res);
                connection.end();
            })
});
}


// // * A query which searches for a specific song in the top 5000 and returns the data for it

function searchSpecificSong() {

        inquirer.prompt([
            {
                type: 'input',
                message: 'which song would you like to search for?',
                name: 'songChoice'
            },
        ]).then(function (response) {
            var songChoice = response.songname;
            var query ="SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query {songname: response.songChoice }, function (err, res) {
                for (var i = 0; i < reponse.length; i++){
                    console.log( "Position" + res[i].position + " || SONG: " + res[i].songname + ")
                }
            )