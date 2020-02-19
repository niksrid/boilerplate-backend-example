const todos = require('./todos.controller');
const todoitems = require('./todoitems.controller');

/**
 * Controller index.js
 * 
 * Useful to contain multiple controllers.
 * Controllers act as our route-specific function. 
 * 
 *? In more complex applications, controllers can be refactored into subfolders with thier own index files.
 *? This is best-practice to implement module-based-middleware for controller functions. 
 *
 * 
 * The general flow is 
 * Route is hit -> Controller 'A' is called -> 'A' may call Service 'B' which returns a Promise -> Controller 'A' handles the resolution of said Promise  
 */

module.exports = {
  todos,
  todoitems
};