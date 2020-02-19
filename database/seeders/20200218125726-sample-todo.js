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
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    /**
     * ? Example code
     * ?  return queryInterface.bulkInsert('Users', [{
     * ?        firstName: 'John',
     * ?        lastName: 'Doe',
     * ?        email: 'example@example.com',
     * ?        createdAt: new Date(),
     * ?        updatedAt: new Date()
     * ?        }]);
     */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
