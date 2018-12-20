// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Christie",
    customerEmail: "byrne.christie@gmail.com",
    customerID: "twistybyrne",
    phoneNumber: "650-804-0432"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
