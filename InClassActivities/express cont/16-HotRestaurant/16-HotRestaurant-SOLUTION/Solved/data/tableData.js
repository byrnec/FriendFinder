// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Jerome",
    customerEmail: "jerome@example.com",
    customerID: "meow1234",
    phoneNumber: "000-000-0000"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
