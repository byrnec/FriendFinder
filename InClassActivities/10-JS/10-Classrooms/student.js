// # **Instructions**

// Requiring our movie module exported from movie.js
// var Classroom = require("./classroom.js");

// * In this activity we are going to make two constructors in two different
// files in which one constructor calls upon the other within it.

// * The first constructor function is called "Student" and has the following properties within it...

var Student = function (studentName, faveSubject, currentGPA) {
    this.studentName = studentName;
    this.faveSubject = faveSubject;
    this.currentGPA = currentGPA;
};

//   * The Student constructor function from above which adds a new student to the class
var Student = new Student("Bob", "coding", 3.6);

var students = [];

// Exporting our CastMember constructor. We will require it in movie.js
module.exports = Student;
