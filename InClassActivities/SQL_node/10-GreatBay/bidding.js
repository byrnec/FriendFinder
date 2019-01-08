// require packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection to SQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "auctionDB"
});

var itemsArray = [];
// test if connection is working
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startPrompt();
});

// Upon loading up the program, the user is prompted on whether 
// they would like to "POST AN ITEM" or "BID ON AN ITEM"
function startPrompt() {

    inquirer
        .prompt([
            {
                type: 'list',
                message: "would you like to ...?",
                choices: ["post an item", "bid on an item"],
                name: "bid_or_post"
            },
        ])
        .then(function (response) {
            // If the user selects "POST AN ITEM" they are prompted for an assortment of information 
            //regarding the item and then that information is added to the database so that others can bid on it
            console.log(response);
            if (response.bid_or_post === "post an item") {
                postProd();
            }
            else {
                // * If the user selects "BID ON AN ITEM" they are shown a list of all available items 
                // and then are prompted to select what they would like to bid on. 

                readItems();
            };
        })
}

function bidProd() {


    inquirer
        .prompt([
            // * If the user selects "BID ON AN ITEM" they are shown a list of all available items 
            {
                type: 'list',
                message: "Which item would you like to bid on?",
                choices: itemsArray,
                name: "item_choice_bid"
            },
            // and then are prompted to select what they would like to bid on. 
            {
                type: 'input',
                name: "bid_price",
                message: "How much is your bid?",
            }
        ]).then(function (response) {

            // //The console then asks them how much they would like to bid, 
            console.log(response);
            console.log("Person would like to bid " + response.bid_price)
            compareBid(response.item_choice_bid, response.bid_price);

            // if (response.bid_or_post === "post an item") {
            //     postProd();
            // }
            // else {

            //     bidProd();

            // };
        })
}
// create function that gets run if person wants to Post an Item 
function postProd() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the item you would like to submit?",
                name: "item"
            },
            {
                type: 'input',
                message: "What category is the item you would like to submit in?",
                name: "category"
            },
            {
                type: 'input',
                message: "What is your starting bid?",
                name: "starting_bid"
            },
        ])


        .then(function (response) {
            console.log("You auction was created sucessfully!!")
            var query = connection.query(
                "INSERT INTO products SET ?",
                {
                    name: response.item,
                    type: response.category,
                    bid: response.starting_bid
                },
                function (err, res) {
                    console.log(res.affectedRows + " post inserted!\n");

                }
            )
        })

}

// compare bid

function compareBid(yourName, newBid) {
    console.log("HELLOO!");
    console.log(yourName, newBid);
    connection.query(
        "SELECT * FROM products WHERE ?",
        {
            name: yourName,
        },
        function (err, res) {
            if (err) throw err;

            console.log("newBid",newBid);
            console.log("res[0].bid",res[0].bid);
console.log(res);
            // if new bid is greater than previous bid      
            if (newBid > res[0].bid) {
                updateItem(yourName, newBid);
                console.log("You have the highest bid!")
            } else {
                console.log("Sorry that is a WEAK bid. You are NOT the highest bidder.")
            }
        });

}
function readItems() {

    console.log("reading all categories...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            itemsArray.push(res[i].name);
        }
        console.log(itemsArray);

        bidProd();
        // createArray(res);
        // Log all results of the SELECT statement
        //   console.log(res);

    });

}


function updateItem(name, bid) {
console.log("trying")
    console.log("name" + name)
console.log("bid" + bid)
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                bid: bid,
            },
            {
                name: name
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteSongs AFTER the UPDATE completes
            //   deleteSongs();
        }
    );

}
// function createArray(res) {C


// };

//and their bid is compared to the previous highest bid. 
// compareBid();
// If their bid is higher,inform the user of their success 
//and replace the previous bid with the new one. 
// If their bid is lower (or equal), inform the user of their failure 
// and boot them back to the selection screen.