const express = require("express");
const passport = require("passport");
require("./config/passport");

const apiAuth = passport.authenticate("jwt", { session: false });
const loginAuth = passport.authenticate(["local", "facebook-token"], { session: false });

const AuthController = require("./controllers/auth");
const NewsController = require("./controllers/news");

module.exports = app => {
  // auth router
  const authRouter = express.Router();
  authRouter.post("/register", AuthController.register);  
  authRouter.post("/login", loginAuth, AuthController.login);
  authRouter.get("/status", apiAuth, AuthController.status);

  // api router
  const apiRouter = express.Router();
  apiRouter.use("/auth", authRouter);

  // news router
  const newsRouter = express.Router();
  apiRouter.use("/news", newsRouter);
  
  newsRouter.get("/", NewsController.getAllNews);
  newsRouter.get("/:id", NewsController.getNewsById);
  
  newsRouter.post("/", apiAuth, NewsController.createNews);
  newsRouter.put("/:id", apiAuth, NewsController.updateNews);
  newsRouter.delete("/:id", apiAuth, NewsController.removeNews);

  // add api router to app
  app.use("/api", apiRouter);
};
