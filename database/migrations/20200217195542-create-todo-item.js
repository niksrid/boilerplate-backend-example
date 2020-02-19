'use strict';

/**
 * Automatically Generated with Sequelize-CLI
 * 
 * CLI Command Used in root folder (same directory as package.json)
 * 
 * * sequelize model:create --name Todo --attributes title:string
 * 
 * ? Migrations can only be edited before you pass db:migrate, after which point new migrations will have to be created.
 *
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TodoItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      complete: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TodoItems');
  }
};