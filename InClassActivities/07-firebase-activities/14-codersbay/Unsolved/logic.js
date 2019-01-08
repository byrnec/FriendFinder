// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDJbUvJwsTn896o_skPZRsWufcwWTx4OWE",
      authDomain: "christie-first-project.firebaseapp.com",
      databaseURL: "https://christie-first-project.firebaseio.com",
      projectId: "christie-first-project",
      storageBucket: "christie-first-project.appspot.com",
      messagingSenderId: "287875802948"
    };
    firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'
var database = firebase.database(); //now can use as shorthand

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.

highPrice = snapshot.val().highPrice;
highBidder = parseInt(snapshot.val().highBidder;

    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();

    console.log("hello");

    // Change the HTML to reflect the stored values

      // $("#highest-bidder").text(snapshot.val().highBidder);
      // $("#highest-price").text(snapshot.val().highPrice);


    // Print the data to the console.
console.log()
  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    //trim() This function returns a new string, without any of the leading or the trailing white spaces. 
      
    database.ref().set({
      highBidder: bidderName,
      highPrice: newPrice
    });

    
    // $("#highest-bidder").text(snapshot.val().highBidder);
    //   $("#highest-price").text(snapshot.val().highPrice);


    // Print the data to the console.
    console.log("test");

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var newPrice = $("#bidder-price");
  var newBidderName = $("#bidder-name");

   // Log everything that's coming out of snapshot
  //  console.log(highPrice.val().highPrice);
  //  console.log(highBidder.val().highBidder);


  // Log the Bidder and Price (Even if not the highest)
  if (parseInt(newPrice) > parseInt(highPrice)) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase

    database.ref().set({
      highPrice: highPrice,
      highBidder: highBidder,
    });


    // Log the new High Price
console.log(highPrice);

    // Store the new high price and bidder name as a local variable

    // highPrice: initialBid,
    // highBidder: initialBidder,

    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
