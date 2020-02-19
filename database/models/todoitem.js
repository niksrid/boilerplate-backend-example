'use strict';

/**
 * Automatically Generated with Sequelize-CLI
 * 
 * CLI Command Used in root folder (same directory as package.json)
 * 
 * * sequelize model:create --name TodoItem --attributes content:string,complete:boolean
 * 
 * ? allowNull, defaultValue and Association was added in manually later
 * 
 * ? Note that if an association is added to a model, then the same must be added to it's corresponding Migration before you push the migration to the database
 * ? If pushed without association / missing fields, you must create a new migration that will update the corresponding model.
 * ? You can find an example of this in migrations/20200218111842-todoitem-assoc.js
 *
 */

module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});
  TodoItem.associate = function(models) {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      // CASCADE also deletes any child object if its corresponding parent object is deleted; Maintains referential integrity.
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};