const todos = require('./todo');
/**
 * Controller index.js
 * 
 * Useful to contain multiple controllers.
 * Controllers act as our route-specific function. 
 * 
 * The general flow is 
 * Route is hit -> Controller 'A' is called -> 'A' may call Service 'B' which returns a Promise -> Controller 'A' handles the resolution of said Promise  
 */
module.exports = {
  todos,
};