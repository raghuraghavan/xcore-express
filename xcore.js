/**
 * @module xcore
 * @author Zeeshan Mian
 * @link https://github.com/zmian/xcore-express
 */
var exceptions = require('./lib/exceptions');

module.exports = {
  Logger:                    require('./middlewares/logger'),
  ErrorHandler:              require('./middlewares/errorHandler'),
  Exception:                 exceptions.Exception,
  ArgumentException:         exceptions.ArgumentException,
  InvalidInputException:     exceptions.InvalidInputException,
  NotImplementedException:   exceptions.NotImplementedException,
  NotSupportedException:     exceptions.NotSupportedException,
  NotFoundException:         exceptions.NotFoundException,
  UnauthenticatedException:  exceptions.UnauthenticatedException,
  UnauthorizedException:     exceptions.UnauthorizedException
};
