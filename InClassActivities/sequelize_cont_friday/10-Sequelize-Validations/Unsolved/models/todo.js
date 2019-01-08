// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

const ValidateMe = sequelize.define('Todo', {
  Todo: {
    type: DataTypes.STRING,
    allowNull: false, // won't allow null
    validate: {
                  len: [1,140]     // only allow values >= 1
        }
      }
    });

// Add a flag for complete so that it's false by default if not given a value

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  });
  return Todo;
};
