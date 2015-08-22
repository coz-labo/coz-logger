var cozLogger = require('coz-logger');

var logger = cozLogger({});

var startDate = new Date();
logger.infoStarted('render');
/*...*/
var endDate = new Date();
logger.infoFinished('render', startDate, endDate);