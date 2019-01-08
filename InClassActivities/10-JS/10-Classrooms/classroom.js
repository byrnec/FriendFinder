
// Requiring our movie module exported from movie.js
var Student = require("./student.js");

// * The second constructor function is called "Classroom" and has and has the following properties within it...

// Constructor function for creating Movie objects
var ClassRoom= function(professorName, roomNum) {
    // this.cast will hold all of our CastMember objects
    this.classroom = [];
    this.studentNumber = this.student.length;
    this.professorName = professorName;
    this.roomNum = roomNum;
  
    // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
    this.addStudent = function(studentName, faveSubject, currentGPA) {
      this.classroom.push(new Student(studentName, faveSubject, currentGPA));
    };
  };


  // new classrooom

  var eight = new ClassRoom("Mrs. Jane", "4")