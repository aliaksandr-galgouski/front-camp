const log = require("../logger");

module.exports = (request, response, next) => {
  log.info(`${new Date()} - ${request.method} - ${request.url}`);
  next();
};
