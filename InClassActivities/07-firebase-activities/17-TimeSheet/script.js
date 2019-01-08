// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyDUdVWlEz1qc5yRMx1xOqMzmaSjukaW3DA",
    authDomain: "test-project-54b23.firebaseapp.com",
    databaseURL: "https://test-project-54b23.firebaseio.com",
    projectId: "test-project-54b23",
    storageBucket: "test-project-54b23.appspot.com",
    messagingSenderId: "489318913326"
};
firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

// Whenever a user clicks the submit button
$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();

    // Get the input values
    var name = $('#employee-name-input').val();
    var role = $('#role-input').val();
    var startDate = $('#start-input').val();
    var monthlyRate = $('#rate-input').val();

    // Save the new employee data in Firebase
    database.ref("/employeeData").push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

});

// Calculate 
// Splice startDate by '/' to separate month, day, and year into separate elements
var userDate = $("#start-input").val();
console.log(userDate.slice("/"));
// getFullYear of current year; 
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();
// subtract year of startDate from current year; multiply that by 12 to get number of months worked for the year range
// fine tune that by comparing the month started to the current month; subtract monthStarted from current month and add that to the months worked we calculated for the year range
// Even if this number is negative, it will work
// var monthsWorked =  (year2 - year1) * 12 + (currentDate- startDate) + 1;

// var totalBilled = monthsWorked * monthlyRate;

// Retrieve new posts as they are added to our database
database.ref("/employeeData").on("child_added", function (snapshot) {
    // Append snapshot values to DOM
    var employeeDataTable = $("<tr>");
    employeeDataTable.html("<th scope='col'>" + snapshot.val().name + "</th>" + 
    "<th scope='col'>" + snapshot.val().role + "</th>" + 
    "<th scope='col'>" + snapshot.val().startDate + "</th>" + 
    "<th scope='col'>" + snapshot.val().monthsWorked + "</th>" + 
    "<th scope='col'>" + snapshot.val().monthlyRate + "</th>" + 
    "<th scope='col'>" + snapshot.val().totalBilled + "</th>");
    $("#employee-table").append(employeeDataTable);


    // $("#employee-table").text(snapshot.val().name);
    // $("#employee-table").text(snapshot.val().role);
    // $("#employee-table").text(snapshot.val().startDate);
    // $("#employee-table").text(snapshot.val().monthlyRate);

    // Print the local data to the console.
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().monthlyRate);

    // var newPost = snapshot.val();
    // console.log("Author: " + newPost.author);
    // console.log("Title: " + newPost.title);
    // console.log("Previous Post ID: " + prevChildKey);
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
