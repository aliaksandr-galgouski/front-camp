require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const db = require("./database");
const router = require("./router");
const config = require("./config/main");

const logHandler = require("./handlers/log");
const errorHandler = require("./handlers/error");

// connect to db
db(config.database);

// init app
const app = express();

// set views dirs
app.set("views", "./src/views");
app.set("view engine", "pug");

// configure pipeline
app.use(logHandler);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// map routes
router(app);

// handle errors
errorHandler(app);

// start listening
app.listen(config.port, () => {
  console.log(`Server is running on ${config.port} port.`);
});
