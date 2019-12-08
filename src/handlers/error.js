const log = require("../logger");

module.exports = app => {
  app.use(function(request, response, next){
    next({ status: 400, message: `Resource not found - ${request.url}` }); 
  });
  
  app.use((error, request, response, next) => {
    log.error(`${new Date()} - ${error.message}`);
  
    response.status(error.status || 500).format({
      html: function () {
        response.render("error", error)
      },
      json: function () {
        response.json(error)
      },
      default: function () {
        response.type("txt").send(error.message)
      }
    });
  });
};
