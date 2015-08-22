/**
 * Bud file logger.
 * @memberof module:coz-logger/lib
 * @inner
 * @constructor CozLogger
 * @param {boolean} verbose - Lob verbose or not.
 */

"use strict";

var format = require('util').format,
    path = require('path'),
    argx = require('argx'),
    async = require('async'),
    Colorprint = require('colorprint').Colorprint;

/** @lends CozLogger */
function CozLogger(verbose) {
    var s = this;
    s.verbose = verbose;
}

CozLogger.prototype = Object.create(Colorprint.prototype);

/**
 * Log about bud rendering.
 * @param {Bud} bud - Bud to log.
 * @param {cozLogCallback} callback - Callback when done.
 */
CozLogger.prototype.logRendering = function (bud, callback) {
    var s = this;
    var args = argx(arguments);
    callback = args.pop('function') || callback;
    [].concat(bud).forEach(function (bud) {
        if (!bud.at) {
            return;
        }
        var generated = path.relative(process.cwd(), bud.path);
        s.debug('File generated:' + generated);
        if (s.verbose) {
            s.trace({
                src: bud.src,
                path: bud.path,
                force: bud.force,
                mode: bud.mode
            });
        }
    });
    callback(null, bud);
};

/**
 * Log about bud cleaning.
 * @param {Bud} bud - Bud to log.
 * @param {cozLogCallback} callback - Callback when done.
 */
CozLogger.prototype.logClearing = function (bud, callback) {
    var s = this;
    var args = argx(arguments);
    callback = args.pop('function') || callback;
    [].concat(bud).forEach(function (bud) {
        if (bud.done) {
            return;
        }
        var cleaned = path.relative(process.cwd(), bud.path);
        s.debug('File cleaned:' + cleaned);
        if (s.verbose) {
            s.trace({
                src: bud.src,
                path: bud.path,
                force: bud.force,
                mode: bud.mode
            });
        }
    });
    callback(null, bud);
};

/**
 * Emit start log about task finished.
 * @param {string} name - Task name.
 * @param {Date} startDate - Date of started.
 * @param {function} callback - Callback when done.
 */
CozLogger.prototype.infoStarted = function (name, startDate, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || callback;
    var s = this;
    var msg = format('[Coz] %s started...', name);
    s.info(msg);
    callback(null);
};


/**
 * Emit info log about task finished.
 * @param {string} name - Task name.
 * @param {Date} startDate - Date of started.
 * @param {Date} endDate - Date of ended.
 * @param {function} callback - Callback when done.
 */
CozLogger.prototype.infoFinished = function (name, startDate, endDate, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || callback;
    var s = this;
    var msg = format('...done!(%dms)', endDate - startDate);
    s.info(msg);
    callback(null);
};


module.exports = CozLogger;

/**
 * Callback for bud log.
 * @memberof module:coz-logger/lib
 * @inner
 * @callback cozLogCallback
 * @param {?Error} error - Render error.
 * @param {Bud} bud - Logged bud.
 */

/**
 * @external Bud
 */