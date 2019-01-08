// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
// var database = ...


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)

<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDBiTPIHRClFvKQOWv56O90Bs89wQDx79c",
  authDomain: "project-test-fa290.firebaseapp.com",
  databaseURL: "https://project-test-fa290.firebaseio.com",
  projectId: "project-test-fa290",
  storageBucket: "project-test-fa290.appspot.com",
  messagingSenderId: "553394833259"
};
firebase.initializeApp(config);

  // VARIABLES
    // --------------------------------------------------------------------------------

    var database = firebase.database();
    var clickCounter = 0;

// FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------


// This callback keeps the page updated when a value changes in firebase.
$("#click-button").on("click", function () {
  clickCounter++;
  database.ref().set({
    clickCount: clickCounter
  });
});

// MAIN PROCESS + INITIAL CODE
    // --------------------------------------------------------------------------------

// HINT: Assuming 'database' is our database variable, use...

  // We are now inside our .on function...

database.ref().on("value", function (snapshot)) {

  // Console.log the "snapshot" value (a point-in-time representation of the database)
  // This "snapshot" allows the page to get the most current values in firebase.

  console.log(snapshot.val());

  // Change the value of our clickCounter to match the value in the database
  clickCounter = snapshot.val().clickCount;

}

// Console Log the value of the clickCounter
console.log(clickCounter);

// Change the HTML using jQuery to reflect the updated clickCounter value
$("#click-value").text(snapshot.val().clickCount);

// Then include Firebase error logging
// HINT: }, function(errorObject)

 function(errorObject) {
  console.log("The read failed: " + errorObject.code);
    };

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function () {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function () {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
