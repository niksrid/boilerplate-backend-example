const TodoService = require('../services/todos.service');
const STATUS_CODES = require('../../utils/statusCodes');

  /**
   *? Todo Controller 
   * 
   *  Used to define Todo specific actions / functions
   */

module.exports = {
  /**
   * @function list -> Lists all Todo objects
   * @function create -> Creates a Todo object
   * 
   * @param {*} req -> Intercept request from app 
   * @param {*} res -> Intercept response from app 
   * 
   * @returns {status:200/400, data:TODO/ERROR}
   * 
   */
  create(req, res) {

    // This TodoService.createTodo is an injectable service and returns a Promise
    return TodoService.createTodo(req)
    // Once the database performs the query, we then send the specific response code (from the STATUS_CODES constant in utils) and the relevant data / error;
      .then(todo => res.status(STATUS_CODES.SUCCESS).send(todo))
      .catch(error => res.status(STATUS_CODES.INTERNAL_FAILURE).send(error));
  },
  list(req, res) {

    // This TodoService.list is an injectable service and returns a Promise
    return TodoService.listAllTodo()
      .then(todos => res.status(STATUS_CODES.SUCCESS).send(todos))
      .catch(error => res.status(STATUS_CODES.INTERNAL_FAILURE).send(error));
  },
};