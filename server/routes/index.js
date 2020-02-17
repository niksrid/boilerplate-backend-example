/**
 * Routes index.js
 * 
 * Used to hold all the routes defined in our system.
 * This parent folder can also have subfolders depending on the complexity of the application
 */


 // Import todoController to directly pass into routes
const todosController = require('../controllers').todos;



module.exports = (app) => {
  /**
   * /api route, GET
   * Generic route meant for testing
   * This can be also refactored as a '/api' directory, to better format the code

   * @returns {status: 200, mssage:'Welcome to the Todos API!'}
   */
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));


   /**
   * /api/todos route, POST
   * Route meant to add a new todo
   * @param {string} title -> Passed as a "application/x-www-form-urlencoded" based body parameter.
   * 
   * @returns {status: 200, data:CREATED_TODO_DATA}
   */
  app.post('/api/todos', todosController.create);

    
   /**
   * /api/todos route, GET
   * Route meant to get list of todos
   * 
   * @returns {status: 200, data: LIST_OF_TODO_DATA}
   */
  app.get('/api/todos', todosController.list);
};