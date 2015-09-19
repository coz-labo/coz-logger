/**
 * Create a coz logger.
 * @function create
 * @returns {CozLogger} - A logger instance.
 */

"use strict";

var CozLogger = require('./coz_logger');

/** @lends create */
function create(options) {
    return new CozLogger(options);
}

module.exports = create;