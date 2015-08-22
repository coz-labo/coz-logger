/**
 * Logger for coz.
 * @module coz-logger
 * @version 1.0.2
 */

"use strict";


var CozLogger = require('./coz_logger');
function cozLogger(verbose){
    return new CozLogger(verbose);
}

cozLogger.CozLogger = CozLogger;

module.exports = cozLogger;
