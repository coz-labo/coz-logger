/**
 * Bud file logger.
 * @memberof module:coz-logger/lib
 * @inner
 * @constructor CozLogger
 * @param {boolean} verbose - Lob verbose or not.
 */

'use strict'

const { format } = require('util')
const path = require('path')
const argx = require('argx')
const colorprint = require('colorprint')

/** @lends CozLogger */
module.exports = colorprint.define({
  /**
   * Log about bud rendering.
   * @param {Bud} bud - Bud to log.
   * @param {cozLogCallback} callback - Callback when done.
   */
  logRendering(bud, callback) {
    let args = argx(arguments)
    callback = args.pop('function') || argx.noop;
    [].concat(bud).forEach((bud) => {
      if (!bud.at) {
        return
      }
      let generated = path.relative(process.cwd(), bud.path)
      this.debug('File generated: ' + generated)
      if (this.verbose) {
        this.trace({
          src: bud.src,
          path: bud.path,
          force: bud.force,
          mode: bud.mode
        })
      }
    })
    callback(null, bud)
  },

  /**
   * Log about bud cleaning.
   * @param {Bud} bud - Bud to log.
   * @param {cozLogCallback} callback - Callback when done.
   */
  logClearing(bud, callback) {
    let args = argx(arguments)
    callback = args.pop('function') || argx.noop
    bud = [].concat(bud)
    bud.forEach((bud) => {
      if (bud.done) {
        return
      }
      let cleaned = path.relative(process.cwd(), bud.path)
      this.debug('File cleaned:' + cleaned)
      if (this.verbose) {
        this.trace({
          src: bud.src,
          path: bud.path,
          force: bud.force,
          mode: bud.mode
        })
      }
    })
    callback(null, bud)
  },

  /**
   * Emit start log about task finished.
   * @param {string} name - Task name.
   * @param {Date} startDate - Date of started.
   * @param {function} callback - Callback when done.
   */
  infoStarted(name, startDate, callback) {
    let args = argx(arguments)
    callback = args.pop('function') || argx.noop
    let msg = format('%s started...', name)
    this.info(msg)
    callback(null)
  },

  /**
   * Emit info log about task finished.
   * @param {string} name - Task name.
   * @param {Date} startDate - Date of started.
   * @param {Date} endDate - Date of ended.
   * @param {function} callback - Callback when done.
   */
  infoFinished(name, startDate, endDate, callback) {
    let args = argx(arguments)
    callback = args.pop('function') || argx.noop
    let msg = format('...done!(%dms)', endDate - startDate)
    this.info(msg)
    callback(null)
  }

})

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
