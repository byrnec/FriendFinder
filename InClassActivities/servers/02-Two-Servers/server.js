// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// SERVER 1
var quote1 = "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. MARTIN LUTHER KING, JR.";

// Create a generic function to handle requests and responses
function handleRequestquote1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(quote1);

  // insert quote
  //document.write(quote1);
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequestquote1);


// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);

})


// SERVER 2

var quote2 ="Kindness is a language which the deaf can hear and the blind can see. -MARK TWAIN";


// Create a generic function to handle requests and responses
function handleRequestquote2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(quote2);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server2 = http.createServer(handleRequestquote2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function () {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
})
