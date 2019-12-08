module.exports = {
  // server port
  port: process.env.PORT || 9000,
  
  // path to log file
  logFilePath: process.env.LOG_FILE_PATH || "log-file.log",

  // db connection info
  database: process.env.DB_CONNECTION,

  // secret key for jwt signing and encryption
  secret: process.env.JWT_SECRET,
  jwtLiveTime: process.env.JWT_LIVE_TIME || 10080,

  // facebook credentials
  fb: {
    appID : process.env.FACEBOOK_APP_ID,
    appSecret : process.env.FACEBOOK_APP_SECRET
  }
};
