/**
 * Logger for coz.
 * @module coz-logger
 * @version 4.0.0
 */

'use strict'

const pkg = require('../package.json')
const CozLogger = require('./coz_logger')
const create = require('./create')

const lib = create.bind(this)
lib.create = create
lib.CozLogger = CozLogger
lib.version = pkg.version

module.exports = lib
