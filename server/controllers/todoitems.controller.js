const TodoItemService = require('../services/todoitems.service');
const STATUS_CODES = require('../../utils/statusCodes');

  /**
   *? TodoItem Controller 
   * 
   *  Used to define TodoItem specific actions / functions
   */

module.exports = {
  /**
   * @function create -> Creates a TodoItem object
   * 
   * @param {*} req -> Intercept request from app 
   * @param {*} res -> Intercept response from app 
   * 
   * @returns {status:200/400, data:TODO/ERROR}
   * 
   */
    create(req, res) {
      return TodoItemService.createTodoItem(req)
        .then(todoItem => res.status(STATUS_CODES.SUCCESS).send(todoItem))
        .catch(error => res.status(STATUS_CODES.INTERNAL_FAILURE).send(error));
    },
  };