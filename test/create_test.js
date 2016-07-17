/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const assert = require('assert')

it('Create', (done) => {
  let logger = create({
    verbose: true
  })
  assert.ok(logger)
  assert.ok(logger.verbose)
  done()
})

