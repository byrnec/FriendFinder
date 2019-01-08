var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "vacationsDB"
});

// INITIATE CONNECTION
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});


// READ TABLE
function readOptions() {
    connection.query(
        "SELECT * FROM vacation_options",
        function(err, res) {
            if(err) throw err;
            formatResponse(res);
            connection.end()
            console.log(res)
        }
    )
}

// // FORMAT RESPONSE
// function formatResponse(data) {
//     console.log("---------------Options from DB---------------");
//     data.forEach(function (data) {
//         console.log(data.place + " | " + data.activity + " | " + data.temperature);
//         console.log("-------------------------------------------");
//     })
// }

// formatResponse();