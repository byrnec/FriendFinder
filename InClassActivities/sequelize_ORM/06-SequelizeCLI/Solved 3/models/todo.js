
module.exports = function(sequelize,DataType){
var todo = sequelize.define('project', {
    text: Sequelize.STRING,
    complete: Sequelize.BOOLEAN
  });
  return todo;
};
//   const Task = sequelize.define('task', {
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,
//     deadline: Sequelize.DATE
//   })