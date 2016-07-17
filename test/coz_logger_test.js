/**
 * Test case for cozLogger.
 * Runs with mocha.
 */
'use strict'

const CozLogger = require('../lib/coz_logger.js')
const assert = require('assert')

it('Log rendering.', (done) => {
  let logger = new CozLogger({
    verbose: true
  })
  logger.logRendering({
    at: new Date(),
    path: __filename
  })
  done()
})


