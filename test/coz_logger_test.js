/**
 * Test case for cozLogger.
 * Runs with nodeunit.
 */

var CozLogger = require('../lib/coz_logger.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};
exports.setUp = function (done) {
    done();
};
exports.tearDown = function (done) {
    done()
};

exports['Log rendering.'] = function (test) {
    var logger = new CozLogger(true);
    test.ok(logger);
    logger.logRendering({
        at: new Date(),
        path: __filename
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};


