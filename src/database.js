const mongoose = require("mongoose");
const log = require("./logger");

const mongoDbConfig = { 
  useNewUrlParser: true,
  useUnifiedTopology: true,  
};

module.exports = databaseURL => {
  mongoose.connect(databaseURL, mongoDbConfig);

  mongoose.connection.on("connected", () => {
    log.info(`Mongoose default connection is open to ${databaseURL}`);
  });

  mongoose.connection.on("error", err => {
    log.error(`Mongoose default connection has occurred ${err} error`);
  });

  mongoose.connection.on("disconnected", () => {
    log.info("Mongoose default connection is disconnected");  
  });

  process.on("SIGINT", function(){
    mongoose.connection.close(() => {
      log.error("Mongoose default connection is disconnected due to application termination");
      process.exit(0)
    });
  });
}
