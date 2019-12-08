const express = require("express");

const NewsController = require("./controllers/news");

module.exports = app => {
  // api router
  const apiRouter = express.Router();

  // news router
  const newsRouter = express.Router();
  apiRouter.use("/news", newsRouter);
  
  newsRouter.get("/", NewsController.getAllNews);
  newsRouter.get("/:id", NewsController.getNewsById);
  
  newsRouter.post("/", NewsController.createNews);
  newsRouter.put("/:id", NewsController.updateNews);
  newsRouter.delete("/:id", NewsController.removeNews);

  // add api router to app
  app.use("/api", apiRouter);
};
