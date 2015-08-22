/**
 * Test for index.js
 * Runs with nodeunit.
 */
"use strict";

var index = require('../lib/index.js');

exports['Create logger.'] = function (test) {
    var logger = index();
    test.ok(logger);
    test.done();
};
