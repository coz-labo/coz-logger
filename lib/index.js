/**
 * Logger for coz.
 * @module coz-logger
 * @version 2.0.0
 */

"use strict";


var CozLogger = require('./coz_logger');
function cozLogger(verbose){
    return new CozLogger(verbose);
}

cozLogger.CozLogger = CozLogger;

module.exports = cozLogger;
