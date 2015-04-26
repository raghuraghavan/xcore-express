/**
 * @module xcore
 * @submodule Logger
 * @author Zeeshan Mian
 * @link https://github.com/zmian/xcore-express
 */

/**
 * Module Dependencies
 */
var xcoreExceptions = require('xcore-exceptions');

/**
 * Colors
 */
var colorRed   = '\u001b[31m',
    colorBlue  = '\u001b[34;4m',
    colorReset = '\u001b[0m';

/**
 * Logger middleware
 *
 * Log errors.
 *
 * @param {Object} err  error object
 * @param {Object} req  request object
 * @param {Object} res  response object
 * @param {Object} next next object
 * @return {Object} JSON response
 * @api public
 */
function Logger(err, req, res, next) {
  if (err instanceof xcoreExceptions.Exception) {
    console.log('\n');
    console.error(colorRed + req.method + ' ' + colorReset + colorBlue + req.url + colorReset);
    console.error(colorRed + err.toString() + colorReset);
  }

  console.error(err.stack);
  console.log('\n');
  next(err);
}

module.exports = Logger;
