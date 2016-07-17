'use strict'

const cozLogger = require('coz-logger');

let logger = cozLogger({
  verbose: true
});

let startDate = new Date();
logger.infoStarted('render');
/*...*/
let endDate = new Date();
logger.infoFinished('render', startDate, endDate);