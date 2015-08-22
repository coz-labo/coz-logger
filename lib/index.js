/**
 * Logger for coz.
 * @module coz-logger
 * @version 1.0.0
 */

"use strict";


var CozLogger = require('./coz_logger');
function cozLogger(){
    return new CozLogger({});
}

cozLogger.CozLogger = CozLogger;

module.exports = cozLogger;
