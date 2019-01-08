var mysql = require("mysql");
// var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "playlistDB"
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId + "\n");
    addSong();
});

// CREATE NEW SONG ROW

function addSong() {
    connection.query(
        'INSERT INTO songs SET ?',
        {
            title: "Vienna",
            artist: "Billy Joel",
            genre: "Rock"
        },
        function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products inserted!\n");
        updateSong();
    });
}

// UPDATE THAT ROW
function updateSong() {
    connection.query(
        "UPDATE songs SET ? WHERE ?",
        [
            {
                genre: "R&B"
            },
            {
                artist: "Anderson .Paak"
            }
        ],
        function(err, res) {
            if(err) throw err;
            console.log(res.affectedRows + " songs updated!\n");
            deleteSong();
        }
    )
}

// DELETE A ROW
function deleteSong() {
    connection.query(
        "DELETE FROM songs WHERE ?",
        {
            artist: "Billy Joel"
        },
        function(err, res) {
            if(err) throw err;
            console.log(res.affectedRows + " songs deleted!");
            readPlaylist();
        }
    )
}

// READ TABLE
function readPlaylist() {
    connection.query(
        "SELECT * FROM songs",
        function(err, res) {
            if(err) throw err;
            formatData(res);
            connection.end()
        }
    )
}

function formatData(arr) {
    console.log("---------------Songs from DB---------------");
    arr.forEach(function (data) {
        console.log(data.id + " | " + data.title + " | " + data.artist + " | " + data.genre);
        console.log("-------------------------------------------");
    })
}