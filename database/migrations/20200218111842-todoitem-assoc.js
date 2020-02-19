'use strict';

/**
 * Automatically Generated with Sequelize-CLI
 * 
 * CLI Command Used in root folder (same directory as package.json)
 * 
 * * sequelize migration:generate --name todoitem-assoc
 * 
 * ? Migrations can only be edited before you pass db:migrate, after which point new migrations will have to be created.
 * ? This was created to add the missing Foreign Key as a column
 *
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'TodoItems',
        'todoId', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Todos',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};