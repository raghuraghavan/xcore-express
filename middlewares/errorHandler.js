/**
 * @module xcore
 * @submodule ErrorHandler
 * @author Zeeshan Mian
 * @link https://github.com/zmian/xcore-express
 */

/**
 * Module Dependencies
 */
var xcoreExceptions = require('xcore-exceptions');

/**
 * Error Response
 *
 * A helper function to format and send an error into consistent API
 * error object and HTTP status code.
 *
 * @param {Object} res  Node's HTTP response object
 * @param {String} err  Error object
 * @param {Number} code HTTP error code to set
 * @return {Object} JSON response
 * @api private
 */
function ErrorResponse(res, err, code) {
  var error = {
    code:    code || 400,
    success: false,
    message: err.message || 'An unknown error occured.'
  };

  return res.status(error.code).json({meta: error});
}

/**
 * Error handling middleware
 *
 * Check for an instance of an error and show the
 * appropriate error handler.
 *
 * @param {Object} err  error object
 * @param {Object} req  request object
 * @param {Object} res  response object
 * @param {Object} next next object
 * @return {Object} JSON response
 * @api public
 */
function ErrorHandler(err, req, res, next) {
  if (err instanceof xcoreExceptions.NotFoundException) {
    return ErrorResponse(res, err, 404);
  }
  else if ((err instanceof xcoreExceptions.UnauthenticatedException) || (err instanceof xcoreExceptions.UnauthorizedException)) {
    return ErrorResponse(res, err, 401);
  }
  else if (err instanceof xcoreExceptions.NotImplementedException) {
    return ErrorResponse(res, err, 501);
  }
  else if (err instanceof xcoreExceptions.NotSupportedException) {
    return ErrorResponse(res, err, 405);
  }
  else if ((err instanceof xcoreExceptions.ArgumentException) || (err instanceof xcoreExceptions.InvalidInputException)) {
    return ErrorResponse(res, err, 400);
  }
  else {
    return ErrorResponse(res, err, 500);
  }
}

module.exports = ErrorHandler;
