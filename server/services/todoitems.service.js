const TodoItem = require('../../database/models').TodoItem;

/**
 * TodoItem.Service
 * Used to perform any action on TodoItems's
 * 
 *? Using a service allows us to bypass code duplication and call service functions inside one another in case of complex operations.
 *? Also note that services are injectable, they are required / imported directly and can be used anywhere globally. 
 *
 * @returns {Promise} based on the current DB.Model function called
 * @todo Change from relative pathing to absolute pathing
 * TODO: Change from relative pathing to absolute pathing
 */

module.exports = {
    /**
     * @function createTodoItem()
     * Creates a new TodoItem object
     * @param {*} req -> Holds the request object, to obtain either params or body depending on if the service is being called in a POST route or a GET route
     *
     *! Ideally all create / making a new object functions should only be used in POST routes  
     */
    createTodoItem(req) {
        return TodoItem
        .create({
            content:req.body.content,
            todoId:req.params.todoId
        })
    },
}