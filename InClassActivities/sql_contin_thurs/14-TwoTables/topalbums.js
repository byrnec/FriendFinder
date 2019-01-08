var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "top_albumsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

// runArtistSearch

function runSearch() {
  inquirer
    .prompt([
        
    {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["find artist with a top song and top album in the same year"]  
    },
    {
        name: "artistName",
        type: "input",
        message: "What artist would you like to search for?" 
      }
    ]).then(function(answer) {
        var artist = answer.artistName;
    var query = "SELECT * FROM top5000 INNER JOIN topalbum ON top5000.artist = topalbum.artistname AND top5000.year = topalbum.year AND topalbum.artistname = '" + artist + "'";
      connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
              console.log(
                "Album Position: " +
                  res[i].position +
                  " || Song: " +
                  res[i].song +
                  " || Artist: " +
                  res[i].artist +
                  " || Album: " +
                  res[i].albumname +
                  " || Year: " +
                  res[i].year
              );
            }
            connection.end();

    })
});
}