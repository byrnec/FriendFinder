
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: Sequelize.STRING,
    complete: Sequelize.BOOLEAN
  });
  return Todo;
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
};


// Syncs with DB
Todo.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Todo;
