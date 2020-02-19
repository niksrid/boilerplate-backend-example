'use strict';

/**
 * Automatically Generated with Sequelize-CLI
 * 
 * CLI Command Used in root folder (same directory as package.json)
 * 
 * * sequelize model:create --name Todo --attributes title:string
 * 
 * ? allowNull, defaultValue and Association was added in manually later
 * 
 * ? Note that if an association is added to a model, then the same must be added to it's corresponding Migration (the child object being linked) before you push the migration to the database
 * ? If pushed without association / missing fields, you must create a new migration that will update the corresponding model.
 * ? You can find an example of this in migrations/20200218111842-todoitem-assoc.js
 *
 */

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Todo.associate = function (models) {
    // associations can be defined here
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    });
  };
  return Todo;
};