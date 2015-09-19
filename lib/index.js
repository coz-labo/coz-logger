/**
 * Logger for coz.
 * @module coz-logger
 * @version 2.0.2
 */

"use strict";


var pkg = require('../package.json'),
    CozLogger = require('./coz_logger'),
    create = require('./create');

var lib = create.bind(this);
lib.create = create;
lib.CozLogger = CozLogger;
lib.version = pkg.version;

module.exports = lib;
