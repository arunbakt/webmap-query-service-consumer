require('dotenv').config()
// set up log level
const log = require("loglevel");
require("./setup");

const registerEventHandlers = require('./services/EventHandlers');
registerEventHandlers()

