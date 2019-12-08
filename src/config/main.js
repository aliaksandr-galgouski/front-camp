module.exports = {
  // server port
  port: process.env.PORT || 9000,
  
  // path to log file
  logFilePath: process.env.LOG_FILE_PATH || "log-file.log",

  // db connection info
  database: process.env.DB_CONNECTION  
};
