/**
 * Logger for coz.
 * @module coz-logger
 * @version 5.0.2
 */

'use strict'

const CozLogger = require('./coz_logger')
const create = require('./create')

const lib = create.bind(this)
lib.create = create
lib.CozLogger = CozLogger

module.exports = lib
