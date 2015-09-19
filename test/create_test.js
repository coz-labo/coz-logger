/**
 * Test case for create.
 * Runs with nodeunit.
 */

var create = require('../lib/create.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Create'] = function (test) {
    var logger = create({
        verbose: true
    });
    test.ok(logger);
    test.ok(logger.verbose);
    test.done();
};

